import  {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    newsCard: {
        width:"100%",
        borderRadius:4,
        borderWidth:0.5,
        borderColor:"#78909C",
        flex:1
    },
    newsDetails:{
        paddingLeft:20,
    },
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        margin:10
    },
    newsTitle:{
        fontSize:15,
        paddingTop:10,
        textAlign:"left",
        fontWeight:"bold"
    },
    newsDescription:{
        fontSize:12,
        paddingTop:7,
        textAlign:"left",
        justifyContent:"center"
    },
    publishedAt: {
        fontSize:12,
        paddingTop:2,
        fontWeight:"bold",
        color:"#e55039"
    },
    newsSource:{
        color:"#130f40",
        fontSize:13,
        fontWeight:"bold",
        marginTop:5
    },
    socialShare:{
        flex:1,
        flexDirection:"row",
        marginVertical:15,
        justifyContent:"space-between",
        paddingRight:10,
        paddingLeft:20,
    },
    socialIcons:{
        flex:1,
        flexDirection:"row",
        justifyContent:"flex-end"
    }
})

export default styles;