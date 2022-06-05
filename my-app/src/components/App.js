import {Routes , Route} from "react-router-dom"

import CreateQuest from "../routing/CreateQuest"
import AvailableQuest from "../routing/AvailableQuest"

import "../styles/main.scss"

import Header from "./Header"

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path="/" element={<CreateQuest />} />
            <Route path="availableQuests" element={<AvailableQuest />} />
        </Routes>
    </div>
  );
}

export default App;
