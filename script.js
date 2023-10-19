// function untuk menampilkan data siswa
const dataSiswa = [
  // Data kelas X
  {
    kelas: 'X',
    nama: 'Budi',
    nisn: '987654321',
    jenisKelamin: 'Laki-laki',
    alamat: 'Jalan Anggrek',
  },
  {
    kelas: 'X',
    nama: 'Siti',
    nisn: '987654322',
    jenisKelamin: 'Perempuan',
    alamat: 'Jalan Melati',
  },
  {
    kelas: 'X',
    nama: 'Dewi',
    nisn: '987654323',
    jenisKelamin: 'Perempuan',
    alamat: 'Jalan Mawar',
  },
  {
    kelas: 'X',
    nama: 'Adi',
    nisn: '987654324',
    jenisKelamin: 'Laki-laki',
    alamat: 'Jalan Teratai',
  },
  {
    kelas: 'X',
    nama: 'Eka',
    nisn: '987654325',
    jenisKelamin: 'Perempuan',
    alamat: 'Jalan Kamboja',
  },
  {
    kelas: 'X',
    nama: 'Firman',
    nisn: '987654326',
    jenisKelamin: 'Laki-laki',
    alamat: 'Jalan Dahlia',
  },
  {
    kelas: 'X',
    nama: 'Rina',
    nisn: '987654327',
    jenisKelamin: 'Perempuan',
    alamat: 'Jalan Kenanga',
  },
  {
    kelas: 'X',
    nama: 'Agus',
    nisn: '987654328',
    jenisKelamin: 'Laki-laki',
    alamat: 'Jalan Anggrek',
  },
  {
    kelas: 'X',
    nama: 'Sari',
    nisn: '987654329',
    jenisKelamin: 'Perempuan',
    alamat: 'Jalan Kamboja',
  },
  {
    kelas: 'X',
    nama: 'Ade',
    nisn: '987654330',
    jenisKelamin: 'Laki-laki',
    alamat: 'Jalan Mawar',
  },

  // Data Kelas XI
  {
    kelas: 'XI',
    nama: 'Rini',
    nisn: '987654331',
    jenisKelamin: 'Perempuan',
    alamat: 'Jalan Cempaka',
  },
  {
    kelas: 'XI',
    nama: 'Fauzan',
    nisn: '987654332',
    jenisKelamin: 'Laki-laki',
    alamat: 'Jalan Melati',
  },
  {
    kelas: 'XI',
    nama: 'Dita',
    nisn: '987654333',
    jenisKelamin: 'Perempuan',
    alamat: 'Jalan Teratai',
  },
  {
    kelas: 'XI',
    nama: 'Aldi',
    nisn: '987654334',
    jenisKelamin: 'Laki-laki',
    alamat: 'Jalan Dahlia',
  },
  {
    kelas: 'XI',
    nama: 'Nina',
    nisn: '987654335',
    jenisKelamin: 'Perempuan',
    alamat: 'Jalan Anggrek',
  },
  {
    kelas: 'XI',
    nama: 'Joni',
    nisn: '987654336',
    jenisKelamin: 'Laki-laki',
    alamat: 'Jalan Kamboja',
  },
  {
    kelas: 'XI',
    nama: 'Eko',
    nisn: '987654337',
    jenisKelamin: 'Laki-laki',
    alamat: 'Jalan Kenanga',
  },
  {
    kelas: 'XI',
    nama: 'Rina',
    nisn: '987654338',
    jenisKelamin: 'Perempuan',
    alamat: 'Jalan Melati',
  },
  {
    kelas: 'XI',
    nama: 'Sari',
    nisn: '987654339',
    jenisKelamin: 'Perempuan',
    alamat: 'Jalan Cempaka',
  },
  {
    kelas: 'XI',
    nama: 'Doni',
    nisn: '987654340',
    jenisKelamin: 'Laki-laki',
    alamat: 'Jalan Teratai',
  },

  // Data kelas XII
  {
    kelas: 'XII',
    nama: 'Dewi',
    nisn: '987654341',
    jenisKelamin: 'Perempuan',
    alamat: 'Jalan Melati',
  },
  {
    kelas: 'XII',
    nama: 'Rudi',
    nisn: '987654342',
    jenisKelamin: 'Laki-laki',
    alamat: 'Jalan Teratai',
  },
  {
    kelas: 'XII',
    nama: 'Rina',
    nisn: '987654343',
    jenisKelamin: 'Perempuan',
    alamat: 'Jalan Kenanga',
  },
  {
    kelas: 'XII',
    nama: 'Budi',
    nisn: '987654344',
    jenisKelamin: 'Laki-laki',
    alamat: 'Jalan Melati',
  },
  {
    kelas: 'XII',
    nama: 'Siti',
    nisn: '987654345',
    jenisKelamin: 'Perempuan',
    alamat: 'Jalan Dahlia',
  },
  {
    kelas: 'XII',
    nama: 'Fauzan',
    nisn: '987654346',
    jenisKelamin: 'Laki-laki',
    alamat: 'Jalan Teratai',
  },
  {
    kelas: 'XII',
    nama: 'Dita',
    nisn: '987654347',
    jenisKelamin: 'Perempuan',
    alamat: 'Jalan Cempaka',
  },
  {
    kelas: 'XII',
    nama: 'Adi',
    nisn: '987654348',
    jenisKelamin: 'Laki-laki',
    alamat: 'Jalan Anggrek',
  },
  {
    kelas: 'XII',
    nama: 'Eka',
    nisn: '987654349',
    jenisKelamin: 'Perempuan',
    alamat: 'Jalan Teratai',
  },
  {
    kelas: 'XII',
    nama: 'Doni',
    nisn: '987654350',
    jenisKelamin: 'Laki-laki',
    alamat: 'Jalan Cempaka',
  },
];

