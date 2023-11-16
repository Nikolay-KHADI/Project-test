import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router'

function App() {

  return (
    <>
    {/* // <Provider store={store}> */}
        {/* <CssBaseline /> */}
        <RouterProvider router={router} />
    {/* // </Provider> */}
    </>
  )
}

export default App
