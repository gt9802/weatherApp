const express = require('express');
const axios = require('axios');
const router = express.Router();


router.get('/', async (req,res) => {
    try{
        const {location} = req.query;
        const apiKey = 'a1439a5670ffcdee6f81d8a0d44487a2';
        const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apiKey}`;

        const response = await axios.get(apiUrl);
        const weatherData = response.data;

        res.json(weatherData);

    }catch(error) {
        console.log(error);
        res.status(500).json({error: "error fetching weather data"})
    }
});

module.exports = router;