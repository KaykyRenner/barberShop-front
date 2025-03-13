import { createContext, useCallback, useContext, useEffect, useState, useMemo } from "react";
import auth from "../services/api/auth-login/authServices";

const AuthContext = createContext({
    isAuthenticated: false,
    login: () => {},
    logout: () => {}
});

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const acessTokenLocal = localStorage.getItem('APP_ACESS_TOKEN');
        if (acessTokenLocal) {
            setToken(JSON.parse(acessTokenLocal));
        } else {
            setToken(null);
        }
    }, []);

    // Função de login
    const handleLogin = useCallback(async (email, senha) => {
        const resultado = await auth(email, senha);
        if (resultado.erro) {
            console.log(resultado.erro);
        } else {
            // Salvando o token sem aspas adicionais
            localStorage.setItem('APP_ACESS_TOKEN', JSON.stringify(resultado.acessToken));
            setToken(resultado.acessToken);
        }
    }, []);

    // Função de logout
    const handleLogout = useCallback(() => {
        localStorage.removeItem('APP_ACESS_TOKEN');
        setToken(null);
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
