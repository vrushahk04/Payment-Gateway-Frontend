import { RouterProvider } from "react-router-dom"
import { Router } from "./Routes"


function App() {

  return (
    <>
      <RouterProvider router={Router} />
      <p>Hello, Payment</p>
    </>
  )
}

export default App
