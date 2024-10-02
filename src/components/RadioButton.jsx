function RadioButton({id, value, name, handleChange, rating}){
    return(
        <li>
            <input 
            id = {id}
            type = 'radio'
            name = {name}
            value = {value}
            checked = {rating === value}
            onChange = {handleChange}/>
            <label htmlFor = {id}>{value}</label>
        </li>
    )
}

export default RadioButton