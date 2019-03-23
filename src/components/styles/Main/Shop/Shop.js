import { StyleSheet, Dimensions } from 'react-native';
import color from './../../../../styles/colors';

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
    iconStyle: {
        width: width / 20,
        height: height / 30
    },
    titleStyle: {
        color: color.green
    }
});

export default styles;
