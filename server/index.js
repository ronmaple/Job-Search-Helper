const app = require('express')();
const { readData } = require('./actions/call');


app.get('/', (req, res) => {
    const data = readData();

    console.log(data);
    res.send('/');
})

let port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Listening on port:${port}`);
})