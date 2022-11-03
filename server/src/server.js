const http = require('http');
const PORT = 8088
const app = require('./app')

const { loadPlanetsData } = require('./models/planets.model')

const server = http.createServer(app);

const startFunction=async()=>{
    await loadPlanetsData()
}

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})
startFunction()
