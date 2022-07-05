let aaa = setInterval(faa);
    let aup = 0;
    function faa() {
        var aupv = document.getElementById("aaa");
            aupv.innerHTML = ++aup;
            if (aup === 211){
                clearInterval(aaa)
            }
    }

let aab = setInterval(fab);
    let bup = 0;
    function fab() {
        var bupv = document.getElementById("aab");
            bupv.innerHTML = ++bup;
            if (bup === 368){
                clearInterval(aab)
            }
    }

let aac = setInterval(fac);
    let cup = 0;
    function fac() {
        var cupv = document.getElementById("aac");
            cupv.innerHTML = ++cup;
            if (cup === 345){
                clearInterval(aac)
            }
    }

// Mengatur waktu akhir perhitungan mundur
var countDownDate = new Date("July 14, 2022 23:00:00").getTime();

// Memperbarui hitungan mundur setiap 1 detik
var x = setInterval(function() {

  // Untuk mendapatkan tanggal dan waktu hari ini
    var now = new Date().getTime();
    
  // Temukan jarak antara sekarang dan tanggal hitung mundur
    var distance = countDownDate - now;
    
  // Perhitungan waktu untuk hari, jam, menit dan detik
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Keluarkan hasil dalam elemen dengan id = "demo"
    //document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    document.getElementById("hari").innerHTML = days + "&nbsp;" + "Hari";
    document.getElementById("jam").innerHTML = hours + "&nbsp;" + "Jam";
    document.getElementById("menit").innerHTML = minutes + "&nbsp;" + "Menit";
    document.getElementById("detik").innerHTML = seconds + "&nbsp;" + "Detik";
  // Jika hitungan mundur selesai, tulis beberapa teks
})