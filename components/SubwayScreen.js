import React from "react";
import { View, Text, ImageBackground, TouchableOpacity, Button} from "react-native";
import { subwayScreenStyles } from "../css/subwayScreenStyles";

function SubwayScreen() {
    return (
        <View>

            <Text style={subwayScreenStyles.emptyText}></Text>
            <Button title="Back" onPress={() => window.settingState("experienceScreen")} style={subwayScreenStyles.backButton}/>

            <TouchableOpacity onPress={ () => window.settingState("subwayMapOne")}>
                <ImageBackground source={{ uri: "https://i.pinimg.com/564x/6d/a6/66/6da6667452c185f8490180e210cc27ee.jpg"}} style={subwayScreenStyles.backgroundImage}>
                    <Text style={subwayScreenStyles.subwayScreenTitle}>Part 1: Understanding Subway Map</Text>
                </ImageBackground>
            </TouchableOpacity>

            <Button title="Next" onPress={() => window.settingState("subwayMapOne")}/>
            <Text style={subwayScreenStyles.emptyText}></Text>
        </View>
    );
}

export default SubwayScreen;