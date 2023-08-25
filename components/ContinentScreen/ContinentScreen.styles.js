import { StyleSheet } from "react-native";

import { theme } from "../../utils/theme";


const styles = StyleSheet.create({
  scrollView: {
    gap: theme.spacing(),
    padding: theme.spacing(3),
    flex: 1,
  },
  plainText: {
    color: theme.palette.text.primary,
  },
  topView: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-start",
    flexDirection: "row",
    paddingHorizontal: theme.spacing(3),
  },
  backPressable: {
    padding: 16,
    backgroundColor: theme.palette.action.primary,
  },
  svgView: {
    backgroundColor: theme.palette.text.primary,
    padding: theme.spacing(),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: 16,
  },
  svgViewWidthWrapper: {
    width: "100%",
  },
  svgViewHeightWrapper: {
    paddingBottom: "100%",
  },
  titleView: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
  },
  titleText: {
    color: theme.palette.text.primary,
    fontSize: theme.sizes.text.subsection,
  },
});

export default styles;
