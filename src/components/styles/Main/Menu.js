import { StyleSheet, Dimensions } from 'react-native';
import color from './../../../styles/colors';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        backgroundColor: color.green,
        flex: 1,
        borderRightWidth: 3,
        borderColor: color.white,
        alignItems: 'center'
    },
    avatarStyle: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginTop: 25
    },
    buttonStyle: {
        height: 60,
        width: width * 0.53,
        backgroundColor: color.white,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    btnNameStyle: {
        color: color.green,
        fontSize: 20
    },
    username: {
        marginTop: 10,
        fontSize: 18,
        color: color.white 
    },
    loggedContainer: {
        flex: 1, 
        justifyContent: 'space-between', 
        alignItems: 'center'
    },
    btnContainer: {
        marginBottom: 100
    }
});

export default styles;
