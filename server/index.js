const express = require('express');
const cors = require('cors');
const app = express();
const weatherRoutes = require('./routes/weather');
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use('/api/weather', weatherRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));