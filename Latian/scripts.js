document.getElementById('inputForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Ambil nilai input
    const name = document.getElementById('name').value;
    const birthdate = document.getElementById('birthdate').value;
    const address = document.getElementById('address').value;

    // Tampilkan output di halaman
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
        <h3>Hasil Input:</h3>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Tanggal Lahir:</strong> ${birthdate}</p>
        <p><strong>Alamat:</strong> ${address}</p>
    `;
});
