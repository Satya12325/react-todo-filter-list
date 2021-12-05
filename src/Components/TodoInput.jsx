import { useState } from "react";


const TodoInput = ({onTask}) => {
    const [text, setText] = useState("")

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleClick = () => {
        
        onTask(text)
    }
    return (
        <div>
            <input 
              type="text"
              placeholder="Add Something..."
              onChange={handleChange}
              value={text}      
                    />
            <button onClick={handleClick}>Add</button>


        </div>
        
    )
}

export default TodoInput;