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
  image:{
    width:40, 
    height:40,
  },
  imageview:{
    borderWidth:0.5,
    padding:9,
    borderRightColor:"grey"
  },
  view1:{
    flexDirection:"row",
    marginRight:wp('4%'),
    marginLeft:wp('4%'),
    borderWidth:0.5,
    marginTop:hp('5%'),
    borderColor:"grey"
  },
  view2:{
    flexDirection:"row",
    marginRight:wp('4%'),
    marginLeft:wp('4%'),
    borderWidth:0.5,
    marginTop:hp('2%'),
    borderColor:"grey"
  },
  icon:{
    justifyContent:"center",
    alignContent: "flex-end",
    color: '#00dfa7'
  }
}