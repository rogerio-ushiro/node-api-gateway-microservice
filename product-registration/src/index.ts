import fastify from 'fastify'

const server = fastify()

server.get('/products', async (request, reply) => {
    reply
        .code(200)
        .header('Content-Type', 'application/json; charset=utf-8')
        .send({ message: 'Product Fastify Server' })
})

server.listen({ port: 8081 }, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Fastify Server - product registration - listening at ${address}`)
})