// Import the functions you need from the SDKs you need

const { getDatabase } = require('firebase/database')
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
module.exports.firebaseConfig = {
    apiKey: "AIzaSyAFIQUr26jGYaP7SY2NLSnwiRRHFBahgkU",
    authDomain: "lost-solution.firebaseapp.com",
    projectId: "lost-solution",
    databaseUrl: "https://lost-solution-default-rtdb.firebaseio.com",
    storageBucket: "lost-solution.appspot.com",
    messagingSenderId: "672742533407",
    appId: "1:672742533407:web:d121be979fe804ab81a82a",
    measurementId: "G-6ZPYJ2NFJV"
};

// Initialize Firebase

module.exports.database = getDatabase()
// const analytics = getAnalytics(app);
// analytics.isSupported()
