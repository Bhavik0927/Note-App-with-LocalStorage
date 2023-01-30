const addBtn = document.querySelector(".addbtn");
const main = document.querySelector(".main");

addBtn.addEventListener("click", () => { addNote() });

const saveNote = () => {
    const notes = document.querySelectorAll(".note textarea");
    console.log(notes);
    const data = [];
    notes.forEach(
        (note) => {
            data.push(note.value);
        }
    )
    if (data.length === 0) {
        localStorage.removeItem("notes")
    } else {
        localStorage.setItem("notes", JSON.stringify(data) );
    }
}



const addNote = (text = "") => {

    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
    <div class="note-tool">
        <i class="trash  fa-solid fa-trash"></i>
        <i class="save  fa-solid fa-floppy-disk"></i>
    </div>
    <textarea> ${text} </textarea>
    `;

    note.querySelector(".trash").addEventListener(
        'click', () => {
            note.remove();
            saveNote();
        }
    );
    note.querySelector(".save").addEventListener(
        'click', () => { saveNote() }
    );

    note.querySelector("textarea").addEventListener(
        "focusout",() =>{ saveNote();}
    )
    main.appendChild(note);
    saveNote();
}


// self calling function
(
    function () {
        const localStorageNote = JSON.parse(localStorage.getItem("notes"));
        if (localStorageNote === null) {
            addNote();
        } else {
            localStorageNote.forEach(
                (lsNote) => {
                    addNote(lsNote)
                }
            )
        }
    }
)()