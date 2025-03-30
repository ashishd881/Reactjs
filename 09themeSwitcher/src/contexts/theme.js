import {createContext, useContext} from "react"

export const ThemeContext = createContext({
    themeMode: "Light",
    darkTheme: () => {},
    lightTheme:() => {},
})
//ThemeContext.provider ko yahi se export kar diya
export const ThemeProvider = ThemeContext.Provider


//custom hooks bana ke export kar diya

export default function useTheme(){
    return useContext(ThemeContext)
}