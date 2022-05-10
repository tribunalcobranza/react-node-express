import express from "express";
import cors from 'cors'

// importamos la conexion a la base de datos 
import db from "./database/db.js"

//importamos nuestro enrutador
import blogRoutes from './routes/routes.js'

// clase express se le asigna a app para poder utilizar todos los metodos
const app = express()

//configuramos cors para no tener errores
app.use(cors())

//configurammos json
app.use(express.json())

//ejecutamos nuestro servidor en esta ruta http://localhost:8000/blogs
app.use('/blogs', blogRoutes)

try {
    await db.authenticate()
    console.log('conexion exitosa a la DB')
} catch (error) {
    console.log('El error de conexión es: ${error}')

}

/* app.get('/', (req, res) => {
    res.send('Hola Mundo')
}) */

// Hacemos que se ejecute en el puerto 8000 porque react se ejecuta en ese puerto
app.listen(8000, () => {
    console.log('Server UP running in http://localhost:8000/')
})