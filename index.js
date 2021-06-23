const form = document.querySelector("form")
form.addEventListener("submit", addMovie)
const message = document.querySelector('#message')

function addMovie(event) {
    event.preventDefault()
    const inputField = document.querySelector('input')
    
    const movie = document.createElement('li')
    
    const movieTitle = document.createElement('span')

    movieTitle.textContent = inputField.value
    const deleteBtn = document.createElement("button")
    deleteBtn.textContent ="x"
    deleteBtn.addEventListener("click", deleteMovie)
    movie.appendChild(deleteBtn)

    movieTitle.addEventListener("click", crossOffMovie)
    


    movie.appendChild(movieTitle)

    const list = document.querySelector('ul')
    list.appendChild(movie)
    inputField.value=" "
}

function deleteMovie(event) {
    event.target.parentNode.remove()
    // message.textContent = "Movie deleted!"
    message.textContent = `${event.target.parentNode.firstChild.textContent.slice(0,-1)} deleted!`
    revealMessage()
   
}

form.addEventListener("submit", addMovie)

function crossOffMovie(event) {
    event.target.classList.toggle("checked")
    if (event.target.classList.contains('checked') === true){
        // message.textContent = 'Movie watched'
        message.textContent = `${event.target.textContent} watched!`
    } else {
        // message.textContent = 'Movie added back'
        message.textContent = `${event.target.textContent} added back!`
    }
    revealMessage()
}

function revealMessage(event) {
    message.classList.remove('hide')
    setTimeout(() =>  {
        message.classList.add('hide')
    }, 1000)
}