const SPACING = 8;

export const theme = {
  palette: {
    action: {
      primary: "#01A",
      secondary: "#771",
    },
    background: {
      primary: "#003",
      offColor: "#115",
    },
    text: {
      primary: "#EEF",
    },
  },
  sizes: {
    text: {
      title: 50,
      subtitle: 45,
      section: 40,
      subsection: 35,
      subsubsection: 30,
      plain: 16,
    },
  },
  spacing: factor => factor ? factor * SPACING : SPACING,
};
