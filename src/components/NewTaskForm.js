import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("")
  const [category, setCategory] = useState("")
  const categoryOptions = categories.filter(category => category !== "All");
 
  const newTaskCategory = categoryOptions.map(category => (
    <option key={category} value={category} >{category}</option>
  ))
  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit({text, category})
    
  }
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={(e) => setText(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          {/* render <option> elements for each category here */}
          <option defaultValue={""} hidden> </option>
          {newTaskCategory}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
