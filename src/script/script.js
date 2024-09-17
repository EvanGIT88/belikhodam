const minLength = 3;
const maxLength = 50;
const regex = /^[a-zA-Z\s]+$/;
const baseUrl = "http://localhost/MyServers/MidtransKey/getkey.php";
const khodam = [
  { item: "Nasi goreng", khodam: "Memiliki kekuatan mengendalikan api dan memberikan keberuntungan" },
  { item: "Hamster kombat", khodam: "Memiliki kekuatan kecepatan dan kelincahan dalam bertarung" },
  { item: "Seblak", khodam: "Memiliki kekuatan mengendalikan air dan memberikan kesegaran" },
  { item: "Singa putih", khodam: "Memiliki kekuatan keberanian dan perlindungan" },
  { item: "Bihun", khodam: "Memiliki kekuatan kekayaan dan kesejahteraan" },
  { item: "Kabel data vivan", khodam: "Memiliki kekuatan kecepatan dan konektivitas" },
  { item: "Rx king", khodam: "Memiliki kekuatan kecepatan dan dominasi di jalan" },
  { item: "Jokowi", khodam: "Memiliki kekuatan kebijaksanaan dan ketegasan dalam memimpin" },
  { item: "Si gemoy", khodam: "Memiliki kekuatan kelucuan dan membawa keberuntungan" },
  { item: "Si imut", khodam: "Memiliki kekuatan kebahagiaan dan pesona" },
  { item: "Ambatukam", khodam: "Memiliki kekuatan menjaga dan menyembunyikan rahasia" },
  { item: "Ambatron", khodam: "Memiliki kekuatan fisik yang kuat dan teknologi canggih" },
  { item: "super charging 65 wat", khodam: "Memiliki kekuatan pengisian cepat dan energi tinggi" },
  { item: "Admin bokep", khodam: "Memiliki kekuatan menyembunyikan dan menghilang" },
  { item: "Jakarta", khodam: "Memiliki kekuatan keberagaman dan daya tarik urban" },
  { item: "Jawa banget njir", khodam: "Memiliki kekuatan budaya dan tradisi" },
  { item: "Emrror", khodam: "Memiliki kekuatan menyebabkan kebingungan dan kekacauan" },
  { item: "Skibidi toilet", khodam: "Memiliki kekuatan humor dan kebersihan" },
  { item: "Gyatt", khodam: "Memiliki kekuatan kegigihan dan ketahanan" },
  { item: "Nasi campur", khodam: "Memiliki kekuatan keragaman dan kelimpahan" },
  { item: "Martabak khas surabaya", khodam: "Memiliki kekuatan kelezatan dan kepuasan" },
  { item: "Dejek", khodam: "Memiliki kekuatan penghinaan dan ejekan" },
  { item: "Persija", khodam: "Memiliki kekuatan semangat dan kebersamaan" },
  { item: "Makassar", khodam: "Memiliki kekuatan keanekaragaman dan daya tarik maritim" },
  { item: "Indosiar", khodam: "Memiliki kekuatan hiburan dan informasi" },
  { item: "18+", khodam: "Memiliki kekuatan konten dewasa dan privasi" },
  { item: "PornHUB", khodam: "Memiliki kekuatan konten dewasa dan privasi" },
  { item: "Cantik", khodam: "Memiliki kekuatan kecantikan dan pesona" },
  { item: "Surya kretek", khodam: "Memiliki kekuatan kelezatan tembakau dan ketenangan" },
  { item: "Israel", khodam: "Memiliki kekuatan sejarah dan kontroversi" },
  { item: "Pertamina", khodam: "Memiliki kekuatan energi dan sumber daya" },
  { item: "Jawa barat", khodam: "Memiliki kekuatan keindahan alam dan budaya" },
  { item: "Anies baswedan", khodam: "Memiliki kekuatan kepemimpinan dan visi" },
  { item: "Prabowo", khodam: "Memiliki kekuatan ketegasan dan keberanian" },
  { item: "Gibran", khodam: "Memiliki kekuatan inovasi dan kreativitas" },
  { item: "Macan merah", khodam: "Memiliki kekuatan kekuatan fisik dan keberanian" },
  { item: "Kanjut", khodam: "Memiliki kekuatan ejekan dan penghinaan" },
  { item: "Raja iblis", khodam: "Memiliki kekuatan kegelapan dan kekuasaan" },
  { item: "Ratu iblis", khodam: "Memiliki kekuatan kegelapan dan ketenangan" },
  { item: "Ripper", khodam: "Memiliki kekuatan penghancuran dan kegelapan" },
  { item: "Hai", khodam: "Memiliki kekuatan menyapa dan memulai percakapan" },
  { item: "India", khodam: "Memiliki kekuatan keanekaragaman budaya dan tradisi" },
  { item: "Kecap bangau", khodam: "Memiliki kekuatan kelezatan dan rasa" },
  { item: "King slot", khodam: "Memiliki kekuatan keberuntungan dan peluang" },
  { item: "Mewing", khodam: "Memiliki kekuatan keindahan dan kesehatan gigi" },
  { item: "Sigma", khodam: "Memiliki kekuatan kebijaksanaan dan kepemimpinan" },
  { item: "Batak", khodam: "Memiliki kekuatan budaya dan ketahanan" },
  { item: "Sulawesi", khodam: "Memiliki kekuatan keindahan alam dan keanekaragaman" },
  { item: "Google chrome", khodam: "Memiliki kekuatan kecepatan dan akses informasi" },
  { item: "Facebook", khodam: "Memiliki kekuatan koneksi sosial dan berbagi" },
  { item: "Instagram", khodam: "Memiliki kekuatan visual dan popularitas" },
  { item: "Babi jember", khodam: "Memiliki kekuatan keberanian dan kekuatan" },
  { item: "Nathan cu a on", khodam: "Memiliki kekuatan inovasi dan kreativitas" },
  { item: "Ernando bakar sate", khodam: "Memiliki kekuatan kelezatan dan kebersamaan" },
  { item: "4/64GB", khodam: "Memiliki kekuatan kapasitas dan kecepatan" },
  { item: "Nokia", khodam: "Memiliki kekuatan ketahanan dan keandalan" },
  { item: "Keyboard samsung", khodam: "Memiliki kekuatan kenyamanan dan efisiensi" },
  { item: "Gada", khodam: "Memiliki kekuatan kekuatan fisik dan perlindungan" },
  { item: "Affilate tiktok", khodam: "Memiliki kekuatan popularitas dan pengaruh" },
  { item: "Casan tesla", khodam: "Memiliki kekuatan pengisian cepat dan efisiensi" },
  { item: "Starlink", khodam: "Memiliki kekuatan konektivitas global dan kecepatan" },
  { item: "Bokep 4K", khodam: "Memiliki kekuatan kualitas gambar dan privasi" },
  { item: "Android", khodam: "Memiliki kekuatan fleksibilitas dan aksesibilitas" },
  { item: "Fomo", khodam: "Memiliki kekuatan rasa takut ketinggalan" },
  { item: "Airdrop", khodam: "Memiliki kekuatan distribusi dan kejutan" },
  { item: "Selamat kamu mendapatkan hadiah sebesar 1juta, dipotong pajak 1juta", khodam: "Memiliki kekuatan humor dan kejutan" },
  { item: "Raja cyrpto", khodam: "Memiliki kekuatan keuangan dan investasi" },
  { item: "Singa putih", khodam: "Memiliki kekuatan keberanian dan perlindungan" },
  { item: "Nasi kuning", khodam: "Memiliki kekuatan kelezatan dan keberuntungan" },
  { item: "Rendang Babi", khodam: "Memiliki kekuatan kelezatan dan kekuatan" },
  { item: "Iwak", khodam: "Memiliki kekuatan kesehatan dan kekuatan" },
  { item: "Holan bakri", khodam: "Memiliki kekuatan kekayaan dan kesejahteraan" },
  { item: "Scam", khodam: "Memiliki kekuatan penipuan dan manipulasi" },
  { item: "Munyuk", khodam: "Memiliki kekuatan kelincahan dan kecerdasan" },
  { item: "Menggunakan ini untuk membeli pulsa 100rb", khodam: "Memiliki kekuatan transaksi dan komunikasi" },
  { item: "Tikus curut", khodam: "Memiliki kekuatan kelicikan dan ketahanan" },
  { item: "Babi ngetot", khodam: "Memiliki kekuatan keberanian dan kekuatan" },
  { item: "3gp", khodam: "Memiliki kekuatan nostalgia dan sederhana" },
  { item: "Saiton", khodam: "Memiliki kekuatan kegelapan dan kekuasaan" }
];

