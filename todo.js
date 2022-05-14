const todosListEl = document.querySelector('[data-todo-list]');
const defaultItem = document.querySelector('[data-todo-item-def]');
const todosItem = document.querySelectorAll('[data-todo-item]');
const deleteItem = document.querySelectorAll('[data-todo-item-del]');
const todosNote = document.querySelectorAll("[data-todo-item-note]")
const defaultItemData = document.querySelector("[data-todo]")


function updateInput(element) {
    element.value = ""
}
document.addEventListener("keypress", e => {
    let inputValue = defaultItemData.value
    if ((e.keycode === 13 || e.which === 13) && inputValue != "") {


        const Object = `
            <div class="todo__item" data-todo-item>
                <button>
                    <img src="edit-solid.svg" />
                </button>
                <input placeholder="New task...." type="text" value="${inputValue}" onfocus="${focusItem()}" onchange="${focusItem()}" spellcheck = "false"></input>

                 <div class="details">
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

    }
})

const focusItem = () => {  
 defaultItem.style.border = "2px solid goldenrod"
}