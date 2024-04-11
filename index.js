import express from 'express'

const app = express()

// estoy escuchando si hacen la petición a: http://localhost:5000/api/v2/pokemon/ditto
app.get('/api/v2/pokemon/ditto', (req, res) => {
    res.json({
        name: 'ditto'
    })
})

app.listen(5000, () => {
    console.log('estoy escuchando peticiones')
})