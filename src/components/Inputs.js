import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Inputs = ({ 
  placeholder, 
  kbType, 
  autoFocus, 
  length,
  onSubmitEditing,
  OnChangeText,
  reference
  }) => {
  return (
    <View>
      <TextInput
        onSubmitEditing={onSubmitEditing}
        onChangeText={OnChangeText}
        ref={reference}
        maxLength={length}
        keyboardType={kbType}
        autoFocus={autoFocus}
        placeholder={placeholder}
        placeholderTextColor={'#9a9a9a'}
        autoCorrect={false}
        style={styles.inputStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: "#363636",
    color: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    fontSize: hp('3%'),
    textAlign:"center",
    borderRadius: 10,
    marginTop: wp('3%'),
  },
});

export default Inputs;