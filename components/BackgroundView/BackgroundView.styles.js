import { StyleSheet, Platform } from "react-native";
import { theme } from "../../utils/theme";

export const styles = StyleSheet.create({
  root: {
    backgroundColor: theme.palette.background.primary,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      web: {
        paddingTop: theme.spacing(2),
      },
    }),
  },
});

export default styles;
