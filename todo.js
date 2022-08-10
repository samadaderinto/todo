const todosListEl = document.querySelector('[data-todo-list]');
const defaultItem = document.querySelector('[data-todo-item-def]');
const defaultItemData = document.querySelector("[data-todo]")
const todosItem = document.querySelectorAll('[data-todo-item]');
const todosNote = document.querySelectorAll("[data-todo-item-note]")
const deleteItem = document.querySelectorAll('[data-todo-item-del]');
const toggleDetail =  document.querySelector('[btn-todo-item]');
const detail = document.querySelector('[data-todo-item-detail]');


function updateInput(element) {
    element.value = ""


}



document.addEventListener("keypress", e => {
    let inputValue = defaultItemData.value
    if ((e.keycode === 13 || e.which === 13) && inputValue != "") {

        const Object = `
            <div class="todo__item" data-todo-item>
                <div class="todo__item__main"> 
                    <button>
                      <img src="img/close.svg" />
                    </button>
                    <input placeholder="New task...." type="text" value="${inputValue}" spellcheck = "false"></input>
                    <span btn-todo-item>
                      <img src="img/expand.svg" />
                    </span>
                </div>
               
                <div class="details" data-todo-item-detail>
                    <div class="details-info--1">
                        <p>Notes</p>
                        <textarea maxlength="270" data-todo-item-note></textarea>
                    </div>

                    <div class="details-info--2">
                        <div class="details-info--2__date">
                            <div>
                                <input type="radio" name="date" id="Today"></input>
                                <label for="Today">
                                    Today
                                </label>
                            </div>
                            <div>
                                <input type="radio" name="date" id="Tommorow"></input>
                                <label for="Tommorow">
                                    Tommorow
                                </label>
                            </div>
                            <div>
                                <input type="date" name="date" id="calender"></input>
                                <label for="calender">
                                    Set date
                                </label>
                            </div>
                            
                        </div>
                        <button data-todo-item-del>Delete</button>
                    </div>

                </div> 

            </div>
           
       `
        todosListEl.insertAdjacentHTML("afterbegin", Object)
        updateInput(defaultItemData)
        console.log(toggleDetail)

    }
})

if (toggleDetail != null) {
    
toggleDetail.addEventListener("click", () => {
    console.log(toggleDetail)
    detail.forEach(detail => {
        detail.classList.toggle(".detailsVissble")
    })
} )
}




defaultItemData.addEventListener('focus', () => {
    defaultItem.style.border = "2px solid goldenrod"
    setTimeout(() => {
        defaultItem.style.border = "2px solid transparent"
    }, 3000);

})
