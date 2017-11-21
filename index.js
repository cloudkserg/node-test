var express = require('express')
var app = express()


app.get('/', function (req, res) {
    return res.send('Hi, olesya')
});

app.use((req, res, err) => {
    return res.send('Forbidden');
})

app.listen(3000)
