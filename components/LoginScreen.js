import { Text, Button, View, TextInput } from "react-native";
import { loginScreenStyles } from "../css/loginScreenStyles.js";
import React from "react";

function LoginScreen() {
    const [emailText, onChangeEmailText] = React.useState("");
    const [passwordText, onChangePasswordText] = React.useState("");

    return (
        <View>
            <View>
                <Text style={loginScreenStyles.loginTitleText} >Log In</Text>
            </View>
            <View>
                <TextInput onChangeText={onChangeEmailText} value={emailText} styles={loginScreenStyles.loginInput} placeholder="Email"/>
                <TextInput onChangeText={onChangePasswordText} value={passwordText} styles={loginScreenStyles.loginInput} placeholder="Password"/>
            </View>
            <Button title="LOG IN" color="black" onPress={() => window.settingState("experienceScreen")}/>
        </View>
    ) 
}

export default LoginScreen;