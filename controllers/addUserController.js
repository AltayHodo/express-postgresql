
exports.addUserGet = (req, res) => {
  res.render('addUser', {title: 'Add User Form'})
}

exports.addUserPost = (req, res) => {
  console.log("username to be saved: ", req.body.username)
}