import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor: "#034001",
    },
    containerLogo:{
        flex:2,
        backgroundColor: "#034001",
        justifyContent:'center',
        alignItems: 'center',
    },
    containerHeader:{
        flex:1,
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
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
        fortSize: 20,
        marginTop: 28,
    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button:{
        backgroundColor: "#034001",
        width: '60%',
        borderRadius: 50,
        paddingVertical: 8,
        marginTop:100,
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