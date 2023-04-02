const createNote = document.querySelector('.plus')
const addNote = document.querySelector('.modalWindow')
const closeNote = document.querySelector('.close')
const sendNote = document.querySelector('.add')

const wrapper = document.querySelector('.wrapper')

createNote.addEventListener("click", () => addNote.style.display = 'flex')
closeNote.addEventListener("click", () => addNote.style.display = 'none')

sendNote.addEventListener("click",asd)
// sendNote.addEventListener("click", () =>   addNote.style.display = 'none')


function asd() {
    addNote.style.display = 'none'
    wrapper.innerHTML +=`        <div class="task">
            <div class="taskName">
                Lorem, ipsum dolor.
            </div>
            <div class="taskText">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus sed suscipit nesciunt perspiciatis ullam reprehenderit et adipisci eum nemo officiis omnis qui, aut illum, impedit voluptates voluptate nulla incidunt reiciendis, deserunt atque eius ab est! Eius reprehenderit mollitia magni autem eligendi quaerat tempora nobis ducimus ipsum rem corporis sit quasi quisquam soluta, laborum aliquam voluptatibus maxime quo, quidem ipsa deserunt culpa. Laboriosam illum sequi omnis odit rerum cumque, reiciendis vitae hic nemo eius, tenetur consectetur. Beatae recusandae vero perspiciatis commodi, sed molestiae quis! Maxime necessitatibus inventore corporis culpa, similique velit aliquam quo, voluptates quis distinctio aliquid blanditiis consectetur sed placeat.
            </div>
            <div class="toolbar">
                <div class="delete">
                    удалить
                </div>
                <div class="date">
                    дата
                </div>
            </div>
        </div>`;
}
// document.body.innerHTML = ''

createNote.addEventListener("click", () => addNote.style.display = 'flex')