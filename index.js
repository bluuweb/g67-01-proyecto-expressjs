import express from 'express'
import { engine } from 'express-handlebars';

const app = express()

const todos = [
    { id: 1, title: 'Estudiar CSS', done: false },
    { id: 2, title: 'Estudiar Node.js', done: false },
    { id: 3, title: 'Estudiar Jquery', done: true },
];

// Motor de plantillas handlebars
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './views');

// todos
app.get('/todos', (req, res) => {
    res.render('todos', { todos });
});

// GET http://localhost:5000/
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});



// crear rutas: about y contact

app.listen(5000, () => {
    console.log('estoy escuchando peticiones')
})