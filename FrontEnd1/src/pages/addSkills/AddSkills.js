import React, {useState} from 'react'

function AddSkills() {
    const [formFields, setformFields] = useState([
        {name : '' , age : ''}
    ])
    const handelFormChange = () => {
        console.log(index, Event.target.name)
    }
  return (
    <div className='AddSkills'>
        <form >
        {formFields.map((form, index) => {
            return (
                <div key={index}>
                    <input 
                    type="text" 
                    name='name' 
                    placeholder='name' 
                    onChange={
                        event => handelFormChange(event, index)
                    }
                    value = {form.name}
                    />
                    <input 
                    type="text" 
                    name='age' 
                    placeholder='age' 
                    onChange={
                        event => handelFormChange(event, index)
                    }
                    value = {form.age}
                    />
                </div>
            )
        })}
        </form>
    </div>
  )
}

export default AddSkills