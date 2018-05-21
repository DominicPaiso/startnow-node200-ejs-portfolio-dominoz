const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/views'));


//setting the view directory to be ./views
//letting the app know where to find the template files
app.set('views', './views');

//setting the default engine to ejs
//don't need require('ejs'), express will do it for us
app.set('view engine', 'ejs');

//instead of using res.send
//use res.render to send output of the template by filename

app.get('/', (req, res) => {
    const data = {
        person: {
            firstName: 'Dominic',
            lastName: 'Paiso'
        }
    }
    res.render('index', data);
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.post('/thanks', (req, res) => {
    res.render('thanks', { contact: req.body })
});

app.listen(8080, () => {
    console.log('listening at http://localhost8080')
});