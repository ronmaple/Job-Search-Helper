const app = require('express')();
const { readData } = require('./actions/call');


app.get('/jobs', async (req, res) => {
    const data = await readData();
    res.send(data.data.results);
})

let port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Listening on port:${port}`);
})