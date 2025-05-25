const db = require('../db/queries')

async function getUsernames(req, res) {
  const usernames = await db.getAllUsernames();
  console.log("Usernames: ", usernames);
  res.send("Usernames: " + usernames.map(user => user.username).join(", "));
}

async function addUserGet(req, res) {
  res.render('addUser', {title: 'Add User Form'})
}

async function addUserPost(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
}

module.exports = {
  getUsernames,
  addUserGet,
  addUserPost
};
