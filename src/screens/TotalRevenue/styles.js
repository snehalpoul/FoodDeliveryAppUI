import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default {
    container: {
    flex: 1,
    backgroundColor: "#303030",
  },
  headerText: {
    fontSize:hp('3.5%'),
    textAlign: "center",
    padding: 10,
    fontWeight: "bold",
    color:"#ffffff",
    fontFamily:"roboto",
    textTransform: 'uppercase',
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
   headstyle:{
    padding:9,
    flexDirection:"row",
    backgroundColor:"#212121", 
      // justifyContent:"space-between"
  },
  btnstyle1:{
    justifyContent:"center",
    backgroundColor:"#00a584",
    paddingHorizontal:wp('3%'),
    borderRadius:100,
    paddingVertical:hp('0.5%')
    },
  cardstyle1:{
    overflow: 'hidden',
    borderColor: 'transparent',
    marginTop:hp('2%'),
    marginRight:wp('4%'),
    marginLeft:wp('4%'),
    borderRadius:13,
    
  },
  next_button: {
    backgroundColor: '#00dfa7',
    paddingVertical: 8,
    paddingHorizontal:20,
    borderRadius: 20,
    height:hp('6%'),
    marginTop:wp('4%'),
    marginLeft:hp('4%'),
    marginRight:hp('4%'),
    // marginBottom:hp('4%')
  },
  next_button_text: {
    fontSize: hp('2.5%'),
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  view:{
    flexDirection:"row",
    justifyContent: 'space-between'
  },
  text1:{
    color:"#c2c2c2",
    fontFamily:"roboto",
    fontSize:wp('4.7%'),
  },
  text2:{
    color:"#ffffff",
    fontFamily:"roboto",
    fontSize:wp('4.7%')
  },
}