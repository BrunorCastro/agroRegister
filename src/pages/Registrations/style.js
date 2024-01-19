import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#034001",
  },
  containerLogo:{
    flex:1,
    backgroundColor: "#034001",
    justifyContent:'center',
    alignItems: 'center',
},
  containerForm: {
    backgroundColor: "#fff",
    flex: 6,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  title: {
    fontSize: 20,
    marginTop: 1,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#034001",
    width: "60%",
    borderRadius: 50,
    paddingVertical: 8,
    marginTop: 100,
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