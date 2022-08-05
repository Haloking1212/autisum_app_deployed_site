import React from "react";
import { View, Text, ImageBackground, TouchableOpacity, Button} from "react-native";
import { subwayMapThreeStyles } from "../css/subwayMapThreeStyles";


function SubwayMapThree () {
    return (
        <View>

            <Text style={subwayMapThreeStyles.emptyText}></Text>
            <Button title="Back" onPress={() => window.settingState("subwayMapTwo")} style={subwayMapThreeStyles.backButton}/>

            <TouchableOpacity onPress={ () => window.settingState("subwayMapFour")}>
                <ImageBackground source={{uri:"https://i.pinimg.com/originals/d9/30/1f/d9301f4b52636bd9ba43db3c43599cdf.jpg"}} style={subwayMapThreeStyles.backgroundPhoto}>
                </ImageBackground>
                <Text>Each Line is named by its termnial Station. For example,</Text>
                <Text>Line 7 (Purple line going to Queens is Named as train to Flushing/Main Street).</Text>
            </TouchableOpacity>

            <Button title="Next" onPress={() => window.settingState("subwayMapFour")}/>
            <Text style={subwayMapThreeStyles.emptyText}></Text>
                
        </View>
    )
}

export default SubwayMapThree;