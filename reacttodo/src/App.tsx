import { useState } from "react";
import "./App.css";

function App() {
  type Task = {
      id: number,
      thing: string
  }

  const [task, setTask] = useState("");
  const [allTasks, setAllTasks] = useState<Task[]>([]);

  const addTask = () => {
    if (task) {
      const newTask: Task = {
        id: allTasks.length + 1,
        thing: task
      }
      setAllTasks([...allTasks, newTask])
      setTask("")
    }
  };

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
            <li key={t.id}>
              {t.thing}
              <button>OK</button>
              <button>X</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
