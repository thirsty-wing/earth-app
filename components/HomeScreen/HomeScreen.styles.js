import { StyleSheet } from "react-native";
import { theme } from "../../utils/theme";


export const styles = StyleSheet.create({
  titleView: {
    paddingHorizontal: theme.spacing(3),
    paddingBottom: theme.spacing(),
  },
  continentsListView: {
    gap: theme.spacing(),
    paddingHorizontal: theme.spacing(3),
  }
});
