const express = require('express');
const app = express();

// CRUD -> POST GET PUT DELETE
app.get('/',(req,res)=>{
  // res.sendStatus(500);
  res.json({ s:1,b:2});
  // res.json({ d:1,c:5});
  res.send()
});


app.listen(5000);