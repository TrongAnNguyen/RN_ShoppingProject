import React, { Component } from 'react';
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import { connect } from 'react-redux';
import { serverURL } from './../../../../constants/config';
import styles from './../../../styles/Main/Shop/Home/Category';

const imgUrl = `${serverURL}/product/image/type/`;

class Category extends Component {
    renderListCatogory = () => {
        const { imageStyle, titleStyle } = styles;
        const listCategory = this.props.productTypes.data;
        const result = listCategory.map((category) => 
            <TouchableOpacity 
                onPress={() => this.props.navigation.navigate('ListProduct', {
                    idType: category.id, 
                    nameType: category.name 
                })}
                key={category.id}
            >
                <ImageBackground 
                    source={{ uri: `${imgUrl}${category.image}` }} 
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

function mapStateToProps(state) {
    return {
        productTypes: state.product.allTypes
    };
}

export default connect(mapStateToProps, null)(Category);
