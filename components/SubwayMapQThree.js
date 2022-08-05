import React from "react";
import { View, Text, ImageBackground, ScrollView, Button} from "react-native";
import { subwayMapQThreeStyles } from "../css/subwayMapQThreeStyles";
import {useState} from 'react';



function SubwayMapQThree () {
    const [buttonTextA, setButtonTextA] = useState('');
    const [buttonTextB, setButtonTextB] = useState('');
    const [buttonTextC, setButtonTextC] = useState('')
    const [buttonTextD, setButtonTextD] = useState('')


    const onPressAHandler = event => setButtonTextA('❌❌❌')
    const onPressBHandler = event => setButtonTextB('❌❌❌')
    const onPressCHandler = event => setButtonTextC('✅✅🎉🎉')
    const onPressDHandler = event => setButtonTextD('❌❌❌')


    return (
        <ScrollView>
            <Text style={subwayMapQThreeStyles.emptyText}></Text>
            <Button title="Back" onPress={() => window.settingState("subwayMapQTwo")} style={subwayMapQThreeStyles.backButton}/>
            <ImageBackground source={{uri:"https://i.pinimg.com/originals/d9/30/1f/d9301f4b52636bd9ba43db3c43599cdf.jpg"}} style={subwayMapQThreeStyles.backgroundPhoto}>

            </ImageBackground>
            <Text>What Trains go to 181st in Manhattan?</Text>

            <View style={subwayMapQThreeStyles.parentButtonView}>
                
                <View style={subwayMapQThreeStyles.buttonView}>
                    <Button title={"A"} onPress={onPressAHandler}></Button> 
                    <Text>6 Line (Green Line) {buttonTextA}</Text>
                </View>

                <View style={subwayMapQThreeStyles.buttonView}>
                    <Button title={"B"} onPress={onPressBHandler}></Button> 
                    <Text>7 Line (Purple Line) {buttonTextB}</Text>
                </View>

                <View style={subwayMapQThreeStyles.buttonView}>
                    <Button title={"C"} onPress={onPressCHandler}></Button> 
                    <Text>1 Line and A line (Red Line & Blue Line) {buttonTextC}</Text>
                </View>

                <View style={subwayMapQThreeStyles.buttonView}>
                    <Button title={"D"} onPress={onPressDHandler}></Button> 
                    <Text>R Line transfer to 7 Line (Yellow Line & Purple Line) {buttonTextD}</Text>
                </View>
            </View>

            <Button title="Next" onPress={() => window.settingState("subwayMapQFour")}/>
            <Text style={subwayMapQThreeStyles.emptyText}></Text>
        </ScrollView>
    )
}

export default SubwayMapQThree;