import React from "react";
import { View, Text, ImageBackground, TouchableOpacity, Button} from "react-native";
import { subwayMapTwoStyles } from "../css/subwayMapTwoStyles";


function SubwayMapTwo () {
    return (
        <View>

            <Text style={subwayMapTwoStyles.emptyText}></Text>
            <Button title="Back" onPress={() => window.settingState("subwayMapOne")} style={subwayMapTwoStyles.backButton}/>

            <TouchableOpacity onPress={ () => window.settingState("subwayMapThree")}>
                <ImageBackground source={{uri:"https://i.pinimg.com/originals/d9/30/1f/d9301f4b52636bd9ba43db3c43599cdf.jpg"}} style={subwayMapTwoStyles.backgroundPhoto}>
                </ImageBackground>
                <Text>The New York City subway 🚇 goes to all 5 boroughs of New York</Text>
            </TouchableOpacity>

            <Button title="Next" onPress={() => window.settingState("subwayMapThree")}/>
            <Text style={subwayMapTwoStyles.emptyText}></Text>
                
        </View>
    )
}

export default SubwayMapTwo;