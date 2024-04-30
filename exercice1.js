document.addEventListener('DOMContentLoaded', () => {

    // Constantes
    const btnAddTask = document.getElementById('addTask');
    const input = document.getElementById('newTask');
    const taskList = document.getElementById('taskList');


    //Listener
    btnAddTask.addEventListener("click", () => {
        // Création de mes éléments DOM
        const div = document.createElement("div");
        div.classList.add('d-flex');
        div.classList.add('gap-2');

        const h4 = document.createElement("h4");
        const checkbox = document.createElement("input");
        checkbox.setAttribute('type', 'checkbox');
        checkbox.classList.add('ml-4');

        checkbox.addEventListener('change', function(){
            if(this.checked == true){
                div.style.backgroundColor = "green";
            }else{
                div.style.backgroundColor = "";
            }
        })

        h4.innerHTML = input.value;

        // j'Ajoute les élément dans la div que je viens de créé
        div.appendChild(h4);
        div.appendChild(checkbox);

        // J'ajoute la div qui contient mon h4 et ma checkbox
        taskList.append(div);
        input.value = "";
    })

    //Functions

})