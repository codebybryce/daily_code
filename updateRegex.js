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
const useCases = [
    "Match phone numbers",
    "Validate email addresses",
    "Extract domain names from URLs",
    "Validate postal codes",
    "Find duplicate words in a text",
    "Extract hashtags from social media posts",
    "Validate IPv4 addresses",
    "Validate IPv6 addresses",
    "Find all numbers in a string",
    "Extract dates from text",
    "Match hexadecimal color codes",
    "Validate credit card numbers",
    "Find all uppercase words",
    "Extract mentions from tweets",
    "Match time in HH:MM format",
    "Validate strong passwords",
    "Remove extra whitespace",
    "Find links in HTML",
    "Validate JSON format",
    "Extract image URLs from HTML",
    "Validate MAC addresses",
    "Find all vowels in a sentence",
    "Match words starting with a capital letter",
    "Validate YouTube video URLs",
    "Extract quoted text from a sentence",
    "Match currency values",
    "Validate file extensions",
    "Find words ending with 'ing'",
    "Validate binary numbers",
    "Extract usernames from emails",
    "Match SSN (Social Security Number)",
    "Find and replace profanity",
    "Extract text inside parentheses",
    "Validate GUID/UUID",
    "Match mathematical expressions",
    "Validate ISBN numbers",
    "Extract HTML tags",
    "Match SQL queries",
    "Validate user input in forms",
    "Extract table data from CSV files",
    "Find palindromes",
    "Match Morse code sequences",
    "Extract Markdown links",
    "Validate stock ticker symbols",
    "Find all hashtags in a tweet",
    "Match DNA sequences",
    "Extract numbers from alphanumeric strings",
    "Validate URL parameters",
    "Find duplicate lines in a file",
    "Match and replace specific words",
    "Extract titles from HTML",
    "Validate coupon codes",
    "Match multi-line comments in code",
    "Find function definitions in JavaScript",
    "Extract meta tags from HTML",
    "Validate time zones",
    "Match LaTeX equations",
    "Find and replace HTML entities",
    "Validate IP address ranges",
    "Extract decimal numbers",
    "Match Unicode characters",
    "Validate emoji sequences",
    "Find all consonants in a string",
    "Extract page numbers from PDFs",
    "Match different date formats",
    "Find repeating character sequences",
    "Validate chess notation",
    "Extract ISBN-10 and ISBN-13 numbers",
    "Match roman numerals",
    "Find Python function names",
    "Extract CSS class names",
    "Match HTML comments",
    "Validate temperature formats",
    "Extract decimal values from strings",
    "Find repeated phrases",
    "Validate voting ballots",
    "Match fraction representations",
    "Extract meta descriptions from HTML",
    "Validate country codes",
    "Find substrings between delimiters",
    "Extract programming keywords",
    "Match HTML attribute values",
    "Validate currency exchange rates",
    "Find escaped characters in text",
    "Extract JavaScript variable names",
    "Validate MIME types",
    "Match different plural word forms",
    "Find invalid characters in text input",
    "Extract function names from scripts",
    "Validate latitude and longitude",
    "Match markdown headings",
    "Extract HTML ids",
    "Find and replace units of measurement",
    "Match HTML entity codes",
    "Validate scientific notation numbers",
    "Extract email providers from addresses",
    "Find domain extensions in URLs",
    "Validate hashtag formatting",
    "Match C-style comments",
    "Find and remove unnecessary punctuation",
    "Extract tweet IDs",
    "Validate Morse code inputs",
    "Match different spelling variations",
    "Find unique words in a text",
    "Extract user IDs from API responses",
    "Validate flight numbers",
    "Match software version numbers",
    "Find repeated number sequences",
    "Extract RGB color values",
    "Validate food nutrition labels",
    "Match ZIP+4 postal codes",
    "Find percentage values in text",
    "Extract hexadecimal values",
    "Validate URL slugs",
    "Match Unicode emojis",
    "Find all JavaScript console logs",
    "Extract error codes from logs",
    "Validate car license plates",
    "Match Slack channel names",
    "Find and replace misspellings",
    "Extract longitude and latitude pairs",
    "Validate product SKUs",
    "Match different date-time formats",
    "Extract CSS media queries",
    "Validate user-agent strings",
    "Find escaped Unicode sequences",
    "Extract HTML <a> tag href values",
    "Match sports scores",
    "Validate Twitch usernames",
    "Find extra newline characters",
    "Extract variable assignments in Python",
    "Match JavaScript object properties",
    "Validate ISBN-10 checksum",
    "Extract scientific units from text",
    "Find overused words in a document",
    "Match programming loop statements",
    "Extract project dependencies from config files",
    "Validate hexadecimal ID numbers",
    "Match NLP stopwords",
    "Find and remove duplicates in lists",
    "Extract JavaScript class names",
    "Validate stock market symbols",
    "Match PGP encryption headers",
    "Find phone extensions in text",
    "Extract multiple-choice answers",
    "Validate SSN formatting",
    "Match XML namespaces",
    "Find irregular spacing in text",
    "Extract Markdown bold text",
    "Validate cryptocurrency addresses",
    "Match Git commit messages",
    "Find invalid trailing spaces",
    "Extract table headers from CSV",
    "Validate base64 strings",
    "Match curly brace syntax blocks",
    "Extract command-line arguments",
    "Validate Unicode normalization",
    "Find file paths in logs",
    "Match IPv6 subnet masks",
    "Extract PascalCase words",
    "Validate tab-separated values",
    "Find speech-to-text transcriptions",
    "Match YAML key-value pairs",
    "Extract function parameters in JavaScript",
    "Validate tarball filenames",
    "Match long numbers with thousands separators",
    "Find Java method signatures",
    "Extract spreadsheet cell references",
    "Validate router IP ranges",
    "Match common stopwords in text",
    "Find unused variables in scripts",
    "Extract comments from SQL queries",
    "Validate barcode numbers",
    "Match machine learning model names",
    "Find overlapping word patterns",
    "Extract XML attribute values",
    "Validate cookie values",
    "Match file permissions in Unix format",
    "Find camelCase variables",
    "Extract first and last names",
    "Validate regular polygon angles",
    "Match book citation formats",
    "Find duplicate database entries",
    "Extract Slack webhook URLs",
    "Validate marketing tracking parameters",
    "Match retail discount codes",
    "Find Google Analytics tracking codes",
    "Extract country names from text",
    "Validate network port numbers",
    "Match referrer URLs",
    "Find trailing slashes in URLs",
    "Extract DNS records from logs",
    "Validate IMEI numbers",
    "Match complex search queries",
    "Find misformatted CSV rows",
    "Extract publication years from references",
    "Validate physics formula notation",
    "Match timestamps in logs",
    "Find sentence-ending punctuation",
    "Extract titles from bibliographies",
    "Validate RGB color codes",
    "Match HTML doctype declarations",
    "Find Java package names",
    "Extract XPath expressions",
    "Validate API key formats",
    "Match physics measurement units",
    "Find erroneous spaces in code",
    "Extract JSON property names",
    "Validate whitespace formatting",
    "Match leading zeros in numbers",
    "Find misplaced commas in lists",
    "Extract author names from papers",
    "Validate forum post titles",
    "Match directory paths in system logs",
    "Find unused CSS rules",
    "Extract city names from addresses",
    "Validate decimal precision in numbers",
    "Match user-submitted comments",
    "Find references in scientific papers",
    "Extract BibTeX citation keys",
    "Validate election district codes",
    "Match airline flight numbers",
    "Find financial transaction IDs",
    "Extract cryptocurrency ticker symbols",
    "Validate aerospace part numbers",
    "Match screenplay formatting rules",
    "Find incorrect HTML nesting",
    "Extract hexadecimal escape sequences"
];

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

