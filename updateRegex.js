import OpenAI from "openai";
import path from 'node:path';
import fs from 'node:fs';
import { exec } from 'child_process'
import simpleGit from 'simple-git';
import dayjs from 'dayjs'
import { error } from "node:console";

import 'dotenv/config'

const git = simpleGit(path.resolve())
const openai = new OpenAI({ apiKey: process.env.CHAT_GPT_API_KEY });

const generateRegex = async (useCase) => {
    console.log(`${dayjs().format()}:   Generating regex pattern for useCase: ${useCase}`)
    const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        temperature: 0.7,
        messages: [
            {
                role: "user",
                content: `Write a one-line regex solution to ${useCase}. Structure the output as a new object to be added to an array of objects, where the key is a short identifier and the value is an object containing a description and a regex pattern. Format the output as { key: { description: "Description", regex: /pattern/ } }. Provide code only.`
            },
        ],
        store: true,
    });
    let { content } = completion.choices[0].message;
    console.log(`${dayjs().format()}:   ${content}`)
    return content.replace('```javascript\n', '').replace('```', '')
}


async function appendRegexFile(message) {
    const repoPath = path.resolve('./regex-code')
    const fileName = 'regex-util.js'
    fs.appendFileSync(path.join(repoPath, fileName), message);
}

async function processItem(item, index) {
    const dailyRegex = await generateRegex(item);
    console.log(`${dayjs().format()}    processingItem: ${item} at index ${index}`)
    appendRegexFile(dailyRegex);
}

function delay(minutes) {
    const ms = minutes * 6000;
    return new Promise(resolve => setTimeout(resolve, ms))
}

function handleCommit(message, time){
    git.add('.')
    .commit(`Daily Update - ${message}`,{"--date":time},(error => error && console.error(error)))
    .push('origin', 'main', (error)=>error && console.error(error))
}

async function processWithDelay(arr, delayTimeMinutes) {
    for (let itemIndex = arr.length; itemIndex > 0; itemIndex--) {
        processItem(arr[itemIndex], itemIndex);
        let ghDay = dayjs().subtract(itemIndex,'day').format();
        handleCommit(arr[itemIndex],ghDay)
        await delay(delayTimeMinutes)
    }
}

processWithDelay(useCases, 5)

