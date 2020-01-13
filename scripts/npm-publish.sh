#! /bin/bash

set -eo pipefail
echo $npm_package_version

git add publish-command.text .
git diff --quiet && git diff --staged --quiet || git commit -m "edit publish-command.text file"
cat publish-command.text
git status

npx lerna exec --stream --since -- npm i
npx lerna run --parallel build --since
npx lerna publish major --yes --no-push --conventional-commits
npx lerna exec -- npm install --package-lock-only --ignore-scripts --no-audit
  git status
git add -u
git diff --quiet && git diff --staged --quiet || git commit -am "package-lock.json update"
git status
npm version major
git push origin --follow-tags
###  # tag
  git status
git tag "$(node -p "require('./package.json').version")" -a -m "$(node -p "require('./package.json').version")"
git push origin --follow-tags
