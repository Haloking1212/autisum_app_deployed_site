import React from "react";
import { View, Text, ImageBackground, ScrollView, Button} from "react-native";
import { subwayMapQOneStyles } from "../css/subwayMapQOneStyles";
import {useState} from 'react';
// import incrementAns  from "../functions/incrementAns";
// import AnswerNum from "./AnswerNum";



function SubwayMapQOne () {

    // let correctAns = 0;

    // function incrementAns() {
    //     // console.log(correctAns);
    //     correctAns += 1;
    //     console.log(correctAns);
    //     return;
    // }



    const [buttonTextA, setButtonTextA] = useState('');
    const [buttonTextB, setButtonTextB] = useState('');
    const [buttonTextC, setButtonTextC] = useState('');
    const [buttonTextD, setButtonTextD] = useState('');


    const onPressAHandler = event => setButtonTextA('❌❌❌')
    const onPressBHandler = event => setButtonTextB('❌❌❌')
    const onPressCHandler = event => setButtonTextC('❌❌❌')
    const onPressDHandler = event => setButtonTextD('✅✅🎉🎉')

    





    return (
        <ScrollView>
            <Text style={subwayMapQOneStyles.emptyText}></Text>
            <Button title="Back" onPress={() => window.settingState("subwayMapFive")} style={subwayMapQOneStyles.backButton}/>
            <ImageBackground source={{uri:"https://i.pinimg.com/originals/d9/30/1f/d9301f4b52636bd9ba43db3c43599cdf.jpg"}} style={subwayMapQOneStyles.backgroundPhoto}>

            </ImageBackground>
            <Text>Which train(s) can you take to go to Time Square?</Text>

            <View style={subwayMapQOneStyles.parentButtonView}>
                
                <View style={subwayMapQOneStyles.buttonView}>
                    <Button title={"A"} onPress={onPressAHandler}></Button> 
                    <Text>1 Line (Red Line) {buttonTextA}</Text>
                </View>

                <View style={subwayMapQOneStyles.buttonView}>
                    <Button title={"B"} onPress={onPressBHandler}></Button> 
                    <Text>M Line (Orange Line) {buttonTextB}</Text>
                </View>

                <View style={subwayMapQOneStyles.buttonView}>
                    <Button title={"C"} onPress={onPressCHandler}></Button> 
                    <Text>R Line (Yellow Line) {buttonTextC}</Text>
                </View>

                <View style={subwayMapQOneStyles.buttonView}>
                    <Button title={"D"} onPress={onPressDHandler}>{}</Button> 
                    <Text>1/2/3, R/W/N/Q,7,S Line {buttonTextD}</Text>
                </View>
            </View>

            <Button title="Next" onPress={() => window.settingState("subwayMapQTwo")}/>
            <Text style={subwayMapQOneStyles.emptyText}></Text>
        </ScrollView>
    )
}

export default SubwayMapQOne;
