const typography = {
  fontFamily: "Inter, system-ui, -apple-system, sans-serif",

  h1: {
    fontWeight: 800,
    fontSize: "clamp(3rem, 7vw, 6rem)",
    lineHeight: 0.95,
    letterSpacing: "-0.04em",
    marginBottom: "0.5em",
  },

  h2: {
    fontWeight: 700,
    fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
    lineHeight: 1,
    letterSpacing: "-0.03em",
    marginBottom: "0.5em",
  },

  h3: {
    fontWeight: 600,
    fontSize: "clamp(1.4rem, 2vw, 2rem)",
    lineHeight: 1.1,
    letterSpacing: "-0.02em",
    marginBottom: "0.5em",
  },

  h4: {
    fontWeight: 600,
    fontSize: "1.1rem",
    lineHeight: 1.3,
    marginBottom: "0.5em",
  },

  body1: {
    fontSize: "1rem",
    lineHeight: 1.7,
    color: "#8b98a5",
  },

  body2: {
    fontSize: "0.9rem",
    lineHeight: 1.6,
    color: "#6b7785",
  },

  button: {
    fontWeight: 600,
    textTransform: "none",
    letterSpacing: "0.02em",
  },

  overline: {
    fontWeight: 600,
    fontSize: "0.75rem",
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "#8b98a5",
  },
};

export default typography;
