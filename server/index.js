const app = require('express')();
const cors = require('cors');

const { readData } = require('./actions/call');

app.use(cors());

// TO DO: whitelist origins: https://expressjs.com/en/resources/middleware/cors.html

// TODO change to post, body parser for search input parameters
app.get('/jobs', async (req, res) => {
    const { data: { results } } = await readData();

    const shaped = results.map(({ title, company, created, description, id }) => {
        return {
            title,
            company: company.display_name,
            created,
            description,
            id: Number(id)
        }
    })
    res.send(shaped)
})

let port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Listening on port:${port}`);
})