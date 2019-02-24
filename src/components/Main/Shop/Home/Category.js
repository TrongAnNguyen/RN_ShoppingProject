import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, 
        ImageBackground, TouchableOpacity } from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import { connect } from 'react-redux';
import * as Actions from './../../../../actions/action';

const { width, height } = Dimensions.get('window');
const maxi = require('./../../../../media/temp/maxi.jpg');
const midi = require('./../../../../media/temp/midi.jpg');
const party = require('./../../../../media/temp/party.jpg');
const little = require('./../../../../media/temp/little.jpg');

const listCategory = [
    { name: 'maxi', image: maxi },
    { name: 'midi', image: midi },
    { name: 'party', image: party },
    { name: 'little', image: little }
];

class Category extends Component {
    renderListCatogory = () => {
        const { imageStyle, titleStyle } = styles;
        const result = listCategory.map((category) => 
            <TouchableOpacity 
                onPress={() => this.props.navigation.navigate('ListProduct')}
                key={category.name}
            >
                <ImageBackground 
                    source={category.image} 
                    style={imageStyle}
                >
                    <Text style={titleStyle}>{category.name}</Text>
                </ImageBackground>
            </TouchableOpacity>
        );

        return result;
    }

    render() {
        const { wrapper, shadow, textStyle, swiperStyle } = styles;
        
        return (
            <View style={[wrapper, shadow]}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={textStyle}>LIST OF CATEGORY</Text>
                </View>
                <View style={swiperStyle}>
                    <SwiperFlatList
                        showPagination
                        paginationDefaultColor={'#dce2e8'}
                        paginationActiveColor={'blue'}
                    >
                        {this.renderListCatogory()}
                    </SwiperFlatList>
                
                </View>
            </View>
        );
    }
}

const imageWidth = width - 40;
const imageHeight = (imageWidth * 465) / 933;
const styles = StyleSheet.create({
    wrapper: {
        height: height / 3,
        backgroundColor: '#fff',
        margin: 10,
        padding: 10,
        paddingTop: 0
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        elevation: 3
    },
    textStyle: {
        fontSize: 20,
        color: '#afafaf',
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
        color: '#a4a9ad'
    }
});

function mapStateToProps(state) {
    return {
        product: state.product
    };
}

function mapDispatchToProps(dispatch) {
    return {
        //fetchData: () => dispatch(Actions.fetchData())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);
