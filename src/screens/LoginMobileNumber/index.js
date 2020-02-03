import React from 'react'
import SplashScreen from 'react-native-splash-screen';
import {Modal,FlatList,StyleSheet,SafeAreaView,Keyboard,KeyboardAvoidingView,TouchableWithoutFeedback,} from 'react-native'
import { TouchableOpacity, Text, View, ImageBackground,Image,Picker,TextInput} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {Container,Item,Input,Icon} from 'native-base'
import { SearchBar } from 'react-native-elements';
import CountryPicker from 'react-native-country-picker-modal';
import data from './Countries';
import styles from './styles';

// Default render of country flag
const defaultFlag = data.filter(
  obj => obj.name === 'India'
  )[0].flag

export default class App extends React.Component {
  state = {
    flag: defaultFlag,
    modalVisible: false,
    phoneNumber: '',
    dataSource:[],
    isLoading: true, 
    search: ''
  }

  componentDidMount() {
    setTimeout(() => {
    SplashScreen.hide();
    }, 600);
       
   }

  onPressFlag=()=>{
    this.countryPicker.open()
}

  selectCountry(country){
    this.phone.selectCountry(country.cca2.toLowerCase())
    this.setState({cca2: country.cca2})
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
    return (
      <View style={{flex:1}}>
        <KeyboardAvoidingView style={{flex:1,}} enabled>
          <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                  <ImageBackground source={require('../../assets/images/otpscreen.png')} style={{width:"100%",height:"100%"}}>
                  <View style={{alignItems:"center",marginTop:40,}}>
              <Image source={require('../../assets/images/simbi_logo1.png')} />
           </View>
                  <Item rounded style={styles.itemStyle}>
                    <View><Text style={{fontSize: 30,padding:10}}  onPress={() => this.showModal()}>{flag}</Text></View>
                    <Icon
                      active
                      name='md-arrow-dropdown'
                      style={[styles.iconStyle, { marginLeft: 5}]}
                      onPress={() => this.showModal()}
                    />
                    <Input
                      style={styles.input}
                      placeholder='1234567890'
                      placeholderTextColor='#adb4bc'
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
                        <View style={{ flex: 10, paddingTop: 10, backgroundColor: '#212121' }}>
                
                        <SearchBar
                          round
                          searchIcon={{ size: 24 }}
                          onChangeText={text => this.SearchFilterFunction(text)}
                          onClear={text => this.SearchFilterFunction('')}
                          placeholder="Search Country Here..."
                          value={this.state.search}
                          />
                            { this.state.search==='' ?
                          <FlatList
                            data={data}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={
                              ({ item }) =>
                                <TouchableOpacity 
                                  onPress={() => this.getCountry(item.name)}>
                                  <View 
                                    style={
                                      [
                                        styles.countryStyle, 
                                        {
                                          flexDirection: 'row', 
                                          marginHorizontal:'4%',
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
                                </TouchableOpacity>
                            }
                          />:
                          <FlatList
                          data={this.state.dataSource}
                          keyExtractor={(item, index) => index.toString()}
                          renderItem={
                            ({ item }) =>
                              <TouchableOpacity 
                                onPress={() => this.getCountry(item.name)}>
                                <View 
                                  style={
                                    [
                                      styles.countryStyle, 
                                      {
                                        flexDirection: 'row', 
                                        marginHorizontal:'4%',
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
                              </TouchableOpacity>
                          }
                        />
                      }
                
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
                  <TouchableOpacity 
                      style={styles.next_button}
                      onPress={() =>
                        this.props.navigation.navigate("LoginOtpscreen")}
                      activeOpacity={0.6}
                    >
                      <Text style={styles.next_button_text}> Next </Text>
                    </TouchableOpacity>
                  </ImageBackground>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </View>
    )
  }
}

