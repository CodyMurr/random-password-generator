import { useState, createContext } from "react";

const PasswordContext = createContext();

export function PasswordProvider({children}) {
    const [length, setLength] = useState({
        min: 5,
        max: 30
    });
    const [passParams, setPassParams] = useState({});
    <PasswordContext.Provider value={{
        length, setLength, passParams, setPassParams
    }}>
        {children}
    </PasswordContext.Provider>
}

export default PasswordContext;