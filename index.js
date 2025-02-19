// https://nodejs.org/en/learn/manipulating-files/reading-files-with-nodejs#reading-files-with-nodejs

const fs = require('node:fs');
const path = require('path')
const replaceThis = "harry";
const replaceWith = "Shivansh";
const preview = false
const folder =  __dirname
// gives current directory

try {
  fs.readdir(folder, (err, data) =>{
    // console.log(data);
    for(let index=0; index < data.length; index++){
        const item = data[index];
        let oldFile = path.join(folder, item)
        let newFile = path.join(folder, item.replaceAll(replaceThis, replaceWith))
        if(!preview){
            fs.rename(oldFile, newFile, () =>{
                console.log("Rename Successful")
              })
        }
        else{
          if("data/" + item !== newFile) 
            console.log("data/" + item + " will be replaced with " + newFile);
        }
        
    }
   })
} 
catch (err) {
  console.error(err);
}
