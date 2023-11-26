const apiEndpoint = "https://api.diyanet.gov.tr/v1/prayerTimes";
const apiKey = "YOUR_API_KEY"; // Bu kısmı kendi API anahtarınızla güncelleyin
const cityCode = "ANKARA"; // İstenilen şehirin Diyanet İşleri Başkanlığı şehir kodu

// Namaz vakitlerini çekmek için API'yi çağıran fonksiyon
async function getPrayerTimes() {
    try {
        const response = await fetch(`${apiEndpoint}?city=${cityCode}`, {
            headers: {
                "Content-Type": "application/json",
                "Apikey": apiKey
            }
        });

        if (!response.ok) {
            throw new Error("API isteği başarısız.");
        }

        const data = await response.json();
        console.log("Namaz Vakitleri:", data);

        // Burada data nesnesini kullanarak istediğiniz işlemleri yapabilirsiniz.
    } catch (error) {
        console.error("Hata:", error.message);
    }
}

// Namaz vakitlerini çekme fonksiyonunu çağır
getPrayerTimes();
