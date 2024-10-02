import Checkbox from "./CheckBox"
import RadioButton from "./radioButton"
import {useState} from 'react'

function Form({submit}){
    const [formData, setFormData] = useState({
        bestFeatures: [],
        worstFeatures: [],
        consistency: 0,
        color: 0,
        logo: 0,
        spendTime: [],
        username: "",
        email: ""
    })
    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }
    const handleCheckChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.checked ? 
                [...formData[event.target.name], event.target.value] :
                formData[event.target.name].filter(c => c !== event.target.value)
        })
    }  
    return(
        <form 
        className = "form"
        onSubmit = {(event) => {
            event.preventDefault()
            submit(formData)
            setFormData({
                bestFeatures: [],
                worstFeatures: [],
                consistency: 0,
                color: 0,
                logo: 0,
                spendTime: [],
                additionalThoughts: "",
                username: "",
                email: ""
            })
        }
        }>
          <h2>Tell us what you think about your rubber duck!</h2>

          <div className="form_group">
            <h3>What would you say are the best features of your rubber duck?</h3>
            <ul>
              <Checkbox name = {"bestFeatures"} value = {"yellow" } text = {"It's yellow!"} itemsChecked = {formData.bestFeatures} onChange = {handleCheckChange}/>
              <Checkbox name = {"bestFeatures"} value = {"squeaks" } text = {"It squeaks!"} itemsChecked = {formData.bestFeatures} onChange = {handleCheckChange}/>
              <Checkbox name = {"bestFeatures"} value = {"logo" } text = {"It has a logo!"} itemsChecked = {formData.bestFeatures} onChange = {handleCheckChange}/>
              <Checkbox name = {"bestFeatures"} value = {"big" } text = {"It's big!"} itemsChecked = {formData.bestFeatures} onChange = {handleCheckChange}/>
            </ul>
            <h3>What would you say are the worst bits of your rubber duck?</h3> 
            <ul>
              <Checkbox name = {"worstFeatures"} value = {"yellow" } text = {"It's yellow!"} itemsChecked = {formData.worstFeatures} onChange = {handleCheckChange}/>
              <Checkbox name = {"worstFeatures"} value = {"squeaks" } text = {"It squeaks!"} itemsChecked = {formData.worstFeatures} onChange = {handleCheckChange}/>
              <Checkbox name = {"worstFeatures"} value = {"logo" } text = {"It has a logo!"} itemsChecked = {formData.worstFeatures} onChange = {handleCheckChange}/>
              <Checkbox name = {"worstFeatures"} value = {"big" } text = {"It's big!"} itemsChecked = {formData.worstFeatures} onChange = {handleCheckChange}/>
            </ul>
          </div>

          <div className="form_group radio">
            <h3>How do you rate your rubber duck consistency?</h3>
            <ul>
              <RadioButton id = {"consistency-one"} value={"1"} name = "consistency" handleChange = {handleChange} rating = {formData.consistency}/>
              <RadioButton id = {"consistency-two"} value={"2"} name = "consistency" handleChange = {handleChange} rating = {formData.consistency}/>
              <RadioButton id = {"consistency-three"} value={"3"} name = "consistency" handleChange = {handleChange} rating = {formData.consistency}/>
              <RadioButton id = {"consistency-four"} value={"4"} name = "consistency" handleChange = {handleChange} rating = {formData.consistency}/>
            </ul>
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              <RadioButton id = {"color-one"} value={"1"} name = "color" handleChange = {handleChange} rating = {formData.color}/>
              <RadioButton id = {"color-two"} value={"2"} name = "color" handleChange = {handleChange} rating = {formData.color}/>
              <RadioButton id = {"color-three"} value={"3"} name = "color" handleChange = {handleChange} rating = {formData.color}/>
              <RadioButton id = {"color-four"} value={"4"} name = "color" handleChange = {handleChange} rating = {formData.color}/> 
            </ul>
            <h3>How do you rate your rubber duck logo?</h3>
            <ul>
            <RadioButton id = {"logo-one"} value={"1"} name = "logo" handleChange = {handleChange} rating = {formData.logo}/>
              <RadioButton id = {"logo-two"} value={"2"} name = "logo" handleChange = {handleChange} rating = {formData.logo}/>
              <RadioButton id = {"logo-three"} value={"3"} name = "logo" handleChange = {handleChange} rating = {formData.logo}/>
              <RadioButton id = {"logo-four"} value={"4"} name = "logo" handleChange = {handleChange} rating = {formData.logo}/> 
            </ul>
          </div>

          <div className="form_group">          
            <h3>How do you like to spend time with your rubber duck?</h3>
            <ul>
              <Checkbox name = {"spendTime"} value = {"swimming"} text = {"Swimming"} itemsChecked = {formData.spendTime} onChange = {handleCheckChange}/>
              <Checkbox name = {"spendTime"} value = {"bathing"} text = {"Bathing"} itemsChecked = {formData.spendTime} onChange = {handleCheckChange}/>
              <Checkbox name = {"spendTime"} value = {"chatting"} text = {"Chatting"} itemsChecked = {formData.spendTime} onChange = {handleCheckChange}/>
              <Checkbox name = {"spendTime"} value = {"no-time"} text = {"I don't like to spend time with it"} itemsChecked = {formData.spendTime} onChange = {handleCheckChange}/>
            </ul>
          </div>

          <label> What else have you got to say about your rubber duck?
            <textarea
            name="additionalThoughts"
            cols="30"
            rows="10"
            value = {formData.additionalThoughts}
            onChange = {handleChange}/>
        </label>
        <label> Put your name here (if you feel like it):
            <input
            type="text"
            name="username"
            value= {formData.username}
            onChange={handleChange} />
        </label>
        <label> Leave us your email pretty please??
            <input
            type="email"
            name="email"
            value={formData.email} 
            onChange={handleChange}/>
        </label>
        <input className="form__submit" type="submit" value="Submit Survey!" />
        </form>
    )
}

export default Form 