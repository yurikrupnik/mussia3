#!/usr/bin/env node
const fs = require('fs');
const util = require('util');
const path = require('path');
const exec = util.promisify(require('child_process').exec);

const createCommand = (acc, next) => `${acc} --scope ${next.name}`;

async function createFile() {
    try {
        const { stdout } = await exec('npx lerna changed -a --json');
        const command = JSON.parse(stdout).reduce(createCommand, '');
        fs.writeFile(
            path.join(process.cwd(), 'publish-command.text'),
            command,
            'utf8',
            async (error) => {
                if (error) {
                    console.log('Failed to write json'); // eslint-disable-line
                    process.exitCode = 1;
                } else {
                    console.log('Created publish-command.text file'); // eslint-disable-line
                    process.exitCode = 0;
                }
            }
        );
    } catch (e) {
        fs.writeFile(
            path.join(process.cwd(), 'publish-command.text'),
            '',
            'utf8',
            async (error) => {
                if (error) {
                    console.log('Failed to write json'); // eslint-disable-line
                    process.exitCode = 1;
                } else {
                    console.log('Created publish-command.text file'); // eslint-disable-line
                    process.exitCode = 0;
                }
            }
        );
    }
}

createFile();
