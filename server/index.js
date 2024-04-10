const mongoose = require('mongoose');
const express = require('express')
const fs = require('fs');
const path    = require("path");
const bodyParser = require('body-parser');


const app = express()
app.use(bodyParser.urlencoded({ extended: true }));

const port = 80


// Define a schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  mobile: {
    type: Number,
    required: true,
    unique: true
  },
  state:{
    type:String
  },
  clg :{
    type:String
  }
});

// Define a model based on the schema
const User = mongoose.model('User', userSchema);

module.exports = User;



mongoose.connect('mongodb+srv://king:king@gist001.xtt8zeu.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  });  
    



  app.post('/down',(req,res)=>
  {
      const names = req.body.name;
      const mail = req.body.mail;
      const ages = req.body.age;
      const state = req.body.state;
      const clg = req.body.clg;
      const newUser = new User({
          name: names,
          email: mail,
          mobile: ages,
          state:state,
          clg:clg
        }); 
        
        res.sendFile(path.join(__dirname + '/public/index.html'))
        return newUser.save()
        

    });
     

app.post('/center',(req,res)=>
  res.send("Center Hear")
)

app.get('/up',(req,res) =>
  // res.send('UP Page')
  res.sendFile(path.join(__dirname + '/public/up.html'))
);

app.get('/', (req, res) => 
res.sendFile(path.join(__dirname + '/public/index.html'))
)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


