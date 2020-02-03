import React from 'react';
import { TouchableOpacity, Text, View, ScrollView,TextInput} from 'react-native';
import {Modal,FlatList,StyleSheet,SafeAreaView,Keyboard,KeyboardAvoidingView, Image,Picker,TouchableWithoutFeedback,} from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {Container,Item,Input,Button} from 'native-base'
import { SearchBar } from 'react-native-elements';
import CountryPicker from 'react-native-country-picker-modal';
import data from './Countries'
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationActions } from 'react-navigation';
import ActionSheet from 'react-native-actionsheet';
import styles from './styles';

const defaultFlag = data.filter(
  obj => obj.name === 'United Kingdom'
  )[0].flag

export default class ProfileEdit extends React.Component {

  state = {
    flag: defaultFlag,
    modalVisible: false,
    phoneNumber: '',
    dataSource:[],
    isLoading: true, search: ''
  }

  showActionSheet = () => {
    this.ActionSheet.show()
  }

  showActionSheet1 = () => {
    this.ActionSheets.show()
  }

   onChangeText(key, value) {
    this.setState({
      [key]: value
    })
  }
  showModal() {
    this.setState({ modalVisible: true })
  }
  hideModal() {
    this.setState({ modalVisible: false })
    // Refocus on the Input field after selecting the country code
    this.refs.PhoneInput._root.focus()
  }

  async getCountry(country) {
    const countryData = await data
    try {
      const countryCode = await countryData.filter(
        obj => obj.name === country
      )[0].dial_code
      const countryFlag = await countryData.filter(
        obj => obj.name === country
      )[0].flag
      // Set data from user choice of country
      this.setState({ phoneNumber: countryCode, flag: countryFlag })
      await this.hideModal()
    }
    catch (err) {
      console.log(err)
    }
  }

search = text => {
console.log(text);
};
clear = () => {
this.search.clear();
this.hideModal();
};
SearchFilterFunction(text) {
//passing the inserted text in textinput
const newData = data.filter(function(item) {
//applying filter for the inserted text in search bar
const itemData = item.name ? item.name : '';
const textData = text;
return itemData.indexOf(textData) > -1;
});
this.setState({
//setting the filtered newData on datasource
//After setting the data it will automatically re-render the view
dataSource: newData,
search:text,
});
}


render() {
  let { flag } = this.state
  const countryData = data
  return(
      <>
      <View style={styles.container}>
        <View style={styles.headstyle}>
          <TouchableOpacity onPress={() =>
            this.props.navigation.dispatch(NavigationActions.back())}>
            <Icon name='arrow-back'color={'white'} size={25} style={{padding:5}}/>
          </TouchableOpacity>
          <Text style={styles.heading}>Edit Profile</Text>
        </View>
        <ScrollView>              
        <Text style={styles.profileheading}>Profile Photo</Text>
         <View style={{borderColor:"transparent"}}> 
          <TouchableOpacity activeOpacity={1.0} onPress={this.showActionSheet}>
            <View style={styles.profilepic}>
              <View style = { styles.MainContainer }>
                <Icon1 name="camera" size={25} style={styles.image} color={'white'} />
                    <ActionSheet
                      ref={o => this.ActionSheet = o}
                      // title={'Which one do you like ?'}
                      options={['Photo Library', 'Take Photo', 'Cancel']}
                      cancelButtonIndex={2}
                      destructiveButtonIndex={2}
                      onPress={(index) => { /* do something */ }}
                    />
                </View>
              </View>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection:"row"}}>
            <TextInput
              autoFocus={false}
              placeholder='John Doe'
              placeholderTextColor={'#9a9a9a'}
              autoCorrect={false}
              style={styles.input}
            />
            </View>
            <View style={{flexDirection:"row"}}>
            <TextInput
              // maxLength={10}
              // keyboardType={'phone-pad'}
              autoFocus={false}
              placeholder='John_doe@gmail.com'
              placeholderTextColor={'#9a9a9a'}
              autoCorrect={false}
              style={styles.input}
            />
            </View>

            <View style={{flexDirection:"row"}}>
            {/* <TextInput
              maxLength={10}
              keyboardType={'phone-pad'}
              //  autoFocus={true}
              placeholder='1234567890'
              placeholderTextColor={'#9a9a9a'}
              autoCorrect={false}
              style={styles.input}
            /> */}

