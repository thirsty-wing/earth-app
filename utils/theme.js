const SPACING = 8;

export const theme = {
  palette: {
    action: {
      primary: "#049",
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
      subtitle: 40,
      section: 30,
      subsection: 25,
      subsubsection: 20,
      plain: 15,
    },
  },
  spacing: factor => factor ? factor * SPACING : SPACING,
};
