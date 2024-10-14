import { useContext, useState } from "react";
const ThemeContext = React.createContext();

function App() {
    const [theme, setTheme] = useState("light");
    return(
        <ThemeContext.Provider value={{ theme, setTheme}}>
            <Toolbar/>
        </ThemeContext.Provider>
    );
}

function Toolbar(){
    return(
        <div>
            <ThemeButton/>
        </div>
    );
}
function ThemeButton() {
    const { theme, setTheme} = useContext(ThemeContext);
    retur (
        <button onClick={() => setTheme (theme === "light" ? "dark" : "light")} style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light"}}> Toggle Theme
        </button>
    )
}