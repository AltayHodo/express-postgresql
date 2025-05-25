const express = require('express');
const app = express();
const db = require('./db/queries');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

const addUserRouter = require('./routes/addUserRouter');

app.use('/new', addUserRouter);

app.get('/', async (req, res) => {
  const searchTerm = req.query.search;
  let usernames;

  if (searchTerm) {
    usernames = await db.searchUsernames(searchTerm);
  } else {
    usernames = await db.getAllUsernames();
  }

  console.log('Usernames: ', usernames);
  res.render('index', { title: 'Home page', usernames: usernames });
});

app.get('/delete', async (req, res) => {
  await db.deleteUsernames();
  res.redirect('/');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Express app listening on port ${PORT}!`));
