import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default {
  container: {
    flex: 1,
  },
  input: {
    flex: 1,
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
  },
  itemStyle: {
    marginTop: 70,
    paddingHorizontal: 30,
    marginLeft:10,
    marginRight:10
  },
  iconStyle: {
    color: '#fff',
    fontSize: 28,
    marginLeft: 15
  },
   iconStyle1: {
    color: '#9a9a9a',
    fontSize: 28,
    marginLeft:0,
    marginTop:5
  },
   next_button: {
    backgroundColor: '#00dfa7',
    paddingVertical: 13,
    borderRadius: 10,
    marginTop:wp('12%'),
    marginLeft:hp('18%'),
    marginRight:hp('18%')
  },
  next_button_text: {
    // color: 'white',
    fontSize: hp('3%'),
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  textStyle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginTop:10
  },
  countryStyle: {
    flex: 1,
    backgroundColor: '#303030',
    borderTopColor: '#211f',
    borderTopWidth: 1,
    padding: 12,
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
}