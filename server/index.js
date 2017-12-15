const express = require('express');
const path = require('path');
const cors = require('cors');

const indexRoutes = require('./routes/index');
const tasksRoutes = require('./routes/tasks');

const app = express();

// settings
// app.set('views', path.join(__dirname, 'views'));
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'ejs');

app.set('port', process.env.PORT || 3000);

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
// app.use('/', indexRoutes);
app.use('/api', tasksRoutes);

// static files
app.use(express.static(path.join(__dirname, 'dist')));

// start the server
app.listen(app.get('port'), () => {
    console.log('server on port 3000');
}); 