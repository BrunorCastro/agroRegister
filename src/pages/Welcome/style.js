import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#034001",
    },
    containerLogo:{
        flex:6,
        backgroundColor: "#034001",
        justifyContent:'center',
        alignItems: 'center',
    },
    containerForm:{
        flex: 1,
        backgroundColor:'#034001',
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        paddingStart:'5%',
        paddingEnd:'5%',
    },
    button:{
        position: 'absolute',
        backgroundColor: "#f1f1f1",
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '30%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButton:{
        fontSize: 18,
        color: "#034001",
        fontWeight: "bold",
    }
})

export default styles;