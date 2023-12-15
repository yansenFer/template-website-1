import "./App.css"
import Content1 from "./components/Content1"
import Content2 from "./components/Content2"
import Content3 from "./components/Content3"
import Content4 from "./components/Content4"
import Content5 from "./components/Content5"
import Content6 from "./components/Content6"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="flex relative flex-col">
      <Navbar />
      <Content1 />
      <Content2 />
      <Content3 />
      <Content4 />
      <Content5 />
      <Content6 />
    </div>
  )
}

export default App
