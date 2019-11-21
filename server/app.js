var express = require("express");
var app = express();
var tts = require("./text-to-speech");
var fileUpload = require("./file-upload");
const fs = require("fs");
const crypto = require("crypto");
app.use(express.json());
app.use(express.static("../ui/dist/podify/"));

const port = 3000;

app.post("/tts", async function(req, res) {
  var fileName = generateRandomToken();
  console.log("Filename: " + fileName);
  await tts.textToSpeech(req.body.text, req.body.languageCode, fileName);
  const path = await fileUpload.upload(fileName);

  res.send({
    message: "Audio file created.",
    path: path
  });

  fs.unlink(fileName, err => {
    if (err) {
      console.error(err);
      return;
    }
  });
});

app.listen(3000, function() {
  console.log(`Text To Speech API listening on ${port}`);
});

function generateRandomToken() {
  const buf = Buffer.alloc(20);

  return crypto.randomFillSync(buf).toString("hex") + ".mp3";
}