const maxIndex = khodam.length - 1;
var letGacha = true;

//events
document.getElementById("isiHeader").addEventListener("click", () => {

  //change arrow
  if (document.getElementById("arrowUp").classList.contains("hidden")) {
  document.getElementById("arrowUp").classList.remove("hidden");
  document.getElementById("arrowDown").classList.add("hidden");
  } else {
  document.getElementById("arrowUp").classList.add("hidden");
  document.getElementById("arrowDown").classList.remove("hidden");     
  }

  //change form
  if (document.getElementById("isiForm").classList.contains("hidden")) {
  document.getElementById("isiForm").classList.remove("hidden");
  document.getElementById("isiForm").classList.add("flex");
  document.getElementById("isiForm").classList.add("flex-row");
  } else {
  document.getElementById("isiForm").classList.add("hidden"); 
  document.getElementById("isiForm").classList.remove("flex");
  document.getElementById("isiForm").classList.remove("flex-row");
  }

  //change hover
  if (document.getElementById("isiBody").classList.contains("hover:bg-slate-500")) {
  document.getElementById("isiBody").classList.remove("hover:bg-slate-500");
  document.getElementById("isiText").classList.remove("group-hover:text-red-500");
  } else {
  document.getElementById("isiBody").classList.add("hover:bg-slate-500");
  document.getElementById("isiText").classList.add("group-hover:text-red-500");
  }
})

