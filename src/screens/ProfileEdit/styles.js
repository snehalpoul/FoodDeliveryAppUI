import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default {
  container: {
    flex: 1,
    backgroundColor: '#303030',
  },
   headstyle:{
    padding:9,
    flexDirection:"row",
    backgroundColor:"#212121", 
      // justifyContent:"space-between"
  },
  heading: {
    textTransform: 'uppercase',
    color: '#ffffff',
    fontSize: hp('3.5%'),
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    // alignItems:"center",
    justifyContent:"center",
    marginHorizontal:wp('17%')
  },
   MainContainer:
  {
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemStyle: {
    backgroundColor: "#424242",
    color: '##9a9a9a',
    fontSize: hp('2.5%'),
    marginTop: wp('5%'),
    marginRight:wp('7%'),
    marginLeft:wp('7%'),
    borderRadius:30,
    height:hp('7.5%'),
    borderColor:"transparent"
  },
  image:{
    width:30, 
    height: 30, 
    borderRadius: 150/2,
  },
  profilepic:{
    backgroundColor:"#424242",
    paddingVertical:40,
    borderRadius:30,
    marginRight:wp('7%'),
    marginLeft:wp('7%')
  },
  input: {
    flex: 2.5,
    backgroundColor: "#424242",
    color: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 20,
    fontSize: hp('2.5%'),
    borderRadius:20,
    marginTop: wp('5%'),
    marginRight:wp('7%'),
    marginLeft:wp('7%')  
  },
  input1: {
    flex: 1,
    fontSize: 15,
    color: '#fff',
  },
   iconStyle: {
    color: '#9a9a9a',
    fontSize: 28,
    marginLeft:0
  },
  profileheading:{
    color:"#9a9a9a",
    marginLeft:wp('10%'),
    padding:8,
    fontSize:hp('2.5%'),
  },
  documentheading:{
    color:"#9a9a9a",
    paddingLeft:10,
    fontSize:hp('2.5%'),
    marginTop:hp('1%')
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
  next_button: {
    backgroundColor: '#00dfa7',
    paddingVertical: 8,
    paddingHorizontal:20,
    borderRadius: 20,
    height:hp('6%'),
    marginTop:wp('5%'),
    marginLeft:hp('4%'),
    marginRight:hp('4%'),
    marginBottom:hp('4%')
  },
  next_button_text: {
    fontSize: hp('2.5%'),
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
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