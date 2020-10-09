import React from "react"


const AddToDoForm = (props) => {
    const { addTodo, setFilter } = props;
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const newTodoText = event.target.elements.todo.value;
        addTodo(newTodoText);
        event.target.reset();
        setFilter((filter) => (filter === "completed" ? "all" : filter))
    };
    return (
        <form onSubmit={handleFormSubmit}>
            <div className="input-group mb-2">
               <label className="input-group-text" htmlFor="todo">
                    Add item ...
          </label>
                <input className="form-control" id="todo" required={true} />
            </div>
            <button type="submit" className="btn btn-primary">
            <i class='fas fa-plus add'></i>
                Ajouter une tâche
        </button>
        </form>
    );
};
export default AddToDoForm