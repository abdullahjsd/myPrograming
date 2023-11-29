let sabahTime   =   document.querySelector(".sabah_time")
let ogleTime    =   document.querySelector(".ogle_time")
let ikindiTime  =   document.querySelector(".ikindi_time")
let aksamTime   =   document.querySelector(".aksam_time")
let yatsiTime   =   document.querySelector(".yatsi_time")
let imsakTime   =   document.querySelector(".imsak_time")
 


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
.then(responseJson => {
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

 
})
.catch(error => {
  console.error("Hata oluştu:", error);
});

//? Saat formatındaki bir string'i dakika cinsinden çevirir
function getMinutesFromTimeString(timeString) {
const [hours, minutes] = timeString.split(":").map(Number);
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
// function alarm(){
//   if(saatGoster() === sabahTime.textContent){
//     console.log("sabah vakti geli")
    
//   }
// }





      //! DENEME ALANI
      document.addEventListener("DOMContentLoaded", function() {
  // Alarm zamanını al
  const alarmTimeInput =sabahTime
  const alarmTime = alarmTimeInput.value;

  console.log(alarmTimeInput)

  // Şu anki tarih ve saat bilgisi
  const now = new Date();
  const currentHours = now.getHours();
  const currentMinutes = now.getMinutes();

  // Alarmın ayarlandığı tarih ve saat bilgisi
  const alarmDate = new Date();
  const [alarmHours, alarmMinutes] = alarmTime.split(":");
  alarmDate.setHours(parseInt(alarmHours));
  alarmDate.setMinutes(parseInt(alarmMinutes));
  alarmDate.setSeconds(0);

  // Alarmın kaç milisaniye sonra çalacağını hesapla
  const timeDifference = alarmDate - now;

  // Zamanlayıcıyı kur
  setTimeout(function () {
    // Alarm çalıştığında yapılacak işlemler
    alert("Alarm Çalıyor!");
  }, timeDifference);
});
    


