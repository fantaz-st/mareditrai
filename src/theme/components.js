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
        textTransform: "none",
        fontWeight: 600,
        letterSpacing: "-0.01em",
        padding: "0.85rem 1.3rem",
        minWidth: "unset",
        transition: "background-color 0.25s ease, border-color 0.25s ease, color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease",
      },
    },

    variants: [
      {
        props: { variant: "cta" },
        style: {
          color: "#f4f7fb",
          background: "rgba(255, 255, 255, 0.02)",
          border: "1px solid rgba(255, 255, 255, 0.16)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.14)",

          "&:hover": {
            background: "rgba(255, 255, 255, 0.05)",
            borderColor: "rgba(255, 255, 255, 0.34)",
            boxShadow: "0 14px 36px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255,255,255,0.04) inset",
            transform: "translateY(-1px)",
          },

          "&:active": {
            transform: "translateY(0)",
            boxShadow: "0 8px 22px rgba(0, 0, 0, 0.16)",
          },
        },
      },
    ],
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
        borderRadius: 24,
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        transition: "transform 0.25s ease, border-color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease",
      },
    },

    variants: [
      {
        props: { variant: "glass" },
        style: {
          "&:hover": {
            transform: "translateY(-6px)",
            borderColor: "rgba(255,255,255,0.14)",
            background: "rgba(255,255,255,0.045)",
            boxShadow: "0 18px 40px rgba(0,0,0,0.22)",
          },
        },
      },
    ],
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
