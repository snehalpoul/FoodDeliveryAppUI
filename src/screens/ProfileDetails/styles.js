import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default {
    container: {  
    flex: 1, 
    backgroundColor: "#303030",
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
  MainContainer:
  {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      // padding:10
  },
  iconstyle1:{
    marginRight:wp('3%'),
    padding:10,
    color:"#ffffff"
  },
  image:{
    width:90, 
    height: 90, 
    borderRadius: 150/2
  },
  cardtext:{
    color:"#ffffff",
    fontSize:wp('4.7%'),
    marginLeft:wp('5%')
  },
  cardheader:{
    color:"#ffffff",
    fontSize:wp('5%'),
    marginTop:hp('2%'),
    fontWeight:"bold",
    marginLeft:wp('5%'),
    fontFamily:"roboto",
    textTransform: 'uppercase',
  },
  carditem:{
    backgroundColor:"#303030"
  },
  view1:{
    flexDirection:"row"
  },
  view2:{
    flexDirection:"row",
    marginTop:hp('2%')
  }
}