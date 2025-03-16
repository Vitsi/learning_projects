import { StyleSheet } from "react-native";
import ColorBox from "../components/ColorBox";

// Define color variables outside of StyleSheet.create
const COLORS = {
  primary: "#83c9f4",
  secondary: "a3d5ff",
  third: "#d9f0ff",
  white: "#eff6ee",
  black: "black"
};

const gamestyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.third,
    padding: 20,
  },
  modeContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 20,
    width: "100%",
  },
  modeButton: {
    backgroundColor: COLORS.secondary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  activeButton: {
    backgroundColor:COLORS.primary,
  },
  modeText: {
    color: COLORS.black,
    fontSize: 16,
    fontWeight: "bold",
  },
  target: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
  },
  colorContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 20,
  },
  box: {
    width: 100,
    height: 100,
    margin: 10,
    borderWidth: 0.1,
    borderColor: COLORS.white,
  },
  newgamebtn: {
    backgroundColor: COLORS.primary, 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  newgametxt: {
    color: COLORS.black,
    fontSize: 16,
    fontWeight: "bold",
  },
  message: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
  finishGameBtn : {
    
  }
});

export { COLORS };
export default gamestyles;
