import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default {
  container: {
    flex: 1,
    backgroundColor: "#303030",
  },
  head:{
       flexDirection:"row",
       backgroundColor:"#212121",
       justifyContent:"space-between",
  },
  headerText: {
    marginLeft:wp('28%'),
    fontSize:hp('3.5%'),
    padding:10,
    fontWeight: "bold",
    color:"#ffffff",
    fontFamily:"roboto",
    textTransform: 'uppercase',
  },
  btnstyle1:{
    alignsContent:"center",
    paddingHorizontal:wp('3%'),
    padding:1,
    borderRadius:100,
    backgroundColor:"#e78200",  
  },
  cardstyle1:{
    overflow: 'hidden',
    borderColor: 'transparent',
    marginTop:hp('3%'),
    marginRight:wp('4%'),
    marginLeft:wp('4%'),
    borderRadius:13,
  },
  btnstyle2:{
    flexDirection:"row",
    justifyContent:"center",
    paddingHorizontal:wp('3%'),
    borderRadius:100,
    padding:2,
    backgroundColor:"#009e16"
  },
  cardstyle2:{
    overflow: 'hidden', 
    marginTop:hp('2%'),
    borderColor: 'transparent',
    marginRight:wp('4%'),
    marginLeft:wp('4%'), 
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12, 
    borderTopLeftRadius:12, 
    borderBottomLeftRadius: 12 
  },
  text1:{
    color:"#c2c2c2",
    fontFamily:"roboto",
    fontSize:wp('4.7%')
  },
  text2:{
    color:"#ffffff",
    fontFamily:"roboto",
    fontSize:wp('4.7%')
  },
  view:{
    flexDirection:"row",
    justifyContent: 'space-between'
  }

  
}