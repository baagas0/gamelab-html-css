function gameLab(bil) {
    if (bil % 3 === 0 && bil % 5 === 0) {
      return "gamelab indonesia";
    } else if (bil % 5 === 0) {
      return "gamelab";
    } else if (bil % 3 === 0) {
      return "game";
    } else {
      return "game";
    }
  }
  
  function generateSequence(n) {
    let sequence = '';
    let gamelabIndonesiaCount = 0; // Menghitung jumlah "gamelab indonesia"
    let gamelabCount = 0; // Menghitung jumlah "gamelab"
    let gameCount = 0; // Menghitung jumlah "game"
    for (let i = 1; i <= n; i++) {
      let result = gameLab(i);
      if (result === "gamelab indonesia") {
        if (gamelabIndonesiaCount < 1) {
          sequence += result + ' ';
          gamelabIndonesiaCount++;
        }
      } else if (result === "gamelab") {
        if (gamelabCount < 2) {
          sequence += result + ' ';
          gamelabCount++;
        }
      } else if (result === "game") {
        sequence += result + ' ';
        gameCount++;
      }
    }
    return sequence.trim();
  }
  
  // Contoh pengujian
  const ujiPertama = generateSequence(5);
  console.log("hasil uji pertama adalah");
  console.log(ujiPertama);
  
  const ujiKedua = generateSequence(12); // Ubah jumlah menjadi 12
  console.log("hasil uji kedua adalah");
  console.log(ujiKedua);
  
  const ujiKetiga = generateSequence(15);
  console.log("hasil uji ketiga adalah");
  console.log(ujiKetiga);