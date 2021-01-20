#!/bin/bash

# nexe -i ./app.js -o "./dist/mac/todo" -t 'macos-10.13.0' -n "todo";
# nexe -i ./app.js -o "./dist/linux/todo" -t 'linux-x64' -n "todo";
# nexe -i ./app.js -o "./dist/win/todo" -t 'windows-x64-10.13.0' -n "todo";
pkg . --out-path ./dist/ 