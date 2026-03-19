const site = {
  name: "MareDiTrAI",
  description: "Umjetna inteligencija u službi digitalne transformacije pomorskog sektora",
  locale: "en",

  menu: {
    hr: "main-menu-hr",
    en: "main-menu-en",
  },

  header: {
    sticky: true,
    transparent: true,
    textColorInvert: false,
    height: 72,
    solidOnScroll: true,
    solidOnScrollOffset: 12,
  },

  footer: {
    variant: "simple",

    summary: {
      title: "MareDiTrAI",
      text: {
        en: "AI driving the digital transformation of the maritime sector",
        hr: "Umjetna inteligencija u službi digitalne transformacije pomorskog sektora",
      },
    },

    links: [
      { label: "PFST", href: "https://www.pfst.unist.hr" },
      { label: "University of Split", href: "https://www.unist.hr" },
    ],

    copyright: {
      owner: {
        en: "Faculty of Maritime Studies, University of Split",
        hr: "Sveučilište u Splitu, Pomorski fakultet",
      },
      year: "auto",
    },
  },

  backToTop: {
    enabled: true,
    showAfter: 300,
    position: "right",
  },
};

export default site;
