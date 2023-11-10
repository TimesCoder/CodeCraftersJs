import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import bodyParser from 'body-parser';
import fs from 'fs';
import middlewareLogsRequest from './middleware/logs.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const hostname = 'localhost';
const port = 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

// Middleware to log request method and path
app.use(middlewareLogsRequest);

// Load data files json
const dataSiswaPath = __dirname + '/public/dataSiswa.json';
const dataGuruPath = __dirname + '/public/dataGuru.json';

// Method for root path '/' Error 404
app.get('/', (req, res) => {
  res.statusCode(404).send('404 Not Found');
});

// Method for static files
app.use(express.static(__dirname + '/public'));

// GET method for login.html
app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/public/login.html');
});

// GET method for registrasi.html
app.get('/register', (req, res) => {
  res.sendFile(__dirname + '/public/registrasi.html');
});

// GET method for home.html
app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// GET method for absensiSiswa.html
app.get('/absensi', (req, res) => {
  res.sendFile(__dirname + '/public/absensiGuru.html');
});

// GET method for dataGuru.html
app.get('/guru', (req, res) => {
  res.sendFile(__dirname + '/public/dataGuru.html');
});

// GET method for dataSiswa.html
app.get('/siswa', (req, res) => {
  res.sendFile(__dirname + '/public/dataSiswa.html');
});

// Read data from JSON files
const getDataFromFile = (filePath) => {
  // membuat variabel untuk menyimpan data json yang sudah di parse
  const data = fs.readFileSync(filePath);
  // Mengembalikan atau mengirim data ke dalam variabel data
  return JSON.parse(data);
};

// Write data to JSON files
const writeDataToFile = (filePath, data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

// GET method for dataSiswa.json
app.get('/siswajson', (req, res) => {
  const data = getDataFromFile(dataSiswaPath);
  res.json(data);
});

app.get('/siswajson/:nisn', (req, res) => {
  const data = getDataFromFile(dataSiswaPath);
  // Mengembalikan data json dengan mencari dan menguraikan peritem apakah nisn yang ada di data json sama dengan yang di minta oleh pengguna
  res.json(data.find((item) => item.nisn === req.params.nisn));
});

// POST method for dataSiswa.json
app.post('/siswajson', (req, res) => {
  // Membuat variabel untuk menampung permintaan penambahan data di body dengan req.body
  const newData = req.body;
  const data = getDataFromFile(dataSiswaPath);
  // mengirimkan newData yang baru dibuat ke dalam data menggunakan push
  data.push(newData);
  // Kemudian data akan dibaca ketika berhasil menampilkan bahwa data berhasi ditambahkan
  writeDataToFile(dataSiswaPath, data);
  res.status(201).json({ message: 'Data added successfully' });
});

// PUT method for dataSiswa.json berdasarkan nisn
app.put('/siswajson/:nisn', (req, res) => {
  const nisn = req.params.nisn;
  const updatedData = req.body;
  const data = getDataFromFile(dataSiswaPath);
  const dataIndex = data.findIndex((item) => item.nisn === nisn);

  if (dataIndex !== -1) {
    data[dataIndex] = { ...data[dataIndex], ...updatedData };
    writeDataToFile(dataSiswaPath, data);
    res.json({ message: 'Data updated successfully' });
  } else {
    res.status(404).json({ message: 'Data not found' });
  }
});

// DELETE method for dataSiswa.json berdasarkan nisn
app.delete('/siswajson/:nisn', (req, res) => {
  const nisn = req.params.nisn;
  const data = getDataFromFile(dataSiswaPath);
  const newData = data.filter((item) => item.nisn !== nisn);
  if (data.length !== newData.length) {
    writeDataToFile(dataSiswaPath, newData);
    res.json({ message: 'Data deleted successfully' });
  } else {
    res.status(404).json({ message: 'Data not found' });
  }
});

// GET method for dataGuru.json
app.get('/gurujson', (req, res) => {
  const data = getDataFromFile(dataGuruPath);
  res.json(data);
});

// GET method for dataGuru.json berdasarkan nip
app.get('/gurujson/:nip', (req, res) => {
  const data = getDataFromFile(dataGuruPath);
  res.json(data.find((item) => item.nip === req.params.nip));
});

// POST method for dataGuru.json
app.post('/gurujson', (req, res) => {
  const newData = req.body;
  const data = getDataFromFile(dataGuruPath);
  data.push(newData);
  writeDataToFile(dataGuruPath, data);
  res.status(201).json({ message: 'Data added successfully' });
});

// PUT method for dataGuru.json berdasarkan nip
app.put('/gurujson/:nip', (req, res) => {
  const nip = req.params.nip;
  const updatedData = req.body;
  const data = getDataFromFile(dataGuruPath);
  const dataIndex = data.findIndex((item) => item.nip === nip);

  if (dataIndex !== -1) {
    data[dataIndex] = { ...data[dataIndex], ...updatedData };
    writeDataToFile(dataGuruPath, data);
    res.json({ message: 'Data updated successfully' });
  } else {
    res.status(404).json({ message: 'Data not found' });
  }
});

// DELETE method for dataGuru.json berdasarkan nip
app.delete('/gurujson/:nip', (req, res) => {
  const nip = req.params.nip;
  const data = getDataFromFile(dataGuruPath);
  const newData = data.filter((item) => item.nip !== nip);
  if (data.length !== newData.length) {
    writeDataToFile(dataGuruPath, newData);
    res.json({ message: 'Data deleted successfully' });
  } else {
    res.status(404).json({ message: 'Data not found' });
  }
});

// GET method for absensiSiswa.html
app.get('/absensiSiswa', (req, res) => {
  res.sendFile(__dirname + '/public/absensiSiswa.html');
});

app.get('/absensiSiswa/:nisn', (req, res) => {
  const data = getDataFromFile(dataSiswaPath);
  res.json(data.find((item) => item.nisn === req.params.nisn));
});

// PUT method for absensiSiswa.html
app.put('/absensiSiswa/:nisn', (req, res) => {
  const nisn = req.params.nisn;
  const updatedData = req.body;
  const data = getDataFromFile(dataSiswaPath);
  const dataIndex = data.findIndex((item) => item.nisn === nisn);

  if (dataIndex !== -1) {
    data[dataIndex] = { ...data[dataIndex], ...updatedData };
    writeDataToFile(dataSiswaPath, data);
    res.json({ message: 'Data updated successfully' });
  } else {
    res.status(404).json({ message: 'Data not found' });
  }
});

// GET method for absensiGuru.html
app.get('/absensiGuru', (req, res) => {
  res.sendFile(__dirname + '/public/absensiGuru.html');
});

app.get('/absensiGuru/:nip', (req, res) => {
  const data = getDataFromFile(dataGuruPath);
  res.json(data.find((item) => item.nip === req.params.nip));
});

// PUT method for absensiGuru.html
app.put('/absensiGuru/:nip', (req, res) => {
  const nip = req.params.nip;
  const updatedData = req.body;
  const data = getDataFromFile(dataGuruPath);
  const dataIndex = data.findIndex((item) => item.nip === nip);

  if (dataIndex !== -1) {
    data[dataIndex] = { ...data[dataIndex], ...updatedData };
    writeDataToFile(dataGuruPath, data);
    res.json({ message: 'Data updated successfully' });
  } else {
    res.status(404).json({ message: 'Data not found' });
  }
});

// GET method for about.html
app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/public/about.html');
});

// GET method for kepalaSekolah.html
app.get('/kepalaSekolah', (req, res) => {
  res.sendFile(__dirname + '/public/kepalaSekolah.html');
});

// Start server
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/register`);
});
