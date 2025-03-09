import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import auth from "../services/api/auth/authServices";

const AuthContext = createContext({
    isAuthenticated: false,
    login: () => {},
    logout: () => {}
});

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState('');

    useEffect(() => {
        const acessTokenLocal = localStorage.getItem('APP_ACESS_TOKEN');
        if (acessTokenLocal) {
            setToken(JSON.parse(acessTokenLocal));
        } else {
            setToken(undefined);
        }
    }, []);

    // Função de login
    const handleLogin = useCallback(async (email, senha) => {
        const resultado = await auth(email, senha);
        if (resultado.erro) {
            console.log(resultado.message);
        } else {
            // Salvando o token sem aspas adicionais
            localStorage.setItem('APP_ACESS_TOKEN', JSON.stringify(resultado.acessToken));
            setToken(resultado.acessToken);
        }
    }, []);

    // Função de logout
    const handleLogout = useCallback(() => {
        localStorage.removeItem('APP_ACESS_TOKEN');
        setToken(undefined);
    }, []);

    const isAuthenticated = useMemo(() => !!token, [token]);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login: handleLogin, logout: handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuthContext = () => useContext(AuthContext);

export { useAuthContext, AuthProvider };
