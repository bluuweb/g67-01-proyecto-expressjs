import express from 'express'
import { engine } from 'express-handlebars';

const app = express()

// Motor de plantillas handlebars
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './views');

// GET http://localhost:5000/
app.get('/', (req, res) => {
    res.render('home');
});

app.listen(5000, () => {
    console.log('estoy escuchando peticiones')
})