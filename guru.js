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
        XII1: document.getElementById('tableXII1'),
        XII2: document.getElementById('tableXII2'),
        XII3: document.getElementById('tableXII3'),
      };
  
      for (const kelas in tables) {
        const dataGuruKelas = dataGuru.filter((item) => item.kelas === kelas);
        const table = tables[kelas];
  
        table.innerHTML = `
          <tr>
            <th>Kelas</th>
            <th>Nama</th>
            <th>NIP</th>
            <th>No HP</th>
            <th>Jenis Kelamin</th>
            <th>Bidang Study</th>
            <th>Wali Kelas</th>
          </tr>
        `;
  
        dataGuruKelas.forEach((item) => {
          table.innerHTML += `
            <tr>
              <td>${item.kelas}</td>
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
      const dataGuruFiltered = dataGuru.filter((item) => {
        return (
          item.nama.toLowerCase().includes(keyword) ||
          item.nip.toLowerCase().includes(keyword) ||
          item.bidangStudy.toLowerCase().includes(keyword)
        );
      });
      const dataGuruElemet = {
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

      for (const kelas in dataGuruElemet) {
        dataGuruElemet[kelas].innerHTML = '';
        const dataGuruKelas = dataGuruFiltered.filter(
          (item) => item.kelas === kelas
        );

        dataGuruKelas.forEach((item) => {
          dataGuruElemet[kelas].innerHTML += `
            Data guru ditemukan
            <br>
            <table border = "1">
            <tr>
              <th>Kelas</th>
              <th>Nama</th>
              <th>Nip</th>
              <th>No Hp</th>
              <th>Jenis Kelamin</th>
              <th>Bidang Study</th>
              <th>Wali Kelas</th>
            </tr>
            <tr>
              <td>${item.kelas}</td>
              <td>${item.nama}</td>
              <td>${item.nip}</td>
              <td>${item.noHp}</td>
              <td>${item.jenisKelamin}</td>
              <td>${item.bidangStudy}</td>
              <td>${item.waliKelas ? 'Ya' : 'Tidak'}</td>
              </tr>
            </table>`;
        });
      }
    });
  } catch (error) {
    console.log('Error in ambilData', error);
  }
}
  
  ambilData(); // Panggil fungsi untuk memulai proses
  