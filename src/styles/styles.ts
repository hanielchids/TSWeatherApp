import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignContent: "center",
  },
  background: {
    flex: 0.5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  temperature: {
    fontSize: 75,
    fontWeight: "300",
    color: "#fff",
    marginTop: 150,
    marginBottom: 10,
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
    color: "#fff",
  },
  city: {
    fontSize: 15,
    fontWeight: "200",
    color: "#fff",
    marginTop: 5,
    marginBottom: 10,
  },
  flatList: {
    width: "100%",
    marginTop: 20,
  },
  row: {
    flex: 0.5,
  },
  daytemp: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
    marginTop: 10,
  },
  avtemp: {
    fontWeight: "300",
    marginBottom: 10,
    color: "white",
    textAlign: "center",
    fontSize: 15,
  },
  hr: {
    marginTop: 5,
    borderBottomColor: "white",
    borderBottomWidth: 1,
  },
  forecastContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
    marginTop: 10,
  },
  itemcontainer: {
    opacity: 0.9,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemtext: {
    fontWeight: "300",
    marginBottom: 20,
    color: "white",
    textAlign: "left",
    fontSize: 20,
  },
  itemtemp: {
    fontWeight: "300",
    marginBottom: 20,
    color: "white",
    textAlign: "right",
    fontSize: 20,
  },
});

export default styles;