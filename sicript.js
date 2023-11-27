document.addEventListener("DOMContentLoaded", function () {
    let iconElement = document.getElementById("icon");
  
    iconElement.addEventListener("click", function () {
      iconElement.style.display = "none";
      
      let bar = document.querySelector(".bar");
      let xmark = document.querySelector(".fa-xmark");
  
      if (bar) {
        bar.style.display = "block";
  
        xmark.addEventListener("click", function () {
            bar.style.display = "none";
          iconElement.style.display = "block";
        });
      }
    });
  });
  


// document.addEventListener("click", function(){
//     document.querySelector(".fa-bars").style.display="none";
    
//   });

//    fetch("https://ezanvakti.herokuapp.com/vakitler?ilce=9695")
//    .then(response => response.json())
//    .then(responseJson => {

//     console.log(responseJson[0])

 
//    })
//    .catch(error => {
//      console.error("Hata oluştu:", error);
//    });


//!     TARİH  SAAT
document.addEventListener("DOMContentLoaded", function() {
    
    const  bugun = new Date();

    const gun = bugun.getDate();
    const ay = bugun.getMonth() + 1;
    const yil = bugun.getFullYear();
    
    const tarihGosterElementi = document.getElementById("date");
    tarihGosterElementi.textContent ="Tarih: " + gun +  "/" + ay + "/" + yil;

    saatGoster();
  
    setInterval(saatGoster, 1000);
  });
  
function saatGoster() {
    let simdikiSaat = new Date();
    
    let saat = simdikiSaat.getHours();
    let dakika = simdikiSaat.getMinutes();
    let saniye = simdikiSaat.getSeconds();
    
    let saatGosterElementi = document.getElementById("time");
    saatGosterElementi.textContent = saat + ":" + dakika + ":" + saniye;
  }