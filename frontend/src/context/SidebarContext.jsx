import { createContext, useContext, useEffect, useState } from 'react';

const SidebarContext = createContext();

export const useSidebar = () => {
    return useContext(SidebarContext);
};

export const SidebarProvider = ({ children }) => {
    const [showSidebar, setShowSidebar] = useState(true);

    useEffect( () =>
        {
            console.log("showSidebar: ", showSidebar);
        }
    )

    return (
        <SidebarContext.Provider value={[showSidebar, setShowSidebar]}>
            {children}
        </SidebarContext.Provider>
    );
};
