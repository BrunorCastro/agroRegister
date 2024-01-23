import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
  },
  containerLogo:{
    flex:1,
    backgroundColor: "#034001",
    justifyContent:'center',
    alignItems: 'center',
},
  containerForm: {
    backgroundColor: "#f1f1f1",
    flex: 10,
    paddingStart: "5%",
    paddingEnd: "5%",
    marginTop:70,
  },
  title: {
    fontSize: 20,
    marginTop: 5,
  },
  text:{
    fontSize:25,
    marginTop: 10,
  },
  input: {
    borderBottomWidth: 1,
    height: 30,
    marginBottom: 1,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#034001",
    width: "60%",
    borderRadius: 50,
    paddingVertical: 8,
    marginTop: 150,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    bottom: "10%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default styles;