﻿# MVP-Front-end
 
# Bloco de Notas - Frontend

Este projeto é a parte frontend de um Bloco de Notas simples. Ele permite que os usuários adicionem, editem, excluam e visualizem notas diretamente no navegador. Foi desenvolvido utilizando **HTML**, **CSS** e **JavaScript**.


## Como Usar

### Passos para Visualizar

1. **Abrir o arquivo HTML**:
   - Abra o arquivo `index.html` diretamente no seu navegador. Não há necessidade de servidor backend para visualizar a interface, pois todo o código está embutido na página.

2. **Interagindo com o Bloco de Notas**:
   - **Adicionar Nota**: Preencha os campos de título e descrição e clique em "Adicionar Nota".
   - **Listar Notas**: As notas serão carregadas automaticamente ao carregar a página.
   - **Editar Nota**: Clique no botão "Editar" ao lado de uma nota para alterar seu título e descrição.
   - **Excluir Nota**: Clique no botão "Excluir" ao lado de uma nota para removê-la da lista.

### Arquivos de Frontend

- **HTML**: A estrutura da página é feita com HTML. O formulário de adição de notas e a lista de notas são os elementos principais da interface.
- **CSS**: O arquivo `style.css` contém os estilos que garantem uma aparência limpa e responsiva.
- **JavaScript**: O arquivo `script.js` contém a lógica para manipulação das notas. Ele implementa funções para adicionar, listar, editar e excluir notas.

## Como Funciona

### HTML

O arquivo `index.html` contém a estrutura da página, que inclui:

- Um título principal "Bloco de Notas".
- Um formulário para adicionar notas, com campos para título e descrição.
- Uma lista para exibir as notas existentes.

### CSS

O arquivo `style.css` contém estilos para a interface, incluindo:

- **Reset de margens e padding** para garantir uma consistência entre os navegadores:
    ```css
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    ```

- **Estilo do corpo da página** com centralização de conteúdo e fundo suave:
    ```css
    body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f9;
        color: #333;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
    }
    ```

- **Estilo do formulário de notas** com bordas arredondadas e sombra suave:
    ```css
    form {
        background-color: #fff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        margin-bottom: 40px;
        width: 100%;
        max-width: 500px;
    }
    ```

- **Estilo da lista de notas** com um design limpo e organizado para os itens:
    ```css
    #notes-list li {
        background-color: #efefef;
        padding: 15px;
        margin-bottom: 10px;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }
    ```

- **Responsividade**: A interface se adapta a telas pequenas, ajustando a disposição dos itens:
    ```css
    @media (max-width: 600px) {
        form {
            width: 100%;
            max-width: 100%;
        }
        #notes-list li {
            flex-direction: column;
            align-items: flex-start;
        }
    }
    ```

### JavaScript

O arquivo `script.js` contém a lógica que manipula as notas. As funções principais são:

- **`saveNote()`**: Envia os dados do formulário para adicionar uma nova nota.
- **`loadNotes()`**: Carrega as notas armazenadas e as exibe na página.
- **`deleteNote(id)`**: Exclui uma nota.
- **`editNote(id)`**: Permite editar uma nota, alterando seu título e descrição.



