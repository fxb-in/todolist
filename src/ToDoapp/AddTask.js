import React ,{useState} from 'react';

const AddTask = ({addTask}) => {
    const [value,setValue]= useState("");
const addItem =()=>{
    addTask(value);
    setValue("");
    }
  return (
    <div>
        <div className="input-container">
            <input type="texts " className="input" placeholder="Add task" value={value}
            onChange={(e)=>{setValue(e.target.value)}}
            
            
            />
            <button onClick={addItem} className="add-btn">Add</button>
        </div>
    </div>
  )
}

export default AddTask;
