import React from "react";
import { View, Text, ImageBackground, TouchableOpacity, Button} from "react-native";
import { subwayMapFourStyles } from "../css/subwayMapFourStyles";


function SubwayMapFour () {
    return (
        <View>
            <Text style={subwayMapFourStyles.emptyText}></Text>
            <Button title="Back" onPress={() => window.settingState("subwayMapThree")} style={subwayMapFourStyles.backButton}/>

            <TouchableOpacity onPress={ () => window.settingState("subwayMapFive")}>
                <ImageBackground source={{uri:"https://i.pinimg.com/originals/59/a0/32/59a0329903a2a97d0a3e175c4b668fae.jpg"}} style={subwayMapFourStyles.backgroundPhoto}>
                </ImageBackground>
                <Text>For Manhattan, trains going north are also called going uptown, and trains going south are called going downtown.</Text>
            </TouchableOpacity>

            <Button title="Next" onPress={() => window.settingState("subwayMapFive")}/>
            <Text style={subwayMapFourStyles.emptyText}></Text>
                
        </View>
    )
}

export default SubwayMapFour;