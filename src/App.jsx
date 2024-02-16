import { Route, Routes } from 'react-router-dom'
import './App.scss'
import { router } from './router'

function App() {

  return (
    <>
      <Routes>

        {router.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.element}
          />
        ))}

        {router.map(route => route.children && route.children.map((childRoute, childIndex) => (
          <Route
            key={childIndex}
            path={childRoute.path}
            element={childRoute.element}
          />
        )))}

      </Routes>
    </>
  )
}

export default App
