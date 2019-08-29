const express = require('express')
const app = express()
const port = 3003

app.use(express.json()) //<4.0 use bodyParser
let users = [{ id: 1, name: 'sam' }, { id: 2, name: 'suraj' }]
const customers = [{ id: 1, name: 'customer1' }, { id: 2, name: 'customer2' }]

app.get('/', function (req, res) {
    res.send('response from express server')
})

app.get('/about', function (req, res) {
    res.send('about us page')
})

app.get('/services', function (req, res) {
    res.send('<h2>Listing services</h2>')
})

app.get('/users', function (req, res) {
    res.json(users)
})

app.post('/users', function (req, res) {
    const user = req.body

    users.push(user)
    res.json({ user, notice: 'sucessfully added user' })
})

app.get('/users/:id', function (req, res) {
    const id = req.params.id
    const user = users.find(function (user) {
        return user.id == id
    })
    if (user) {
        res.json(user)
        console.log(user)
    }
    else {
        res.json({})
    }
})
app.put('/users/:id', function (req, res) {
    const id = req.params.id
    const user = users.find(function (user) {
        return user.id == id
    })
    if (user) {
        const body = req.body
        const user1 = Object.assign(user, body)
        res.json(user1)
    }
    else {
        res.json({})
    }

})
app.get('/customers', function (req, res) {
    res.json(customers)
})

app.delete('/users/:id', function (req, res) {
    const id = req.params.id
    users = users.filter(function (user) {
        return user.id != id //user.id!==Number(id)
    })
    res.json({
        notice: 'succesfully removed the record'
    })
})



app.get('/customers/:id', function (req, res) {
    const id = req.params.id
    const customer = customers.find(function (customer) {
        return customer.id == id
    })
    if (customer) {
        res.json(customer)
    }
    else {
        res.json({})
    }
})

app.get('/token', function (req, res) {
    const token = req.headers('x-auth')
    res.json(token)
})
app.use(function (req, res) {
    res.status(404).send('the page is not found')
})

app.listen(port, () => { console.log('listening at port', port) })