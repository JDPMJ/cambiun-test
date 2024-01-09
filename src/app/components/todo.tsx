"use client";

import { useState, useEffect, FormEvent } from "react";
import { Task } from "../models/task";
import { remult } from "remult";

const taskRepo = remult.repo(Task);

export default function Todo() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState("second");

  useEffect(() => {
    taskRepo
      .find({
        orderBy: {
          createdAt: "asc"
        },
        where: {
          completed: undefined
        }
      })
      .then(setTasks);
  }, []);

  async function addTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const newTask = await taskRepo.insert({ title: newTaskTitle });
      setTasks([...tasks, newTask]);
      setNewTaskTitle("");
    } catch (err: any) {
      alert(err.message);
    }
  }

  async function setComplete(task: Task, completed: boolean) {
    const updateTask = await taskRepo.save({ ...task, completed });
    setTasks(tasks.map(t => task ? updateTask : t));
  }

  async function deleteTask(task: Task) {
    try {
      await taskRepo.delete(task);
      setTasks(tasks.filter(t => t !== task));
    } catch (err: any) {
      alert(err.message);
    }
  }

  return (
    <div>
      <h1>Todo {tasks.length}</h1>
      <main>
        <form action="" onSubmit={addTask}>
          <input
            type="text"
            value={newTaskTitle}
            placeholder="To do"
            onChange={e => setNewTaskTitle(e.target.value)}
          />
          <button>Add</button>
        </form>
        {tasks.map(task => (
          <div key={task.id}>
            <input type="checkbox" checked={task.completed} onChange={e => setComplete(task, e.target.checked)} />
            <span>{task.title}</span>
            <button onChange={() => deleteTask(task)}>Delete</button>
          </div>
        ))}
      </main>
    </div>
  );
};