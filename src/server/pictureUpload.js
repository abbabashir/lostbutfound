const admin = require("firebase-admin");
const serviceAccount = require("./lost-solutionk.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "lost-solution.appspot.com"
});

const bucket = admin.storage().bucket();

const imagePath = "./server/digit.jpg";
const file = bucket.file("digit.jpg");

bucket.upload(imagePath, {
  destination: file,
  metadata: {
    contentType: "image/jpeg",
  },
}).then(() => {
  console.log("Image uploaded successfully");
}).catch((error) => {
  console.error(error);
});


const imageName = "digit.jpg";

file.getSignedUrl({
  action: "read",
  expires: "03-17-2023",
}).then((signedUrls) => {
  const imageUrl = signedUrls[0];
  console.log(imageUrl);
}).catch((error) => {
  console.error(error);
});
