import { RouterProvider } from "react-router-dom"
import { Router } from "./Routes"
import { useAppSelector } from "./Store"
import { ThemeProvider } from "@emotion/react";
import { getTheme } from "./Theme";


function App() {
  const { isToggleTheme } = useAppSelector((state) => state.layout);
  return (
    <>
      <ThemeProvider theme={getTheme(isToggleTheme === "light" ? "light" : "dark")} >
        <RouterProvider router={Router} />
        <p>Hello, Payment</p>
      </ThemeProvider>
    </>
  )
}

export default App
