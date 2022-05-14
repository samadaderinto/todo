const todosContainer = document.querySelector('.todos');
const button = document.querySelector('.data--button');
const input = document.querySelector('.data--input');
const  todos = document.querySelectorAll('.todos--item');
const cancel = document.querySelectorAll(".absolute")

cancel.forEach(curr => {
    curr.addEventListener("click", e => {
        console.log(e.parentElement)
    })
})
const AddEl = () => {
    let val = input.value
    const className = "todos--item"
    if (val === "") {
        return
    } else {
        console.log(todos.length)
        
            const ref = ` <span class="${className}">${val}
                           <div class="absolute">&times<div>
                         </span>`
       todosContainer.insertAdjacentHTML('beforeend', ref); 
       input.value = ""
       input.focus()
    
       
    }        
 }
button.addEventListener('click', e => {
    e.preventDefault()
    AddEl()
})
document.addEventListener('keypress', e => {
    if (e.keycode === 13 || e.which === 13) {
      AddEl()
    } 
    console.log(cancel.length)
})


// i am done {bye bye ugwu}
