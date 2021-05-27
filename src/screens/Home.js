import React, {useEffect, useState} from 'react'
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet, ScrollView, TextInput, Button} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ViewSlider from 'react-native-view-slider'

const { width, height } = Dimensions.get('window');

function App() {
  return (
    <>
      <ViewSlider 
        renderSlides = {
          <>
            <View style={styles.viewBox}>
              <Image source={{uri: 'https://image.shutterstock.com/image-photo/beautiful-autumn-scene-hintersee-lake-260nw-747646759.jpg'}} style={{height: 200, width}}/>
            </View>
            <View style={styles.viewBox}><Text>TWO</Text></View>
            <View style={styles.viewBox}><Text>THREE</Text></View>
            <View style={styles.viewBox}><Text>FOUR</Text></View>
         </>
      }
      style={styles.slider}     //Main slider container style
      height = {200}    //Height of your slider
      slideCount = {4}    //How many views you are adding to slide
      dots = {true}     // Pagination dots visibility true for visibile 
      dotActiveColor = 'red'     //Pagination dot active color
      dotInactiveColor = 'gray'    // Pagination do inactive color
      dotsContainerStyle={styles.dotContainer}     // Container style of the pagination dots
      autoSlide = {true}    //The views will slide automatically
      slideInterval = {1000}    //In Miliseconds
     />
    </>
  );
};

const DATA = Array(10).fill('').map((e, i) => ({
    id: i + 1,
    photo: 'https://soyagarden.com/content/uploads/2019/12/28122019_SOYA1675.jpg',
    name: 'Matcha Macchiato',
    price: '50000',
    heart: i % 2 === 0
  }))
