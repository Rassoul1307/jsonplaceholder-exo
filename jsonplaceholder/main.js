// creation de taches

function createtache() {
    const taskInput = document.getElementById("taskInput");
    const taskTitle = taskInput.value;

    if (taskTitle.trim() === "") {
            alert("Veuillez entrer un titre de tâche.");
            return;
    }

    fetch("https://jsonplaceholder.typicode.com/todos",{
        method: 'POST',  
        headers:{
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
            userId: 1,
            title: taskTitle,
            completed: false
        })
        })
        .then(response => response.json())
        .then(data =>{
            taskInput.value = ""
            displayTask(data)

        })
        .catch(error => console.error("Erreur lors de la création de la tâche :", error))
}

// Afficher les taches 

function displayTask(task) {
    const liElement =document.createElement('li')
    const taches = document.getElementById('taches')
    const btnSupprimer = document.createElement('button')
    const btnTerminer = document.createElement('button')
    const divActions = document.createElement('div')

    
    btnSupprimer.textContent = "Supprimer"
    btnSupprimer.setAttribute('onclick',`deleteTask(${task.id})`)
    btnTerminer.classList= "btnTerminer"
    btnTerminer.textContent = "Terminer"
    divActions.append(btnTerminer)
    divActions.append(btnSupprimer)
    liElement.innerHTML = `${task.title}`
    taches.appendChild(liElement)
    liElement.append(divActions)
    
}

// Fonction pour récupérer et afficher la liste des tâches
fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(data => {
    data.forEach(task => displayTask(task));
})
.catch(error => console.error("Erreur lors de la récupération des tâches :", error));

// Fonction pour supprimer une tâche
function deleteTask(taskId) {
    //mettre a jour la liste des taches en supprimer la tache avec l'id
    // const url ="https://jsonplaceholder.typicode.com/todos/"+ taskId;
    // fetch (url,{method:"DELETE"})
    // .then(()=>{
    //     const tasksListe = document.querySelectorAll('#taches > li');
    //     tasksListe[taskId-1].remove();
    // }).catch((err)=>{console.log(`Error: ${err}`)});
};
