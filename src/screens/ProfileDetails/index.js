import React, { Component } from 'react';
import { View,Image,ScrollView,TouchableOpacity } from 'react-native';
import { Card, CardItem, Text, Body } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styles from './styles';
import {Header} from '../../components/Header';
export default class ProfileScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={{backgroundColor:"#212121", flexDirection: 'row', justifyContent: "space-between"}}>
            <Header>MY PROFILE</Header>
            <TouchableOpacity onPress={() =>
              this.props.navigation.navigate("ProfileEditscreen")}>
              <Icon name="create" size={25} style={styles.iconstyle1}/>
             </TouchableOpacity>
            
          </View>
          <ScrollView>
          <View style={{borderColor:"transparent"}}> 
            <View style={{backgroundColor:"#424242", paddingVertical: 20}}>
               <View style = { styles.MainContainer }>
                   <Image source={require('../../assets/images/profile_pic.png')} style={styles.image} />
                  <Text style={{color:"#ffffff", fontWeight:"bold",fontSize:wp('6%')}}> John Doe </Text>
                </View>
              </View>
            </View>
          
         <View style={styles.carditem}>
           <Text style={styles.cardheader}> USER PERSONAL INFORMATION </Text>
           </View>
            <Card style={{marginRight:wp('5%'),marginLeft:wp('6%'),borderColor:"grey"}}>
            <CardItem style={styles.carditem}>
              <Body>
              <View style={styles.view1}>
              <Icon name="person" size={20} style={{color:"#ffffff"}}/>
              <Text style={styles.cardtext}>John Doe</Text>
              </View>

              <View style={styles.view2}>
              <Icon name="mail" size={20} style={{color:"#ffffff"}}/>
              <Text style={styles.cardtext}>John_doe@gmail.com</Text>
              </View>

              <View style={styles.view2}>
              <Icon name="phone-iphone" size={20} style={{color:"#ffffff"}}/>
              <Text style={styles.cardtext}>+91 1234567890</Text>
              </View>

              <View style={styles.view2}>
              <Icon name="location-city" size={20} style={{color:"#ffffff"}}/>
              <Text style={styles.cardtext}>Paris</Text>
              </View>

              <View style={styles.view2}>
              <Icon name="location-city" size={20} style={{color:"#ffffff"}}/>
              <Text style={styles.cardtext}>Abc Building</Text>
              </View>

              </Body>
            </CardItem>
            </Card>
             <View style={styles.carditem}>
           <Text style={styles.cardheader}> MOTORBIKE INFORMATION </Text>
           </View>
            <Card style={{marginRight:wp('5%'),marginLeft:wp('6%'),borderColor:"grey"}}>
              <CardItem style={styles.carditem}>
                <Body>
              <View style={styles.view1}>
              <Icon name="info" size={17} style={{color:"#ffffff"}}/>
              <Text style={styles.cardtext}>MMZ 1008</Text>
              </View>

               <View style={styles.view2}>
              <Icon1 name="address-card" size={17} style={{color:"#ffffff"}}/>
              <Text style={styles.cardtext}>License Jpeg</Text>
              </View>
              </Body>
            </CardItem>
            </Card>
         </ScrollView>
      </View>
    );
  }
}


  