"use strict";

var path = require('node:path');

var fs = require('node:fs');

var _require = require('child_process'),
    exec = _require.exec;

var simpleGit = require('simple-git');

function dailyUpdate() {
  var repoPath = path.resolve(__dirname);
  var fileName = 'daily-log.txt';
  var now = new Date();
  var timestamp = now.toISOString();
  fs.appendFileSync(path.join(repoPath, fileName), "Updated on: ".concat(timestamp, "\n"));
  var git = simpleGit(repoPath);
  git.add('.').commit("Daily update: ".concat(timestamp)).push('origin', 'main', function (err) {
    if (err) {
      console.error(err);
    } else {
      console.log('Update Successful');
    }
  });
}

dailyUpdate();