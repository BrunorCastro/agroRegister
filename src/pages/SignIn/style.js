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
    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color : '#fff',
    },
    containerForm:{
        backgroundColor: '#fff',
        flex:2,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title:{
        fortSize: 30,
        marginTop: 15,
    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 10,
        fontSize: 15,
    },
    button:{
        backgroundColor: "#034001",
        width: '100%',
        borderRadius: 50,
        paddingVertical: 8,
        marginTop:40,
        justifyContent: 'center',
        alignItems: 'center',
        width: '60%',
        alignSelf: 'center',
        bottom: '1%',
    },
    buttonText:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center',
    },
    registertext:{
        color: '#a1a1a1',
    },
})

export default styles;