document.getElementById("isiForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const validateInput = await validateForm();
  if (validateInput == true) {
    const transactionKey = await getMidKey();
    window.snap.pay(transactionKey, {
      onSuccess: async function(result) {
        console.log(result);
        let payBox = async () => {
          return document.getElementById("snap-midtrans");
        };
        payBox = await payBox();
        payBox.classList.add("hidden");
        gachaKhodam();
      },
      onPending: function(result) {
        console.log(result);
        sessionStorage.removeItem("namaDpn");
        sessionStorage.removeItem("namaBlk");
      },
      onError: function(result) {
        console.log(result);
        sessionStorage.removeItem("namaDpn");
        sessionStorage.removeItem("namaBlk");
      },
      onClose: function() {
        sessionStorage.removeItem("namaDpn");
        sessionStorage.removeItem("namaBlk");
      }
    })
  }
});

//functions
async function validateForm() {
  const namaDpn = document.forms['isiForm']['namaDpn'].value;
  const namaBlk = document.forms['isiForm']['namaBlk'].value;
  const namaLengkap = namaDpn + "" + namaBlk;
  const container = document.getElementById("invalid");

  try {
    if (regex.test(namaDpn) != true || regex.test(namaBlk) != true) {
      throw "Tulis yan benar";
    } else if (namaLengkap.length < minLength || namaLengkap.length > maxLength) {
      throw "Tulisnya kepanjangan/kependekan";
    } else {
      container.innerHTML = "";
      container.classList.add("hidden");
      sessionStorage.setItem("namaDpn", namaDpn);
      sessionStorage.setItem("namaBlk", namaBlk);
      return true;
    }
  } catch (errmsg) {
     container.innerHTML = errmsg;
     container.classList.remove("hidden");
     return false;
  }
}

