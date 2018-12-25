const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'))

app.get(['/'] , (req,res) =>{
  res.send('hello ganesh')
});

app.get('/test', (req,res) =>{
 res.send('your are awesome')

});

app.listen(3000, () =>{
    console.log('server is up on port 3000')
})