function Checkbox({name, value, text, itemsChecked, onChange}){
    return(
        <li>
            <label>
                <input
                name = {name}
                type = "checkbox"
                value = {value}
                checked =  {itemsChecked.includes(value)}
                onChange= {onChange}/>
                {text}              
            </label>
        </li>
    )
}

export default Checkbox