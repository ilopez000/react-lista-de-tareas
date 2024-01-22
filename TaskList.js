import React, { useState, useEffect } from 'react';
import { firestore } from './firebase';
import { collection, query, onSnapshot, addDoc, deleteDoc, doc } from 'firebase/firestore';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskName, setNewTaskName] = useState('');

  useEffect(() => {
    const tasksCollectionRef = collection(firestore, 'tasks');
    const q = query(tasksCollectionRef);
    const unsubscribe = onSnapshot(q, snapshot => {
      const tasksData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTasks(tasksData);
    });

    return unsubscribe;
  }, []);

  const addTask = async (e) => {
    e.preventDefault();
    if (newTaskName.trim() === '') return;

    const tasksCollectionRef = collection(firestore, 'tasks');
    await addDoc(tasksCollectionRef, {
      name: newTaskName,
      completed: false
    });

    setNewTaskName('');
  };

  const deleteTask = async (id) => {
    const taskDocRef = doc(firestore, 'tasks', id);
    await deleteDoc(taskDocRef);
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <form onSubmit={addTask}>
        <input
          type="text"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          placeholder="Nueva tarea"
        />
        <button type="submit">Añadir Tarea</button>
      </form>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.name}
            <button onClick={() => deleteTask(task.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
