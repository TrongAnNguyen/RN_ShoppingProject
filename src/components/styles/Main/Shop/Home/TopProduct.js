import { StyleSheet, Dimensions } from 'react-native';
import color from './../../../../../styles/colors';

const { width } = Dimensions.get('window');
const imgWidth = (width - 60) / 2;
const imgHeight = (imgWidth / 361) * 452;

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: color.white,
        margin: 10,
        padding: 10,
        paddingTop: 0
    },
    shadow: {
        shadowColor: color.brown,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        elevation: 3
    },
    titleWrapper: {
        justifyContent: 'center',
        height: 50,
    },
    textStyle: {
        fontSize: 20,
        color: color.darkGray,
    },
    listStyle: {
    
    },
    items: {
        height: imgHeight + 70,
        marginRight: 15,
        marginBottom: 15,
        borderWidth: 0.4,
        borderColor: color.gray
    },
    imageStyle: {
        height: imgHeight,
        width: imgWidth,
    },
    productDetail: {
        margin: 10,
    },
    productTitleStyle: {
        color: color.darkGray,
        fontSize: 15
    },
    productPriceStyle: {
        fontSize: 15, 
        color: color.pink
    }
});

export default styles;
