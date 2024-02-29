document.addEventListener("DOMContentLoaded", function(event) {
    const noteFormEl = document.getElementById("note-form");
    const noteTitleEl = document.getElementById("note-title");
    const noteContentEl = document.getElementById("note-content");
    const noteDisplayEl = document.getElementById("note-display");
    const spinnerEl = document.getElementById("spinner");
    
    // Fungsi untuk menyimpan catatan
    function saveNote() {
      const note = {
        title: noteTitleEl.value,
        content: noteContentEl.value,
      };
      const notes = JSON.parse(localStorage.getItem("notes")) || [];
      notes.push(note);
      localStorage.setItem("notes", JSON.stringify(notes));
      loadNote()
    }
    
    // Fungsi untuk memuat catatan
    function loadNote() {
        spinnerEl.hidden = false;
        noteDisplayEl.hidden = true;
        setTimeout(() => {

            const notes = JSON.parse(localStorage.getItem("notes")) || [];
            const noteDisplayHTML = notes.map((note) => `
              <h2>${note.title}</h2>
              <p>${note.content}</p>
            `).join("");
            noteDisplayEl.innerHTML = noteDisplayHTML;

            spinnerEl.hidden = true;
            noteDisplayEl.hidden = false;
        }, 2000)
    }
    
    // Mengatur event pada form
    noteFormEl.addEventListener("submit", (event) => {
      event.preventDefault();
      saveNote();
      noteTitleEl.value = "";
      noteContentEl.value = "";
    });
    
   loadNote()
});