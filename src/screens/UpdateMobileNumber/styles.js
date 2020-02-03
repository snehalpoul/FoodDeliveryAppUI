import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default {
    container: {
    flex: 1,
    backgroundColor: '#212121',
  },
   containers: {
    flex: 1,
    backgroundColor: '#303030',
    padding: wp('4%'),
  },
   headstyle:{
      flexDirection:"row",
      padding:7
  },
  heading: {
    textTransform: 'uppercase',
    color: '#fff',
    fontSize: hp('3%'),
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    marginTop: wp('2.5%'),
    marginHorizontal:25
  },
  message: {
    fontFamily: 'Roboto',
    color: '#fff',
    fontSize: hp('3.2%'),
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: wp('10%'),
  },
  errortext:{
    fontFamily: 'Roboto',
    fontSize: hp('2.5%'),
    color:'#f95a45',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: wp('15%'),
  },
  otp: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: wp('5%'),
    marginTop: wp('5%')
  },
  question_text: {
    // fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'Roboto',
    fontSize: hp('2.5%'),
    marginTop: hp('5%'),
    textAlign: 'center',
  },
  question_button: {
    color: '#00dfa7',
  },
  verify_button: {
    backgroundColor: '#00dfa7',
    paddingVertical: 15,
 },
  verify_button_text: {
    fontSize: hp('3%'),
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  underlineStyleBase: {
    marginHorizontal: wp('2%'),
    marginTop: wp('5%'),
    borderWidth: 0,
    borderRadius:100,
    width:wp('16%'),
    height:hp('9%'),
    backgroundColor:"#424242",
    justifyContent: 'space-around',
    fontSize:hp('3.5%')
  },

  underlineStyleHighLighted: {
    backgroundColor:"#00dfa7"
  },
}