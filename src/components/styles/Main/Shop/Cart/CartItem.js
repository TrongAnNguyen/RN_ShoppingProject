import { StyleSheet, Dimensions } from 'react-native';
import color from './../../../../../styles/colors';

const { width } = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.white,
        flexDirection: 'row',
        padding: 10,
        margin: 7,
        shadowColor: color.darkGreen,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        elevation: 2
    },
    imageStyle: {
        width: imageWidth,
        height: imageHeight,
        flex: 1,
        resizeMode: 'center'
    },
    titleWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    productContainer: {
        flex: 3,
        justifyContent: 'space-between',
        marginLeft: 10
    },
    productQuantity: {
        flexDirection: 'row',
        width: '30%',
        justifyContent: 'space-between'
    },
    productController: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    txtName: {
        color: color.darkGray,
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtPrice: {
        color: color.pink,
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtShowDetail: {
        color: color.pink,
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Avenir',
        textAlign: 'right',
    },
});

export default styles;
