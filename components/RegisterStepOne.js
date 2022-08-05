import { Text, Button, View, TextInput } from "react-native";
import React from "react";
import { registerStepOneStyles } from "../css/registerStepOneStyles.js";

function RegisterStepOne () {
    const [emailText, onChangeEmailText] = React.useState("");
    const [passwordText, onChangePasswordText] = React.useState("");

    return (
        <View>
            <View>
                <Text style={registerStepOneStyles.registerTitleText}>Register</Text>
            </View>
            <View>
                <TextInput onChangeText={onChangeEmailText} value={emailText} styles={registerStepOneStyles.inputEmail} placeholder="Email"/>
                <TextInput onChangeText={onChangePasswordText} value={passwordText} styles={registerStepOneStyles.inputPassword} placeholder="Password"/>
                <Text>By signing up, you agree to Photo's Terms of Service and
    Privacy Policy.</Text>
            </View>
            <Button title="SIGN UP" color="black" onPress={ () => window.settingState("")}/>
        </View>
    )
}

export default RegisterStepOne;