// Fungsi yang di lakukan di file ini adalah sama dengan file siswa.js hanya saja data yang di tampilkan berbeda yaitu data guru yang di ambil dari file dataGuru.json
async function getData() {
  try {
    const response = await fetch('dataGuru.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error fetching data', error);
    throw error;
  }
}

// Fungsi untuk mengambil data guru dan siswamenampilkan visualisasi presensi kelas
async function ambilData() {
  try {
    // Mengambil data guru secara asinkron
    const dataGuru = await getData();

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
      const dataGuruKelas = dataGuru.filter((item) => item.kelas === kelas);
      const table = tables[kelas];

      table.innerHTML = `
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>NIP</th>
            <th>No HP</th>
            <th>Jenis Kelamin</th>
            <th>Bidang Study</th>
            <th>Wali Kelas</th>
          </tr>
        `;

      dataGuruKelas.forEach((item, index) => {
        table.innerHTML += `
            <tr>
              <td>${index + 1}</td>
              <td>${item.nama}</td>
              <td>${item.nip}</td>
              <td>${item.noHp}</td>
              <td>${item.jenisKelamin}</td>
              <td>${item.bidangStudy}</td>
              <td>${item.waliKelas ? 'Ya' : 'Tidak'}</td>
            </tr>
          `;
      });
    }

    // Menangani perubahan pilihan kelas
    const kelasSelect = document.getElementById('kelas');
    const dataGuruElement = {
      X1: document.getElementById('dataGuruX1'),
      X2: document.getElementById('dataGuruX2'),
      X3: document.getElementById('dataGuruX3'),
      XI1: document.getElementById('dataGuruXI1'),
      XI2: document.getElementById('dataGuruXI2'),
      XI3: document.getElementById('dataGuruXI3'),
      XII1: document.getElementById('dataGuruXII1'),
      XII2: document.getElementById('dataGuruXII2'),
      XII3: document.getElementById('dataGuruXII3'),
    };

    kelasSelect.addEventListener('change', (e) => {
      for (const kelas in dataGuruElement) {
        dataGuruElement[kelas].style.display =
          kelas === e.target.value ? 'block' : 'none';
      }
    });

    // Membuat fungsi search
    const searchInput = document.getElementById('cari');
    searchInput.addEventListener('keyup', (e) => {
      const keyword = e.target.value.toLowerCase();
      for (const kelas in tables) {
        if (
          kelas === 'X1' ||
          kelas === 'X2' ||
          kelas === 'X3' ||
          kelas === 'XI1' ||
          kelas === 'XI2' ||
          kelas === 'XI3' ||
          kelas === 'XII1' ||
          kelas === 'XII2' ||
          kelas === 'XII3'
        ) {
          const dataGuruKelas = dataGuru.filter((item) => item.kelas === kelas);
          const table = tables[kelas];
          table.innerHTML = `
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Nip</th>
              <th>No Hp</th>
              <th>Jenis Kelamin</th>
              <th>Bidang Study</th>
              <th>Wali Kelas</th>
            </tr>`;

          dataGuruKelas.forEach((item, index) => {
            if (
              item.nama.toLowerCase().includes(keyword) ||
              item.nip.includes(keyword) ||
              item.noHp.toLowerCase().includes(keyword)
            ) {
              table.innerHTML += `
              <tr>
                <td>${index + 1}</td>
                <td>${item.nama}</td>
                <td>${item.nip}</td>
                <td>${item.noHp}</td>
                <td>${item.jenisKelamin}</td>
                <td>${item.bidangStudy}</td>
                <td>${item.waliKelas ? 'Ya' : 'Tidak'}</td>
              </tr>`;
            }
          });
        }

        // Jika keyword kosong, maka tampilkan semua data
        else if (keyword === '') {
          const dataGuruKelasAwal = dataGuru.filter(
            (item) => item.kelas === kelas
          );
          dataGuruKelasAwal.forEach((item, index) => {
            table.innerHTML += `
            <tr>
              <td>${index + 1}</td>
              <td>${item.nama}</td>
              <td>${item.nip}</td>
              <td>${item.noHp}</td>
              <td>${item.jenisKelamin}</td>
              <td>${item.bidangStudy}</td>
              <td>${item.waliKelas ? 'Ya' : 'Tidak'}</td>
            </tr>`;
          });
        }
      }
    });
  } catch (error) {
    console.log('Error in ambilData', error);
  }
}

ambilData(); // Panggil fungsi untuk memulai proses
