import React, { Component } from 'react';
import { StyleSheet, View, Text,ScrollView ,TouchableOpacity } from 'react-native';
import { Table, TableWrapper, Row, Rows } from 'react-native-table-component';
import { Button } from "native-base";
import Icon from 'react-native-vector-icons/MaterialIcons';
import call from 'react-native-phone-call';
import { NavigationActions } from 'react-navigation';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styles from './styles';
import getDirections from 'react-native-google-maps-directions';
export default class OrdersDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: [ 'Item name', '','Quantity'],
      
      tableData: [
        ['Item 1','', '10'],
        ['Item 2', '','10'],
        ['Item 3', '','10'],
      ],
       tableData1:[
        ['Total','','30']
      ]
    }
  }

  call = () => {
  //handler to make a call
  const args = {
    number: '1234567890',
    prompt: false,
  };
 
  call(args).catch(console.error);
};
 
 handleGetDirections = () => {
    const data = {
      destination: {
        latitude: 18.5018,
        longitude: 73.8636
      },
      params: [
        {
          key: "travelmode",
          value: "driving"       
        },
        {
          key: "dir_action",
          value: "navigate"       
        }
      ],
    }

    getDirections(data)
  }

  render() {
    const state = this.state;
    return (
      <>
        <View style={styles.containers}>
          <View style={styles.headstyle}>
             <Button transparent>
              <TouchableOpacity onPress={() =>
              this.props.navigation.navigate("Home")}>
              <Icon name='arrow-back' color={'white'} size={25} style={{padding:10}}/>
              </TouchableOpacity>
            </Button>
              <Text style={styles.headerText} >ORDERS DETAILS</Text>
            <Button transparent>
              <Icon name='map' onPress={this.handleGetDirections} style={{padding:10}} color={'#ffffff'} size={25}/>
            </Button>
          </View>
        <ScrollView>
        <View style={styles.bodyhead}>
          <Text style={{fontSize: wp('5.5%'),color:"#ffffff"}}>Order ID: 1501</Text>
          <View style={styles.button} >
            <Text style={{color:'#ffffff',padding:1}}>Picked-up</Text>
          </View>
        
        </View>
        <View>
          <Text style={styles.headtext}>Restaurant Name:
          <Text style={{color:'#ffffff'}}> Hotel Plaza </Text> 
          </Text>
          <Text style={styles.headtext}>Address:
          <Text style={{color:'#ffffff'}}> Abc building </Text> 
          </Text>
        </View>
        
           <Text style={styles.tablehead}>Order Details</Text>
         <View style={styles.container}>
        <Table>
          <Row data={state.tableHead} flexArr={[1, 1, 1, 1]} style={styles.head} textStyle={styles.text}/>
          <TableWrapper style={styles.wrapper}>
            <Rows data={state.tableData} flexArr={[1,1, 1, 1]} style={styles.row} textStyle={styles.text}/>
          </TableWrapper>
          <Rows data={state.tableData1} flexArr={[1,1,1,1]} style={styles.rowlast} textStyle={styles.text}/>
        </Table>
        </View>
      <View style={{ margin:hp('5%'),alignItems:'center',justifyContent:'center'}}>
        <Button bordered rounded success>
             <Icon name='phone' style={{padding:10}} color={'#79dea8'} size={20} />
            <Text style={styles.btncall} onPress={this.call}>Call Customer</Text>
          </Button>
      </View>
      </ScrollView>
      </View>
       <TouchableOpacity onPress={() =>
                this.props.navigation.navigate("OrdersDetailscreend")}
          style={styles.verify_button}
          activeOpacity={0.6}
         >
          <Text style={styles.verify_button_text}>Delivered</Text>
         </TouchableOpacity>  
         </>
    )
  }
}
 