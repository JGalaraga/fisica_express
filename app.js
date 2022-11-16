require('dotenv').config()
const express = require('express') //incluir un paquete en node
const hbs =require('hbs')
const app = express()
const port = process.env.PORT

app.use( express.static('public'))




//Motor de plantilla
 hbs.registerPartials(__dirname + '/views/partials', function (err) {})
 app.set('view engine', 'hbs')
 app.set('views', __dirname + '/views')

 

//verificar si el puerto np esta escuchando
app.listen(port, () =>{
    console.log(`Escuchando el puerto ${port}`)
})




app.get('/home', (req, res) => {

    // res.sendFile(__dirname + '/public/views/login.html')
    res.render('formulario', {
        nombre: 'formulario'
    })
})


app.get('*', (req, res) => {
    //res.send('pagina no encontrada ')
    // res.sendFile(__dirname + '/public/views/404.html')
    res.render('404',{
        nombre:'Página no encontrada'
    })
})
