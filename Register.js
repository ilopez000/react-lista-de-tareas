import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { auth } from './firebase'; // Asegúrate de que la ruta a firebase.js sea correcta
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Redirigir a la página de tareas después del registro
      navigate('/tasks');
    } catch (error) {
      console.error("Error al crear la cuenta: ", error.message);
      // Aquí puedes manejar el error, como mostrar un mensaje al usuario
    }
  };

  return (
    <div>
      <h1>Registrarse</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
          required
        />
        <button type="submit">Registrarse</button>
      </form>
      <p>
        ¿Ya tienes una cuenta? <Link to="/login">Iniciar sesión</Link>
      </p>
    </div>
  );
};

export default Register;
