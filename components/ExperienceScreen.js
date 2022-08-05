import React from "react";
import { Text, Button, View, TouchableOpacity, Image, ScrollView} from "react-native";
import { experienceScreenStyles } from "../css/experienceScreenStyles";

function ExperienceScreen() {
    return (
        <ScrollView style={experienceScreenStyles.parentScrollView}>
            <Text style={experienceScreenStyles.title}>Experiences</Text>
            <Text style={experienceScreenStyles.subTitle}>WHAT'S NEW</Text>
            <View style={{paddingBottom: 20}}></View>

        <TouchableOpacity onPress={() => window.settingState("subwayScreen")}>
            <Image source={{ uri: 'https://i.pinimg.com/originals/e6/35/86/e6358638e8d5e64eb4271ba98742d9fe.jpg' }} style={{width: 358, height: 343}} />
        </TouchableOpacity>
            <View style={{paddingTop: 25, paddingBottom: 40}}>

            <Text style={experienceScreenStyles.subTitle}>Using the Subway</Text>
            <Text>Estimated Time to Complete: 80 minutes</Text>
            </View>

            <Text style={experienceScreenStyles.subTitle}>BROWSE ALL</Text>
            <View style={{paddingBottom: 20}}></View>
            <View style={experienceScreenStyles.photoGrid}>
                <Image source={{ uri: 'https://i.pinimg.com/564x/29/6e/38/296e3872471bec8c1b8052d54b04982f.jpg' }} style={{width: 164, height: 310}} />
                <View style={experienceScreenStyles.photoPadding}></View>
                <Image source={{ uri: "https://i.pinimg.com/564x/0d/fd/da/0dfdda9965c022c228042a78af1a9c1e.jpg"}} style={{width: 164, height: 310}} />
            </View>
            <View style={experienceScreenStyles.photoGrid}>
                <Image source={{ uri: "https://i.pinimg.com/564x/aa/a9/10/aaa910d3cc691b1fb14de0ce95852921.jpg"}} style={{width: 164, height: 310}} />
                <View style={experienceScreenStyles.photoPadding}></View>
                <Image source={{ uri: "https://i.pinimg.com/564x/a2/d9/cd/a2d9cd0975a105926cfaf80d737a5025.jpg"}} style={{width: 164, height: 310}} />
            </View>

            <Button title="SEE MORE"/>
        </ScrollView>
    )
}

export default ExperienceScreen;