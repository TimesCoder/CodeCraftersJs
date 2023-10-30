async function getData() {
    try {
      const response = await fetch('absensi.json');
      const data = await response.json();
      return data;
    } catch (error) {
      console.log('Error fetching data', error);
      throw error;
    }
  }
  

  async function ambilData() {
    try {
      const dataGuru = await getData();
  
      const tables = {
        X1: document.getElementById('tableX1'),
        X2: document.getElementById('tableX2'),
        X3: document.getElementById('tableX3'),
        XI1: document.getElementById('tableXI1'),
        XI2: document.getElementById('tableXI2'),
        XI3: document.getElementById('tableXI3'),
        XII1: document.getElementById('tableXII2'),
        XII3: document.getElementById('tableXII1'),
        XII2: document.getElementById('tableXII3'),
      };
  
      for (const kelas in tables) {
        const dataGuruKelas = dataGuru.filter((item) => item.kelas === kelas);
        const table = tables[kelas];
  
        table.innerHTML = `
            <tr>
              <th>Nomor</th>
              <th>Hari/Tanggal</th>
              <th>NIP</th>
              <th>Nama</th>
              <th>Kelas</th>
              <th>Absen</th>
              <th>Edit</th>
            </tr>
          `;
  
        dataGuruKelas.forEach((item, index) => {
          table.innerHTML += `
              <tr>
                <td>${index + 1}</td>
                <td>${item.hari} / ${item.tanggal}</td>
                <td>${item.nip}</td>
                <td>${item.nama}</td>
                <td>${item.kelas}</td>
                <td>${item.absen}</td>
                <td><button class="edit-button">Edit</button></td>
              </tr>
            `;
        });
      }
  
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
          const dataGuruKelas = dataGuru.filter((item) => item.kelas === kelas);
          const table = tables[kelas];
  
          table.innerHTML = `
              <tr>
                <th>Nomor</th>
                <th>Hari/Tanggal</th>
                <th>NIP</th>
                <th>Nama</th>
                <th>Kelas</th>
                <th>Absen</th>
                <th>Edit</th>
              </tr>
            `;
  
          dataGuruKelas.forEach((item, index) => {
            if (
              item.nama.toLowerCase().includes(keyword) ||
              item.nip.includes(keyword)
            ) {
              table.innerHTML += `
                <tr>
                  <td>${index + 1}</td>
                  <td>${item.hari} / ${item.tanggal}</td>
                  <td>${item.nip}</td>
                  <td>${item.nama}</td>
                  <td>${item.kelas}</td>
                  <td>${item.absen}</td>
                  <td><button class="edit-button">Edit</button></td>
                </tr>
              `;
            }
          });
  
          // Jika keyword kosong, maka tampilkan semua data
          if (keyword === '') {
            const dataGuruKelasAwal = dataGuru.filter((item) => item.kelas === kelas);
            dataGuruKelasAwal.forEach((item, index) => {
              table.innerHTML += `
                <tr>
                  <td>${index + 1}</td>
                  <td>${item.hari} / ${item.tanggal}</td>
                  <td>${item.nip}</td>
                  <td>${item.nama}</td>
                  <td>${item.kelas}</td>
                  <td>${item.absen}</td>
                  <td><button class="edit-button">Edit</button></td>
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
  
  ambilData();
