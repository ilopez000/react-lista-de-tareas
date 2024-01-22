import React from 'react';
import {useState, useEffect} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import TaskList from './TaskList';
import { useAuth } from './Auth'; // Asegúrate de que estás utilizando un contexto de autenticación

function App() {
  const { currentUser } = useAuth();

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={!currentUser ? <Login /> : <Navigate to="/tasks" />} />
        <Route path="/register" element={!currentUser ? <Register /> : <Navigate to="/tasks" />} />
        <Route path="/tasks" element={currentUser ? <TaskList /> : <Navigate to="/login" />} />
        <Route path="/" element={<Navigate to={currentUser ? "/tasks" : "/login"} />} />
      </Routes>
    </div>
  );
}

export default App;
