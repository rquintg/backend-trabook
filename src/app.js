import express from 'express'
import indexRoutes from './routes/index.routes.js'
import travelsRoutes from "./routes/travels.routes.js";
import blogRoutes from "./routes/blog.routes.js"
import utilRoutes from "./routes/util.routes.js"

import cors from 'cors'



const app = express()

app.use(cors())
app.use(express.json())


app.use(indexRoutes)
app.use('/api', travelsRoutes)
app.use('/api', blogRoutes)
app.use('/api', utilRoutes)


app.use((req, res, next) => {
    res.status(404).json({message: 'endpoint Not found'})
})

export default app