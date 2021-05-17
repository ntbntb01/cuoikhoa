import React, {useEffect, useState} from 'react'
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet, ScrollView, TextInput, Button} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
export default function Shop() {
    return (
        <View>
            <View style = {{flexDirection:'row',height:70,width:'auto'}}>
                <View style = {{flexDirection:'row', borderWidth:0.5,marginTop:20,width:300,height:35,borderRadius:8,marginLeft:25}}>
                <Ionicons style={styles.searchIcon} name="ios-search" size={20} color="#000"/>
                <TextInput
                style={styles.input}
                placeholder="Search"
                onChangeText={(searchString) => {this.setState({searchString})}}
                underlineColorAndroid="transparent"
                />
                </View>
                <Feather style={{marginTop:20,marginLeft:30}} name="send" size={25} color="gray"/>
            </View>
            <ScrollView style ={{backgroundColor:'#D8D8D8',width:'auto',marginBottom:70}}>
                <TouchableOpacity>
                <View style = {styles.b}>
                    <Image style = {styles.a}
                    source={{
                        uri:'https://soyagarden.com/content/uploads/2019/10/70954832_3052108371530799_3695167124474429440_n.jpg'
                    }}
                    />
                    <View style ={{backgroundColor:'white',width:'auto',justifyContent:'space-around',borderBottomLeftRadius:8,borderBottomRightRadius:8,height:100,justifyContent:'space-evenly'}}>
                        <Text style ={{fontWeight:'bold',fontSize:16,marginLeft:10}}>Soya Garden - Hoàng Đạo Thúy</Text>
                    <View style ={{flexDirection:'row',width:'auto',marginLeft:10}}>
                        <Ionicons name="ios-location-outline" size={23} color="#000"/>
                        <Text style ={{color:'#585858',marginLeft:5,width:300}}>Tầng 1 tòa UDIC Complex Hoàng Đạo Thúy, Trung Hòa, Cầu Giấy, Hà Nội</Text>
                    </View>
                    <View style ={{flexDirection:'row',backgroundColor:'white',marginLeft:10,width:'auto',borderBottomRightRadius:8}}>
                        <Feather name="phone-call" size={20} color="#000"/>
                        <Text style ={{color:'#585858',marginLeft:8}}>0906289926</Text>
                    </View>
                    </View>
                </View>
                </TouchableOpacity>
{/*----------------------------------------------------------------------------------------------------------------------------------------*/}
<TouchableOpacity>
                <View style = {styles.b}>
                    <Image style = {styles.a}
                    source={{
                        uri:'https://soyagarden.com/content/uploads/2019/09/van-cao.jpg'
                    }}
                    />
                    <View style ={{backgroundColor:'white',width:'auto',justifyContent:'space-around',borderBottomLeftRadius:8,borderBottomRightRadius:8,height:100,justifyContent:'space-evenly'}}>
                        <Text style ={{fontWeight:'bold',fontSize:16,marginLeft:10}}>Soya Garden - Văn Cao</Text>
                    <View style ={{flexDirection:'row',width:'auto',marginLeft:10}}>
                        <Ionicons name="ios-location-outline" size={23} color="#000"/>
                        <Text style ={{color:'#585858',marginLeft:5,width:300}}>127 Văn Cao, Quận Ba Đình, Hà Nội</Text>
                    </View>
                    <View style ={{flexDirection:'row',backgroundColor:'white',marginLeft:10,width:'auto',borderBottomRightRadius:8}}>
                        <Feather name="phone-call" size={20} color="#000"/>
                        <Text style ={{color:'#585858',marginLeft:8}}>0936062116</Text>
                    </View>
                    </View>
                </View>
                </TouchableOpacity>
{/*----------------------------------------------------------------------------------------------------------------------------------------*/}
                <TouchableOpacity>
                <View style = {styles.b}>
                    <Image style = {styles.a}
                    source={{
                        uri:'https://soyagarden.com/content/uploads/2019/09/Linh-%C4%90%C3%A0m-1.jpg'
                    }}
                    />
                    <View style ={{backgroundColor:'white',width:'auto',justifyContent:'space-around',borderBottomLeftRadius:8,borderBottomRightRadius:8,height:100,justifyContent:'space-evenly'}}>
                        <Text style ={{fontWeight:'bold',fontSize:16,marginLeft:10}}>Soya Garden - Rainbow Linh Đàm</Text>
                    <View style ={{flexDirection:'row',width:'auto',marginLeft:10}}>
                        <Ionicons name="ios-location-outline" size={23} color="#000"/>
                        <Text style ={{color:'#585858',marginLeft:5,width:300}}>Kiot 8, Tầng 1, Tòa Nhà Rainbow, KĐT Tây Nam Linh Đàm, Quận Hoàng Mai, Hà Nội</Text>
                    </View>
                    <View style ={{flexDirection:'row',backgroundColor:'white',marginLeft:10,width:'auto',borderBottomRightRadius:8}}>
                        <Feather name="phone-call" size={20} color="#000"/>
                        <Text style ={{color:'#585858',marginLeft:8}}>0782366628</Text>
                    </View>
                    </View>
                </View>
                </TouchableOpacity>
{/*----------------------------------------------------------------------------------------------------------------------------------------*/}
                <TouchableOpacity>
                <View style = {styles.b}>
                    <Image style = {styles.a}
                    source={{
                        uri:'https://soyagarden.com/content/uploads/2019/09/76705191_3239231329485168_6957166658045607936_o.jpg'
                    }}
                    />
                    <View style ={{backgroundColor:'white',width:'auto',justifyContent:'space-around',borderBottomLeftRadius:8,borderBottomRightRadius:8,height:100,justifyContent:'space-evenly'}}>
                        <Text style ={{fontWeight:'bold',fontSize:16,marginLeft:10}}>Soya Garden – Nguyễn Thị Định</Text>
                    <View style ={{flexDirection:'row',width:'auto',marginLeft:10}}>
                        <Ionicons name="ios-location-outline" size={23} color="#000"/>
                        <Text style ={{color:'#585858',marginLeft:5,width:300}}>Lô NV - B27 Khu Trung Hòa Nhân Chính, Phường Nhân Chính, Quận Thanh Xuân, Hà Nội</Text>
                    </View>
                    <View style ={{flexDirection:'row',backgroundColor:'white',marginLeft:10,width:'auto',borderBottomRightRadius:8}}>
                        <Feather name="phone-call" size={20} color="#000"/>
                        <Text style ={{color:'#585858',marginLeft:8}}>0776366618</Text>
                    </View>
                    </View>
                </View>
                </TouchableOpacity>
{/*----------------------------------------------------------------------------------------------------------------------------------------*/}
                <TouchableOpacity>
                <View style = {styles.b}>
                    <Image style = {styles.a}
                    source={{
                        uri:'https://soyagarden.com/content/uploads/2019/09/Tada-3.jpg'
                    }}
                    />
                    <View style ={{backgroundColor:'white',width:'auto',justifyContent:'space-around',borderBottomLeftRadius:8,borderBottomRightRadius:8,height:100,justifyContent:'space-evenly'}}>
                        <Text style ={{fontWeight:'bold',fontSize:16,marginLeft:10}}>Soya Garden - Nguyễn Chí Thanh</Text>
                    <View style ={{flexDirection:'row',width:'auto',marginLeft:10}}>
                        <Ionicons name="ios-location-outline" size={23} color="#000"/>
                        <Text style ={{color:'#585858',marginLeft:5,width:300}}>93 Nguyễn Chí Thanh, Láng Hạ, Quận Đống Đa, Hà Nội</Text>
                    </View>
                    <View style ={{flexDirection:'row',backgroundColor:'white',marginLeft:10,width:'auto',borderBottomRightRadius:8}}>
                        <Feather name="phone-call" size={20} color="#000"/>
                        <Text style ={{color:'#585858',marginLeft:8}}>0904696648</Text>
                    </View>
                    </View>
                </View>
                </TouchableOpacity>
{/*----------------------------------------------------------------------------------------------------------------------------------------*/}
                <TouchableOpacity>
                <View style = {styles.b}>
                    <Image style = {styles.a}
                    source={{
                        uri:'https://soyagarden.com/content/uploads/2019/09/6ABFC0BE-4BE0-4E89-A656-C7986BF3E1F8.jpeg'
                    }}
                    />
                    <View style ={{backgroundColor:'white',width:'auto',justifyContent:'space-around',borderBottomLeftRadius:8,borderBottomRightRadius:8,height:100,justifyContent:'space-evenly'}}>
                        <Text style ={{fontWeight:'bold',fontSize:16,marginLeft:10}}>Soya Garden - Hồ Đắc Di</Text>
                    <View style ={{flexDirection:'row',width:'auto',marginLeft:10}}>
                        <Ionicons name="ios-location-outline" size={23} color="#000"/>
                        <Text style ={{color:'#585858',marginLeft:5,width:300}}>Số 3 Hồ Đắc Di, Quận Đống Đa, Hà Nội</Text>
                    </View>
                    <View style ={{flexDirection:'row',backgroundColor:'white',marginLeft:10,width:'auto',borderBottomRightRadius:8}}>
                        <Feather name="phone-call" size={20} color="#000"/>
                        <Text style ={{color:'#585858',marginLeft:8}}>0776333693</Text>
                    </View>
                    </View>
                </View>
                </TouchableOpacity>
{/*----------------------------------------------------------------------------------------------------------------------------------------*/}
                <TouchableOpacity>
                <View style = {{marginLeft:15,marginRight:15,marginTop:25,height:290,marginBottom:20}}>
                    <Image style = {styles.a}
                    source={{
                        uri:'https://soyagarden.com/content/uploads/2019/09/nga6-phudong.jpg'
                    }}
                    />
                    <View style ={{backgroundColor:'white',width:'auto',justifyContent:'space-around',borderBottomLeftRadius:8,borderBottomRightRadius:8,height:100,justifyContent:'space-evenly'}}>
                        <Text style ={{fontWeight:'bold',fontSize:16,marginLeft:10}}>Soya Garden – Ngã 6 Phù Đổng</Text>
                    <View style ={{flexDirection:'row',width:'auto',marginLeft:10}}>
                        <Ionicons name="ios-location-outline" size={23} color="#000"/>
                        <Text style ={{color:'#585858',marginLeft:5,width:300}}>325 Lý Tự Trọng, Phường Bến Thành, Q.1, TP Hồ Chí Minh</Text>
                    </View>
                    <View style ={{flexDirection:'row',backgroundColor:'white',marginLeft:10,width:'auto',borderBottomRightRadius:8}}>
                        <Feather name="phone-call" size={20} color="#000"/>
                        <Text style ={{color:'#585858',marginLeft:8}}>0906292916</Text>
                    </View>
                    </View>
                </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    searchIcon:{
        alignSelf:'center',
        marginRight:10,
        marginLeft:5
    },
    input: {
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
    },
    a:{
        height:200,
        width:'auto',
        borderTopRightRadius:8,
        borderTopLeftRadius:8
    },
    b:{
        marginLeft:15,
        marginRight:15,
        marginTop:25,
        height:290,
    },
})