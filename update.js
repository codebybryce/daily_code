const path = require('node:path');
const fs = require('node:fs')
const { exec } = require('child_process')
const simpleGit = require('simple-git')

function dailyUpdate(){
    const repoPath = path.resolve(__dirname);
    const fileName = 'daily-log.txt';

    const now = new Date();
    const timestamp = now.toISOString();

    fs.appendFileSync(path.join(repoPath, fileName), `Updated on: ${timestamp}\n`);

    const git = simpleGit(repoPath);

    git.add('.')
    .commit(`Daily update: ${timestamp}`)
    .push('origin', 'main', (err)=>{
        if(err){
            console.error(err)
        } else {
            console.log('Update Successful')
        }
    })
}

dailyUpdate()

