import { StyleSheet, Dimensions } from 'react-native';
import color from './../../../styles/colors';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: width * 0.8,
        marginBottom: 30,
    },
    btnTabStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.white,
        height: 50
    },
    btnTabSignInStyle: {
        borderBottomLeftRadius: 30,
        borderTopLeftRadius: 30,
        marginRight: 2
    },
    btnTabSignUpStyle: {
        borderBottomRightRadius: 30,
        borderTopRightRadius: 30,
        marginLeft: 2
    },
    activeStyle: {
        fontSize: 18,
        color: color.green
    },
    inActiveStyle: {
        fontSize: 18,
        color: color.gray
    }
});

export default styles;
