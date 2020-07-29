import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    },
    header:{
        fontSize:25,
        fontWeight:"bold"
    },
    categories:{
        flex:0,
        width:"100%",
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"center",
        marginBottom:20
    },
    categoryButton:{
        backgroundColor:"white",
        margin:10,
        borderWidth:1,
        borderRadius:20,
        padding:10,
        width:100
    },
    categoryAddedButton:{
         backgroundColor:"green",
         margin:10,
         borderWidth:1,
         borderRadius:20,
         padding:10,
         width:100
     },
    categoryText:{
        color:"#000000",
        fontWeight:"bold",
        textAlign:"center",
        fontSize:12
    },
    categoryAddedText:{
         color:"#ffffff",
         fontWeight:"bold",
         textAlign:"center",
         fontSize:12
    },
    submitButton: {
        backgroundColor:"#0097e6",
        borderRadius:5,
        padding:10,
        width:"50%",
        marginTop:30,
        alignItems:"center"
    },
    submitButtonText:{
        color:"white",
        fontSize:20
    },
    userChoice:{
        flexDirection:"row",
        marginTop:20
    },
    userChoiceInput:{
        borderColor: 'gray', 
        borderWidth: 1,
        height:40,
        fontSize:12,
        width:"60%",
        textAlign:"center",
        borderRadius:20
    },
    addCategoryIcon:{
        fontSize:40,
        marginHorizontal:10,
        color:"green"
    }
 })

 export default styles;