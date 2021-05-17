
import React from 'react'
import { View, Text,Image } from 'react-native'

export default function Notification() {
    return (
        <View style ={{backgroundColor:'#BDBDBD',height:800}}>
            <Text style ={{marginTop:25,fontWeight:'bold',fontSize:20,marginBottom:10}}>Thông báo</Text>
            <Text style ={{height:2,backgroundColor:'gray'}}></Text>
            <Image style ={{height:200,width:'auto',marginTop:170}}
            source={{
                uri:'https://banner2.cleanpng.com/20180423/zwe/kisspng-computer-icons-encapsulated-postscript-notification-clipart-5add9111751008.8927256015244700334795.jpg'
            }}
            />
            <Text style ={{fontSize:15,textAlign:'center'}}>Bạn chưa có thông báo nào</Text>
        </View>
    )
}