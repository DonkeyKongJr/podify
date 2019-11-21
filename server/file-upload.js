const { Storage } = require("@google-cloud/storage");

module.exports = {
  upload: async filename => {
    const storage = new Storage({
      projectId: "concrete-plasma-259621",
      keyFilename: "./key-file.json"
    });

    const bucket = storage.bucket("tts-audio");
    const file = bucket.file(filename);

    await bucket.upload(filename, {
      gzip: true,
      metadata: {
        cacheControl: "public, max-age=31536000"
      }
    });

    var result = await file.makePublic();
    return `https://storage.googleapis.com/tts-audio/${filename}`;
  }
};
