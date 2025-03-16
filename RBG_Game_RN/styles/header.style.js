import { StyleSheet } from "react-native";
import { COLORS, SIZES, SHADOWS } from "../constants";

const headerstyles = StyleSheet.create({
  headerContainer: {
    height: 150, // Adjust the height for a larger header
    backgroundColor: COLORS.primary, // Use primary color
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    ...SHADOWS.medium, // Apply shadow for depth
  },
  headerText: {
    fontSize: SIZES.xxLarge, // Use the largest size
    fontWeight: "bold",
    color: COLORS.white, // White text for contrast
  },
});

export default headerstyles;