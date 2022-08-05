import React from "react";
import { View, Text, ImageBackground, TouchableOpacity, Button} from "react-native";
import { subwayMapOneStyles } from "../css/subwayMapOneStyles";

function SubwayMapOne() {
    return (
        <View>
            
            <Text style={subwayMapOneStyles.emptyText}></Text>
            <Button title="Back" onPress={() => window.settingState("subwayScreen")} style={subwayMapOneStyles.backButton}/>

            <TouchableOpacity onPress={ () => window.settingState("subwayMapTwo")}>
                <ImageBackground source={{uri:"https://i.pinimg.com/564x/c4/cb/dd/c4cbdd99c211537e7a89ebf5197ed7c5.jpg"}} style={subwayMapOneStyles.backgroundPhoto}>
                </ImageBackground>

                <Text style={subwayMapOneStyles.textTitle}>
                    5 Boroughs of New York City 🗽:
                </Text>

                <Text style={subwayMapOneStyles.textSentence}>
                    Bronx, Brooklyn, Manhattan, Queens, Staten Island
                </Text>
            </TouchableOpacity>

            <Button title="Next" onPress={() => window.settingState("subwayMapTwo")}/>
            <Text style={subwayMapOneStyles.emptyText}></Text>
        </View>
    )
}

export default SubwayMapOne;