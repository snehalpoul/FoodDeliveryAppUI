import React from 'react';
 import { StyleSheet, Text, View ,Image} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import LoginOtp from './src/screens/LoginOTPPage';
import LoginMobileNo from './src/screens/LoginMobileNumber';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import HomePage from './src/screens/HomePage';
import ProfileScreen from './src/screens/ProfileDetails';
import PastOrder from './src/screens/PastOrders';
import MyRevenue from './src/screens/MyRevenue';
import OrdersDetails from './src/screens/OrdersDetails';
import OrderDetail from './src/screens/OrderDetail';
import ProfileEdit from './src/screens/ProfileEdit';
// import Updatemobno from './screens/UpdateMobileNumber';

const TabNavigator = createBottomTabNavigator(  
  
    {  
      Home:{  
        screen:HomePage,  
        navigationOptions:{ 
          tabBarLabel:'Home',
          tabBarIcon:({tintColor})=>{
           return <Icon name="home" color={tintColor} size={22} style={{marginTop:7}}/>;   }
        }  
      },  
      Profile: {  
        screen:ProfileScreen,  
        navigationOptions:{  
          tabBarLabel:'Profile',  
          tabBarIcon:({tintColor})=>(  
              <Icon name="person" color={tintColor} size={22} style={{marginTop:7}}/>  
          )  
        }  
      },  
      PastOrders: {  
        screen:PastOrder,  
        navigationOptions:{  
          tabBarLabel:'Past Orders',  
          tabBarIcon:({tintColor})=>(  
              <Icon1 name="shopping-bag" color={tintColor} size={17} style={{marginTop:6}}/>  
          )  
        }  
      }, 
      MyRevenue: {  
        screen:MyRevenue,  
        navigationOptions:{  
          tabBarLabel:'My Revenue',  
          tabBarIcon:({tintColor,focused})=>(  
            <Icon1 name="dollar" color={tintColor} size={17} style={{marginTop:7}}/>   
        // <Image
        //   style={{ width: 20, height: 20,marginTop:7}}
        //   source={require("./assets/images/dollar.png")}
        // />
             
          )  
        }  
      },   
    },  
    {  
      // initialRouteName: "Home",
      tabBarOptions: {
          
          activeTintColor: '#79dea8',
          inactiveTintColor: '#ffffff',
         
          labelStyle: {
              fontSize: 12,
              fontWeight:"bold",
              marginBottom:12,
              
             },
          style: {
           height: 60,
           backgroundColor: '#212121',
           borderTopColor:"#212121",
          }
        }  
    },  
);  



const Main = createStackNavigator({
  // splashscreen:{
  //   screen: SplashScreen,
  //   navigationOptions: {header:null}
  // },
  LoginOtpscreen: {
    screen: LoginOtp,
    navigationOptions: {header:null}
  },
  LoginMobileNoscreen:{
    screen: LoginMobileNo,
    navigationOptions:{header:null}
  },
  tabscreen:{
    screen: TabNavigator,
    navigationOptions:{header:null}
  },
  OrdersDetailscreen:{
    screen: OrdersDetails,
    navigationOptions:{header:null}
  },
  OrdersDetailscreend:{
    screen: OrderDetail,
    navigationOptions:{header:null} 
  },
  ProfileEditscreen:{
    screen: ProfileEdit,
    navigationOptions:{header:null} 
  }
  // Updatemobnoscreen:{
  //   screen: Updatemobno,
  //   navigationOptions:{header:null} 
  // }

  
},
    {initialRouteName: 'LoginMobileNoscreen'}
);

const AppContainer = createAppContainer(Main);

export default class App extends React.Component {
  render() {
    return (
    <AppContainer/>
    );
  }
}

