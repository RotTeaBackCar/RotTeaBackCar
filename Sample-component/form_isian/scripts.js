document.getElementById("dataForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah pengiriman form yang default

    // Mengambil data dari form
    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Menampilkan data di area output
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `
        <h2>Data yang Dimasukkan:</h2>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Tanggal Lahir:</strong> ${dob}</p>
        <p><strong>Jenis Kelamin:</strong> ${gender}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Pesan:</strong> ${message}</p>
    `;
    outputDiv.style.display = "block"; // Menampilkan area output
});