import { StyleSheet, Dimensions } from 'react-native';
import color from './../../../../../styles/colors';

const { width, height } = Dimensions.get('window');
const imageWidth = width - 40;
const imageHeight = (imageWidth * 465) / 933;

const styles = StyleSheet.create({
    wrapper: {
        height: height / 3,
        backgroundColor: color.white,
        margin: 10,
        padding: 10,
        paddingTop: 0
    },
    shadow: {
        shadowColor: color.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        elevation: 3
    },
    textStyle: {
        fontSize: 20,
        color: color.darkGray,
    },
    imageStyle: {
        height: imageHeight,
        width: imageWidth,
        flex: 4,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center'
    },
    swiperStyle: {
        flex: 4,
    },
    titleStyle: {
        fontSize: 20,
        color: color.darkGray
    }
});

export default styles;
