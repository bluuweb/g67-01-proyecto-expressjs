import express from 'express'

const app = express()

// estoy escuchando si hacen la petición a: http://localhost:5000/api/v2/pokemon/ditto
app.post('/api/v2/pokemon/ditto', (req, res) => {
    res.json({
        name: 'ditto',
        id: '131'
    })
})

app.listen(5000, () => {
    console.log('estoy escuchando peticiones')
})