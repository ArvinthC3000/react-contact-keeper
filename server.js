const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const path = require('path');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.use(cors());

/* Don't uncomment below line in preoduction */
app.get('/', (req, res) => res.json({ msg: `Welcome to contact keeper API` }));

// Routes
app.use('/api', require('./routes'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get(
    '/*',
    (req, res) =>
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')),
    next()
  );
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
