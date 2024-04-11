import express from 'express'
import { writeFile, readFile } from 'node:fs/promises'

const app = express()
app.get('/api/create-todos', async (req, res) => {

    // array de objetos !== json de array de objetos
    const todos = [
        { id: 1, title: 'Estudiar CSS', done: false },
        { id: 2, title: 'Estudiar Node.js', done: false },
        { id: 3, title: 'Estudiar Jquery', done: true },
    ];

    // Que tipo de dato es un json? string, objeto, array, number??

    await writeFile('./todos.json', JSON.stringify(todos))
    res.json({
        ok: true,
        msg: "archivo creado"
    })
})

app.get('/api/todos', async (req, res) => {
    const stringJSON = await readFile("./todos.json", "utf-8")
    res.json({
        ok: true,
        msg: stringJSON
    })
})

app.listen(5000, () => {
    console.log('estoy escuchando peticiones')
})