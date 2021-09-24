var express = require('express');
const fs = require('fs');
const path = require("path");
var router = express.Router();

router.get('/file/:filename(*$)', (req, res) => {
  const filename = req.params.filename
  const fullPath = path.join(__dirname,"../public/images")
 // res.send(fullPath)
  //res.sendFile(path.join(fullPath, filename))
  //res.send(filename)
  const absPath = path.join(fullPath, filename)
  if(fs.statSync(absPath).isFile()){
  if(fs.existsSync(path.join(fullPath, filename)))
  res.sendFile(path.join(fullPath, filename))
  else
  res.sendStatus(404)
  }
  else
  res.status(400).send("it is a folder")
  console.log(filename)
})

const listFiles = (dirPath) => {
  const list = []
  const files = fs.readdirSync(dirPath)
  for(let file of files){
    if(fs.statSync(path.join(dirPath, file)).isFile()){
      list.push(file)
    }
    else{
      const list2 = listFiles(path.join(dirPath, file))
      for(let file2 of list2)
      list.push(path.join(file, file2))
    }
  }
return list
}

router.get('/file', (req, res) => {
  
  const files = listFiles(path.join(__dirname, "../public/images"))
  res.render("listimages",{
    files

  })
  //req.send("give file name")

})

/* GET users listing. */
router.get('/', function(req, res, next) {
res.send('respond with a resource');

});

module.exports = router;
