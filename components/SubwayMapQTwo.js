import React from "react";
import { View, Text, ImageBackground, ScrollView, Button} from "react-native";
import { subwayMapQTwoStyles } from "../css/subwayMapQTwoStyles";
import {useState} from 'react';



function SubwayMapQTwo () {
    const [buttonTextA, setButtonTextA] = useState('');
    const [buttonTextB, setButtonTextB] = useState('');
    const [buttonTextC, setButtonTextC] = useState('')
    const [buttonTextD, setButtonTextD] = useState('')


    const onPressAHandler = event => setButtonTextA('❌❌❌')
    const onPressBHandler = event => setButtonTextB('❌❌❌')
    const onPressCHandler = event => setButtonTextC('❌❌❌')
    const onPressDHandler = event => setButtonTextD('✅✅🎉🎉')


    return (
        <ScrollView>
            <Text style={subwayMapQTwoStyles.emptyText}></Text>
            <Button title="Back" onPress={() => window.settingState("subwayMapQOne")} style={subwayMapQTwoStyles.backButton}/>
            <ImageBackground source={{uri:"https://i.pinimg.com/originals/d9/30/1f/d9301f4b52636bd9ba43db3c43599cdf.jpg"}} style={subwayMapQTwoStyles.backgroundPhoto}>

            </ImageBackground>
            <Text>How do you go from Astor Pl to Queens Plaza?</Text>

            <View style={subwayMapQTwoStyles.parentButtonView}>
                
                <View style={subwayMapQTwoStyles.buttonView}>
                    <Button title={"A"} onPress={onPressAHandler}></Button> 
                    <Text>Take the 6 Line (Green Line) {buttonTextA}</Text>
                </View>

                <View style={subwayMapQTwoStyles.buttonView}>
                    <Button title={"B"} onPress={onPressBHandler}></Button> 
                    <Text>Take the 7 Line (Purple Line) {buttonTextB}</Text>
                </View>

                <View style={subwayMapQTwoStyles.buttonView}>
                    <Button title={"C"} onPress={onPressCHandler}></Button> 
                    <Text>6 Line transfer to 7 Line (Green Line & Purple Line) {buttonTextC}</Text>
                </View>

                <View style={subwayMapQTwoStyles.buttonView}>
                    <Button title={"D"} onPress={onPressDHandler}></Button> 
                    <Text>R Line transfer to 7 Line (Yellow Line & Purple Line) {buttonTextD}</Text>
                </View>
            </View>

            <Button title="Next" onPress={() => window.settingState("subwayMapQThree")}/>
            <Text style={subwayMapQTwoStyles.emptyText}></Text>
        </ScrollView>
    )
}

export default SubwayMapQTwo;