const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const routes = require('./routes');
//const speakersRoutes = require('./routes');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

//tO SERVE STATIC FILES
app.use(express.static(path.join(__dirname, './static')));

app.get('/', routes());
app.get('/', speakersRoutes());

app.listen(port, () => {
  console.log(`EXPRESS SERVER LISTENING ON ${port}`);
});
