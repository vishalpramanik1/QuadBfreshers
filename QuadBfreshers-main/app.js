const express = require('express');
const axios = require('axios');
const app = express();

app.set('view engine', 'ejs')


let ticketsData = {};
// Fetch data from API and store in JSON object
axios.get('https://api.wazirx.com/api/v2/tickers')
    .then(response => {
        ticketsData = Object.values(response.data).slice(0, 10); // Get top 10 results
    })
    .catch(error => console.error(error));

app.get('/', (req, res) => {
    res.render('pages/index', { tickets: ticketsData })
})
app.listen(3000, () => console.log('Server running on port 3000'));
