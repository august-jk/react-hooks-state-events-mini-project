import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All")
  function onTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask])
  }
  function handleDelete(taskText) {
    setTasks(tasks.filter(task => task.text !== taskText))
  }
  function handleCategoryFilter(category) {
    setSelectedCategory(category)
  }
  const filteredTasks = tasks.filter(task => {
    if(selectedCategory === "All") return true;
    return task.category === selectedCategory;
  })
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} handleCategoryFilter={handleCategoryFilter}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={filteredTasks} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
