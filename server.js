import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const hostname = 'localhost';
const port = 3000;

app.use(express.static(__dirname + '/public'));

app.get('/login', (req, res) => {
  res.statusCode = 200;
  res.sendFile(__dirname + '/public/login.html');
});

app.get('/register', (req, res) => {
  res.statusCode = 200;
  res.sendFile(__dirname + '/public/registrasi.html');
});

app.get('/home', (req, res) => {
  res.statusCode = 200;
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/guru', (req, res) => {
  res.statusCode = 200;
  res.sendFile(__dirname + '/public/dataGuru.html');
});

app.get('/siswa', (req, res) => {
  res.statusCode = 200;
  res.sendFile(__dirname + '/public/dataSiswa.html');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
