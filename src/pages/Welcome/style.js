import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#034001",
    },
    containerLogo:{
        flex:3,
        backgroundColor: "#034001",
        justifyContent:'center',
        alignItems: 'center',
    },
    containerForm:{
        flex:1,
        backgroundColor:'#fff',
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        paddingStart:'5%',
        paddingEnd:'5%',
    },
    title:{
        fontSize: 20,
        fontWeight:'bold',
        marginTop:28,
        marginBottom:12,
    },
    button:{
        position: 'absolute',
        backgroundColor: "#034001",
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButton:{
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
    }
})

export default styles;