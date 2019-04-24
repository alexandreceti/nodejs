const express = require('express')
const hbs = require('hbs')
const path = require('path')
const request = require('request')

const app = express()

const publicAssets = path.join(__dirname, '/public')
const viewsPath = path.join(__dirname, '/templates/views')
const partialsPath = path.join(__dirname, '/templates/partials')

hbs.registerPartials(partialsPath)

app.set('view engine', 'hbs')
app.set('views', viewsPath)


app.use(express.static(publicAssets))

// app.get('', (req, res) => {
//     res.send('alexandre..s')
// })

app.get('/people/:id', (req, res) => {
    const id = req.params.id
    if (id === 1) {
        const aluno = {
            name: "alexandre",
            status: "ativo"
        }

        res.status(200).json(aluno)
    }
    
    res.status(400)
})

app.get('', (req, res) => {
    res.render('index', {
        name: "Alexandre"
    })
})

app.get('/sobre', (req, res) => {
    res.render('sobre', {
        name: "Sobre empresa"
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        content: "Preciso de ajuda"
    })
})


app.get('/cotacao/:ativo', async (req, res) => {
    const ativo = req.params.ativo.toUpperCase()
    const url =`https://www.worldtradingdata.com/api/v1/stock?symbol=${ativo}&api_token=strAUp65tYXoMTcirP9Uae0AaRPosw4zg46mjRmTlztBEIEAfcv8yhX9dHfZ`
    
    let result = new Promise((resolve, reject) => {
        request(url, function (error, response, body) {
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body); // Print the HTML for the Google homepage.
            if (error) reject(error)
            resolve(body)
        });
    })
    
    let temp = await result.then((data) => {
        res.send(data)
    })
    
    
})

const port = 3000

app.listen(port, () => {
    console.log(`Servidor rodando port : ${port} ...`)
})