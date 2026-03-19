const components = {
  MuiContainer: {
    defaultProps: {
      maxWidth: "lg",
    },
  },

  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },
    styleOverrides: {
      root: {
        borderRadius: 999,
        paddingInline: "1.5rem",
        paddingBlock: "0.85rem",
        fontWeight: 600,
      },

      containedPrimary: {
        background: "rgba(255,255,255,0.06)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.12)",
        color: "#fff",
        "&:hover": {
          background: "rgba(255,255,255,0.12)",
        },
      },

      outlinedPrimary: {
        borderColor: "rgba(255,255,255,0.2)",
        color: "#e6edf3",
        "&:hover": {
          borderColor: "#fff",
        },
      },
    },
  },

  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: 20,
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.06)",
        backdropFilter: "blur(12px)",
      },
    },
  },

  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 20,
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.06)",
      },
    },
  },

  MuiAppBar: {
    styleOverrides: {
      root: {
        background: "transparent",
        boxShadow: "none",
        backdropFilter: "blur(10px)",
      },
    },
  },

  MuiLink: {
    styleOverrides: {
      root: {
        textDecoration: "none",
        textUnderlineOffset: "0.18em",
        "&:hover": {
          textDecoration: "underline",
        },
      },
    },
  },

  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: 999,
        fontWeight: 600,
      },
    },
  },

  MuiDivider: {
    styleOverrides: {
      root: {
        borderColor: "rgba(16, 42, 67, 0.1)",
      },
    },
  },
};

export default components;
