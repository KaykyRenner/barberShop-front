import { createContext, useCallback, useContext, useState } from "react";

const DrawerContext = createContext();

const DrawerProvider = ({ children }) => {
    const [isDrawerClosed, setDrawerClosed] = useState(false);

    const toggleDrawer = useCallback(() => {
        setDrawerClosed((prevDrawer) => !prevDrawer);
    }, []);

    return (
        <DrawerContext.Provider value={{ isDrawerClosed, toggleDrawer }}>
            {children}
        </DrawerContext.Provider>
    );
};

const useDrawer = () => {
    return useContext(DrawerContext);
};

export { DrawerProvider, useDrawer };
