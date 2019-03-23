import { StyleSheet, Dimensions } from 'react-native';
import color from './../../../styles/colors';

const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        height: height / 8.5,
        backgroundColor: color.green,
        padding: 10,
        justifyContent: 'space-around'
    },
    iconStyle: {
        width: 40,
        height: 40
    },
    rowWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    titleStyle: {
        color: color.white,
        fontSize: 30,
    }
});

export default styles;
