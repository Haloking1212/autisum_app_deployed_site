import React from "react";
import { View, Text, ImageBackground, TouchableOpacity, Button} from "react-native";
import { subwayMapFiveStyles } from "../css/subwayMapFiveStyles";


function SubwayMapFive () {
    return (
        <View>
            <Text style={subwayMapFiveStyles.emptyText}></Text>
            <Button title="Back" onPress={() => window.settingState("subwayMapFour")} style={subwayMapFiveStyles.backButton}/>
            <TouchableOpacity onPress={ () => window.settingState("subwayMapQOne")}>
                <Text>Uptown Direction ⬆️</Text>
                <ImageBackground source={{uri:"https://i.pinimg.com/originals/d9/30/1f/d9301f4b52636bd9ba43db3c43599cdf.jpg"}} style={subwayMapFiveStyles.backgroundPhoto}>
                </ImageBackground>
                <Text>Downtown Direction ⬇️</Text>
            </TouchableOpacity>

            <Button title="Next" onPress={() => window.settingState("subwayMapQOne")}/>
            <Text style={subwayMapFiveStyles.emptyText}></Text>
                
        </View>
    )
}

export default SubwayMapFive;