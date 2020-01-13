#! /bin/bash

set -e
npx lerna changed -a --json > file.json
#FILES=babel.config.js
#npx lerna changed -a -p
#echo "exit code $?"
#echo "File name: $0"
#echo "File name: $1"
#echo "File name: $2"

for line in $(node -p "require('./file.json')")
do
echo "$line.name"
done

#echo ssss $FILES
#for f in $FILES
#do
#  echo "Processing $f file..."
#  # take action on each file. $f store current file name
#  cat $f
#done
#if [[ $? -ne 0 ]]; then
#  echo all good, can do npm publish
#else
#  echo no changes
##  circleci-agent step halt
#fi
#echo "first paramater: $1"
#echo "second paramater: $2"
#echo "1111: $@"
#echo "22222 $@"
#
#for [[f in $*]]
#do
#  echo "Processing $f file..."
#  # rm "$f"
#done



# execute command
#$@ npx lerna changed
#docker-compose build $("npx lerna changed -q") --parallel
#if [ $STATUS == 0 ]; then
#  echo "Command '$@' completed successfully"
#else
#  echo "Command '$@' exited with error status $STATUS"
#fi
