  // Ambil input dari pengguna melalui prompt
  let username;
  username = window.prompt("What's your username?");

  // Cek apakah pengguna memasukkan teks
  if (username !== null && username.trim() !== "") {
      // Tampilkan username yang dimasukkan ke dalam elemen <p> di halaman
      document.getElementById("outputText").innerHTML = "Hello, " + username + "!";
  } else {
      // Jika pengguna tidak memasukkan teks atau menekan cancel
      document.getElementById("outputText").innerHTML = "Hi Pengunjung.";
  }