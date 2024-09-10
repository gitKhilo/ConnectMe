const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'secretKey',
    resave: false,
    saveUninitialized: true,
}));

// Simple user storage
const users = [];
const messages = [];

// Routes
app.get('/', (req, res) => {
    if (req.session.user) {
        res.redirect('/messages');
    } else {
        res.redirect('/login');
    }
});

// Signup
app.get('/signup', (req, res) => {
    res.sendFile(__dirname + '/views/signup.html');
});

app.post('/signup', (req, res) => {
    const { username, password } = req.body;
    users.push({ username, password });
    req.session.user = username;
    res.redirect('/messages');
});

// Login
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/login.html');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        req.session.user = username;
        res.redirect('/messages');
    } else {
        res.send('Invalid credentials. <a href="/login">Try again</a>');
    }
});

// Messages
app.get('/messages', (req, res) => {
    if (!req.session.user) {
        res.redirect('/login');
        return;
    }
    res.sendFile(__dirname + '/views/messages.html');
});

app.post('/messages', (req, res) => {
    if (!req.session.user) {
        res.redirect('/login');
        return;
    }
    const { message } = req.body;
    messages.push({ user: req.session.user, message });
    res.redirect('/messages');
});

// Logout
app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

// Start server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
