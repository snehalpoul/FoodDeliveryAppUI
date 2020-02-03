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
    marginTop:hp('2.5%'),
    marginRight:wp('4%'),
    marginLeft:wp('4%'),
    borderRadius:13,
    
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