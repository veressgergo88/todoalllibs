import { useState } from "react";
import "./App.css";

function App() {
  type Task = {
      id: number,
      thing: string,
      completed: boolean
  }

  const [task, setTask] = useState("");
  const [allTasks, setAllTasks] = useState<Task[]>([]);

  const addTask = () => {
    if (task) {
      const newTask: Task = {
        id: allTasks.length + 1,
        thing: task,
        completed: false
      }
      setAllTasks([...allTasks, newTask])
      setTask("")
    }
  };

  const removeTask = (id:number) => {
    const newAllTasks = allTasks.filter((task) => task.id !== id)
    
    const updatedTasks = newAllTasks.map((task, index) => ({
      ...task,
      id: index + 1
  }))

    setAllTasks(updatedTasks)
  }

  const toggleCompleted = (id:number) => {
    const updatedTasks = allTasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    )
    setAllTasks(updatedTasks)
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline">DO THINGS</h1>
      <div>
        <input
          type="text"
          placeholder="Do Something"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <div>
        <ul>
          {allTasks.map((t) => (
            <li 
              key={t.id}
              className={t.completed ? "line-through" : ""}
            >
              {t.id}
              {t.thing}
              <button onClick={() => toggleCompleted(t.id)}>OK</button>
              <button onClick={() => removeTask(t.id)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
