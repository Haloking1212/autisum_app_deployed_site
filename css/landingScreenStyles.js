import { StyleSheet } from 'react-native';

const landingScreenStyles = StyleSheet.create({
    parentView: {
        flex: 1,
        marginTop: 75,
    },

    backgroundLandingPhoto: {
        width: 375,
        height: 716,
        left: 0,
        top: -15,
    },

    titleText: {
        width: 199,
        height: 54,
        left: 93,
        top: 300,
        color: 'white',
        textAlign: 'center',
        marginBottom: 80,
        fontSize: 48,
        fontWeight: "bold",
    },

    subTitle: {
        marginTop: 500,
        textAlign: 'center',
    },

    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: 'space-between',

    },

});

export { landingScreenStyles }