import { Routes, Route } from "react-router-dom"
import PlayGame from "./pages/PlayGame/PlayGame"
import StartGame from "./pages/StartGame/StartGame"

const App = () => {
  return (
    <>
      <div>
        Navbar
      </div>
      <Routes>
        <Route path="/play" element={<PlayGame />} />
        <Route path="/start" element={<StartGame />} />
        <Route path="*" element={<div> not found </div>} />
      </Routes>
    </>

  )
}

export default App