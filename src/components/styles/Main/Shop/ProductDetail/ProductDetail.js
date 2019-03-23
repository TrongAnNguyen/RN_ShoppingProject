import { StyleSheet, Dimensions } from 'react-native';
import color from './../../../../../styles/colors';

const { width } = Dimensions.get('window');
const swiperWidth = (width / 1.8) - 30;
const swiperHeight = (swiperWidth * 452) / 361;

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.white,
        margin: 10,
        padding: 10,
        flex: 1
    },
    header: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    iconStyle: {
        width: 25,
        height: 25
    },
    productContainer: {
        marginTop: 10,
    },
    productImageStyle: {
        width: swiperWidth,
        height: swiperHeight,
        marginHorizontal: 5
    },
    descriptionHeader: {
        justifyContent: 'center'
    },
    titleContainer: {
        flexDirection: 'row',

    },
    titleName: {
        color: color.brown,
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 10
    },
    titleHighlight: {
        fontSize: 20,
        color: color.lightPurple,
        paddingHorizontal: 3
    },
    titlePrice: {
        fontSize: 20,
        color: color.darkGray
    },
    hrStyle: {
        height: 1,
        backgroundColor: color.darkGray,
        marginVertical: 10
    },
    description: {

    },
    txtDescriptStyle: {
        color: color.darkGray
    },
    lastRowStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    colorInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    color: {
        height: 15, 
        width: 15,
        borderRadius: 7.5,
        marginHorizontal: 7
    },
    txtColor: {
        color: color.pink,
        fontSize: 15,
        fontWeight: '400',
    },
    txtMaterial: {
        color: color.pink,
        fontSize: 15,
        fontWeight: '400',
    }
});

export default styles;
