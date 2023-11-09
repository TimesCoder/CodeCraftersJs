// Memanggil data siswa dari file dataSiswa.json dengan menggunakan async await dan fetch API untuk menampilkan data siswa berdasarkan kelas yang telah dibuat
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

async function ambilData() {
  try {
    const dataSiswa = await getData();
    // Membuat Variabel uang akan menampung data siswa dengan filter getEmelentsById untuk menampilkan data siswa berdasarkan kelas
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

    // Membuat perulangan untuk menampilkan data siswa berdasarkan kelas yang telah dibuat dengan memfilter data siswa berdasarkan kelas
    for (const kelas in tables) {
      const dataSiswaKelas = dataSiswa.filter((item) => item.kelas === kelas);
      const table = tables[kelas];
      // Menampilkan data siswa berdasarkan kelas yang telah dibuat
      table.innerHTML = `
            <tr>
              <th>Nama</th>
              <th>NISN</th>
              <th>Jenis Kelamin</th>
              <th>Alamat</th>
              <th>Email</th>
              <th>Nomor Hp Orangtua</th>
            </tr>
          `;

      // menggunakan foEach untuk menampilkan data siswa berdasarkan kelas yang telah dibuat
      dataSiswaKelas.forEach((item) => {
        table.innerHTML += `
          <tr>
            <td>${item.nama}</td>
            <td>${item.nisn}</td>
            <td>${item.jenisKelamin}</td>
            <td>${item.alamat}</td>
            <td>${item.email}</td>
            <td>${item.nomorHpOrangTua}</td>
          </tr>
        `;
      });
    }

    // Membuat fungsi untuk menampilkan data siswa berdasarkan kelas yang telah dibuat ketika kelas dipilih pada select option kelas fungsi ini akan berjalan untuk menampilkan data siswa berdasarkan kelas yang dipilih dan menyembunyikan data siswa berdasarkan kelas yang tidak dipilih
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

    //
    kelasSelect.addEventListener('change', (e) => {
      for (const kelas in dataSiswaElements) {
        dataSiswaElements[kelas].style.display =
          kelas === e.target.value ? 'block' : 'none';
      }
    });

    // Membuat fungsi search untuk mencari data siswa berdasarkan nama, nisn, dan alamat
    const searchInput = document.getElementById('cari');
    searchInput.addEventListener('keyup', (e) => {
      // Membuat variabel keyword untuk menampung keyword yang diinputkan oleh pengguna
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
          // Membuat variabel dataSiswaKelas untuk menampung data siswa berdasarkan kelas yang telah dibuat dengan memfilter data siswa berdasarkan kelas
          const dataSiswaKelas = dataSiswa.filter(
            (item) => item.kelas === kelas
          );
          const table = tables[kelas];

          table.innerHTML = `
          <tr>
            <th>Nama</th>
            <th>NISN</th>
            <th>Jenis Kelamin</th>
            <th>Alamat</th>
            <th>Email</th>
            <th>Nomor HP Orang Tua</th>
          </tr>
        `;

          dataSiswaKelas.forEach((item) => {
            if (
              item.nama.toLowerCase().includes(keyword) ||
              item.nisn.includes(keyword) ||
              item.alamat.toLowerCase().includes(keyword)
            ) {
              table.innerHTML += `
              <tr>
                <td>${item.nama}</td>
                <td>${item.nisn}</td>
                <td>${item.jenisKelamin}</td>
                <td>${item.alamat}</td>
                <td>${item.email}</td>
                <td>${item.nomorHpOrangTua}</td>
              </tr>
            `;
            }
          });
        }

        // Jika pencarian selesai, kembalikan tampilan awal tabel siswa berdasarkan kelas yang telah dibuat
        else if (keyword === '') {
          const dataSiswaKelasAwal = dataSiswa.filter(
            (item) => item.kelas === kelas
          );
          dataSiswaKelasAwal.forEach((item) => {
            table.innerHTML += `
              <tr>
                <td>${item.nama}</td>
                <td>${item.nisn}</td>
                <td>${item.jenisKelamin}</td>
                <td>${item.alamat}</td>
                <td>${item.email}</td>
                <td>${item.nomorHpOrangTua}</td>
              </tr>
            `;
          });
        }
      }
    });
  } catch (error) {
    console.log('Error in ambilData', error);
  }
}

ambilData(); // Call the function to start the process
