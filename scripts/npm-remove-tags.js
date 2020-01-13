#!/usr/bin/env node

const fs = require('fs');
const util = require('util');
const path = require('path');
const exec = util.promisify(require('child_process').exec);

async function* removeVersion(versions) {
    console.log('versions', versions);
    for(const version of versions) {
        console.log(version);
        yield await exec(`npm unpublish @mussia/button@${version}`);
    }
};
async function c(v) {
    return await exec(`npm unpublish @mussia/render@${v}`);
}


async function removeVersions() {
    const { stdout, stderr } = await exec('npm view @mussia/render versions --json');
    const versions = JSON.parse(stdout);
    const sliced = versions.reverse().slice(0, 1);
    console.log('sliced', sliced);
    // var p = Promise.resolve(); // Q() in q
    sliced.forEach(c);
    // s.forEach((ss) => {
    //     ss.next();
    // });
    // console.log('stdout', stdout);
    // console.log('stderr', stderr);
}


async function A() {
    await removeVersions();
}

A();
