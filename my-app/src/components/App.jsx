import { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";

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
import { USER_TYPES, CREATED_QUESTS_TYPES, PUBLIC_QUESTS_TYPES } from "../constants/types";
import { getConfigUserId } from "../redux/selectors";
import PreviewQuest from "../components/createQuest/PreviewQuest"

import "../styles/main.scss"

import Header from "./Header"

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const userId = useSelector(getConfigUserId);

  useEffect(() => {
    if(userId) {
      dispatch({type: USER_TYPES.ME, payload: { id: userId }});
      dispatch({type: CREATED_QUESTS_TYPES.GET});
      dispatch({type: PUBLIC_QUESTS_TYPES.GET});
    }
  }, [userId])

  useEffect(() => {
    if(!userId && location !== "/") {
      navigate("/");
    }
  }, [userId, location])

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
          <Route path="/completion-quest" element={<CompletionQuest />} />
          <Route path="/result-quest" element={<ResultQuest />} />
          <Route path="/quest/:id/preview" element={<PreviewQuest />} />
          <Route path="/quest/:id" element={<IntroductionQuest />} />
          <Route path="/available_quests" element={<AvailableQuest />} />
        </Routes>
    </div>
  );
}

export default App;
