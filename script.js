 // Τελικής ημερομηνίας 
const countdownDate = new Date("2025-05-12T00:00:00").getTime();

const countdownElement = document.getElementById("countdown");

const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  if (distance <= 0) {
    clearInterval(timer);
    countdownElement.innerHTML = "Η σελίδα είναι πλέον έτοιμη!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownElement.innerHTML = `
    ${days} μέρες ${hours} ώρες ${minutes} λεπτά ${seconds} δευτερόλεπτα
  `;
}, 1000);



  

  // Συνδέσεις modal
const subscribeModal = document.getElementById("subscribeModal");
const contactModal = document.getElementById("contactModal");

document.getElementById("subscribeBtn").onclick = () => {
  subscribeModal.style.display = "block";
};

document.getElementById("contactBtn").onclick = () => {
  contactModal.style.display = "block";
};

// Κουμπιά κλεισίματος
document.getElementById("closeSubscribe").onclick = () => {
  subscribeModal.style.display = "none";
};

document.getElementById("closeContact").onclick = () => {
  contactModal.style.display = "none";
};

// Κλείσιμο modal αν κάνει κλικ εκτός
window.onclick = function(event) {
  if (event.target === subscribeModal) {
    subscribeModal.style.display = "none";
  }
  if (event.target === contactModal) {
    contactModal.style.display = "none";
  }
};


// Άνοιγμα Contact Modal
document.getElementById("contactBtn").addEventListener("click", function () {
    document.getElementById("contactModal").style.display = "block";
  });
  
  // Κλείσιμο Contact Modal
  document.getElementById("closeContact").addEventListener("click", function () {
    document.getElementById("contactModal").style.display = "none";
  });

  
  
  
// Α8:  Εμφάνιση ή απόκρυψη του πεδίου για αριθμό τέκνων, αν είναι "Έγγαμος"
document.getElementById("A7").addEventListener("change", function () {
    const maritalStatus = this.value;
    const a9Wrapper = document.getElementById("a9-wrapper");

    // Εμφάνιση ή απόκρυψη του πεδίου για αριθμό τέκνων, αν είναι "Έγγαμος"
    if (maritalStatus === "Έγγαμος") {
        a9Wrapper.style.display = "block";  
    } else {
        a9Wrapper.style.display = "none";   
    }
});



  
  // A11: Αν φύλο είναι Άνδρας δείξε A12 και A13
  document.getElementById("A11").addEventListener("change", function () {
    const military = document.getElementById("military-wrapper");
    if (this.value === "ΑΝΔΡΑΣ") {
      military.style.display = "block";
    } else {
      military.style.display = "none";
      
      // Προαιρετικά: καθαρισμός πεδίων
      document.getElementById("A12").value = "";
      document.getElementById("A13").value = "";
    }
  });

  
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); 
  
    let hasError = false;
  
    // Καθαρίζουμε παλιά μηνύματα
    const errorSpans = document.querySelectorAll(".error");
    errorSpans.forEach(span => span.textContent = "");
  
// Yποχρεωτικά πεδία
    const requiredFields = [
      "A1", "A2", "A3", "A4", "A5", "A6", "A7", "A10", "A11", "A16"
    ];
  
    requiredFields.forEach(id => {
      const field = document.getElementById(id);
      if (field.value.trim() === "") {
        showError(id, "Συμπλήρωσε το πεδίο");
        hasError = true;
      }
    });
  
    // Αν έχει επιλεγεί Τέκνα → πρέπει να έχει και Α9
    if (document.getElementById("A8").checked) {
      const a9 = document.getElementById("A9");
      if (a9.value.trim() === "") {
        showError("A9", "Συμπλήρωσε τον αριθμό τέκνων");
        hasError = true;
      }
    }
  
    // Αν είναι Άνδρας πρέπει να συμπληρωθούν A12 και A13
    if (document.getElementById("A11").value === "ΑΝΔΡΑΣ") {
      const a12 = document.getElementById("A12");
      const a13 = document.getElementById("A13");
  
      if (a12.value === "") {
        showError("A12", "Επίλεξε Ναι ή Όχι");
        hasError = true;
      }
  
      if (a13.value === "") {
        showError("A13", "Συμπλήρωσε το έτος απόλυσης");
        hasError = true;
      }
    }
  
    if (!hasError) {
      alert("Η φόρμα στάλθηκε επιτυχώς!");
     
    }
  });
  
  function showError(id, message) {
    const input = document.getElementById(id);
    const errorSpan = input.nextElementSibling;
    errorSpan.textContent = message;
  }
  


  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const formMessage = document.getElementById("form-message");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      // Όλα τα απαιτούμενα πεδία
      const requiredFields = [
        "A1", "A2", "A3", "A4", "A5", "A6", "A7",
        "A10", "A11", "A16"
      ];
  
      // Αν είναι εγγαμος, έλεγξε και το A9 (Αριθμός Τέκνων)
      const maritalStatus = document.getElementById("A7").value;
      if (maritalStatus === "Έγγαμος") {
        requiredFields.push("A9");
      }
  
      let formIsValid = true;
  
      requiredFields.forEach(id => {
        const input = document.getElementById(id);
        const errorSpan = input.nextElementSibling;
        const successSpan = errorSpan?.nextElementSibling;
  
        // Καθαρισμός προηγούμενων αποτελεσμάτων
        errorSpan.textContent = "";
        successSpan.textContent = "";
        input.classList.remove("error-border", "success-border");
  
        if (!input.value.trim()) {
          // Αν κενό: σφάλμα
          errorSpan.textContent = "Αυτό το πεδίο είναι υποχρεωτικό!";
          input.classList.add("error-border");
          formIsValid = false;
        } else {
          // Αν εντάξει: επιτυχία
          input.classList.add("success-border");
          successSpan.textContent = "✓ Καταχωρήθηκε Σωστά!";
        }
      });
  
      // Μήνυμα πάνω από τη φόρμα
      formMessage.style.display = "block";
      if (formIsValid) {
        formMessage.className = "success";
        formMessage.textContent = "Η φόρμα υποβλήθηκε επιτυχώς!";
      } else {
        formMessage.className = "error";
        formMessage.textContent = "Συμπλήρωσε όλα τα απαιτούμενα πεδία.";
      }
    });
  
    // Δείξε/κρύψε το πεδίο Α9 (Αριθμός Τέκνων) αν είναι Έγγαμος
    document.getElementById("A7").addEventListener("change", function () {
      const wrapper = document.getElementById("a9-wrapper");
      wrapper.style.display = this.value === "Έγγαμος" ? "block" : "none";
    });
  });
  