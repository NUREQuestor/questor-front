import {Routes , Route} from "react-router-dom"

import MainInfo from "../routing/MainInfo"
import AvailableQuest from "../routing/AvailableQuest"
import Profile from "./profile/Profile"
import Settings from "./profile/Settings"
import FirstStepCreate from "./createQuest/FirstStepCreate";
import SecondStepCreate from "./createQuest/SecondStepCreate";
import ThirdStepCreate from "./createQuest/ThirdStepCreate";
import LastStepCreate from "./createQuest/LastStepCreate";
import IntroductionQuest from "./startQuest/IntroductionQuest"
import CompletionQuest from "./startQuest/CompletionQuest"
import ResultQuest from "./startQuest/ResultQuest";

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
            <Route path="/first_step_create" element={<FirstStepCreate />} />
            <Route path="/second_step_create" element={<SecondStepCreate />} />
            <Route path="/third_step_create" element={<ThirdStepCreate />} />
            <Route path="/last_step_create" element={<LastStepCreate />} />
            <Route path="/start_quest_introduction" element={<IntroductionQuest />} />
            <Route path="/completion-quest" element={<CompletionQuest />} />
            <Route path="/result-quest" element={<ResultQuest />} />
        </Routes>
    </div>
  );
}

export default App;