             <View style={{flex:1}}>
             <KeyboardAvoidingView style={{flex:1}} enabled>
               <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                  <Item style={styles.itemStyle}>
                    <View><Text style={{fontSize: 25,padding:18}}  onPress={() => this.showModal()}>{flag}</Text></View>
                    <Icon
                      active
                      name='arrow-drop-down'
                      style={[styles.iconStyle]}
                      onPress={() => this.showModal()}
                    />
                    <Input
                      style={styles.input1}
                      // maxLength={10}
                      placeholder='1234567890'
                      placeholderTextColor='#9a9a9a'
                      keyboardType={'phone-pad'}
                      returnKeyType='done'
                      autoCapitalize='none'
                      autoCorrect={false}
                      secureTextEntry={false}
                      ref='PhoneInput'
                      value={this.state.phoneNumber}
                      onChangeText={(val) => {
                        if (this.state.phoneNumber===''){
                          // render UK phone code by default when Modal is not open
                          this.onChangeText('phoneNumber', + val)
                        } else {
                          // render country code based on users choice with Modal
                          this.onChangeText('phoneNumber', val)
                        }}
                      }
                    />
                    <Modal
                      animationType="slide"
                      transparent={false}
                      visible={this.state.modalVisible}>
                      <View style={{ flex: 1 }}>
                        <View style={{ flex: 1, backgroundColor: '#303030' }}>
                          <SearchBar
                            round
                            searchIcon={{ size: 24 }}
                            onChangeText={text => this.SearchFilterFunction(text)}
                            onClear={text => this.SearchFilterFunction('')}
                            placeholder="Search Country Here..."
                            value={this.state.search}
                            style={{marginLeft:20}}
                            />
                          
                          <FlatList
                            data={this.state.dataSource}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={
                              ({ item }) =>
                                <TouchableWithoutFeedback 
                                  onPress={() => this.getCountry(item.name)}>
                                  <View 
                                    style={
                                      [
                                        styles.countryStyle, 
                                        {
                                          flexDirection: 'row', 
                                          alignItems: 'center',
                                          justifyContent: 'space-between'
                                        }
                                      ]
                                    }>
                                    <Text style={{fontSize: 45}}>
                                      {item.flag}
                                    </Text>
                                    <Text style={{fontSize: 20, color: '#fff'}}>
                                      {item.name} ({item.dial_code})
                                    </Text>
                                  </View>
                                </TouchableWithoutFeedback>
                            }
                          />
                        </View>
                        <TouchableOpacity 
                          onPress={() => this.hideModal()} 
                          style={styles.verify_button}
                          activeOpacity={0.6}
                        >
                          <Text style={styles.verify_button_text}>Close</Text>
                        </TouchableOpacity>  
                      </View>
                    </Modal>
                  </Item>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </View>
    </View>

            <View style={{flexDirection:"row"}}>
            <TextInput
              // autoFocus={true}
              placeholder='Abc Building,Paris'
              placeholderTextColor={'#9a9a9a'}
              autoCorrect={false}
              style={styles.input}
            />
            </View>

             <View style={{flexDirection:"row"}}>
            <TextInput
              // autoFocus={true}
              placeholder='MMZ 1008'
              placeholderTextColor={'#9a9a9a'}
              autoCorrect={false}
              style={styles.input}
            />
            </View>
            <Text style={styles.profileheading}>Upload Documents</Text>
            <View style={{borderColor:"transparent"}}> 
             <TouchableOpacity activeOpacity={1.0} onPress={this.showActionSheet1}>
            <View style={styles.profilepic}>
               <View style = { styles.MainContainer }>
                <Icon1 name="camera" size={25} style={styles.image} color={'white'} />
                   <ActionSheet
                      ref={o => this.ActionSheets = o}
                      // title={'Which one do you like ?'}
                      options={['Documents', 'Google Drive', 'Cancel']}
                      cancelButtonIndex={2}
                      destructiveButtonIndex={2}
                      onPress={(index) => { /* do something */ }}
                    />
                </View>
              </View>
              </TouchableOpacity>
            </View>
            <View style={{padding:10}}></View>
      </ScrollView>
    </View>

     <TouchableOpacity 
          onPress={() =>
          this.props.navigation.navigate("Updatemobnoscreen")}
          style={styles.verify_button}
          activeOpacity={0.6}
         >
          <Text style={styles.verify_button_text}>Update Profile</Text>
         </TouchableOpacity>  
    </>
    )
  }
}