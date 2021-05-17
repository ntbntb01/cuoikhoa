
import React from 'react'
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet, ScrollView, TextInput, Button} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default function Other() {
    return (
        <View>
            <Text style ={{fontSize:20,fontWeight:'bold',marginTop:20,marginBottom:15,marginLeft:12}}>Khác</Text>
            <Text style ={{height:2,backgroundColor:'gray'}}></Text>
        <View style ={{marginLeft:12,marginRight:12}}>
        <ScrollView style ={{marginBottom:150}}>
            <View style ={{flexDirection:'row',marginTop:10,height:70,borderBottomWidth:0.2}}>
            <Ionicons style ={{alignSelf:'center'}} name="ios-person-circle" size={45} color="#dcdcdc"/>
            <View style = {{flex:1,marginLeft:10,justifyContent:'center'}}>
                <Text style ={{fontWeight:'bold'}}>Nguyen Ben</Text>
                <Text>0911044651</Text>
            </View>
                <Ionicons style = {{alignSelf:'center'}} name="md-chevron-forward-sharp" size={25} color="#424242"/>
            </View>
            
{/*----------------------------------------------------------------------------------------------------------------------------*/}
            <View style ={{flexDirection:'row',marginTop:10,height:70,borderBottomWidth:0.2}}>
            <View style = {{height:45,width:45,backgroundColor:'yellow',borderRadius:50,justifyContent:'center',alignSelf:'center',marginRight:10}}>
            <Image style = {{width:35,height:25,alignSelf:'center'}}
            source ={{
                uri :'https://soyagarden.com/content/uploads/2019/10/ic_dau-vang_53px@3x.png'
            }}/>
            </View>
            <View style = {{flex:1,justifyContent:'center'}}>
                <Text style ={{fontWeight:'bold'}}>Đậu vàng</Text>
                <Text>+300 S-Point - Đậu kim cương</Text>
            </View>
                <Ionicons style = {{alignSelf:'center'}} name="md-chevron-forward-sharp" size={25} color="#424242"/>
            </View>
{/*----------------------------------------------------------------------------------------------------------------------------*/}
            <View style ={{flexDirection:'row',marginTop:10,height:70,borderBottomWidth:0.2}}>
            <View style ={{height:45,width:45,backgroundColor:'#dcdcdc',borderRadius:50,justifyContent:'center'}}>
            <Ionicons style ={{alignSelf:'center'}} name="md-reader-outline" size={25} color="black"/>
            </View>
            <View style = {{flex:1,marginLeft:10,justifyContent:'center'}}>
                <Text style ={{fontWeight:'bold'}}>Lịch sử đặt hàng</Text>
            </View>
                <Ionicons style = {{alignSelf:'center'}} name="md-chevron-forward-sharp" size={25} color="#424242"/>
            </View>
{/*----------------------------------------------------------------------------------------------------------------------------*/}
            <View style ={{flexDirection:'row',marginTop:10,height:70,borderBottomWidth:0.2}}>
            <View style ={{height:45,width:45,backgroundColor:'#dcdcdc',borderRadius:50,justifyContent:'center'}}>
            <Ionicons style ={{alignSelf:'center'}} name="ios-nuclear-outline" size={25} color="black"/>
            </View>
            <View style = {{flex:1,marginLeft:10,justifyContent:'center'}}>
                <Text style ={{fontWeight:'bold'}}>Vòng quay may mắn</Text>
            </View>
                <Ionicons style = {{alignSelf:'center'}} name="md-chevron-forward-sharp" size={25} color="#424242"/>
            </View>
{/*----------------------------------------------------------------------------------------------------------------------------*/}
            <View style ={{flexDirection:'row',marginTop:10,height:70,borderBottomWidth:0.2}}>
            <View style ={{height:45,width:45,backgroundColor:'#dcdcdc',borderRadius:50,justifyContent:'center'}}>
            <Ionicons style ={{alignSelf:'center'}} name="settings-outline" size={25} color="black"/>
            </View>
            <View style = {{flex:1,marginLeft:10,justifyContent:'space-between',flexDirection:'row',alignSelf:'center'}}>
                <Text style ={{fontWeight:'bold'}}>Cài đặt</Text>
                <Text style = {{color:'#545454'}}>Mật khẩu & bảo mật</Text>
            </View>
                <Ionicons style = {{alignSelf:'center'}} name="md-chevron-forward-sharp" size={25} color="#424242"/>
            </View>
{/*----------------------------------------------------------------------------------------------------------------------------*/}
            <View style ={{flexDirection:'row',marginTop:10,height:70,borderBottomWidth:0.2}}>
            <View style ={{height:45,width:45,backgroundColor:'#dcdcdc',borderRadius:50,justifyContent:'center'}}>
            <Ionicons style ={{alignSelf:'center'}} name="md-compass-outline" size={25} color="black"/>
            </View>
            <View style = {{flex:1,marginLeft:10,justifyContent:'center'}}>
                <Text style ={{fontWeight:'bold'}}>Địa chỉ đã lưu</Text>
            </View>
                <Ionicons style = {{alignSelf:'center'}} name="md-chevron-forward-sharp" size={25} color="#424242"/>
            </View>
{/*----------------------------------------------------------------------------------------------------------------------------*/}
            <View style ={{flexDirection:'row',marginTop:10,height:70,borderBottomWidth:0.2}}>
            <View style ={{height:45,width:45,backgroundColor:'#dcdcdc',borderRadius:50,justifyContent:'center'}}>
            <Ionicons style ={{alignSelf:'center'}} name="ios-mail-outline" size={25} color="black"/>
            </View>
            <View style = {{flex:1,marginLeft:10,justifyContent:'center'}}>
                <Text style ={{fontWeight:'bold'}}>Phản hồi/Góp ý</Text>
            </View>
                <Ionicons style = {{alignSelf:'center'}} name="md-chevron-forward-sharp" size={25} color="#424242"/>
            </View>
{/*----------------------------------------------------------------------------------------------------------------------------*/}
            <View style ={{flexDirection:'row',marginTop:10,height:70,borderBottomWidth:0.2}}>
            <View style ={{height:45,width:45,backgroundColor:'#dcdcdc',borderRadius:50,justifyContent:'center'}}>
            <Ionicons style ={{alignSelf:'center'}} name="ios-help-circle-outline" size={25} color="black"/>
            </View>
            <View style = {{flex:1,marginLeft:10,justifyContent:'center'}}>
                <Text style ={{fontWeight:'bold'}}>Hỏi đáp</Text>
            </View>
                <Ionicons style = {{alignSelf:'center'}} name="md-chevron-forward-sharp" size={25} color="#424242"/>
            </View>
{/*----------------------------------------------------------------------------------------------------------------------------*/}
            <View style ={{flexDirection:'row',marginTop:10,height:70,borderBottomWidth:0.2}}>
            <View style ={{height:45,width:45,backgroundColor:'#dcdcdc',borderRadius:50,justifyContent:'center'}}>
            <Ionicons style ={{alignSelf:'center'}} name="md-star-outline" size={25} color="black"/>
            </View>
            <View style = {{flex:1,marginLeft:10,justifyContent:'center'}}>
                <Text style ={{fontWeight:'bold'}}>Đánh giá ứng dụng</Text>
            </View>
                <Ionicons style = {{alignSelf:'center'}} name="md-chevron-forward-sharp" size={25} color="#424242"/>
            </View>
{/*----------------------------------------------------------------------------------------------------------------------------*/}
            <View style ={{flexDirection:'row',marginTop:10,height:70}}>
            <View style ={{height:45,width:45,backgroundColor:'#dcdcdc',borderRadius:50,justifyContent:'center'}}>
            <Ionicons style ={{alignSelf:'center'}} name="ios-log-out-outline" size={25} color="black"/>
            </View>
            <View style = {{flex:1,marginLeft:10,justifyContent:'center'}}>
                <Text style ={{fontWeight:'bold'}}>Đăng xuất</Text>
            </View>
                <Ionicons style = {{alignSelf:'center'}} name="md-chevron-forward-sharp" size={25} color="#424242"/>
            </View>
            <Text style ={{textAlign:'center',marginTop:30}}>Nếu có bất kỳ vướng mắc hoặc góp ý gì cho Soya Garden, quý khách có thể gọi hotline để được hỗ trợ </Text>
            <Text style ={{textAlign:'center'}}>(Thời gian từ 08:00 đến 22:00)</Text>
            <Image style ={{height:200,width:200,alignSelf:'center'}}
            source={{
                uri:'https://soyagarden.com/content/uploads/2019/10/690x0w.png'
            }}/>
        </ScrollView>
        </View>
        </View>
    )}