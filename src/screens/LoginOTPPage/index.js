import React from 'react';
import { TouchableOpacity, Text,TextInput,View, ImageBackground} from 'react-native';
import Inputs from '../../components/Inputs';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import styles from './styles';
class LoginOtp extends React.Component {
  render() {
    return(
            <View style={styles.container}>
            <ImageBackground source={require('../../assets/images/otpscreen.png')} style={{width:"100%",height:"100%"}}>

              <Text style={styles.heading}> OTP </Text>

              <Text style={styles.message}>
                We have sent you 4 digit code on{'\n'} 
                  your entered mobile number.
              </Text>
              <OTPInputView
                style={styles.otp}
                pinCount={4}
                // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                // onCodeChanged = {code => { this.setState({code})}}
                autoFocusOnLoad
                keyboardType='numeric'
                codeInputFieldStyle={styles.underlineStyleBase}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                onCodeFilled = {(code => {
                    console.log(`Code is ${code}, you are good to go!`)
                })}
              />

       <Text style={styles.question_text}>Not received?
          <Text 
            style={styles.question_button}
          > Resend OTP</Text>
        </Text>
        <TouchableOpacity 
          style={styles.login_button}
           onPress={() =>
            this.props.navigation.navigate("Home")}
          activeOpacity={0.6}
        >
          <Text style={styles.login_button_text}>LOG IN</Text>
        </TouchableOpacity>
         </ImageBackground>
      </View> 
     
    );
  }
}

export default LoginOtp