const tableX = document.getElementById('tableX');
const tableXI = document.getElementById('tableXI');
const tableXII = document.getElementById('tableXII');

const dataSiswaX = dataSiswa.filter((item) => item.kelas === 'X');
const dataSiswaXI = dataSiswa.filter((item) => item.kelas === 'XI');
const dataSiswaXII = dataSiswa.filter((item) => item.kelas === 'XII');

dataSiswaX.forEach((item) => {
  tableX.innerHTML += `
            <tr>
                <td>${item.kelas}</td>
                <td>${item.nama}</td>
                <td>${item.nisn}</td>
                <td>${item.jenisKelamin}</td>
                <td>${item.alamat}</td>
            </tr>
        `;
});

dataSiswaXI.forEach((item) => {
  tableXI.innerHTML += `
            <tr>
                <td>${item.kelas}</td>
                <td>${item.nama}</td>
                <td>${item.nisn}</td>
                <td>${item.jenisKelamin}</td>
                <td>${item.alamat}</td>
            </tr>
        `;
});

dataSiswaXII.forEach((item) => {
  tableXII.innerHTML += `
            <tr>
                <td>${item.kelas}</td>
                <td>${item.nama}</td>
                <td>${item.nisn}</td>
                <td>${item.jenisKelamin}</td>
                <td>${item.alamat}</td>
            </tr>
        `;
});

const kelas = document.getElementById('kelas');
const dataSiswaXElement = document.getElementById('dataSiswaX');
const dataSiswaXIElement = document.getElementById('dataSiswaXI');
const dataSiswaXIIElement = document.getElementById('dataSiswaXII');

kelas.addEventListener('change', (e) => {
  if (e.target.value === 'X') {
    dataSiswaXElement.style.display = 'block';
    dataSiswaXIElement.style.display = 'none';
    dataSiswaXIIElement.style.display = 'none';
  } else if (e.target.value === 'XI') {
    dataSiswaXElement.style.display = 'none';
    dataSiswaXIElement.style.display = 'block';
    dataSiswaXIIElement.style.display = 'none';
  } else if (e.target.value === 'XII') {
    dataSiswaXElement.style.display = 'none';
    dataSiswaXIElement.style.display = 'none';
    dataSiswaXIIElement.style.display = 'block';
  }
});

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
                        <td>${item.kelas}</td>
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
                        <td>${item.kelas}</td>
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
                        <td>${item.kelas}</td>
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