async function getMidKey() {
  const namaDpn = sessionStorage.getItem("namaDpn");
  const namaBlk = sessionStorage.getItem("namaBlk");
  const response = await fetch(baseUrl, {
   headers: {
    "Content-Type": "application/json"
   },
   method: "POST",
   body: JSON.stringify({
    namaDepan: namaDpn,
    namaBelakang: namaBlk
   })
  });

  if (!response.ok) {
   console.log(`Status respon: ${response.status}`);
  }
  
  const data = await response.json();
  return data.clientkey;
}

function gachaKhodam() {
  const namaDpn = sessionStorage.getItem("namaDpn");
  const namaBlk = sessionStorage.getItem("namaBlk");
  const randomNumber = Math.floor(Math.random() * maxIndex);
  const getKhodam = khodam[randomNumber].item;
  const getPower = khodam[randomNumber].khodam;
  const main = document.getElementById("mainCon");
  const header = document.getElementById("headerCon");
  const body = document.getElementById("bodyCon");
  const loader = document.getElementById("loader");
  const loaderText = document.getElementById("loaderText");
  const space = document.getElementById("space");
  const title = document.getElementById("title");
  const khodamName = document.getElementById("namaKhodam");
  const khodamPower = document.getElementById("powerKhodam");
  const addRemove = (element,add,remove) => {
   element.classList.add(add);
   element.classList.remove(remove);
  }

  main.classList.add("opacity-0");
  header.classList.add("opacity-0");

  setTimeout(() => {
   addRemove(main, "hidden", "flex");
   addRemove(header, "hidden", "flex");
   addRemove(body, "bg-none", "bg-khodam-bg");
   body.classList.add("bg-black");
   space.classList.remove("hidden");
   loader.classList.remove("hidden");
   loaderText.classList.remove("hidden");
  },3000);

  setTimeout(() => {
   addRemove(loader, "opacity-0", "opacity-0");
   addRemove(loaderText, "opacity-100", "opacity-0");
   loader.classList.add("flex");
  },4700);

  setTimeout(() => {
  setInterval(() => {
    setTimeout(() => {
     loaderText.innerHTML += ".";
    },200);
    setTimeout(() => {
      loaderText.innerHTML += ".";
     },400);
     setTimeout(() => {
      loaderText.innerHTML += ".";
     },800);
     setTimeout(() => {
      let updated = loaderText.innerHTML.slice(0,14);
      loaderText.innerHTML = updated;
     },1000);
   },1100)
  }, 4800)

  setTimeout(() => {
   addRemove(loader, "opacity-0", "opacity-100");
   addRemove(loaderText, "opacity-0", "opacity-100");
   
   setTimeout(() => {
    addRemove(loader, "hidden", "flex");
    loaderText.classList.add("hidden");

    title.innerHTML = `Selamat! ${namaDpn + " " + namaBlk} diisi khodam:`;
    khodamName.innerHTML = `${getKhodam}`;
    khodamPower.innerHTML = `Kekuatan khodam: <br> ${getPower}`;
    setTimeout(() => {
      title.classList.remove("hidden");
    }, 100)
    setTimeout(() => {
      khodamName.classList.remove("hidden");
    }, 300);
    setTimeout(() => {
      khodamPower.classList.remove("hidden");
    }, 500);
    setTimeout(() => {
      title.classList.add("hidden");
    }, 12100);
    setTimeout(() => {
      khodamName.classList.add("hidden");
    }, 12300);
    setTimeout(() => {
      khodamPower.classList.add("hidden");
    }, 12500);
    setTimeout(() => {
      space.classList.add("hidden");
      body.classList.remove("bg-black");
      addRemove(main, "flex", "hidden");
      addRemove(header, "flex", "hidden");
      addRemove(body, "bg-khodam-bg", "bg-none");
      main.classList.remove("opacity-0");
      header.classList.remove("opacity-0");
      sessionStorage.removeItem("namaDpn");
      sessionStorage.removeItem("namaBlk");
    }, 13000);
   }, 2200);
  },12800);
}