const express = require('express');

const app = express();

app.get('/', (req, res) => res.json({ msg: `Welcome to contact keeper API` }));

// Routes
app.use('/api', require('./routes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
