import React from "react"


const SelectTodos = (props) => {
    const { filter, setFilter } = props
    const handleSelectChange = (event) => {
        setFilter(event.target.value)
    }
    return (
        <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="select">Filtrer les tâches</label>
            <select className="form-select" id="select" value={filter} onChange={handleSelectChange}>
                
                <option value="all">Toutes</option>
                
                <option value="completed">Terminées</option>
                
                <option value="notcompleted">pas Terminées</option>
            </select>
        </div>)
}

export default SelectTodos