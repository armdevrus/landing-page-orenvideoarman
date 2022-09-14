import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const InitialState = {
  darkMode: false,
};

const themeReducer = (state, { type }) => {
  switch (type) {
    case "TOGGLE": {
        return { darkMode: !state.darkMode}
    }
    default: {
        return state
    }
  }
};

export const ThemeProvider = ({children}) => {
    const [state, dispatch] = useReducer(themeReducer, InitialState)

    return(
        <ThemeContext.Provider value={{state, dispatch}}>
            {children}
        </ThemeContext.Provider>
    )
}