export default function Home({navigation}) {
    return (
        <View style ={{marginBottom:100}}>
        <View style = {{flexDirection:'row',justifyContent:'space-around', height:100,backgroundColor:'yellow'}}>
            <View style={styles.b}>
            <Ionicons style ={styles.a} name ="card-outline" size={25} color="#008000"/>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Order')}>
            <View style={styles.b}>
            <FontAwesome5 style ={styles.a} name ="shipping-fast" size={25} color="#008000"/>
            </View>
            </TouchableOpacity>
            <View style={styles.b}>
            <Ionicons style ={styles.a} name ="barcode-sharp" size={25} color="#008000"/>
            </View>
            <View style={styles.b}>
            <MaterialCommunityIcons style ={styles.a} name ="card-outline" size={25} color="#008000"/>
            </View>
        </View>
        <ScrollView>
            <View style ={{backgroundColor:'#D8D8D8',height:250}}>
            <Image
            style ={{height:220,width:370,alignSelf:'center',borderRadius:8,marginTop:10,marginBottom:10}}
                source={{
                uri: 'https://soyagarden.com/content/uploads/2020/03/3bd7b9c6e1041a5a4315.jpg',
            }}
            />
            </View>
            <View style = {{marginLeft:10,marginRight:10}}>
            <Text style = {{fontSize:16,fontWeight:'bold',marginTop:10, marginBottom:5}}>Gợi ý cho bạn</Text>
                <ScrollView horizontal={true} style = {{flexDirection:'row'}}>
                    <View>
                    <TouchableOpacity>
                        <Image style = {{height:150,width:220,borderRadius:8,marginRight:10}}
                        source={{
                            uri: 'https://soyagarden.com/content/uploads/2019/12/28122019_SOYA1675.jpg',
                        }}
                        />
                    </TouchableOpacity>
                    <Text style ={{fontSize:13, fontWeight:'bold',marginTop:5}}>MATCHA MACCHIATO</Text>
                    <Text style ={{fontSize:13,color:'gray'}}>55,000 ₫</Text>
                    </View>
                    <View>
                    <TouchableOpacity>
                        <Image style = {{height:150,width:220,borderRadius:8,marginRight:10}}
                        source={{
                            uri: 'https://soyagarden.com/content/uploads/2020/09/DSC_7889.jpg',
                        }}
                        />
                    </TouchableOpacity>
                    <Text style ={{fontSize:13, fontWeight:'bold',marginTop:5}}>BEANCURD SỐT XOÀI (MỚI)</Text>
                    <Text style ={{fontSize:13,color:'gray'}}>39,000 ₫</Text>
                    </View>
                    <View>
                    <TouchableOpacity>
                        <Image style = {{height:150,width:220,borderRadius:8,marginRight:10}}
                        source={{
                            uri: 'https://soyagarden.com/content/uploads/2020/11/DSC_9613.jpg',
                        }}
                        />
                    </TouchableOpacity>
                    <Text style ={{fontSize:13, fontWeight:'bold',marginTop:5}}>HOT CHOCOLATE LATTE (MỚI)</Text>
                    <Text style ={{fontSize:13,color:'gray'}}>55,000 ₫</Text>
                    </View>
                    <View>
                    <TouchableOpacity>
                        <Image style = {{height:150,width:220,borderRadius:8,marginRight:10}}
                        source={{
                            uri: 'https://soyagarden.com/content/uploads/2020/03/IMG_9955-1024x941.jpg',
                        }}
                        />
                    </TouchableOpacity>
                    <Text style ={{fontSize:13, fontWeight:'bold',marginTop:5}}>SOYA JELLY-O</Text>
                    <Text style ={{fontSize:13,color:'gray'}}>55,000 ₫</Text>
                    </View>
                    <View>
                    <TouchableOpacity>
                        <Image style = {{height:150,width:220,borderRadius:8,marginRight:10}}
                        source={{
                            uri: 'https://soyagarden.com/content/uploads/2019/12/Kh%C3%B4ng-kem_Soya-Milk-Khoai-Lang-ph%C3%B4-mai-1-300x200.jpg',
                        }}
                        />
                    </TouchableOpacity>
                    <Text style ={{fontSize:13, fontWeight:'bold',marginTop:5}}>Khoai lang phô mai</Text>
                    <Text style ={{fontSize:13,color:'gray'}}>50,000 ₫</Text>
                    </View>
                    <View>
                    <TouchableOpacity>
                        <Image style = {{height:150,width:220,borderRadius:8,marginRight:10}}
                        source={{
                            uri: 'https://soyagarden.com/content/uploads/2019/12/28122019_SOYA1675.jpg',
                        }}
                        />
                    </TouchableOpacity>
                    <Text style ={{fontSize:13, fontWeight:'bold',marginTop:5}}>MATCHA MACCHIATO</Text>
                    <Text style ={{fontSize:13,color:'gray'}}>55,000 ₫</Text>
                    </View>
                </ScrollView>
            </View>
<Text style ={{height:2,backgroundColor:'#D8D8D8',marginTop:10}}></Text>
            <View style = {{marginLeft:10,marginRight:10}}>
                <View style = {{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                    <Text style = {{fontSize:16,fontWeight:'bold'}}>Voucher/Khuyến mãi</Text>
                    <TouchableOpacity>
                    <Ionicons name ="chevron-forward" size={25} color="black"/>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal={true} style = {{flexDirection:'row'}}>
                <View>
                    <TouchableOpacity>
                    <Image
                    style ={{height:150,width:220,borderRadius:8,marginRight:10}}
                    source={{
                        uri: 'https://soyagarden.com/content/uploads/2020/03/3bd7b9c6e1041a5a4315-1024x460.jpg',
                    }}
                    />
                    </TouchableOpacity>
                    <Text style={{width:220,fontSize:13, fontWeight:'bold',marginTop:5}}>ĐẾN VƯỜN ĐẬU THỬ SOYA JELLY-O MỚI – KIM BÀI MIỄN DỊCH TUYỆT VỜI, CHỈ 29K</Text>
                </View>

                <View>
                    <TouchableOpacity>
                    <Image
                    style ={{height:150,width:220,borderRadius:8,marginRight:10}}
                    source={{
                        uri: 'https://soyagarden.com/content/uploads/2020/12/z2253425214787_26a3753be9ab7a8555d37cf0678e3b60-768x1026.jpg',
                    }}
                    />
                    </TouchableOpacity>
                    <Text style={{width:220,fontSize:13, fontWeight:'bold',marginTop:5}}>CHÀO 2021, ĐI SOYA MUA 2 TẶNG 1</Text>
                </View>

                <View>
                    <TouchableOpacity>
                    <Image
                    style ={{height:150,width:220,borderRadius:8,marginRight:10}}
                    source={{
                        uri: 'https://soyagarden.com/content/uploads/2019/09/z1529277587459_b175efa81949df4924fe1b45495b0ae3-1-1024x717.jpg',
                    }}
                    />
                    </TouchableOpacity>
                    <Text style={{width:220,fontSize:13, fontWeight:'bold',marginTop:5}}>SOYA ĐI, TẶNG BÁNH WAFFLE FREE TỪ 7H – 10H SÁNG HÀNG NGÀY</Text>
                </View>

                <View>
                    <TouchableOpacity>
                    <Image
                    style ={{height:150,width:220,borderRadius:8,marginRight:10}}
                    source={{
                        uri: 'https://soyagarden.com/content/uploads/2020/03/4684897290716b2f3260-1024x460.jpg',
                    }}
                    />
                    </TouchableOpacity>
                    <Text style={{width:220,fontSize:13, fontWeight:'bold',marginTop:5}}>NGÀY MỚI HỨNG KHỞI CÙNG SOYA VỚI COMBO CHỈ 39K (Tiết kiệm đến 19K)</Text>
                </View>

                <View>
                    <TouchableOpacity>
                    <Image
                    style ={{height:150,width:220,borderRadius:8,marginRight:10}}
                    source={{
                        uri: 'https://soyagarden.com/content/uploads/2020/09/DSC_7965-e1598931525163-1024x716.jpg',
                    }}
                    />
                    </TouchableOpacity>
                    <Text style={{width:220,fontSize:13, fontWeight:'bold',marginTop:5}}>NEW PRODUCT | THỬ “HƯƠNG VỊ THU” – HƯỞNG THỤ ƯU ĐÃI KHỦNG – FREE TOPPING BẤT KỲ</Text>
                </View>
                </ScrollView>
            </View>

<Text style ={{height:2,backgroundColor:'#D8D8D8',marginTop:10}}></Text>

            <View style = {{marginLeft:10,marginRight:10}}>
                <View style ={{flexDirection:'row', justifyContent:'space-between',marginTop:10}}>
                    <Text style = {{fontSize:16,fontWeight:'bold'}}>Tin Tức</Text>
                    <Ionicons name ="chevron-forward" size={25} color="black"/>
                </View>
                <ScrollView horizontal={true} style ={{flexDirection:'row'}}>
                <View>
                    <TouchableOpacity>
                    <Image
                    style ={{height:150,width:220,borderRadius:8,marginRight:10}}
                    source={{
                        uri: 'https://soyagarden.com/content/uploads/2020/03/SoyaGarden_Corona_3.jpg',
                    }}
                    />
                    </TouchableOpacity>
                    <Text style={{width:220,fontSize:13, fontWeight:'bold',marginTop:5}}>5 TIN ĐỒN VỀ CÁC LOẠI THỰC PHẨM LIÊN QUAN ĐẾN VIRUS CORONA CHỦNG MỚI VÀ SỰ THẬT ĐẰNG SAU ĐÓ</Text>
                </View>

                <View>
                    <TouchableOpacity>
                    <Image
                    style ={{height:150,width:220,borderRadius:8,marginRight:10}}
                    source={{
                        uri: 'https://soyagarden.com/content/uploads/2019/08/23-1024x682.jpg',
                    }}
                    />
                    </TouchableOpacity>
                    <Text style={{width:220,fontSize:13, fontWeight:'bold',marginTop:5}}>SỰ KIỆN KHAI TRƯƠNG CỬA HÀNG THỨ 50 SOYA GARDEN</Text>
                </View>

                <View>
                    <TouchableOpacity>
                    <Image
                    style ={{height:150,width:220,borderRadius:8,marginRight:10}}
                    source={{
                        uri: 'https://soyagarden.com/content/uploads/2019/08/2-768x1024.jpg',
                    }}
                    />
                    </TouchableOpacity>
                    <Text style={{width:220,fontSize:13, fontWeight:'bold',marginTop:5}}>NGHỈ CHÂN, QUẤY CHẤT CÙNG SỰ KIỆN KHAI TRƯƠNG SOYA GARDEN NGÃ 6 PHÙ ĐỔNG</Text>
                </View>

                <View>
                    <TouchableOpacity>
                    <Image
                    style ={{height:150,width:220,borderRadius:8,marginRight:10}}
                    source={{
                        uri: 'https://soyagarden.com/content/uploads/2019/08/65208026_2817837118291260_3549620037251760128_n.png',
                    }}
                    />
                    </TouchableOpacity>
                    <Text style={{width:220,fontSize:13, fontWeight:'bold',marginTop:5}}>CÙNG SOYA HỌC CÁCH THƯỞNG THỨC BEANCURD NGON ĐỒNG ĐIỆU</Text>
                </View>

                <View>
                    <TouchableOpacity>
                    <Image
                    style ={{height:150,width:220,borderRadius:8,marginRight:10}}
                    source={{
                        uri: 'https://soyagarden.com/content/uploads/2020/03/3f76471c9b3f6061392e-1024x1024.jpg',
                    }}
                    />
                    </TouchableOpacity>
                    <Text style={{width:220,fontSize:13, fontWeight:'bold',marginTop:5}}>SOYA GARDEN THÔNG BÁO VỀ VIỆC THAY ĐỔI KHUNG GIỜ HOẠT ĐỘNG</Text>
                </View>
                </ScrollView>
            </View> 
        </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    a:{
        alignSelf:'center',
    },
    b:{
        height:40,
        width:40,
        backgroundColor:'white',
        justifyContent:'center',
        borderRadius:20,
        marginTop:40,
    }
})