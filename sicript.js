let sabahTime   =   document.querySelector(".sabah_time")
let ogleTime    =   document.querySelector(".ogle_time")
let ikindiTime  =   document.querySelector(".ikindi_time")
let aksamTime   =   document.querySelector(".aksam_time")
let yatsiTime   =   document.querySelector(".yatsi_time")
let imsakTime   =   document.querySelector(".imsak_time")
let kalanDk     =   document.getElementById("kalanDk")

let f_imsak;
let f_sabah;
let f_ogle;
let f_ikindi;
let f_aksam;
let f_yatsi;


//! today
let globalDate  = new Date(); 
const bugun     = globalDate;
const gun       = bugun.getDate();
const ay        = bugun.getMonth() + 1;
const yil       = bugun.getFullYear();

let today       = yil + "-" + ay + "-" + gun;

let date = document.getElementById("date");
date.textContent = gun + "/" + ay + "/" + yil;


document.addEventListener("DOMContentLoaded", function () {
    let iconElement = document.getElementById("icon");
  
    iconElement.addEventListener("click", function () {
      iconElement.style.display = "none";
      
      let bar   = document.querySelector(".bar");
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


//! fetch api
fetch(`https://namaz-vakti.vercel.app/api/timesFromCoordinates?date=${today}&days=3&timezoneOffset=180&calculationMethod=Turkey&lat=39.049340&lng=38.494170`)
.then(response => response.json())
.then((responseJson) =>{
  let firstDate = Object.keys(responseJson.times)[0];
  let firstDatePrayerTimes = responseJson.times[firstDate];
  //imsak vaktine 3 dk eklendi
  const imsakTimeInMinutes      = getMinutesFromTimeString(firstDatePrayerTimes[0]);
  const imsakBeforeSunriseTime  = getFormattedTimeString(imsakTimeInMinutes+ 3);
  // Sabah namazı vakti hesaplama && her vakte 3dk ekleme hesap tam turması için
  const sabahTimeInMinutes      = getMinutesFromTimeString(firstDatePrayerTimes[1]);
  const sabahBeforeSunriseTime  = getFormattedTimeString((sabahTimeInMinutes - 60) + 3);
  //ogleye 3 dk eklendi
  const ogleTimeInMinutes       = getMinutesFromTimeString(firstDatePrayerTimes[2]);
  const ogleBeforeSunriseTime   = getFormattedTimeString(ogleTimeInMinutes+ 3);
  //ikindi 3 dk eklendi
  const ikindiTimeInMinutes     = getMinutesFromTimeString(firstDatePrayerTimes[3]);
  const ikindiBeforeSunriseTime = getFormattedTimeString(ikindiTimeInMinutes+ 3); 
  //aksam 3 dk eklendi
  const aksamTimeInMinutes      = getMinutesFromTimeString(firstDatePrayerTimes[4]);
  const aksamBeforeSunriseTime  = getFormattedTimeString(aksamTimeInMinutes+ 3); 
  //yatsi 3 dk eklendi
  const yatsiTimeInMinutes      = getMinutesFromTimeString(firstDatePrayerTimes[5]);
  const yatsiBeforeSunriseTime  = getFormattedTimeString(yatsiTimeInMinutes+ 3); 

  imsakTime.innerHTML   = imsakBeforeSunriseTime;
  sabahTime.innerHTML   = sabahBeforeSunriseTime;
  ogleTime.innerHTML    = ogleBeforeSunriseTime;
  ikindiTime.innerHTML  = ikindiBeforeSunriseTime;
  aksamTime.innerHTML   = aksamBeforeSunriseTime;
  yatsiTime.innerHTML   = yatsiBeforeSunriseTime;

  f_imsak   =   imsakTime.innerHTML
  f_sabah   =   sabahTime.innerHTML
  f_ogle    =   ogleTime.innerHTML
  f_ikindi  =   ikindiTime.innerHTML
  f_aksam   =   aksamTime.innerHTML
  f_yatsi   =   yatsiTime.innerHTML
})
.catch(error => {
  console.error("Hata oluştu:", error);
});


//? Saat formatındaki bir string'i dakika cinsinden çevirir
function getMinutesFromTimeString(timeString) {
let [hours, minutes] = timeString.split(":").map(Number);
return hours * 60 + minutes;
}

//? Dakika cinsinden bir değeri saat:dk formatına çevirir
function getFormattedTimeString(minutes) {
const hours = Math.floor(minutes / 60);
const remainingMinutes = minutes % 60;
return `${String(hours).padStart(2, "0")}:${String(remainingMinutes).padStart(2, "0")}`;
}

//!     DAKİKA SEÇ
document.getElementById("kur").addEventListener("click",()=>{
  const cards = document.getElementById("cards")
  const selectOption = cards.options[cards.selectedIndex].value

  console.log(selectOption)

})

//!     TARİH  SAAT
document.addEventListener("DOMContentLoaded", function() {
    saatGoster();
    setInterval(saatGoster, 1000);
  });
  
function saatGoster() {
    let simdikiSaat = new Date();
    
    let saat    = simdikiSaat.getHours();
    let dakika  = simdikiSaat.getMinutes();
    let saniye  = simdikiSaat.getSeconds();
    
    let saatGosterElementi = document.getElementById("time");
    saatGosterElementi.textContent = saat + ":" + dakika + ":" + saniye;
    
    return saatGosterElementi.textContent
}

  
//! alarm


//! DENEME ALANI

const timer = setInterval(function() {
  kalanDk.innerHTML=saatGoster()

  // f_imsak= "18:26"
  // f_sabah= "18:26"
  // f_ogle=  "18:26"
  // f_aksam= "18:26"
  // f_yatsi= "18:26"



  function sondanSil(str, silinecekKarakter) {
    const indeks = str.lastIndexOf(silinecekKarakter);
    if (indeks !== -1) {
        const yeniString = str.slice(0, indeks);
        return yeniString;
    } 
  }
  // Örnek kullanım
  const gelenSaat = saatGoster();
  const silinecekKarakter = ":";
  const yeniString = sondanSil(gelenSaat, silinecekKarakter);


  if(yeniString === f_imsak){
    console.log("imsak vakit gelid ")
  }
  if(yeniString === f_sabah){
    console.log("sabah vakit gelid ")
  }
  if(yeniString === f_ogle){
    console.log("ogle vakit gelid ")
  }
  if(yeniString === f_ikindi){
    console.log("ikindi vakit gelid ")
  }
  if(yeniString === f_aksam){
    console.log("aksam vakit gelid ")
  }
  if(yeniString === f_yatsi){
    console.log("yatsi vakit gelid ")
  }

  
 









  // console.log(f_sabah)
  // console.log(f_ogle)
  // console.log(f_ikindi)
  // console.log(f_aksam)
  // console.log(f_yatsi)
  

 
}, 1000);
      



// const delayInMilliseconds = 700;
// setTimeout(function() {
//   console.log(f_imsak)
//   console.log(f_sabah)
//   console.log(f_ogle)
//   console.log(f_ikindi)
//   console.log(f_aksam)
//   console.log(f_yatsi)


//   kalanDk.innerHTML=saatGoster()




// }, delayInMilliseconds);














 
 

