// AI Noob Club settings. Change values here, not in components.
export type StarterSetStatus = "soon" | "available";

export const noobClub = {
  starterSet: {
    title: "",
    status: "soon" as StarterSetStatus,
    priceEur: "",
    tool: "",
    toolCostNote: "",
    buyUrlGumroad: "",
    buyUrlEtsy: "",
    includesRecording: false,
    supportNote: "",
    guaranteeText: "",
  },
  showWiderruf: false,
  links: {
    etsyShop: "https://www.etsy.com/shop/TheAINoobClub",
    etsyKit: "",
    etsyPrompts: "https://www.etsy.com/listing/4588968808/99-ai-image-prompts-for-authentic",
    gumroadKit: "",
    instagram: "",
    checklistPdf: "",
    /** Meetup page. Empty = no button on the meetup card. */
    meetup: "",
    /** Existing contact option of the site (booking link). */
    contact: "https://calendly.com/dlbosma/30min",
  },
};
