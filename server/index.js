const app = require('express')();
const cors = require('cors');

const { readData } = require('./actions/call');

app.use(cors());

// TO DO: whitelist origins: https://expressjs.com/en/resources/middleware/cors.html

app.get('/jobs', async (req, res) => {
    const data = await readData();
    res.send(data.data.results);
})

let port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Listening on port:${port}`);
})