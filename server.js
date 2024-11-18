 
const express = require('express');
const app = express();

app.use(express.json())

app.get('/hello', (req, res) => {
    res.json({ msg:"Hello world!" })
})

app.get('/echo/:id', (req, res) => {
    const { id } = req.params;
    res.json({ id })
})

app.post('/sum', (req, res) => {
    const { numbers } = req.body

    if(!Array.isArray(numbers)) {
        return res.status(400).json({ error: "Numbers must be an array"})
    }

    const sum = numbers.reduce((acc, num) => acc + num, 0)
    res.json({ sum})
})

app.listen(3000, () => {
    console.log("Server is running")
})

