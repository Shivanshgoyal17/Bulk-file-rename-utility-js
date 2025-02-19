# Bulk File Renamer

This project is a simple Node.js script to rename files in bulk within a directory.
The script reads all files in the current directory and replaces occurrences of a specified string in the filenames with another string.

## Prerequisites
- Node.js installed on your machine
- Git Bash or another Bash-compatible terminal for running the shell script on Windows

## Setup
1. Clone the repository or download the project files to your local machine.

## Usage
1. Go to the directory of your local computer where the files are present to be renamed. Copy these files (index.js, package.json, rename.sh) in the same directory.
2. Since you need to install the node modules, to install the required packages go to cmd in the same directory and run "npm i". Now we can close it. And the sh file is now executable.
3. Right click on the rename.sh file and open it with GIT bash.
4. The files will get renamed

## Configuration:
You can configure the script by modifying the following variables in the index.js file:
  replaceThis: The string to be replaced in the filenames.
  replaceWith: The string to replace with in the filenames.
  preview: Set to true to preview the changes without actually renaming the files. Set to false to perform the renaming.

## Example:
If you have files named harry1.txt, harry2.txt, and harry3.txt in the directory, running the script will rename them to Shivansh1.txt, Shivansh2.txt, and Shivansh3.txt.
