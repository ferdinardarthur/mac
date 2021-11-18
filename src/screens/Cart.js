import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';
import accessories from '../consts/accessories';
import BottomNavigator from '../screens/BottomNavigator';
import { Ionicons } from '@expo/vector-icons';

const Cart = ({navigation}) => {
  const CartCard = ({item}) => {
    return (
      <View style={style.cartCard}>
        <Image source={item.image} style={{height: 80, width: 80}} />
        <View
          style={{
            height: 100,
            marginLeft: 10,
            paddingVertical: 20,
            flex: 1,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 16, color: COLORS.dark}}>{item.name}</Text>
          <Text style={{fontSize: 13, color: COLORS.grey}}>
            {item.ingredients}
          </Text>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: COLORS.dark}}>${item.price}</Text>
        </View>
        <View style={{marginRight: 20, alignItems: 'center'}}>
          <View style={style.actionBtn}>
          <Ionicons name="trash-bin" size={24} color="black" />
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{backgroundColor: COLORS.dark, flex: 1}}>
      <View style={style.header}>
        <Icon name="arrow-back-ios" size={28} color="white" onPress={navigation.goBack} />
        <Text style={{fontSize: 20, fontWeight: 'bold', color: COLORS.white}}>Cart</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 80}}
        data={accessories}
        renderItem={({item}) => <CartCard item={item} />}
        ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
        ListFooterComponent={() => (
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 15,
              }}>
              <Text style={{fontSize: 18, fontWeight: 'bold', color: COLORS.white}}>
                Total Price
              </Text>
              <Text style={{fontSize: 18, fontWeight: 'bold', color: COLORS.white}}>$1090</Text>
            </View>

          <TouchableOpacity onPress= {() => {navigation.navigate("CheckOutPage");}} >
          <View style={{...style.btnContainer,  borderColor: "white", marginTop: 40, marginBottom: 40}}>
        <Text style={{...style.title, color: COLORS.dark}}>CheckOut</Text>
          </View>
         </TouchableOpacity> 
        
          </View>
        )}
      />
      <BottomNavigator  navigation={navigation} />
    </SafeAreaView>

    
  );
};
const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  title: {color: COLORS.dark, fontWeight: 'bold', fontSize: 18},
  btnContainer: {
    backgroundColor: COLORS.white,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Cart;