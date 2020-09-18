const express = require('express');
const cookieSession = require('cookie-session');

const path = require('path');

//Classes
const FeedbackService = require('./services/feedbackService');
const SpeakersService = require('./services/speakersService');
//Instanciation
const feedbackService = new FeedbackService('./data/feedback.json');
const speakersService = new SpeakersService('./data/speakers.json');

const routes = require('./routes');

const app = express();
const port = 3000;

//To make express trust cookies passed to reverse proxy
app.use('trust proxy', 1);
//Use cookie to keep session in browser
app.use(
  cookieSession({
    name: 'session',
    keys: ['manwG455578ur7', 'rwnrsoead34529oo'],
  })
);

//const speakersRoutes = require('./routes/speakers');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

//tO SERVE STATIC FILES
app.use(express.static(path.join(__dirname, './static')));

app.use(
  '/',
  routes({
    feedbackService, //Same as feedbackService: feedbackService,
    speakersService, //Same as speakersService: speakersService,
  })
);
//app.get('/', speakersRoutes());

app.listen(port, () => {
  console.log(`EXPRESS SERVER LISTENING ON ${port}`);
});
