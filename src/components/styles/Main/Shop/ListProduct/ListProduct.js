import { StyleSheet } from 'react-native';
import color from './../../../../../styles/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.gray
    },
    header: {
        height: 50,
        paddingTop: 5,
        justifyContent: 'space-between',
    },
    headerWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerTitleStyle: {
        width: '90%',
        alignItems: 'center',
    },
    wrapper: {
        backgroundColor: color.white,
        margin: 10
    },
    shadow: {
        shadowColor: color.brown,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        elevation: 3
    },
    iconStyle: {
        width: 25,
        height: 25
    },
    titleStyle: {
        color: color.pink,
        fontSize: 20
    },
    hrStyle: {
        height: 1,
        backgroundColor: color.gray,
    },
    wrapperListProduct: {
        paddingLeft: 10
    }
});

export default styles;
