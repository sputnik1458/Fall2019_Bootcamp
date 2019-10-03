//This file holds any configuration variables we may need
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb+srv://jacobf1458:megansam13@cluster0-nejmp.mongodb.net/test?retryWrites=true&w=majority'//place the URI of your mongo database here.
  },
  openCage: {
    key: 'bc0a05fa1a894b7c87d9f5a81daedf70' //place your openCage public key here - Sign-up for a free key https://opencagedata.com/
  },
  port: 8080
};
