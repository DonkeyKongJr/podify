const textToSpeech = require("@google-cloud/text-to-speech");
const fs = require("fs");
const util = require("util");

module.exports = {
  textToSpeech: async (text, languageCode, fileName) => {
    const client = new textToSpeech.TextToSpeechClient({
      projectId: "podify-1574358118927",
      keyFile: "./key-file.json"
    });

    const request = {
      input: { text: text },
      voice: { languageCode: languageCode, ssmlGender: "FEMALE" },
      audioConfig: { audioEncoding: "MP3" }
    };

    const [response] = await client.synthesizeSpeech(request);
    const writeFile = util.promisify(fs.writeFile);
    await writeFile(fileName, response.audioContent, "binary");
    console.log(`Audio content written to file: ${fileName}`);
  }
};
