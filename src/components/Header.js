import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const Header = (props) => {
    return(
        <View>
            <Text style={styles.textcontainer}>
                {props.children}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textcontainer:{
    marginLeft:wp('28%'),
    fontSize:hp('3.5%'),
    padding:10,
    fontWeight: "bold",
    color:"#ffffff",
    fontFamily:"roboto",
    textTransform: 'uppercase',
    }
})

export {Header};