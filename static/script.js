// Função para salvar a nota
function saveNote() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    if (!title.trim() || !description.trim()) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    fetch('/add_note', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        document.getElementById('title').value = '';
        document.getElementById('description').value = '';
        loadNotes();
    })
    .catch(error => console.error('Erro ao salvar a nota:', error));
}

// Função para carregar notas
function loadNotes() {
    fetch('/notes')
        .then(response => response.json())
        .then(notes => {
            const notesList = document.getElementById('notes-list');
            notesList.innerHTML = '';

            notes.forEach(note => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `<strong>${note.title}</strong>${note.description} <br>
                                      <button onclick="editNote(${note.id})">Editar</button> 
                                      <button onclick="deleteNote(${note.id})">Excluir</button>`;
                notesList.appendChild(listItem);
            });
        });
}

// Função para excluir uma nota
function deleteNote(id) {
    fetch(`/notes/${id}`, { method: 'DELETE' })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            loadNotes();
        })
        .catch(error => console.error('Erro ao excluir a nota:', error));
}

function editNote(id) { 
    const newTitle = prompt("Novo título:"); 
    const newDescription = prompt("Nova descrição:"); 
    if (newTitle && newDescription) { 
        fetch(`/notes/${id}`, { 
            method: 'PUT', 
            headers: { 'Content-Type': 'application/json', }, 
            body: JSON.stringify({ 
                title: newTitle, description: newDescription }) }) 
                .then(response => response.json()) 
                .then(data => { alert(data.message); 
                    loadNotes(); }) .catch(error => console.error('Erro ao editar a nota:', error))
}}

// Carregar as notas ao abrir a página 
window.onload = loadNotes;