var express = require("express");
var app = express();
var tts = require("./text-to-speech");
app.use(express.json());

const port = 3000;

app.get("/", function(req, res) {
  res.send("This server provides an interface to a Text-To-Speech (TTS) API.");
});

// TODO: Add API Calls to Text-To-Speech API.
app.post("/tts", async function(req, res) {
  await tts.textToSpeech(req.body.text);
  res.send({
    message: "This method is not implemented yet",
    requestBody: req.body
  });
});

app.listen(3000, function() {
  console.log(`Text To Speech API listening on ${port}`);
});
