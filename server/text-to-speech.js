const textToSpeech = require("@google-cloud/text-to-speech");
const fs = require("fs");
const util = require("util");

module.exports = {
  textToSpeech: async (text, languageCode) => {
    const client = new textToSpeech.TextToSpeechClient({
      projectId: "concrete-plasma-259621",
      keyFile: "./key-file.json"
    });

    const outputFile = "output.mp3";

    const request = {
      input: { text: text },
      voice: { languageCode: languageCode, ssmlGender: "FEMALE" },
      audioConfig: { audioEncoding: "MP3" }
    };

    const [response] = await client.synthesizeSpeech(request);
    const writeFile = util.promisify(fs.writeFile);
    await writeFile(outputFile, response.audioContent, "binary");
    console.log(`Audio content written to file: ${outputFile}`);
  }
};
