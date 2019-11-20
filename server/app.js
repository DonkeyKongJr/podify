var express = require("express");
var app = express();
var tts = require("./text-to-speech");
app.use(express.json());
app.use(express.static("../ui/dist/podify/"));

const port = 3000;

// TODO: Add API Calls to Text-To-Speech API.
app.post("/tts", async function(req, res) {
  await tts.textToSpeech(req.body.text, req.body.languageCode);
  res.send({
    message: "This method is not implemented yet",
    requestBody: req.body
  });
});

app.listen(3000, function() {
  console.log(`Text To Speech API listening on ${port}`);
});
