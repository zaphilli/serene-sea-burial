export interface Post {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  content: Section[];
}

export interface Section {
  type: "paragraph" | "heading" | "subheading" | "callout" | "comparison" | "list";
  text?: string;
  items?: string[];
  columns?: { label: string; traditional: string; sea: string }[];
}

export const posts: Post[] = [
  {
    slug: "financial-benefits-ash-scattering-vs-traditional-burial",
    title: "The True Cost of Saying Goodbye",
    subtitle: "How Ash Scattering at Sea Can Save Families Thousands — Without Sacrificing Meaning",
    date: "March 2026",
    readTime: "7 min read",
    category: "Planning & Guidance",
    excerpt:
      "The average traditional funeral now costs between $10,000 and $15,000. For many families, this financial burden arrives at their most vulnerable moment. Sea burial offers a dignified, meaningful alternative — at a fraction of the cost.",
    content: [
      {
        type: "paragraph",
        text: "Grief is expensive. That is a difficult truth that families across America face every day. According to the National Funeral Directors Association, the median cost of a traditional funeral with burial now exceeds $10,000 — and when you factor in cemetery plots, headstones, and perpetual care fees, the real number often climbs well past $15,000. For many families, this financial weight arrives at the worst possible moment.",
      },
      {
        type: "paragraph",
        text: "At Serene Sea Burials, we believe that a meaningful farewell should not require going into debt. Ash scattering at sea offers a genuinely beautiful, dignified alternative — and the cost comparison is striking.",
      },
      {
        type: "heading",
        text: "What a Traditional Burial Actually Costs",
      },
      {
        type: "paragraph",
        text: "Most families are surprised to discover how quickly expenses accumulate with a traditional burial. The funeral home's basic service fee alone — before any products or additional services — typically starts around $2,300. From there, each element adds to the total:",
      },
      {
        type: "list",
        items: [
          "Funeral home basic service fee: $2,000 – $3,500",
          "Embalming and body preparation: $700 – $1,200",
          "Casket: $2,500 – $10,000 (or more for premium options)",
          "Burial vault or grave liner: $1,000 – $2,500",
          "Cemetery plot: $1,000 – $5,000 depending on location",
          "Headstone or grave marker: $1,000 – $3,500",
          "Opening and closing of the grave: $1,000 – $1,500",
          "Obituary, flowers, and printed materials: $500 – $1,000",
          "Ongoing cemetery maintenance fees: $200 – $600 per year",
        ],
      },
      {
        type: "paragraph",
        text: "Added together, a traditional burial in the United States commonly totals between $10,000 and $20,000. Families in major metropolitan areas or those selecting premium services can spend considerably more.",
      },
      {
        type: "callout",
        text: "\"The median cost of a funeral with viewing and burial in the United States is $10,848.\" — National Funeral Directors Association, 2023",
      },
      {
        type: "heading",
        text: "The Cost of Ash Scattering at Sea",
      },
      {
        type: "paragraph",
        text: "When a loved one chooses cremation followed by a sea burial, the financial picture changes dramatically. Cremation itself — particularly direct cremation without funeral home add-ons — typically costs between $700 and $2,500. From there, the sea burial service is the primary remaining expense.",
      },
      {
        type: "paragraph",
        text: "At Serene Sea Burials, our attended and unattended services are designed to give families a genuine, moving farewell at a price that respects their situation. There is no burial plot to purchase, no headstone to commission, and no annual maintenance fees that follow your family for decades.",
      },
      {
        type: "comparison",
        columns: [
          { label: "Expense", traditional: "Traditional Burial", sea: "Sea Burial" },
          { label: "Preparation / Cremation", traditional: "$2,500 – $4,500", sea: "$700 – $2,500" },
          { label: "Casket", traditional: "$2,500 – $10,000", sea: "Not required" },
          { label: "Burial Plot", traditional: "$1,000 – $5,000", sea: "Not required" },
          { label: "Headstone", traditional: "$1,000 – $3,500", sea: "Not required" },
          { label: "Vault / Liner", traditional: "$1,000 – $2,500", sea: "Not required" },
          { label: "Ceremony Service", traditional: "$1,500 – $3,000", sea: "Included" },
          { label: "Annual Upkeep", traditional: "$200 – $600 / year", sea: "$0" },
          { label: "Typical Total", traditional: "$10,000 – $20,000+", sea: "A fraction of the cost" },
        ],
      },
      {
        type: "heading",
        text: "The Savings Go Beyond the Initial Cost",
      },
      {
        type: "paragraph",
        text: "One cost that rarely gets discussed is the long-term financial burden of a cemetery plot. Perpetual care fees, monument cleaning, and even plot transfer fees can quietly accumulate over years and decades. A sea burial eliminates all of it — permanently.",
      },
      {
        type: "paragraph",
        text: "There is also the practical matter of travel. Many families are spread across the country. A grave in a specific city requires loved ones to travel there to visit, often over many years. When ashes are scattered at sea, the ocean itself becomes the memorial — one that a family member can visit from any coastline, anywhere in the world.",
      },
      {
        type: "subheading",
        text: "Preplanning: Locking In Today's Prices",
      },
      {
        type: "paragraph",
        text: "Funeral costs have risen steadily each year. One of the most financially sound decisions a person can make is to preplan their sea burial while prices are at their current level. Preplanning with Serene Sea Burials gives your family the gift of clarity — they will know exactly what to do, and they will not have to make difficult financial decisions under emotional duress.",
      },
      {
        type: "heading",
        text: "Meaningful Does Not Have to Mean Costly",
      },
      {
        type: "paragraph",
        text: "There is a quiet misconception that a simpler farewell is somehow less honoring. The families we serve consistently tell us the opposite. Watching a loved one's ashes return to the sea — surrounded by open water, the horizon, and the sound of waves — is a profound experience. It carries a weight and a beauty that no ceremony indoors can replicate.",
      },
      {
        type: "paragraph",
        text: "The ocean does not know what you spent. It receives every person with the same quiet grace. What matters is that your family gathered, that words were spoken, and that the farewell felt true.",
      },
      {
        type: "callout",
        text: "We are here to answer every question — about cost, about the process, and about what to expect. There is no pressure, no sales pitch. Just honest guidance for families who deserve it.",
      },
      {
        type: "paragraph",
        text: "If you would like to learn more about our services or discuss preplanning options, we invite you to reach out. We are located in Carolina Beach, NC, and we serve families along the entire North Carolina coast — and beyond.",
      },
    ],
  },
  {
    slug: "sea-burial-legal-epa-compliant",
    title: "A Legal, Dignified Farewell",
    subtitle: "Understanding the Federal Guidelines That Govern Sea Burial — and How We Handle Every Detail So Your Family Doesn't Have To",
    date: "March 2026",
    readTime: "6 min read",
    category: "Legal & Compliance",
    excerpt:
      "Sea burial is a fully legal, federally regulated process governed by the EPA. Many families are surprised to learn how straightforward it is — especially when you have a provider who manages every requirement on your behalf.",
    content: [
      {
        type: "paragraph",
        text: "One of the most common questions we receive at Serene Sea Burials is a simple one: \"Is this legal?\" It is a fair question, and the answer is a clear yes — ash scattering and burial at sea is a fully legal practice in the United States, governed by federal law and overseen by the Environmental Protection Agency. In fact, it is one of the most carefully regulated and environmentally considered forms of final disposition available.",
      },
      {
        type: "paragraph",
        text: "What makes sea burial truly accessible for families is this: when you work with Serene Sea Burials, you do not need to understand any of the regulations yourself. We handle every legal requirement, every piece of documentation, and every notification on your behalf. You are free to focus entirely on your loved one.",
      },
      {
        type: "heading",
        text: "The Federal Law That Governs Sea Burial",
      },
      {
        type: "paragraph",
        text: "Burial at sea is regulated under the Marine Protection, Research, and Sanctuaries Act — commonly known as the MPRSA, or the Ocean Dumping Act. This federal law, enforced by the EPA, establishes the rules for what may be placed in ocean waters and under what conditions.",
      },
      {
        type: "paragraph",
        text: "For cremated remains specifically, the regulations are straightforward and designed to protect both the ocean environment and the dignity of the process. The EPA has created a clear, permissive framework for ash scattering — one that recognizes it as a natural, environmentally sound practice when conducted properly.",
      },
      {
        type: "callout",
        text: "\"The Environmental Protection Agency allows cremated remains to be scattered at sea without a permit, provided all federal guidelines are followed — including distance from shore and post-scattering notification.\"",
      },
      {
        type: "heading",
        text: "The Key Requirements — and How We Meet Them",
      },
      {
        type: "paragraph",
        text: "There are a small number of federal requirements that must be met for a sea burial to be fully compliant. We follow every one of them, every time — without exception.",
      },
      {
        type: "subheading",
        text: "Three Nautical Miles from Shore",
      },
      {
        type: "paragraph",
        text: "The EPA requires that cremated remains be scattered no closer than three nautical miles from the nearest shoreline. This ensures that remains are deposited in open ocean waters and do not wash back to shore. Every Serene Sea Burials voyage travels well beyond this boundary. We navigate to a respectful distance where the water is deep, open, and undisturbed.",
      },
      {
        type: "subheading",
        text: "No Prohibited Materials",
      },
      {
        type: "paragraph",
        text: "Federal guidelines prohibit the disposal of non-biodegradable materials in ocean waters. This means no plastics, no synthetic materials, and no items that could harm the marine environment. Flowers, wreaths, and other tributes brought aboard must be made of natural, biodegradable materials. We guide every family through these details in advance so there are no surprises on the day of the ceremony.",
      },
      {
        type: "subheading",
        text: "EPA Notification Within 30 Days",
      },
      {
        type: "paragraph",
        text: "After a sea burial is completed, federal law requires that the EPA be notified within 30 days. This notification includes specific information: the date of the scattering, the location (latitude and longitude), the number of deceased, and the name of the vessel. This is one of the requirements that families most often do not know about — and one that we handle completely on your behalf.",
      },
      {
        type: "paragraph",
        text: "We record the precise GPS coordinates of every scattering. We file the EPA notification accurately and on time. You receive a copy of the completed documentation for your records.",
      },
      {
        type: "heading",
        text: "The Documentation We Provide",
      },
      {
        type: "paragraph",
        text: "After the service, Serene Sea Burials provides each family with a complete set of documentation that confirms the burial was conducted in full compliance with federal law. This includes:",
      },
      {
        type: "list",
        items: [
          "The date and time of the scattering",
          "The GPS coordinates of the location where remains were scattered",
          "The name of the vessel and the captain",
          "Confirmation that remains were scattered beyond the required three nautical mile boundary",
          "A copy of the EPA notification filing",
          "A certificate of sea burial for your personal records",
        ],
      },
      {
        type: "paragraph",
        text: "This documentation is meaningful beyond its legal purpose. Many families keep it as a lasting record — a quiet confirmation that their loved one's final wishes were honored with care, professionalism, and full legal compliance.",
      },
      {
        type: "heading",
        text: "What About State Regulations?",
      },
      {
        type: "paragraph",
        text: "In addition to federal law, some states have their own guidelines regarding ash scattering and burial at sea. In North Carolina, we operate in full accordance with all applicable state regulations. Our team stays current with both federal EPA requirements and any state-level guidance so that families never have to worry about whether something has been overlooked.",
      },
      {
        type: "callout",
        text: "From the moment you contact us to the day you receive your documentation, every legal detail is managed by our team. You will never be handed a form to fill out or a requirement to track down on your own.",
      },
      {
        type: "heading",
        text: "Why This Matters to Families",
      },
      {
        type: "paragraph",
        text: "Grief does not leave room for paperwork. The last thing a family should have to navigate in the days surrounding a loss is a set of federal filing requirements they have never heard of. That is precisely why we built our service the way we did — to absorb every administrative and legal responsibility completely, so that the only thing families need to bring is their love for the person they are saying goodbye to.",
      },
      {
        type: "paragraph",
        text: "We have conducted sea burials for families across North Carolina and beyond. Every one of them has been completed with full EPA compliance, detailed documentation, and the kind of quiet professionalism that a meaningful farewell deserves. We are proud of that record — and we intend to keep it.",
      },
      {
        type: "paragraph",
        text: "If you have questions about the process, the regulations, or how to get started, we welcome you to reach out. There is no obligation, and no question is too small. We are here.",
      },
    ],
  },
  {
    slug: "what-to-expect-day-of-sea-burial-ceremony",
    title: "What to Expect on the Day",
    subtitle: "A Gentle, Step-by-Step Guide to Your Sea Burial Ceremony — So You Can Simply Be Present",
    date: "March 2026",
    readTime: "5 min read",
    category: "The Ceremony",
    excerpt:
      "Many families tell us the same thing before their ceremony: they are not sure what to expect. This guide walks you through the day from arrival to return, so your family can focus entirely on being together.",
    content: [
      {
        type: "paragraph",
        text: "The days leading up to a sea burial ceremony can carry a quiet weight — a mix of grief, love, and uncertainty about what the day will actually look and feel like. At Serene Sea Burials, we have found that one of the most comforting things we can offer a family is simply a clear picture of what to expect. When the unknown is taken away, what remains is space for remembrance.",
      },
      {
        type: "paragraph",
        text: "Whether you have chosen an attended ceremony with family on board or are arranging an unattended service from a distance, here is a honest, gentle walk through what the day looks like.",
      },
      {
        type: "heading",
        text: "Before You Arrive",
      },
      {
        type: "paragraph",
        text: "In the days before your ceremony, our team will confirm all the details with you by phone or email — the meeting location, the departure time, what to bring, and any personal elements you have planned for the service. You will not arrive with unanswered questions.",
      },
      {
        type: "paragraph",
        text: "We ask families to dress in whatever feels right for them. Some come in their Sunday best. Others wear their loved one's favorite color, or something comfortable and casual. There is no dress code at sea. The water receives everyone the same way.",
      },
      {
        type: "subheading",
        text: "What to Bring",
      },
      {
        type: "list",
        items: [
          "Any personal items for the ceremony — letters, photos, small mementos",
          "Flowers or petals, if desired (biodegradable only — no plastic wrapping)",
          "A light layer, even in warm weather — it is cooler on the water",
          "Any readings, poems, or music you would like to share",
          "Your own quiet presence — that is the most important thing",
        ],
      },
      {
        type: "heading",
        text: "Arrival at the Marina",
      },
      {
        type: "paragraph",
        text: "We depart from Carolina Beach, NC. When you arrive at the marina, the captain and crew will be ready to greet you. We will go over the plan for the day, answer any last questions, and make sure your family feels settled before we leave the dock.",
      },
      {
        type: "paragraph",
        text: "Attended services accommodate up to six passengers. The vessel is private — this is your ceremony, and the time on the water belongs entirely to your family.",
      },
      {
        type: "heading",
        text: "The Voyage Out",
      },
      {
        type: "paragraph",
        text: "The journey from the dock to the scattering location takes approximately 20 to 30 minutes, depending on conditions. This time on the water is yours. Some families use it for quiet conversation and reflection. Others play music softly from their phones. Some sit in silence and watch the coastline fade behind them.",
      },
      {
        type: "paragraph",
        text: "We travel to a location at least three nautical miles offshore — well beyond the shoreline, into open ocean water where the depth and stillness feel fitting for what you have come to do.",
      },
      {
        type: "callout",
        text: "\"When the shore disappears behind you, something shifts. Families often tell us that the water itself feels like part of the ceremony — wide, quiet, and welcoming.\"",
      },
      {
        type: "heading",
        text: "The Ceremony",
      },
      {
        type: "paragraph",
        text: "Once we reach the scattering location, the captain will bring the vessel to a gentle stop. From here, the ceremony is shaped entirely by your family.",
      },
      {
        type: "paragraph",
        text: "There is no script you are required to follow. Some families have a minister or officiant on board. Some read poems or scripture. Some simply speak from the heart. Some prefer silence. Our role is to hold the space — to make sure the moment is unhurried, and that everything proceeds with complete respect.",
      },
      {
        type: "paragraph",
        text: "When your family is ready, the cremated remains are scattered at the surface of the water. If you have brought flowers or petals, they are released at the same time. The ocean is calm at this distance, and the scattering is a gentle, natural act.",
      },
      {
        type: "subheading",
        text: "How Long Does the Ceremony Last?",
      },
      {
        type: "paragraph",
        text: "There is no clock on grief. We do not rush families. Most ceremonies at sea last 15 to 30 minutes — but you may take as long as you need. The full trip, from departure to return, is typically 90 to 120 minutes.",
      },
      {
        type: "heading",
        text: "The Return",
      },
      {
        type: "paragraph",
        text: "The journey back to the marina is often the quietest part of the day. Families sit together on the water as the shore comes back into view. Some describe this portion of the trip as unexpectedly peaceful — a natural transition between the ceremony and the rest of the day.",
      },
      {
        type: "paragraph",
        text: "When we dock, you are free to take as much time as you need before leaving. The captain records the precise GPS coordinates of the scattering location — latitude and longitude — which are included in the documentation we provide.",
      },
      {
        type: "heading",
        text: "After the Ceremony",
      },
      {
        type: "paragraph",
        text: "In the days following your service, we prepare and send your complete documentation package. This includes a sea scattering certificate, the recorded coordinates of your loved one's final resting place, and confirmation that the required EPA notification has been filed on your behalf.",
      },
      {
        type: "paragraph",
        text: "Many families keep these documents as a lasting record — something tangible to hold alongside their memories of the day.",
      },
      {
        type: "callout",
        text: "Every family we serve tells us something different about what the day meant to them. What they share in common is this: they did not have to worry about anything. That is exactly what we are here for.",
      },
      {
        type: "paragraph",
        text: "If you are ready to begin planning, or if you simply have questions about what the day looks like for your family's situation, we welcome you to reach out. We are here every step of the way.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
