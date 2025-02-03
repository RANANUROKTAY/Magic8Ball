function getAnswer() {
    const questionInput = document.getElementById("question").value.trim();
    const answerText = document.getElementById("answerText");
    
    if (questionInput === "") {
        alert("Lütfen bir soru girin!");
        return;
    }

    const responses = [
        { text: "Kesinlikle!", color: "#4CAF50" },
        { text: "Büyük ihtimalle.", color: "#8BC34A" },
        { text: "Evet.", color: "#CDDC39" },
        { text: "Görünüşe göre evet.", color: "#FFC107" },
        { text: "Şüphesiz.", color: "#FF9800" },
        { text: "Evet, kesinlikle.", color: "#FF5722" },
        { text: "İyi bir olasılık.", color: "#795548" },
        { text: "Şimdilik evet gibi.", color: "#673AB7" },
        { text: "Kısmet!", color: "#3F51B5" },
        { text: "Emin değilim, tekrar sor.", color: "#607D8B" },
        { text: "Daha sonra dene.", color: "#9E9E9E" },
        { text: "Şu an söyleyemem.", color: "#78909C" },
        { text: "Odaklan ve tekrar sor.", color: "#009688" },
        { text: "Yanıt vermesem daha iyi.", color: "#00BCD4" },
        { text: "Pek mümkün değil.", color: "#F44336" },
        { text: "Hayır.", color: "#E91E63" },
        { text: "İhtimal düşük.", color: "#FFEB3B" },
        { text: "Şansın yok gibi.", color: "#9C27B0" },
        { text: "Kesinlikle hayır.", color: "#2196F3" },
        { text: "Olmaz.", color: "#4E342E" },
        { text: "İnanmıyorum.", color: "#1B5E20" },
        { text: "Şüpheli.", color: "#D32F2F" },
        { text: "Çok düşük ihtimal.", color: "#827717" },
        { text: "Belki.", color: "#F57C00" },
        { text: "Zaman gösterecek.", color: "#616161" },
        { text: "Şimdi değil.", color: "#283593" },
        { text: "İmkansıza yakın.", color: "#BF360C" },
        { text: "Olabilir ama zor.", color: "#1976D2" },
        { text: "Bunu bilemem.", color: "#5D4037" },
        { text: "Kesinlikle mümkün.", color: "#388E3C" }
    ];

    // Rastgele bir cevap için
    const randomIndex = Math.floor(Math.random() * responses.length);
    const selectedResponse = responses[randomIndex];

    // Cevabı göstermek için
    answerText.textContent = selectedResponse.text;

    // Arka plan rengini değiştirmek için
    document.body.style.backgroundColor = selectedResponse.color;
}
