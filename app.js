const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

const addUserRouter = require('./routes/addUserRouter')

app.use('/new', addUserRouter);

app.get('/', (req, res) => {
  console.log('usernames will be logged here - wip')
  res.render('index', {title: 'Home page'})
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Express app listening on port ${PORT}!`));