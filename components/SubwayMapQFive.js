import React from "react";
import { View, Text, ImageBackground, ScrollView, Button} from "react-native";
import { subwayMapQFiveStyles } from "../css/subwayMapQFiveStyles";
import {useState} from 'react';



function SubwayMapQFive () {
    const [buttonTextA, setButtonTextA] = useState('');
    const [buttonTextB, setButtonTextB] = useState('');
    const [buttonTextC, setButtonTextC] = useState('')
    const [buttonTextD, setButtonTextD] = useState('')


    const onPressAHandler = event => setButtonTextA('✅✅🎉🎉')
    const onPressBHandler = event => setButtonTextB('❌❌❌')
    const onPressCHandler = event => setButtonTextC('❌❌❌')
    const onPressDHandler = event => setButtonTextD('❌❌❌')


    return (
        <ScrollView>
            <Text style={subwayMapQFiveStyles.emptyText}></Text>
            <Button title="Back" onPress={() => window.settingState("subwayMapQFour")} style={subwayMapQFiveStyles.backButton}/>
            <ImageBackground source={{uri:"https://i.pinimg.com/originals/d9/30/1f/d9301f4b52636bd9ba43db3c43599cdf.jpg"}} style={subwayMapQFiveStyles.backgroundPhoto}>

            </ImageBackground>
            <Text>What do you do in an emergency on the subway platform?</Text>

            <View style={subwayMapQFiveStyles.parentButtonView}>
                
                <View style={subwayMapQFiveStyles.buttonView}>
                    <Button title={"A"} onPress={onPressAHandler}></Button> 
                    <Text> Press the red button on the help point {buttonTextA}</Text>
                </View>

                <View style={subwayMapQFiveStyles.buttonView}>
                    <Button title={"B"} onPress={onPressBHandler}></Button> 
                    <Text> Get on the first train you see {buttonTextB}</Text>
                </View>

                <View style={subwayMapQFiveStyles.buttonView}>
                    <Button title={"C"} onPress={onPressCHandler}></Button> 
                    <Text> Run down the tracks to get to the next stop {buttonTextC}</Text>
                </View>

                <View style={subwayMapQFiveStyles.buttonView}>
                    <Button title={"D"} onPress={onPressDHandler}></Button> 
                    <Text> Become a menance to society {buttonTextD}</Text>
                </View>
            </View>

            <Button title="Next" onPress={() => window.settingState("subwayMapQResults")}/>
            <Text style={subwayMapQFiveStyles.emptyText}></Text>
        </ScrollView>
    )
}

export default SubwayMapQFive;