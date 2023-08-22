import { StyleSheet } from "react-native";

import { theme } from "../../utils/theme";


const styles = StyleSheet.create({
  scrollView: {
    gap: theme.spacing(),
    paddingHorizontal: theme.spacing(3),
  },
  plainText: {
    color: theme.palette.text.primary,
  },
  topView: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  backPressable: {
    padding: 16,
    backgroundColor: theme.palette.action.primary,
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
