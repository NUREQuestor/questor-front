import {Routes , Route} from "react-router-dom"

import MainInfo from "../routing/MainInfo"
import AvailableQuest from "../routing/AvailableQuest"
import Profile from "./profile/Profile"
import Settings from "./profile/Settings"
import Introduction from "./questsStart/Introduction"

import "../styles/main.scss"

import Header from "./Header"

const App = () => {
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path="/" element={<MainInfo />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/edit" element={<Settings />} />
            <Route path="/сreate-quest" element={<Introduction />} />
        </Routes>
    </div>
  );
}

export default App;
