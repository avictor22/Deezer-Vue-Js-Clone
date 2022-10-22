import Fastify from 'fastify'
import cors from '@fastify/cors'
import got from 'got'

// Initialisation de Fastify
const app = Fastify()

// Configuration du CORS
app.register(
	cors,{
	origin: true,
})

// Mise en place de routes

// Recuperer 20 Chansons
app.get('/playlists', async (request, reply) => {
	const response = await got('https://api.deezer.com/chart/0/playlists?limit=20')
	reply.send(response.body)
})

// Recuperer chanson via son id
app.get('/playlists/:id', async (request, reply) => {
	const response = await got(`https://api.deezer.com/playlist/${request.params.id}`)
	reply.send(response.body)
})

// Port de connexion
await app.listen({ port: 8000 })