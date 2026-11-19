let students = [];
let notes = [];

// Hangi satır düzenleniyor? -1 = hiçbiri (yeni ekleme modu)
let editingIndex = -1; // düzenlenen

// ---------- FUNCTIONS + CONDITIONALS ----------

function getLetterGrade (note) {
    if (note >= 90) return "AA";
    else if (note >= 80) return "BA";
    else if (note >= 70) return "BB";
    else if (note >= 60) return "CC";
    else if (note >= 50) return "DD";
    else return "FF";
}

// ---------- ADD GRADE + SAVE ----------


function addStudent () {
    // [HAZIR SATIRLAR] Ekrandaki kutulardan değer okuma
    let name = document.getElementById("name").value;
    let note = Number(document.getElementById("note").value);

    // Conditions: Validation (Koşullar: doğrulama)

    if (name === "") {
        messageWrite ("Please enter the student's name!");
        return;
    }

    if (document.getElementById("note").value === "" || isNaN(note) || note < 0 || note > 100) {
    messageWrite("The grade must be between 0 and 100!");
    return;
    }

    if (editingIndex === -1) {
        // New student: add to arrays (Yeni öğrenci: dizilere ekle)
        students.push(name);
        notes.push(note);
    } else {
        // Edit: update the values at that position (Düzenleme: o sıradaki değerleri güncelle)
        students[editingIndex] = name;
        notes[editingIndex] = note;
        cancelEdit();
    }

    messageWrite("");
    drawTable();
    calculateStatistics();




}

  