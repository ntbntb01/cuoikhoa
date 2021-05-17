import React, {useEffect, useState} from 'react'
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet, ScrollView, TextInput, Button} from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons'

const DATA = Array(10).fill('').map((e, i) => ({
    id: i + 1,
    photo: 'https://soyagarden.com/content/uploads/2020/11/DSC_9683-216x300.jpg',
    name: `Soya Milk ${i + 1}`,
    price: '39,000đ',
    heart: i % 2 === 0
  }))

export default function Order() {
    const renderItem = ({ item }) => (
        <View style={{ width: '45%', }}>
          <Image
            style={styles.imgStyle}
            source={{ uri: item.photo, }}
          />
            <Text style = {{fontWeight:'bold', fontSize:15}}>{item.name}</Text>
            <View style={styles.rowPrice}>
            <Text>{item.price}</Text>
            <View style = {{height:30,width:30, backgroundColor:'yellow',justifyContent:'center',borderRadius:50}}>
            <Ionicons style ={{alignSelf:"center"}} name="ios-add-sharp" size={25} color='white'/>
            </View>
          </View>
        </View>
      );

    return (
        <ScrollView style ={{backgroundColor:'white'}}>
            <View style = {{height:220,width:'auto',backgroundColor:'#E6E6E6'}}>
                <Text style ={{marginTop:20,fontSize:18,fontWeight:'bold',marginLeft:10}}>Danh mục</Text>
                <ScrollView horizontal={true}>
                    <View style = {{marginLeft:10}}>
                        <View style = {{height:70,width:90,backgroundColor:'white',justifyContent:'center',alignItems:'center',borderRadius:8,marginTop:8}}>
                            <Fontisto name="coffeescript" size={23} color="#000"/>
                            <Text>SOYA MILK</Text>
                        </View>
                        <View style = {{height:70,width:90,backgroundColor:'white',justifyContent:'center',alignItems:'center',borderRadius:8,marginTop:8}}>
                            <Fontisto name="coffeescript" size={23} color="#000"/>
                            <Text>SOYA MACCHIATO</Text>
                        </View>
                    </View>

                    <View>
                        <View style = {{height:70,width:90,backgroundColor:'white',justifyContent:'center',alignItems:'center',borderRadius:8,marginTop:10,marginLeft:10}}>
                            <Fontisto name="coffeescript" size={23} color="#000"/>
                            <Text>COMBO</Text>
                        </View>
                        <View style = {{height:70,width:90,backgroundColor:'white',justifyContent:'center',alignItems:'center',borderRadius:8,marginTop:10,marginLeft:10}}>
                            <Fontisto name="coffeescript" size={23} color="#000"/>
                            <Text>BEANCURD</Text>
                        </View>
                    </View>

                    <View>
                        <View style = {{height:70,width:90,backgroundColor:'white',justifyContent:'center',alignItems:'center',borderRadius:8,marginTop:10,marginLeft:10}}>
                            <Fontisto name="coffeescript" size={23} color="#000"/>
                            <Text>SOYA COFFEE</Text>
                        </View>
                        <View style = {{height:70,width:90,backgroundColor:'white',justifyContent:'center',alignItems:'center',borderRadius:8,marginTop:10,marginLeft:10}}>
                            <Fontisto name="coffeescript" size={23} color="#000"/>
                            <Text>SOYA TEA</Text>
                        </View>
                    </View>

                    <View>
                        <View style = {{height:70,width:90,backgroundColor:'white',justifyContent:'center',alignItems:'center',borderRadius:8,marginTop:10,marginLeft:10}}>
                            <Fontisto name="coffeescript" size={23} color="#000"/>
                            <Text>ICEBLEND</Text>
                        </View>
                        <View style = {{height:70,width:90,backgroundColor:'white',justifyContent:'center',alignItems:'center',borderRadius:8,marginTop:10,marginLeft:10}}>
                            <Fontisto name="coffeescript" size={23} color="#000"/>
                            <Text>Hot Drinks/Đ</Text>
                        </View>
                    </View>

                    <View>
                        <View style = {{height:70,width:90,backgroundColor:'white',justifyContent:'center',alignItems:'center',borderRadius:8,marginTop:10,marginLeft:10}}>
                            <Fontisto name="coffeescript" size={23} color="#000"/>
                            <Text>QUÀ TẶNG</Text>
                        </View>
                        <View style = {{height:70,width:90,backgroundColor:'white',justifyContent:'center',alignItems:'center',borderRadius:8,marginTop:10,marginLeft:10}}>
                            <Fontisto name="coffeescript" size={23} color="#000"/>
                            <Text>Ăn Vặt</Text>
                        </View>
                    </View>

                    <View>
                        <View style = {{height:70,width:90,backgroundColor:'white',justifyContent:'center',alignItems:'center',borderRadius:8,marginTop:10,marginLeft:10}}>
                            <Fontisto name="coffeescript" size={23} color="#000"/>
                            <Text>BÁNH NGỌT</Text>
                        </View>
                        <View style = {{height:70,width:90,backgroundColor:'white',justifyContent:'center',alignItems:'center',borderRadius:8,marginTop:10,marginLeft:10}}>
                            <Fontisto name="coffeescript" size={23} color="#000"/>
                            <Text>UNISOY</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <Text>Tất cả các món</Text>
            <FlatList
        data={DATA}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        columnWrapperStyle={{ justifyContent: 'space-around', marginBottom: 20, flex: 1 }}
        style={{ marginBottom: 100 }}
      />
        </ScrollView>
    )
}



const styles = StyleSheet.create({
  rowPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  imgStyle: {
    height: 120,
    width: 'auto',
    borderRadius:8,
  }
});