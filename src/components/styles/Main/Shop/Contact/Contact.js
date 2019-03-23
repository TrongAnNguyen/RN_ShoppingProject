import { StyleSheet } from 'react-native';
import color from './../../../../../styles/colors';

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1
    },
    mapContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        shadowColor: color.darkGreen,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        elevation: 2
    },
    mapStyle: {
        height: 220,
        width: undefined,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconStyle: {
        width: 30,
        height: 30
    },
    infoContainer: {
        marginTop: 10,
        backgroundColor: color.white,
        padding: 5
    },  
    infoWrapper: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: color.gray
    },
    textStyle: {
        fontFamily: 'Avenir',
        color: color.darkPink,
        fontWeight: '400'
    }
});

export default styles;
