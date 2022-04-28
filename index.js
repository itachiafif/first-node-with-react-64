const express = require('express');
const cors = require('cors');
const { query } = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const users = [
    { id: 1, name: "mohammad afif", passion: "developer", email: "afif@mail.com" },
    { id: 2, name: "akhi zhaman", passion: "study", email: "akhi@mail.com" },
    { id: 3, name: "sojib mia", passion: "player", email: "sojib@mail.com" },
    { id: 4, name: "Shole khan", passion: "Front-end", email: "sohel@mail.com" },
    { id: 5, name: "Bristy", passion: "Weather", email: "bristy@mail.com" },
]

app.get('/', (req, res) => {
    res.send('This is My first node in my carrier do')
});

app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else {
        res.send(users)
    }

});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    // const user = users[id];
    const user = users.find(u => u.id == id);
    res.send(user)
});

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user)
})

app.listen(port, () => {
    console.log('Listening this port', port);
})
