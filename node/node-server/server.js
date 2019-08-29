const http = require('http')
const port = 3010

const server = http.createServer(function (request, response) {
    if (request.url == '/') {
        response.end('response from node server')
    }
    else if (request.url == '/about') {
        response.end('about us page')
    }
    else if (request.url == '/services') {
        response.setHeader('Content-Type', 'text/html')
        response.end('<h2>Listing Services</h2> <ul><li>App development</li><li>Mobile Develeopment</li></ul>')
    }
    else if (request.url == '/users') {
        const users = [{ id: 1, name: 'Sam' }, { id: 2, name: 'Rita' }]
        response.setHeader('Content-Type', 'application/json')
        response.end(JSON.stringify(users))
    }
    else if(request.url=='/contact'){
        response.end('contact page...')
    }
    else {
        response.end('The page you looking doesnot exist')
    }
})
server.listen(port, () => console.log('listening to port', port))