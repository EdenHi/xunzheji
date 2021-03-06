import {Dimensions, StyleSheet} from 'react-native'

const dimensions = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
}

export default StyleSheet.create({
    max: {
        flex: 1,
    },
    buttonHolder: {
        height: 100,
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#0093E9',
        borderRadius: 25,
    },
    buttonText: {
        color: '#fff',
    },
    fullView: {
        zIndex:20,
        width: dimensions.width*0.3,
        height: dimensions.height*0.3,
        marginTop:-dimensions.height*0.4,
        marginBottom:dimensions.height*0.4,
        borderWidth:1
    },
    remoteContainer: {
        width: '100%',
        height: '90%',
        position: 'absolute',
        top: 5
    },
    remote: {
        width:dimensions.width,
        height:dimensions.height
    },
    noUserText: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        color: '#0093E9',
    },
})
