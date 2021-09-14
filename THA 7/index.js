const express = require('express');
const app = express();

//CRUD -> POST, GET, PUT, DELETE

const msg = (req,res)=>{
    res.send('Hello World'); };
app.get('/',msg);
app.get('/hello',msg);
app.post('/',msg);
app.put('/',msg);
app.delete('/',msg);

//200 - OK, 201 - Created, 204 - No Content, 404 - Not Found, 500 - Internal Server Error,400 - Bad Request
app.get('/', (req, res) => {
    res.sendStatus(400);
    res.json({a: 1});
});

app.listen(5000);