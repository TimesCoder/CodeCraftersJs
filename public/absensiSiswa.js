// fungsi ambilData() akan dijalankan ketika halaman di-load (lihat baris terakhir) dan akan memanggil fungsi getData() untuk mengambil data dari file dataGuru.json. Fungsi getData() akan mengembalikan data dalam bentuk array of object. Kemudian data tersebut akan diolah dan ditampilkan ke dalam tabel.
//

// Fungsi yang di lakukan di file ini adalah sama dengan file siswa.js hanya saja data yang di tampilkan berbeda yaitu data siswa yang di ambil dari file dataSiswa.json

async function getData() {
  try {
    const response = await fetch('dataSiswa.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error fetching data', error);
    throw error;
  }
}
// Fungsi untuk mengambil data siswa dan siswamenampilkan visualisasi presensi kelas
async function ambilData() {
  try {
    // Mengambil data guru secara asinkron
    const dataSiswa = await getData();

    // Objek tabel untuk berbagai kelas
    const tables = {
      X1: document.getElementById('tableX1'),
      X2: document.getElementById('tableX2'),
      X3: document.getElementById('tableX3'),
      XI1: document.getElementById('tableXI1'),
      XI2: document.getElementById('tableXI2'),
      XI3: document.getElementById('tableXI3'),
      XII1: document.getElementById('tableXII1'),
      XII2: document.getElementById('tableXII2'),
      XII3: document.getElementById('tableXII3'),
    };

    // Iterasi melalui tabel dan mengisi dengan data guru
    for (const kelas in tables) {
      const dataSiswaKelas = dataSiswa.filter((item) => item.kelas === kelas);
      const table = tables[kelas];

      table.innerHTML = `
        <tr>
          <th>Nomor</th>
          <th>Hari/Tanggal</th>
          <th>Nama</th>
          <th>NISN</th>
          <th>Jenis Kelamin</th>
          <th>Alamat</th>
          <th>Email</th>
          <th>Nomor Hp Orangtua</th>
          <th>Absen</th>
        </tr>
      `;

      dataSiswaKelas.forEach((item, index) => {
        table.innerHTML += `
          <tr>
            <td>${index + 1}</td>
            <td>${item.hari} / ${item.tanggal}</td>
            <td>${item.nama}</td>
            <td>${item.nisn}</td>
            <td>${item.jenisKelamin}</td>
            <td>${item.alamat}</td>
            <td>${item.email}</td>
            <td>${item.nomorHpOrangTua}</td>
            <td>${item.absen ? 'Hadir' : 'Tidak Hadir'}</td>
          </tr>
        `;
      });
    }

    // Menangani perubahan pilihan kelas
    const kelasSelect = document.getElementById('kelas');
    const dataSiswaElements = {
      X1: document.getElementById('dataSiswaX1'),
      X2: document.getElementById('dataSiswaX2'),
      X3: document.getElementById('dataSiswaX3'),
      XI1: document.getElementById('dataSiswaXI1'),
      XI2: document.getElementById('dataSiswaXI2'),
      XI3: document.getElementById('dataSiswaXI3'),
      XII1: document.getElementById('dataSiswaXII1'),
      XII2: document.getElementById('dataSiswaXII2'),
      XII3: document.getElementById('dataSiswaXII3'),
    };
    
    
    kelasSelect.addEventListener('change', (e) => {
      for (const kelas in dataSiswaElements) {
        dataSiswaElements[kelas].style.display =
          kelas === e.target.value ? 'block' : 'none';
      }
    });

    // Membuat fungsi search
    const searchInput = document.getElementById('cari');
    searchInput.addEventListener('keyup', (e) => {
      const keyword = e.target.value.toLowerCase();
      for (const kelas in tables) {
        const dataSiswaKelas = dataSiswa.filter((item) => item.kelas === kelas);
        const table = tables[kelas];

        table.innerHTML = `
          <tr>
            <th>Nomor</th>
            <th>Hari/Tanggal</th>
            <th>Nama</th>
            <th>NISN</th>
            <th>Jenis Kelamin</th>
            <th>Alamat</th>
            <th>Email</th>
            <th>Nomor Hp Orangtua</th>
            <th>Absen</th>
          </tr>
        `;

        dataSiswaKelas.forEach((item, index) => {
          if (
            item.nama.toLowerCase().includes(keyword) ||
            item.nisn.includes(keyword) ||
            item.alamat.toLowerCase().includes(keyword)
          ) {
            table.innerHTML += `
              <tr>
                <td>${index + 1}</td>
                <td>${item.hari} / ${item.tanggal}</td>
                <td>${item.nama}</td>
                <td>${item.nisn}</td>
                <td>${item.jenisKelamin}</td>
                <td>${item.alamat}</td>
                <td>${item.email}</td>
                <td>${item.nomorHpOrangTua}</td>
                <td>${item.absen ? 'Hadir' : 'Tidak Hadir'}</td>
              </tr>
            `;
          }
        });
      }
    });
  } catch (error) {
    console.log('Error in ambilData', error);
  }
}

ambilData(); // Call the function to start the process
