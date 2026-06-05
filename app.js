const athletes = [
  { nama: "Rizky Ramadhan", gender: "Laki-laki", umur: 20 },
  { nama: "Alya Sabrina Putri", gender: "Perempuan", umur: 22 },
  { nama: "Siti Nurhaliza Kusuma", gender: "Perempuan", umur: 19 },
  { nama: "Daffa Arya Putra", gender: "Laki-laki", umur: 24 },
  { nama: "Amanda Citra Dewi", gender: "Perempuan", umur: 25 },
  { nama: "Farel Prayoga", gender: "Laki-laki", umur: 18 },
  { nama: "Nabila Syakieb Putri", gender: "Perempuan", umur: 21 },
  { nama: "Bintang Ramadhan", gender: "Laki-laki", umur: 23 },
  { nama: "Keysha Aurelia", gender: "Perempuan", umur: 19 },
  { nama: "Arif Rahman Hakim", gender: "Laki-laki", umur: 25 },
  { nama: "Tiara Andini", gender: "Perempuan", umur: 22 },
  { nama: "Gavin Mahardika", gender: "Laki-laki", umur: 20 },
  { nama: "Syifa Hadju Lestari", gender: "Perempuan", umur: 24 },
  { nama: "Aditya Prasetyo", gender: "Laki-laki", umur: 18 },
  { nama: "Chelsea Olivia Wijaya", gender: "Perempuan", umur: 23 }
];

const tbody =
document.querySelector("#assessmentTable tbody");

athletes.forEach((athlete) => {

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${athlete.nama}</td>

        <td>
            <input type="number"
                   class="vo2"
                   min="0"
                   max="100">
        </td>

        <td>
            <input type="number"
                   class="strength"
                   min="0"
                   max="100">
        </td>

        <td>
            <input type="number"
                   class="agility"
                   min="0"
                   max="100">
        </td>

        <td>
            <input type="number"
                   class="speed"
                   step="0.01">
        </td>
    `;

    tbody.appendChild(row);

});
