// Kaydedilmiş kelimeleri kontrol et ve hatırlatmaları göster
// function checkReminders() {
//      for (let i = 0; i < localStorage.length; i++) {
//           const key = localStorage.key(i);
//           if (!isNaN(parseInt(key))) {
//                const value = localStorage.getItem(key);
//                const parts = value.split("|");
//                const word = parts[2];
//                const timestamp = parseInt(parts[1]);
//                const daysSinceLastReview = (Date.now() - timestamp) / (1000 * 60 * 60 * 24);
//                if (daysSinceLastReview > 0) {
//                     const meaning = localStorage.getItem(word).split("|")[0];
//                     const reminderMessage = `"${word}" kelimesinin anlamı "${meaning}". 5 günden uzun süredir öğrenmediniz, hatırlatma zamanı!`;
//                     const reminderElement = document.createElement("p");
//                     reminderElement.innerText = reminderMessage;
//                     document.getElementById("reminder-container").appendChild(reminderElement);
//                }
//           }
//      }
// }

function checkReminders() {
     for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (!isNaN(parseInt(key))) {
               const value = localStorage.getItem(key);
               const parts = value.split("|");
               const word = parts[2];
               const timestamp = parseInt(parts[1]);
               const secondsSinceLastReview = (Date.now() - timestamp) / 1000;
               if (secondsSinceLastReview > 10) {
                    const meaning = localStorage.getItem(word).split("|")[0];
                    const reminderMessage = `"${word}" kelimesinin anlamı "${meaning}". 10 saniyeden uzun süredir öğrenmediniz, hatırlatma zamanı!`;
                    const reminderElement = document.createElement("p");
                    reminderElement.innerText = reminderMessage;
                    document.getElementById("reminder-container").appendChild(reminderElement);
               }
          }
     }
}

// Yeni kelime kaydet
function saveWord() {
     const word = document.getElementById("word-input").value;
     const meaning = document.getElementById("meaning-input").value;
     const timestamp = Math.floor(Date.now() / 1000);
     localStorage.setItem(word, `${meaning}|${timestamp}`);

     updateWordList();
}

// Kaydedilmiş kelimeleri listele
function updateWordList() {
     const wordListUl = document.getElementById("word-list-ul");
     wordListUl.innerHTML = "";
     for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (isNaN(parseInt(key))) {
               const value = localStorage.getItem(key);
               const parts = value.split("|");
               const word = key;
               const meaning = parts[0];
               const timestamp = new Date(parseInt(parts[1]) * 1000);
               const listItem = document.createElement("li");
               listItem.innerHTML = `<b>${word}</b>: ${meaning} (kaydedildi: ${timestamp.toLocaleDateString()})`;
               wordListUl.appendChild(listItem);
          }
     }
}

// Başlangıçta kaydedilmiş kelimeleri listele ve hatırlatmaları kontrol et
updateWordList();
checkReminders();
