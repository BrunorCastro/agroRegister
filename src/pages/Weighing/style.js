import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container:{
        flex:1

    },
    texto:{
        color: "#034001",
        fontSize: 18,
        fontWeight: "bold",

    },
    title:{
        backgroundColor: "#034001",
        alignItems: "center",
    },
    textTitle:{
        color: 'white', 
        fontSize: 25
    },
    texts:{
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    textInputs:{
        borderBottomWidth: 2,
        width: 90,
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
});

export default styles;