import { StyleSheet } from "react-native";

import { theme } from "../../../utils/theme";


const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    gap: theme.spacing(),
  },
  continentPressable: {
    backgroundColor: theme.palette.action.primary,
    borderRadius: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  continentName: {
    color: theme.palette.text.primary,
    fontSize: theme.sizes.text.subsection,
    flexWrap: "wrap",
  },
  continentCode: {
    color: theme.palette.text.primary,
    fontSize: theme.sizes.text.plain,
  },
  svgView: {
    backgroundColor: theme.palette.text.primary,
    borderRadius: 16,
    height: 125,
    width: 125,
    padding: theme.spacing(),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
