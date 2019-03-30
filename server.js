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
  fName: String,
  lName: String,
  min: Number,
  gr: String,
  gf: String,
  pE: String,
  pU: String,
  uP: String,
  user: String,
  pass: String,
  sI: Boolean
});

//Create a model for items in the museum.
const Participant = mongoose.model('Participants', itemSchema);



// Create a new item in the museum: takes a title and a path to an image.
app.post('/api/Participants', async (req, res) => {
  const participant = new Participant({
    fName: req.body.firstName,
    lName: req.body.lastName,
    min: req.body.minutes,
    gr: req.body.grade,
    gf: req.body.greaterFive,
    pE: req.body.participantEmail,
    pU: req.body.parentUsername,
    uP: req.body.useParent,
    user: req.body.partUser,
    pass: req.body.partPass,
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
app.get('/api/Participants', async (req, res) => {
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
    Participant.fName = req.body.firstName;
    Participant.lName = req.body.lastName;
    Participant.min = req.body.minutes;
    Participant.gr = req.body.grade;
    Participant.gf = req.body.greaterFive;
    Participant.pE = req.body.participantEmail;
    Participant.pU = req.body.participantUsername;
    Participant.uP = req.body.useParent;
    Participant.user = req.body.partUser;
    Participant.pass = req.body.partPass;
    await participant.save();
    res.send(participant);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(3000, () => console.log('Server listening on port 3000!'));
