import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { styles } from "./css/styles";
import React from "react";
import { useState } from 'react';
import LandingScreen  from "./components/LandingScreen";
import RegisterStepOne from './components/RegisterStepOne';
import LoginScreen from "./components/LoginScreen";
import ExperienceScreen from "./components/ExperienceScreen";
import SubwayScreen from './components/SubwayScreen';
import SubwayMapOne from './components/SubwayMapOne';
import SubwayMapTwo from './components/SubwayMapTwo';
import SubwayMapThree from './components/SubwayMapThree';
import SubwayMapFour from './components/SubwayMapFour';
import SubwayMapFive from './components/SubwayMapFive';
import SubwayMapQOne from './components/SubwayMapQOne';
import SubwayMapQTwo from './components/SubwayMapQTwo';
import SubwayMapQThree from './components/SubwayMapQThree';
import SubwayMapQFour from './components/SubwayMapQFour';
import SubwayMapQFive from './components/SubwayMapQFive';




window.settingState = 0;
// window.correctAnswer = 0;



export default function App() {
  const [state, setState] = useState("landingScreen");
  window.settingState = (state) => setState(state);

  // const [AnsState, setAnswer] = useState(AnsState);
  // window.correctAnswer = (AnsState) => setAnswer(0);
  

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      { state === "landingScreen" && <LandingScreen/> }
      { state === "registerStepOne" && <RegisterStepOne/> } 
      { state === "loginScreen" && <LoginScreen/> }
      { state === "experienceScreen" && <ExperienceScreen/> }
      { state === "subwayScreen" && <SubwayScreen/> }
      { state === "subwayMapOne" && <SubwayMapOne/> }
      { state === "subwayMapTwo" && <SubwayMapTwo/> }
      { state === "subwayMapThree" && <SubwayMapThree/> }
      { state === "subwayMapFour" && <SubwayMapFour/> }
      { state === "subwayMapFive" && <SubwayMapFive/> }
      { state === "subwayMapQOne" && <SubwayMapQOne/> }
      { state === "subwayMapQTwo" && <SubwayMapQTwo/> }
      { state === "subwayMapQThree" && <SubwayMapQThree/> }
      { state === "subwayMapQFour" && <SubwayMapQFour/> }
      { state === "subwayMapQFive" && <SubwayMapQFive/> }

      {/* <ExperienceScreen/> */}
      {/* <SubwayScreen/> */}
      {/* <SubwayMapOne/>  */}
      {/* <SubwayMapTwo/> */}
      {/* <SubwayMapThree/> */}
      {/* <SubwayMapFour/> */}
      {/* <SubwayMapFive/> */}
      {/* <SubwayMapQOne/> */}
      {/* <SubwayMapQTwo/> */}
      {/* <SubwayMapQThree/> */}
      {/* <SubwayMapQFour/> */}
      {/* <SubwayMapQFive/> */}

      

    </View>
  );
}
