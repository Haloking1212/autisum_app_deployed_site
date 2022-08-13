import React from "react";
import { View, Button } from "react-native";


function HomeButton() {
    return (
        <View>
            <Button title="Home" onPress={() => window.settingState("experienceScreen")}>

            </Button>
        </View>
    );
}

export default HomeButton;