const btnA = document.getElementById("btnA");
const btnB = document.getElementById("btnB");
const popupOverlay = document.getElementById("popupOverlay");
const popupBtn = document.getElementById("popupBtn");
const warningMessage = document.getElementById("warningMessage");
const container = document.querySelector(".container");
const flowerOverlay = document.getElementById("flowerOverlay");

/* 🌸 ÇİÇEK / KALP OLUŞTUR */
function createFlowers() {
    flowerOverlay.innerHTML = "";

    const icons = ["🌸", "🌼", "🌺", "💖", "💗", "💞", "❤️"];

    for (let i = 0; i < 70; i++) {
        const flower = document.createElement("div");
        flower.classList.add("flower");
        flower.innerText = icons[Math.floor(Math.random() * icons.length)];

        flower.style.left = Math.random() * 100 + "%";
        flower.style.animationDelay = Math.random() * 6 + "s";
        flower.style.fontSize = (24 + Math.random() * 24) + "px";

        flowerOverlay.appendChild(flower);
    }
}

/* 🔁 TÜM DURUMU SIFIRLA (KRİTİK) */
function resetUI() {
    popupOverlay.classList.remove("active");
    popupOverlay.style.display = "none";
    popupOverlay.style.pointerEvents = "none";

    popupBtn.style.display = "block";

    warningMessage.classList.remove("active");
    warningMessage.style.display = "none";

    flowerOverlay.classList.remove("active");
    flowerOverlay.innerHTML = "";
}

/* ✅ EVET */
btnA.addEventListener("click", () => {
    resetUI(); // önce temizlik

    popupOverlay.style.display = "flex";

    setTimeout(() => {
        popupOverlay.classList.add("active");
        popupOverlay.style.pointerEvents = "auto";
    }, 10);
});

/* ❌ HAYIR */
btnB.addEventListener("click", () => {
    container.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

/* ❤️ ALT POPUP BUTONU */
popupBtn.addEventListener("click", () => {
    popupBtn.style.display = "none";

    warningMessage.style.display = "block";
    warningMessage.classList.add("active");

    flowerOverlay.classList.add("active");
    createFlowers();
});

/* 🔵 ÜSTTEKİ UYARIYA TIK */
warningMessage.addEventListener("click", () => {
    // her şeyi sıfırla
    resetUI();

    // 1. sayfaya dön
    container.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    // scroll bitince etkileşimi aç
    setTimeout(() => {
        popupOverlay.style.pointerEvents = "none";
    }, 600);
});
