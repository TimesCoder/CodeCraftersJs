import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import bodyParser from 'body-parser';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const hostname = 'localhost';
const port = 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

// Middleware to log request method and path
app.use((req, res, next) => {
  console.log('Log request', req.path, req.method);
  next();
});

// Load data files json
const dataSiswaPath = __dirname + '/public/dataSiswa.json';
const dataGuruPath = __dirname + '/public/dataGuru.json';

app.get('/', (req, res) => {
  res.statusCode = 404;
  res.send('404 Not Found');
});

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

// GET method for dataGuru.html
app.get('/guru', (req, res) => {
  res.statusCode = 200;
  res.sendFile(__dirname + '/public/dataGuru.html');
});

// GET method for dataSiswa.html
app.get('/siswa', (req, res) => {
  res.statusCode = 200;
  res.sendFile(__dirname + '/public/dataSiswa.html');
});

// Read data from JSON files
const getDataFromFile = (filePath) => {
  const data = fs.readFileSync(filePath);
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
  res.json(data.find((item) => item.nisn === req.params.nisn));
});

// POST method for dataSiswa.json
app.post('/siswajson', (req, res) => {
  const newData = req.body;
  const data = getDataFromFile(dataSiswaPath);
  data.push(newData);
  writeDataToFile(dataSiswaPath, data);
  res.status(201).json({ message: 'Data added successfully' });
});

// PUT method for dataSiswa.json
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

// DELETE method for dataSiswa.json
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

// POST method for dataGuru.json
app.post('/gurujson', (req, res) => {
  const newData = req.body;
  const data = getDataFromFile(dataGuruPath);
  data.push(newData);
  writeDataToFile(dataGuruPath, data);
  res.status(201).json({ message: 'Data added successfully' });
});

// PUT method for dataGuru.json
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

// DELETE method for dataGuru.json
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

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/login`);
});
