const createNote = document.querySelector('.plus')
const addNote = document.querySelector('.modalWindow')
const closeNote = document.querySelector('.close')
const sendNote = document.querySelector('.add')

const wrapper = document.querySelector('.wrapper')

const title = document.querySelector('input')
const descr = document.querySelector('textarea')

const del = document.querySelector('.del');

const element = document.getElementById("1");


createNote.addEventListener("click", () => addNote.style.display = 'flex')
closeNote.addEventListener("click", () => addNote.style.display = 'none')

let noteCount = 1;
sendNote.addEventListener("click",asd)
// sendNote.addEventListener("click", () =>   addNote.style.display = 'none')




function ads() {
    document.getElementById("del"+del.id).remove();


}

function asd() {
    let date = new Date;
    
    addNote.style.display = 'none'
    wrapper.innerHTML +=`        <div class="task" id="${"del"+noteCount}">
            <div class="taskName">
                ${title.value}
            </div>
            <div class="taskText">
            ${descr.value}
            </div>
            <div class="toolbar">
                <div class="del" id="${noteCount}">
                    
                </div>
                <div class="date">
                    ${date.toLocaleDateString()}
                </div>
            </div>
        </div>`;
        noteCount++;
}
// document.body.innerHTML = ''


createNote.addEventListener("click", () => addNote.style.display = 'flex')
del.addEventListener("click", ()=>ads())