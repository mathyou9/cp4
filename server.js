const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static('public'));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/libraryProgram', {
  useNewUrlParser: true
});

//configure multer so that it will upload to '/public/images'
const multer = require('multer')
const upload = multer({
  dest: './public/images/',
  limits: {
    fileSize: 10000000
  }
});

// Creawte a scheme for items in the museum: a title and a path to an image.
const itemSchema  = new mongoose.Schema({
  firstName: String,
  lastName: String,
  grade: String,
});

//Create a model for items in the museum.
const Item = mongoose.model('Item', itemSchema);



// Create a new item in the museum: takes a title and a path to an image.
app.post('/api/item', async (req, res) => {
  const participant = new Participant({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    grade: req.body.grade,
  });
  try {
    await participant.save();
    res.send(participant);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Get a list of all the items in the Museum
app.get('/api/item', async (req, res) => {
  try {
    let participant = await Participant.find();
    res.send(participant);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/Participants/:id', async (req, res) => {
  try{
    let participant = await Participant.deleteOne({_id: req.params.id});
    res.sendStatus(200);
  } catch (error){
    console.log(error);
    res.sendStatus(500);
  }
})

app.put('/api/Participants/:id', async (req, res) => {
  try{
    let participant = await Participant.findOne({_id: req.params.id});
    participant.firstName = req.body.title;
    participant.lastName = req.body.description;
    participant.grade = req.body.description;
    await participant.save();
    res.send(participant);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
})

app.listen(3000, () => console.log('Server listening on port 3000!'));
