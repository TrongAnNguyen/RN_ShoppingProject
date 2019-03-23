import { StyleSheet, Dimensions } from 'react-native';
import color from './../../../../../styles/colors';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        width: '95%',
        flexDirection: 'row',
        padding: 10,
        borderWidth: 1,
        borderTopColor: color.gray,
        borderColor: color.white,
        backgroundColor: color.white
    },
    imageStyle: {
        width: 70,
        height: (70 * 452) / 361
    },
    wrapperInfo: {
        marginLeft: 20,
        justifyContent: 'space-between'
    },
    nameStyle: {
        color: color.darkGray,
        fontSize: 20
    },
    priceStyle: {
        color: color.pink
    },
    colorViewStyle: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: color.pink
    },
    lastRowStyle: {
        width: 0.8 * (width - 100),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    showDetailStyle: {
        color: color.pink
    }
});

export default styles;
