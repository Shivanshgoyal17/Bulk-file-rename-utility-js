#!/bin/bash

script_full_path=$(dirname "$0")

cd "$script_full_path"

echo $script_full_path
echo "node $script_full_path/index.js"
node index.js






// We are writing this linux based command so we have to use gitbash instead of cmd.