import React from 'react';
import { TouchableOpacity, Text, View, ScrollView} from 'react-native';
import Input from '../../components/Input';
import { Button } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationActions } from 'react-navigation';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import styles from './styles';
class Updatemobno extends React.Component {
  render() {
    return(
        <>
        <View style={styles.container}>
         <View style={styles.headstyle}>
          <Button transparent>
              <TouchableOpacity onPress={() =>
              this.props.navigation.dispatch(NavigationActions.back())}>
              <Icon name='arrow-back'color={'white'} size={25} style={{padding:5}}/></TouchableOpacity>
          </Button>
            <Text style={styles.heading}>UPDATE MOBILE NUMBER</Text>
         </View>
         
         <View style={styles.containers}>
           <ScrollView>
         <Text style={styles.message}>
          We have sent you 4 Digit Code {'\n'} 
           on your new mobile number{'\n'}
               you have entered
         </Text>

         <Text style={styles.errortext}>  OTP is Incorrect.</Text>

             <OTPInputView
                style={styles.otp}
                pinCount={4}
                // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                // onCodeChanged = {code => { this.setState({code})}}
                // autoFocusOnLoad
                codeInputFieldStyle={styles.underlineStyleBase}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                onCodeFilled = {(code => {
                    console.log(`Code is ${code}, you are good to go!`)
                })}
              />

            <Text style={styles.question_text}>Not received?
          <Text 
            style={styles.question_button}
          > Resend Again</Text>
         </Text>
         </ScrollView>
       </View>
       
     </View>
     <TouchableOpacity 
          style={styles.verify_button}
          activeOpacity={0.6}
         >
          <Text style={styles.verify_button_text}>VERIFY MOBILE NUMBER</Text>
         </TouchableOpacity>  
      </>
    );
  }
}

export default Updatemobno

