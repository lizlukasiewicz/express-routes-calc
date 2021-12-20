const express = require('express')
const app = express()
const PORT = 8000

app.get('/', (req, res) => {
    res.send('Hello, World!')
  });


app.get('/add/:x/:y', (req, res) => {
    const x = parseInt(req.params.x)
    const y = parseInt(req.params.y)
    res.send(`${x + y}`)
})
app.get('/subtract/:x/:y', (req, res) => {
    const x = parseInt(req.params.x)
    const y = parseInt(req.params.y)
    res.send(`${x - y}`)
})
app.get('/multiply/:x/:y', (req, res) => {
    const x = parseInt(req.params.x)
    const y = parseInt(req.params.y)
    res.send(`${x * y}`)
})
app.get('/divide/:x/:y', (req, res) => {
    const x = parseInt(req.params.x)
    const y = parseInt(req.params.y)
    res.send(`${x / y}`)
})

    //const x = parseInt(req.query.x)
    // if(app.get('/add') {
    //     res.send()
     //
app.get('/*', (req, res) => {
    let math = req.query.math
    let nums = req.params[0].split("/")
    nums = nums.map(num => parseInt(num))

switch(math) {
    case 'add':
        res.send(`${nums.reduce((a, b) => a + b)}`)
        break
    case 'subtract':
        res.send(`${nums.reduce((a, b) => a - b)}`)
        break
    case 'multiply':
        res.send(`${nums.reduce((a, b) => a * b)}`)
}
})


app.listen(PORT, () => {
    console.log(`you are now listening to the smooth sounds of port ${PORT} in the morning🌊`)
})

