import React from "react";
import { View, Text, ImageBackground, ScrollView, Button} from "react-native";
import { subwayMapQFourStyles } from "../css/subwayMapQFourStyles";
import {useState} from 'react';



function SubwayMapQFour () {
    const [buttonTextA, setButtonTextA] = useState('');
    const [buttonTextB, setButtonTextB] = useState('');
    const [buttonTextC, setButtonTextC] = useState('')
    const [buttonTextD, setButtonTextD] = useState('')


    const onPressAHandler = event => setButtonTextA('❌❌❌')
    const onPressBHandler = event => setButtonTextB('✅✅🎉🎉')
    const onPressCHandler = event => setButtonTextC('❌❌❌')
    const onPressDHandler = event => setButtonTextD('❌❌❌')


    return (
        <ScrollView>
            <Text style={subwayMapQFourStyles.emptyText}></Text>
            <Button title="Back" onPress={() => window.settingState("subwayMapQThree")} style={subwayMapQFourStyles.backButton}/>
            <ImageBackground source={{uri:"https://i.pinimg.com/originals/d9/30/1f/d9301f4b52636bd9ba43db3c43599cdf.jpg"}} style={subwayMapQFourStyles.backgroundPhoto}>

            </ImageBackground>
            <Text>What stop takes you to BMCC?</Text>

            <View style={subwayMapQFourStyles.parentButtonView}>
                
                <View style={subwayMapQFourStyles.buttonView}>
                    <Button title={"A"} onPress={onPressAHandler}></Button> 
                    <Text> Coney Island {buttonTextA}</Text>
                </View>

                <View style={subwayMapQFourStyles.buttonView}>
                    <Button title={"B"} onPress={onPressBHandler}></Button> 
                    <Text> Chambers St {buttonTextB}</Text>
                </View>

                <View style={subwayMapQFourStyles.buttonView}>
                    <Button title={"C"} onPress={onPressCHandler}></Button> 
                    <Text> 14th St Union Sq {buttonTextC}</Text>
                </View>

                <View style={subwayMapQFourStyles.buttonView}>
                    <Button title={"D"} onPress={onPressDHandler}></Button> 
                    <Text> Dyckman St {buttonTextD}</Text>
                </View>
            </View>

            <Button title="Next" onPress={() => window.settingState("subwayMapQFive")}/>
            <Text style={subwayMapQFourStyles.emptyText}></Text>
        </ScrollView>
    )
}

export default SubwayMapQFour;