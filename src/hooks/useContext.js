import { Component, createContext, useContext, useState } from "react";

export default class ThemeChangerClass extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          width: "400px",
          height: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#d3d3d3",
        }}
      >
        Class component theme
      </div>
    );
  }
}




export const ThemeFuncContext = createContext({});

export const ThemeFuncProvider = ({ children }) => {
    const [darkTheme, setDarkTheme] = useState(true);

    const toggleTheme = () =>{
        setDarkTheme(preDarkTheme => !preDarkTheme )
        console.log('darkTheme', darkTheme)
    }

    const value = {
        darkTheme,
        toggleTheme
    }

  return (
    <ThemeFuncContext.Provider value={value}>   
      {children}
    </ThemeFuncContext.Provider>
  );
};

export function ThemeChangerFunc() {

  const {darkTheme, toggleTheme} = useContext(ThemeFuncContext);

  const themeStyle = {
    background: darkTheme ? '#333' : '#CCC',
    color: darkTheme ? '#CCC' : '#333',
    padding: '2rem',
    margin: '2rem',
    width: "400px",
    height: "200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }
 
  return (
   
    <ThemeFuncProvider>
    <button onClick={toggleTheme}>Toggle Theme</button>
      <div
        style={themeStyle}
      >
        Function component theme
      </div>
    </ThemeFuncProvider>
  );
}
