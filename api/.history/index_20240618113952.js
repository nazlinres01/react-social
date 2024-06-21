const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// MongoDB bağlantısı
mongoose.connect('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('MongoDB bağlantısı başarılı.');
});

// Middleware
app.use(express.json());

// Basit bir route
app.get('/', (req, res) => {
  res.send('Merhaba, Express ve MongoDB!');
});

// Sunucuyu başlatma
app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} adresinde çalışıyor.`);
});
