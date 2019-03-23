import { StyleSheet } from 'react-native';
import color from './../../../styles/colors';

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.white,
        margin: 10,
        justifyContent: 'space-around',
        height: 100,
        padding: 10
    },
    itemInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    infoTextStyle: {
        color: color.darkGray
    },
    green: {
        color: color.lightGreen
    },
    dateColor: {
        color: color.pink
    },
    priceColor: {
        color: color.pink,
        fontWeight: 'bold'
    }
});

export default styles;
