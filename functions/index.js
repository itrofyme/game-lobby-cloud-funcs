const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.updateUserPhoto = functions.https.onCall((data, context) => {
  functions.logger.log("input data: ", data);
  return admin.firestore()
      .collection("player_colors")
      .doc(data.playerId)
      .update({avatar_url: data.image})
      .then((res) => {
        functions.logger.log("record updated at " + res.updateTime);
        return "success";
      });
});
