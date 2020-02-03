import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default {
  container: {
    flex: 1,
    backgroundColor: '#303030',
  },
  heading: {
    color: '#fff',
    fontSize: hp('5.5%'),
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: wp('7%'),
  },
  message: {
    fontFamily: 'Roboto',
    color: '#fff',
    fontSize: hp('3%'),
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: wp('8%'),
  },
  otp: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: wp('4%'),
    marginTop: wp('5%'),
  },
  question_text: {
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'Roboto',
    fontSize: hp('2.5%'),
    marginTop: hp('5%'),
    textAlign: 'center',
  },
  question_button: {
    color: '#79dea8',
  },
  login_button: {
    // backgroundColor: '#79dea8',
    backgroundColor:"#00dfa7",
    paddingVertical: 13,
    borderRadius: 10,
    marginTop:wp('10%'),
    marginLeft:hp('18%'),
    marginRight:hp('18%')
  },
  login_button_text: {
    fontSize: hp('3%'),
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  underlineStyleBase: {
    marginHorizontal: wp('3%'),
    marginTop: wp('5%'),
    borderWidth: 0,
    borderRadius:15,
    width:wp('16%'),
    height:hp('10%'),
    backgroundColor:"#424242",
    justifyContent: 'space-around',
    fontSize:hp('3.5%')
  },

  underlineStyleHighLighted: {
    backgroundColor:"#00dfa7"
  },
};