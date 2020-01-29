const { Storage } = require("@google-cloud/storage");

module.exports = {
  upload: async filename => {
    const storage = new Storage({
      projectId: "podify-1574358118927",
      keyFilename: "./key-file.json"
    });

    const bucket = storage.bucket("podify-1574358118927.appspot.com");
    const destination = `tts-audio/${filename}`;

    await bucket.upload(filename, {
      destination: destination,
      gzip: true,
      metadata: {
        cacheControl: "public, max-age=31536000"
      }
    });

    const file = bucket.file(destination);
    await file.makePublic();

    return `https://storage.googleapis.com/podify-1574358118927.appspot.com/tts-audio/${filename}`;
  }
};
