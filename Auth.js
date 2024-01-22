import React, { useState, useEffect, useContext, createContext } from 'react';
import { auth, firestore } from './firebase'; // Asegúrate de que la ruta a firebase.js sea correcta


// Crea un contexto de autenticación
const AuthContext = createContext();

// Hook para usar el contexto de autenticación
export const useAuth = () => {
    return useContext(AuthContext);
};

// Proveedor de autenticación
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Suscribirse al usuario actual de Firebase Auth
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe; // Desuscribirse al desmontar
    }, []);

    // Funciones de autenticación
    const signup = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password);
    };

    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password);
    };

    const logout = () => {
        return auth.signOut();
    };

    // Valor del contexto
    const value = {
        currentUser,
        login,
        signup,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
