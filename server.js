const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.use(cors());

app.get('/', (req, res) => res.json({ msg: `Welcome to contact keeper API` }));

// Routes
app.use('/api', require('./routes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
