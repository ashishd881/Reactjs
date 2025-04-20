import {createContext, useContext} from "react"

export const ThemeContext = createContext({
    themeMode: "Light",           //ye varable hai
    darkTheme: () => {},           //ye method hai
    lightTheme:() => {},           //ye method hai
})
//ThemeContext.provider ko yahi se export kar diya so now we will wrap with ThemeProvider
export const ThemeProvider = ThemeContext.Provider


//custom hooks bana ke export kar diya

export default function useTheme(){            //usetheme ThemeContext ke andar jitni values hai unka access dega
    return useContext(ThemeContext)
}