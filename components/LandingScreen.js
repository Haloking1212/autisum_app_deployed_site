import { Text, Button, View, ImageBackground } from "react-native";
import React from "react";
import { landingScreenStyles } from "../css/landingScreenStyles.js";



function LandingScreen () {

    return (
        <View style={landingScreenStyles.parentView}>
            <View className="background-f">
                <ImageBackground source={require('../assets/photo-1564521980497-5b061d8da666.jpeg')} style={landingScreenStyles.backgroundLandingPhoto}>
                    <Text style={landingScreenStyles.titleText}>Connect</Text>
                    <View style={landingScreenStyles.subTitle}>
                        <Text>BMCC Autism Research Group</Text>
                        <Text>(program website / social media link)</Text>
                    </View>
                </ImageBackground>
            </View>

            <View class="button-conainter" style={landingScreenStyles.row}>
            <Button title="Login" color="blue" onPress={() => window.settingState("loginScreen")} />
            <Button title="Register" color="blue" onPress={() => window.settingState("registerStepOne")} />
            </View>
        </View>
    );

};

export default LandingScreen;