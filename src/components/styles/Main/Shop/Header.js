import { StyleSheet, Dimensions } from 'react-native';
import color from './../../../../styles/colors';

const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        height: height / 7.5,
        backgroundColor: color.green,
        padding: 10,
        justifyContent: 'space-around'
    },
    iconStyle: {
        width: 25,
        height: 25
    },
    rowWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textInput: {
        height: height / 23,
        backgroundColor: color.white,
        fontSize: 17,
        paddingLeft: 20,
        paddingTop: 0,
        paddingBottom: 0
    },
    titleStyle: {
        color: color.white,
        fontSize: 20
    }
});

export default styles;
