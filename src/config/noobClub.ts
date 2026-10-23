// AI Noob Club settings. Change values here, not in components.
export const noobClub = {
  communityCapacity: 20,
  promptsPriceEur: 9.99,
  showWiderruf: false,
  links: {
    etsyShop: "https://www.etsy.com/shop/TheAINoobClub",
    etsyKit: "",
    etsyPrompts: "https://www.etsy.com/listing/4588968808/99-ai-image-prompts-for-authentic",
    gumroadKit: "",
    instagram: "",
    checklistPdf: "",
    /** Meetup page. Empty = no button on the meetup card. */
    meetup: "https://meetup.com/ai-for-women-berlin-beginner-meetup",
    /** Club contact email (opens the visitor's email app). HUMINT keeps its own Calendly. */
    contact: "mailto:ai.noobclub@humint.site",
    /**
     * Link-in-bio page (/ai-noob-club/links). Paths are relative on purpose:
     * on humint.site they resolve to the exact https://humint.site/... URLs,
     * and they still work in the preview.
     */
    bioCommunity: "/ai-noob-club?utm_source=ig&utm_medium=social&utm_content=bio_community#community",
    bioStarterpaket: "/ai-noob-club?utm_source=ig&utm_medium=social&utm_content=bio_starterpaket#checkliste",
    bioPrompts: "https://theainoobclub.etsy.com/listing/4588968808",
    bioWorkshop: "/ai-noob-club?utm_source=ig&utm_medium=social&utm_content=bio_workshop#treffen",
  },
};
