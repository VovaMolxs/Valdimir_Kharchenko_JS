class Tasks {
    #tasks = [];

    setTasks(value) {
if (value == "") {
            alert("Введите что нибудь!")
            return;
        } else {
            this.#tasks.push(value);
            tasks.getTask(); 
        }
        
    }
    
    getTask() {
        if (this.#tasks.length == 1) {
                let div = document.querySelector('.tasks');
                let divTask = document.createElement('div');
                divTask.classList.add('task');
                div.append(divTask);
                divTask.insertAdjacentHTML('afterbegin', `<input type="checkbox" name="" id="">
                <p id="text-${0}">${this.#tasks[0]}</p>
                <button class="edit-but" id="${0}">Edit</button>
                `);
            } else {
            let div = document.querySelector('.tasks');
            let divTask = document.createElement('div');
            divTask.classList.add('task');
            div.append(divTask);
            divTask.insertAdjacentHTML('afterbegin', `<input type="checkbox" name="" id="">
            <p id="text-${id}">${this.#tasks[this.#tasks.length - 1]}</p>
            <button class="edit-but" id="${this.#tasks.length-1}">Edit</button>`);
        }
    }

    clearTasks() {
        if (this.#tasks.length > 0) {
            this.#tasks.splice(0, this.#tasks.length);
            let divTask = document.querySelector('.tasks');
            while(divTask.firstChild) {
                divTask.removeChild(divTask.firstChild);
            }

        } else (
            alert("Нечего очищать!")
        )
    }

    editTask(id) {
        while (true) {
            let textEdit = prompt();
            if (textEdit == '') {
                continue;
            } else {
                this.#tasks[id] = textEdit;
                let p = document.getElementById(`text-${id}`).innerHTML = this.#tasks[id];
                return;
            }
        }
    }
    
}

let tasks = new Tasks();

document.querySelector('.text-field__input').addEventListener('keydown', function(e) {
            if (e.keyCode === 13) {
              tasks.setTasks(this.value);
            }
          });

document.querySelector('button').addEventListener('click', () => {
    tasks.clearTasks();
})



document.querySelector('.tasks').addEventListener("click", (event) => {
    if (event.target.matches(".edit-but")) {
        let id = event.target.id
        tasks.editTask(id);
    }
  }, false);

