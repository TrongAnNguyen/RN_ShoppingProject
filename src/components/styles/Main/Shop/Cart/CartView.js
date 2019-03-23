import { StyleSheet } from 'react-native';
import color from './../../../../../styles/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    productWrapper: {
        flex: 1
    },
    checkoutTitle: {
        color: color.white,
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Avenir'
    },
    btnCheckout: {
        height: 50,
        margin: 10,
        backgroundColor: color.green,
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default styles;
