import { StyleSheet, Dimensions } from 'react-native';
import color from './../../../styles/colors';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    inputStyle: {
        backgroundColor: color.white,
        width: width * 0.8,
        height: 50,
        margin: 10,
        borderRadius: 20,
        paddingLeft: 15,
        fontSize: 18
    },
    btnStyle: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: color.white,
        width: width * 0.8,
        height: 50,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,

    },
    btnNameStyle: {
        color: color.white,
        fontSize: 18
    },
});

export default styles;
