import React from 'react';
import { firestore } from './firebase'; // Asegúrate de que la ruta sea correcta
import { doc, updateDoc, deleteDoc } from 'firebase/firestore';

const Task = ({ task }) => {
  // Cambiar el estado de completado de la tarea
  const toggleCompleted = async () => {
    const taskDoc = doc(firestore, 'tasks', task.id);
    await updateDoc(taskDoc, {
      completed: !task.completed
    });
  };

  // Eliminar una tarea
  const deleteTask = async () => {
    const taskDoc = doc(firestore, 'tasks', task.id);
    await deleteDoc(taskDoc);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={toggleCompleted}
      />
      <p style={{ textDecoration: task.completed ? 'line-through' : 'none', flexGrow: 1 }}>
        {task.name}
      </p>
      <button onClick={deleteTask}>Eliminar</button>
    </div>
  );
};

export default Task;
