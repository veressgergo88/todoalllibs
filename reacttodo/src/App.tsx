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
    <div className="flex flex-col mx-auto gap-10">
      <h1 className="text-3xl font-bold underline">DO THINGS</h1>
      <div className="flex gap-5">
        <input
          type="text"
          placeholder="Do Something"
          className="input w-full max-w-xs"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="btn btn-primary" onClick={addTask}>Add</button>
      </div>
      <div>
        <ul>
          {allTasks.map((t) => (
            <div 
              key={t.id}
              className="flex justify-between"
            >
              <p className="text-2xl pr-3">{t.id}</p>
              <p className={t.completed ? "text-2xl px-3 line-through" : "text-2xl px-3"}>{t.thing}</p>
              <div className="flex gap-5">
                <div>
                  <button className="btn btn-success btn-circle" onClick={() => toggleCompleted(t.id)}>OK</button>
                </div>
                <div>
                  <button className="btn btn-square btn-accent" onClick={() => removeTask(t.id)}>X</button>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
}

export default App;
