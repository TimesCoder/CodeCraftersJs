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
      const dataSiswaKelas = dataSiswa.filter((item) => item.kelas === kelas);
      const table = tables[kelas];

      dataSiswaKelas.forEach((item) => {
        table.innerHTML += `
          <tr>
            <td>${item.kelas}</td>
            <td>${item.nama}</td>
            <td>${item.nisn}</td>
            <td>${item.jenisKelamin}</td>
            <td>${item.alamat}</td>
          </tr>
        `;
      });
    }

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
  } catch (error) {
    console.log('Error in ambilData', error);
  }
}

ambilData(); // Call the function to start the process

// Pencarian
const cari = document.getElementById('cari');

cari.addEventListener('keyup', (e) => {
  const value = e.target.value.toLowerCase();
  const dataSiswaX = dataSiswa.filter((item) => item.kelas === 'X');
  const dataSiswaXI = dataSiswa.filter((item) => item.kelas === 'XI');
  const dataSiswaXII = dataSiswa.filter((item) => item.kelas === 'XII');

  if (kelas.value === 'X') {
    tableX.innerHTML = `
                    <tr>
                        <th>Kelas</th>
                        <th>Nama</th>
                        <th>NISN</th>
                        <th>Jenis Kelamin</th>
                        <th>Alamat</th>
                    </tr>
                `;
    dataSiswaX.forEach((item) => {
      if (item.nama.toLowerCase().includes(value)) {
        tableX.innerHTML += `
                        <tr>
    
                            <td>${item.nama}</td>
                            <td>${item.nisn}</td>
                            <td>${item.jenisKelamin}</td>
                            <td>${item.alamat}</td>
                        </tr>
                    `;
      }
    });
  } else if (kelas.value === 'XI') {
    tableXI.innerHTML = `
                    <tr>
                        <th>Kelas</th>
                        <th>Nama</th>
                        <th>NISN</th>
                        <th>Jenis Kelamin</th>
                        <th>Alamat</th>
                    </tr>
                `;
    dataSiswaXI.forEach((item) => {
      if (item.nama.toLowerCase().includes(value)) {
        tableXI.innerHTML += `
                        <tr>
    
                            <td>${item.nama}</td>
                            <td>${item.nisn}</td>
                            <td>${item.jenisKelamin}</td>
                            <td>${item.alamat}</td>
                        </tr>
                    `;
      }
    });
  } else if (kelas.value === 'XII') {
    tableXII.innerHTML = `
                    <tr>
                        <th>Kelas</th>
                        <th>Nama</th>
                        <th>NISN</th>
                        <th>Jenis Kelamin</th>
                        <th>Alamat</th>
                    </tr>
                `;
    dataSiswaXII.forEach((item) => {
      if (item.nama.toLowerCase().includes(value)) {
        tableXII.innerHTML += `
                        <tr>
    
                            <td>${item.nama}</td>
                            <td>${item.nisn}</td>
                            <td>${item.jenisKelamin}</td>
                            <td>${item.alamat}</td>
                        </tr>
                    `;
      }
    });
  }
});
