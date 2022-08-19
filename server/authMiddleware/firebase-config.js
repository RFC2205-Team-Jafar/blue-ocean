const admin = require('firebase-admin');
const serviceAccount = require('./firebase-secret.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.export = admin;