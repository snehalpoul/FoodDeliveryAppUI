import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default {
  containers: {
    flex: 1,
    backgroundColor: "#303030",
   },
  container: { 
    marginTop:hp('2%'),
    alignSelf:'center', 
    backgroundColor: '#303030', 
    width:wp('90%'),
    borderWidth:0.5,
    borderColor:"#ffffff",
    },
  headtext:{
    color:'#7E8280',
    fontSize:wp('5%'),
    fontFamily:"roboto",
    marginLeft:wp('4.5%')
    },
  head: { 
     height:hp('7%'), 
     backgroundColor: '#7E8280',
     borderBottomColor:"grey",
     borderBottomWidth:0.5
    },
  tablehead:{
    fontSize: wp('5.5%'),
    marginHorizontal:wp('4%'),
    marginTop:hp('3%'),
    fontWeight: "bold",
    color:'#ffffff'
    },

  wrapper: { 
    flexDirection: 'row' 
    },
  row: { 
      height:hp('7%'),
      borderColor:"#ffffff",
      borderWidth:0.5
      },
  rowlast: { 
      height:hp('7%'),
      borderColor:"#ffffff",
      borderWidth:0.5,
      backgroundColor:"#7E8280"
      },
  text: {
     textAlign: 'center',
     color:'#ffffff',
     fontFamily:"roboto",
     fontSize:hp('2.8%')
     },
   headstyle:{
      flexDirection:"row",
      justifyContent:"space-between",
      backgroundColor:"#212121"    
  },
  button:{
    backgroundColor:"#009e15",
    borderRadius:100,
    paddingHorizontal:10,
    justifyContent:"center"
  },
  bodyhead:{
       flexDirection:"row",
        justifyContent:"space-between",
        padding: 20
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold",
    color:"white",
    fontFamily:"roboto" 
  },
  btncall:{
    color:'#79dea8',
    marginRight:wp('4%'), 
    textTransform:"uppercase",
    fontFamily:"roboto",
    fontSize:hp('2.7%')
  },
  verify_button: {
    backgroundColor: '#79dea8',
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