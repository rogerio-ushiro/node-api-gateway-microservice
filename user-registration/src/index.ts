import express from 'express'
import { Router, Request, Response, NextFunction } from 'express';
const route = Router()
const port = 8080;

var app = express()
app.use(express.json())

app.use("/users", (req: Request, res: Response) => {
    res.send({ message: 'Product Fastify Server' })
})

app.use(route)

app.listen(port, () => console.log(`Express.js Server - user registration - listening at ${port}`));