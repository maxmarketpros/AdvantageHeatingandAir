import type { AreaConfig } from "@/types";

const baseFaqKeys = [
  "faq-general-1",
  "faq-general-2",
  "faq-general-3",
  "faq-general-4",
  "faq-general-5",
  "faq-general-6",
];

// 19 service-area pages with unique copy per city.
// Slugs preserved verbatim from the legacy advantageairokc.com Webflow site.
export const areas: AreaConfig[] = [
  {
    slug: "air-conditioning-contractor-in-edmond-oklahoma-city-ok",
    city: "Edmond",
    cityFull: "Edmond, OK",
    title: "Air Conditioning Contractor in Edmond, OK",
    excerpt:
      "Trusted HVAC service for Edmond homeowners — from Bryant Square to Coffee Creek to Oak Tree. Same-day repair, honest replacement quotes, 24/7 emergency dispatch.",
    heroImageKey: "service-commercial-hero",
    featureImageKey: "service-furnace-hero",
    intro: [
      "Edmond's mix of mature established neighborhoods and newer growth around I-35 means there's no single \"typical\" HVAC system here. We service everything from older homes near UCO with original ductwork to brand-new builds out near Coffee Creek and the eastern edge of town. Whichever side of Edmond you live on, our trucks are nearby.",
      "Summer afternoons in Edmond regularly push past 100°F, and our techs are dispatched the same day for no-cool emergencies. We carry the parts that fail most — capacitors, contactors, motors — so most calls finish in one visit. If your system has been struggling for years, we'll give you a fair, no-pressure replacement quote with financing options available.",
      "Advantage Heating & Air Conditioning has served Edmond for 25+ years. We're NATE-certified, BBB-accredited, and a certified Amana installer. Family-owned, locally-staffed, and answering the phone 24/7.",
    ],
    localHook:
      "Whether you're near UCO, off Coffee Creek Road, or out by Arcadia Lake — Advantage covers all of Edmond.",
    localSection: {
      eyebrow: "Edmond-Specific HVAC Notes",
      heading: "What Edmond Homes Throw at Your HVAC",
      body: [
        "Edmond covers a huge range of housing — 2-ton starter homes near UCO, 4- and 5-ton footprints in Coffee Creek and Oak Tree, and ranch-style mid-century houses on the older south side. Each one needs a different load calc and a different equipment recommendation, and that's exactly the kind of judgment call we make every week here.",
        "Spring hailstorms also hammer Edmond outdoor units harder than most parts of the metro. We do a lot of hail-damage diagnostics, fin straightening, and full condenser replacements with insurance documentation when needed.",
      ],
    },
    topServices: [
      "AC Installation & Replacement",
      "Air Conditioning Repair",
      "Heating System Installation",
      "Furnace Repair",
      "Water Heater Services",
      "Ductwork & Mini-Splits",
    ],
    faqKeys: baseFaqKeys,
  },
  {
    slug: "air-conditioning-contractor-in-norman-ok",
    city: "Norman",
    cityFull: "Norman, OK",
    title: "Air Conditioning Contractor in Norman, OK",
    excerpt:
      "Reliable HVAC service for Norman — from OU campus rentals to historic homes near Lindsey Street to new builds out by 36th Avenue NW.",
    heroImageKey: "img-condenser-closeup",
    featureImageKey: "service-water-hero",
    intro: [
      "Norman's housing stock runs the full range — century-old homes near downtown, mid-century neighborhoods around OU, and brand-new builds expanding north and east. Each one has different HVAC needs, and our techs are trained on all of it. We service ductwork, gas furnaces, heat pumps, and ductless mini-splits across the city.",
      "Norman summers are hot, and storm season is rough on outdoor units. Hail-damaged condensers, lightning-fried control boards, and tornado-cleanup repairs are part of our regular work here. We respond fast after big weather events and answer calls 24/7 year-round.",
      "Whether you're a long-time Norman homeowner, a landlord with a rental near campus, or you just moved into a new build — Advantage Heating & Air Conditioning treats your call like it matters. Because it does.",
    ],
    localHook:
      "From Campus Corner rentals to mature homes near Goddard Park to new construction out by Tribute Estates — we cover all of Norman.",
    localSection: {
      eyebrow: "Why Norman HVAC Calls Need Local Knowledge",
      heading: "Norman Storm Season & Campus-Adjacent HVAC",
      body: [
        "Norman sees more lightning-fried control boards than almost anywhere we work — the storm cells that line up along I-35 don't go easy on outdoor electronics. We carry surge-rated thermostats, replacement boards, and contactors on every Norman dispatch so a lightning strike doesn't turn into a multi-day outage.",
        "OU-area rental properties are a category of their own. Tight tenant turnaround windows, deferred maintenance, and a lot of original 1980s/90s equipment — we know how to run an honest furnace inspection, document what the property needs, and turn a repair around fast enough to keep a lease cycle on track.",
      ],
    },
    topServices: [
      "AC Repair & Replacement",
      "Furnace Repair",
      "Heat Pump Installation",
      "Storm Damage Repair",
      "Water Heater Services",
      "Mini-Split Installation",
    ],
    faqKeys: baseFaqKeys,
  },
  {
    slug: "air-conditioning-contractor-in-moore-ok",
    city: "Moore",
    cityFull: "Moore, OK",
    title: "Air Conditioning Contractor in Moore, OK",
    excerpt:
      "Fast, family-friendly HVAC service across Moore — repair, replacement, and 24/7 emergency response when storms knock out your system.",
    heroImageKey: "standards-feature",
    featureImageKey: "service-water-feature",
    intro: [
      "Moore is a city that knows about extreme weather. Between summer heat that pushes 105°F and severe storm seasons that can damage outdoor equipment in a single afternoon, having an HVAC contractor who actually answers the phone matters here more than most places. That's why families across Moore have called Advantage for over 25 years.",
      "We service all of Moore — from established neighborhoods near 12th Street to newer subdivisions south of I-240 and out toward Indian Hills. Same-day repair calls, free replacement estimates, and 24/7 emergency dispatch are all part of how we run.",
      "Our techs are NATE-certified, drug-tested, and locally based. No commission, no upselling — just honest diagnoses and fair pricing on every visit.",
    ],
    localHook:
      "From Highland Park to Eastlake Estates, after storms or in the middle of an August heatwave — we're nearby.",
    localSection: {
      eyebrow: "Built for Moore Weather",
      heading: "Moore Storm Cleanups & Full HVAC Rebuilds",
      body: [
        "More than any other city we serve, Moore has homes where the HVAC system has been replaced because of weather, not age. Tornado damage, hail, derecho-strength wind events — we've quoted, scoped, and rebuilt the equipment side of dozens of Moore homes over the years, including coordination with insurance adjusters when there's a claim.",
        "We also keep a hail-damage log on Moore condensers each spring. If a unit looks superficially fine but the fins are flattened, we'll show you the airflow numbers so you can make an honest decision on repair vs. claim vs. full replacement.",
      ],
    },
    topServices: [
      "AC Installation & Replacement",
      "Storm Damage Repair",
      "Furnace Repair",
      "Water Heater Services",
      "Indoor Air Quality",
      "Ductwork Repair",
    ],
    faqKeys: baseFaqKeys,
  },
  {
    slug: "air-conditioning-contractor-in-yukon-oklahoma-city-ok",
    city: "Yukon",
    cityFull: "Yukon, OK",
    title: "Air Conditioning Contractor in Yukon, OK",
    excerpt:
      "Honest HVAC service for Yukon homeowners — same-day repair, full system replacement, and routine maintenance you can schedule and forget.",
    heroImageKey: "service-ac-install-hero",
    featureImageKey: "service-commercial",
    intro: [
      "Yukon's growth out west of OKC has brought a wave of new construction, but plenty of homes here are 20+ years old and running on original equipment. Whether your system is brand new or showing its age, we service it all — and we'll tell you straight whether a repair makes sense or whether it's time to talk replacement.",
      "We cover everything from neighborhoods around Yukon High School to homes off Garth Brooks Boulevard to newer builds in Surrey Hills and surrounding areas. Most appointments are same-day, and we run 24/7 for emergencies.",
      "Advantage is a 25+ year family-owned local business — not a corporate franchise. Your call goes to a real person, your tech is on staff (not a sub-contractor), and the quote you get is the price you pay.",
    ],
    localHook:
      "From Mulvey to Surrey Hills, near Yukon High to the edge of Mustang — Advantage covers Yukon.",
    localSection: {
      eyebrow: "Yukon HVAC by Neighborhood",
      heading: "What Yukon Builder-Grade Systems Need at Year 5",
      body: [
        "A lot of Yukon's growth came in waves between 2008 and 2018, which means a huge chunk of homes here are now hitting the year-5-to-10 window where builder-grade HVAC equipment starts asking for capacitors, contactors, and the occasional blower motor. We see the same handful of failure modes over and over and stock the parts to fix them on the first visit.",
        "Yukon's harder municipal water also shortens water heater life faster than most of the metro — we'll tell you straight whether your tank is ready for an anode rod swap or whether it's past saving.",
      ],
    },
    topServices: [
      "AC Repair",
      "AC Installation",
      "Heat Pump Service",
      "Furnace Replacement",
      "Tankless Water Heater",
      "Mini-Split Installation",
    ],
    faqKeys: baseFaqKeys,
  },
  {
    slug: "air-conditioning-contractor-in-mustang-oklahoma-city-ok",
    city: "Mustang",
    cityFull: "Mustang, OK",
    title: "Air Conditioning Contractor in Mustang, OK",
    excerpt:
      "Trusted HVAC contractor serving Mustang families — same-day appointments, fair pricing, and 24/7 emergency dispatch when comfort can't wait.",
    heroImageKey: "service-ac-install-feature",
    featureImageKey: "service-commercial-feature",
    intro: [
      "Mustang has grown fast over the last decade, with new neighborhoods spreading out past SH-152 and Czech Hall Road. Many of those new homes are coming up on the age where their first HVAC service is due — and most older homes in the city are well overdue for a tune-up or a replacement.",
      "We handle all of it: routine maintenance, emergency repair, system replacement, ductwork, and indoor air quality upgrades. Our techs are NATE-certified and our quotes are always written down before any work begins.",
      "Mustang families have trusted Advantage for over 25 years. We answer the phone 24/7, dispatch the same day in most cases, and stand behind every repair and install with a workmanship warranty.",
    ],
    localHook:
      "From the original neighborhoods near Mustang Road to newer growth out near Czech Hall — we cover all of Mustang.",
    localSection: {
      eyebrow: "Mustang HVAC Reality Check",
      heading: "Why New Mustang Homes Get Hot Rooms",
      body: [
        "Production builders in Mustang's newer subdivisions tend to size ductwork for cost, not airflow — which is why so many homes here have one bedroom that's 6° warmer than the rest of the house. We measure static pressure and supply temps room-by-room, then fix the actual restriction (usually undersized returns or a kinked supply run) instead of upselling you a bigger unit.",
        "On the older Mustang Road side of town, our work skews more toward gas-furnace tune-ups, ductwork repair, and full system replacements on equipment that's quietly been running on borrowed time.",
      ],
    },
    topServices: [
      "AC Replacement",
      "Heating Installation",
      "Furnace Repair",
      "Annual Maintenance",
      "Indoor Air Quality",
      "Water Heater Service",
    ],
    faqKeys: baseFaqKeys,
  },
  {
    slug: "air-conditioning-contractor-in-midwest-city-ok",
    city: "Midwest City",
    cityFull: "Midwest City, OK",
    title: "Air Conditioning Contractor in Midwest City, OK",
    excerpt:
      "HVAC service across Midwest City — Tinker AFB families, established neighborhoods, and homes near SE 29th. Repair, replacement, and 24/7 dispatch.",
    heroImageKey: "service-ac-repair",
    featureImageKey: "service-vent-hero",
    intro: [
      "Midwest City has a lot of mature housing stock, much of it built between the 1950s and 70s for Tinker Air Force Base personnel. Those homes often have older ductwork, original gas lines, and HVAC systems that have been patched up multiple times. We're comfortable working on every generation of equipment — and we'll tell you straight when a system has reached the point where replacement makes more sense than another repair.",
      "We also service newer neighborhoods on the east and south sides of the city. Whether you're a long-time Midwest City homeowner or just moved into a rental near Tinker, our crew can help.",
      "Advantage is family-owned, locally-staffed, and on call 24 hours a day. Most calls are same-day, and every repair is quoted in writing before we start.",
    ],
    localHook:
      "Serving Tinker AFB families and Midwest City homeowners alike — from Heritage Park to the SE 29th corridor.",
    localSection: {
      eyebrow: "MWC's HVAC Quirks",
      heading: "Mid-Century Tinker-Era Homes & Their HVAC Systems",
      body: [
        "A huge slice of Midwest City was built between the early 1950s and late 1970s for Tinker Air Force Base personnel. Those homes share a few HVAC fingerprints: undersized returns, original ductwork running through unconditioned crawlspaces, and gas lines that have been spliced more than once over six decades. We diagnose those systems all the time and know what's salvageable.",
        "Combustion safety is non-negotiable on aging Midwest City furnaces. Every furnace call we run here ends with a draft test, a heat-exchanger inspection, and a CO sweep before we hand back the keys.",
      ],
    },
    topServices: [
      "AC Repair",
      "Furnace Replacement",
      "Floor Furnace Service",
      "Ductwork Replacement",
      "Water Heater Repair",
      "Annual Maintenance",
    ],
    faqKeys: baseFaqKeys,
  },
  {
    slug: "air-conditioning-contractor-in-del-city-ok",
    city: "Del City",
    cityFull: "Del City, OK",
    title: "Air Conditioning Contractor in Del City, OK",
    excerpt:
      "Honest HVAC service for Del City homeowners — repair, replacement, water heater, and ductwork. Family-owned, local, and 24/7.",
    heroImageKey: "service-ac-repair-hero",
    featureImageKey: "service-vent-feature",
    intro: [
      "Del City's housing stock is mostly mid-century, which means a lot of homes here have had multiple HVAC system swaps over the years. Some still have original ductwork sized for systems that haven't existed since the 1970s. We're comfortable diagnosing those quirks and giving you a real-world honest answer about what's worth fixing and what's worth replacing.",
      "We service all of Del City — from neighborhoods near the SE 15th business corridor to homes adjacent to Tinker. Most service calls are same-day, and we answer 24/7.",
      "Family-owned, NATE-certified, BBB-accredited. Our techs aren't on commission so the diagnosis you get is the actual problem — not the most expensive option.",
    ],
    localHook:
      "From neighborhoods near Eagle Lake to homes along SE 29th — Advantage covers Del City.",
    localSection: {
      eyebrow: "Del City HVAC Specifics",
      heading: "Floor Furnace Service Other Companies Won't Touch",
      body: [
        "Del City still has more working floor furnaces than just about any city in the metro — original mid-century equipment that other contractors flat-out won't service. We will. Our techs are trained on the gas valves, thermocouples, and pilot assemblies these units use, and we'll tell you honestly whether yours is safe to run another season or whether it's time for a modern central-system retrofit.",
        "Original Del City ductwork is also worth a real look. Many homes here have supply runs that were sized for systems that haven't existed since the 1970s — fixing the ducts often makes a bigger comfort difference than swapping the unit.",
      ],
    },
    topServices: [
      "AC Repair",
      "Furnace Service",
      "Floor Furnace Repair",
      "Ductwork Repair",
      "Water Heater Replacement",
      "Mini-Split Install",
    ],
    faqKeys: baseFaqKeys,
  },
  {
    slug: "air-conditioning-contractor-in-bethany-ok",
    city: "Bethany",
    cityFull: "Bethany, OK",
    title: "Air Conditioning Contractor in Bethany, OK",
    excerpt:
      "Local HVAC service for Bethany — quick response, fair pricing, and 25+ years of trusted work across this close-knit OKC suburb.",
    heroImageKey: "service-ac-repair-feature",
    featureImageKey: "service-vent-mini-split",
    intro: [
      "Bethany is a tight-knit community surrounded by Oklahoma City, and many of the homes here have been in the same families for generations. We see plenty of older systems with original ductwork — and we know how to service them right without throwing parts at the problem.",
      "Whether your system needs a small repair or you're ready for a full replacement, our crew gives you written quotes, fair pricing, and the same workmanship warranty we offer everywhere else.",
      "We're family-owned, NATE-certified, and answer calls 24 hours a day. When somebody else can't get to you, we usually can.",
    ],
    localHook:
      "From mature homes near Southern Nazarene University to newer builds along Council Road — we cover Bethany.",
    localSection: {
      eyebrow: "Bethany HVAC Done Right",
      heading: "Servicing Bethany Homes Without Tearing Them Up",
      body: [
        "A lot of Bethany homes have been in the same family for two or three generations, which means undocumented HVAC quirks: a duct relocated during a 1980s remodel, a return pulled to make room for a built-in, a furnace closet drywalled over. We work carefully on these homes, document what we find, and don't assume the previous installer did the right thing.",
        "Sunrooms, garages, and added-on bonus rooms are also common Bethany comfort headaches — and a single-zone ductless mini-split is usually a cleaner fix than trying to extend a strained main system into a space it wasn't sized for.",
      ],
    },
    topServices: [
      "AC Repair",
      "Furnace Service",
      "Heating Replacement",
      "Water Heater Service",
      "Ductwork Repair",
      "Maintenance Plans",
    ],
    faqKeys: baseFaqKeys,
  },
  {
    slug: "air-conditioning-contractor-in-the-village-oklahoma-city-ok",
    city: "The Village",
    cityFull: "The Village, OK",
    title: "Air Conditioning Contractor in The Village, OK",
    excerpt:
      "HVAC pros serving The Village — repairs, full system replacements, and emergency response 24/7 across this quiet OKC enclave.",
    heroImageKey: "service-heating-hero",
    featureImageKey: "img-mini-split-clean",
    intro: [
      "The Village is one of those rare OKC neighborhoods where most of the original housing stock from the 50s and 60s is still standing — and a lot of that means HVAC equipment that's been replaced and patched multiple times. We've serviced homes here for years, and we know which old-school setups just need a tune-up vs. which ones are genuinely past their useful life.",
      "Our techs handle every brand and every system age. You'll get an honest diagnosis, a written quote, and a tech who actually shows up on time.",
      "Family-owned, locally-staffed, and on call 24/7. Same-day appointments are the norm, not the exception.",
    ],
    localHook:
      "Serving The Village's mature homes and tree-lined streets with HVAC service that respects the character of the neighborhood.",
    localSection: {
      eyebrow: "The Village HVAC Tradition",
      heading: "Updating Mid-Century The Village Homes",
      body: [
        "The Village has tighter mechanical closets, smaller crawlspaces, and original framing that doesn't always play nice with modern high-efficiency equipment. We size replacement units to fit the existing footprint when we can, and we route line sets and condensate carefully so brick, plaster, and original woodwork stay untouched.",
        "Most Village homes also have ductwork that was sized for the original 1950s/60s equipment. A right-sized return upgrade often delivers more comfort improvement than the new condenser does — we'll show you the numbers before you spend money on either.",
      ],
    },
    topServices: [
      "AC Repair",
      "AC Replacement",
      "Furnace Service",
      "Floor Furnace",
      "Ductwork Repair",
      "Water Heater Services",
    ],
    faqKeys: baseFaqKeys,
  },
  {
    slug: "air-conditioning-contractor-in-nickels-hills-oklahoma-city-ok",
    city: "Nichols Hills",
    cityFull: "Nichols Hills, OK",
    title: "Air Conditioning Contractor in Nichols Hills, OK",
    excerpt:
      "Premium HVAC service for Nichols Hills — discreet, professional, and detail-oriented. From historic estates to recent renovations.",
    heroImageKey: "service-heating-feature",
    featureImageKey: "img-window-ac",
    intro: [
      "Nichols Hills has some of the most beautiful homes in the OKC metro, and they deserve HVAC service that matches. Many of these homes have multi-zone systems, custom ductwork, hidden mechanical rooms, and high-efficiency equipment that requires a tech who knows what they're looking at. We do.",
      "Our techs are clean, on time, and respectful of your home. Shoe covers, tarps, and clean-up are standard — not extras. We service every brand of high-end residential HVAC equipment and we coordinate well with your other contractors when needed.",
      "Family-owned, NATE-certified, and on call 24/7. Quiet, professional service for a quiet, refined neighborhood.",
    ],
    localHook:
      "From historic homes near Nichols Hills Plaza to recent renovations along Avondale Drive — we treat every home with care.",
    localSection: {
      eyebrow: "Nichols Hills Service Standards",
      heading: "What Premium Nichols Hills HVAC Service Looks Like",
      body: [
        "Nichols Hills work means scheduled appointment windows, floor protection, shoe covers, and quiet operation when there's a working-from-home spouse on a call. We coordinate with house managers and security staff when needed, and we keep tarps and drop cloths on every truck so original hardwood and stonework stay protected.",
        "We're also comfortable with the multi-zone Mitsubishi, Trane XV, and Lennox SL-series equipment Nichols Hills homes tend to run — including the proprietary controls boards and zoning panels that less-experienced contractors get tripped up on.",
      ],
    },
    topServices: [
      "Multi-Zone HVAC",
      "High-Efficiency AC",
      "Furnace Replacement",
      "Air Quality Systems",
      "Tankless Water Heater",
      "Annual Maintenance",
    ],
    faqKeys: baseFaqKeys,
  },
  {
    slug: "air-conditioning-contractor-in-piedmont-oklahoma-city-ok",
    city: "Piedmont",
    cityFull: "Piedmont, OK",
    title: "Air Conditioning Contractor in Piedmont, OK",
    excerpt:
      "Reliable HVAC for Piedmont homeowners — including newer builds, acreage homes, and propane-heated properties along the city's edge.",
    heroImageKey: "service-furnace-hero",
    featureImageKey: "img-air-duct-vent",
    intro: [
      "Piedmont has grown quickly from a small town into a desirable spread of newer subdivisions and acreage homes. We service everything Piedmont throws at us — from typical builder-grade installs that need a tune-up at year five to large rural homes running propane, dual-fuel, or heat pump systems.",
      "Acreage homes often have unique HVAC needs — outbuilding mini-splits, well-water-fed water heaters, propane furnaces. Our techs are comfortable with all of it.",
      "Family-owned, NATE-certified, BBB-accredited. We answer 24/7 and dispatch the same day across all of Piedmont.",
    ],
    localHook:
      "From the newer subdivisions near Edmond Road to acreage homes at the city's edge — we cover Piedmont.",
    localSection: {
      eyebrow: "Piedmont Acreage HVAC",
      heading: "Propane, Heat Pumps & Outbuildings in Piedmont",
      body: [
        "Out past the city limits, Piedmont gets rural fast — and rural HVAC means propane furnace tune-ups, dual-fuel sizing that has to make sense when propane prices swing, and shop or barn mini-splits that the original builder never planned for. We handle all of it on the same dispatch.",
        "Well-water-fed water heaters are another Piedmont specific. Sediment loads from a private well shorten anode rods and elements faster than city water — we'll set you up with the right flush schedule and recommend an inline filter when it actually pays for itself.",
      ],
    },
    topServices: [
      "AC Replacement",
      "Heat Pump Service",
      "Propane Furnace",
      "Mini-Split Installation",
      "Tankless Water Heater",
      "Acreage HVAC",
    ],
    faqKeys: baseFaqKeys,
  },
  {
    slug: "air-conditioning-contractor-in-newcastle-oklahoma-city-ok",
    city: "Newcastle",
    cityFull: "Newcastle, OK",
    title: "Air Conditioning Contractor in Newcastle, OK",
    excerpt:
      "HVAC service across Newcastle — repair, replacement, water heater, and ductwork. Local techs and 24/7 emergency dispatch when summer hits hard.",
    heroImageKey: "service-water-hero",
    featureImageKey: "service-commercial-hero",
    intro: [
      "Newcastle is a fast-growing community with a mix of newer suburban builds and older country homes. We service all of it — from a builder-grade AC unit that's gone out at year four to a 20-year-old propane furnace in a home off Highway 76.",
      "Most service calls in Newcastle are same-day, and we run 24/7 for true emergencies. The drive from OKC isn't a problem — Newcastle is part of our regular service area.",
      "Family-owned, NATE-certified, fair pricing. We'll give you a written quote on every job and stand behind the work with a workmanship warranty.",
    ],
    localHook:
      "From newer subdivisions near the river to country homes along Highway 76 — Advantage serves Newcastle.",
    localSection: {
      eyebrow: "Newcastle Local Notes",
      heading: "Why Newcastle HVAC Calls Don't Wait Long",
      body: [
        "Newcastle sits on the same daily route our Norman and Purcell trucks already run, so distance from OKC isn't an excuse for a slow response. Most no-cool and no-heat calls in Newcastle get a tech the same day — and our trucks carry the parts that fail most often on the builder-grade equipment in your subdivision.",
        "Country homes off Highway 76 are a different category — propane furnaces, well-fed water heaters, and longer driveways — and we treat them with the same priority as the in-town addresses.",
      ],
    },
    topServices: [
      "AC Repair",
      "AC Installation",
      "Furnace Service",
      "Ductwork Repair",
      "Tankless Water Heater",
      "Mini-Split Install",
    ],
    faqKeys: baseFaqKeys,
  },
  {
    slug: "air-conditioning-contractor-in-blanchard-ok",
    city: "Blanchard",
    cityFull: "Blanchard, OK",
    title: "Air Conditioning Contractor in Blanchard, OK",
    excerpt:
      "HVAC contractor serving Blanchard — including acreage homes, new construction, and shop/outbuilding installs. Same-day service available.",
    heroImageKey: "service-water-feature",
    featureImageKey: "img-condenser-closeup",
    intro: [
      "Blanchard has a mix of small-town charm and rural acreage that often needs slightly different HVAC solutions than typical city homes. Shop heating, outbuilding mini-splits, and propane furnaces are all part of regular work for our crew here.",
      "We also service the newer subdivisions on the north and east sides of town. Most service calls are wrapped up the same day, and we run 24/7 for emergencies.",
      "Family-owned, NATE-certified, locally based. Your tech lives in the metro, not 200 miles away — when you need us, we're nearby.",
    ],
    localHook:
      "From in-town homes to acreage and shop/outbuilding installs — Advantage covers Blanchard and surrounding rural McClain County.",
    localSection: {
      eyebrow: "Blanchard Shop & Acreage HVAC",
      heading: "Shop Heat & Outbuilding Mini-Splits in Blanchard",
      body: [
        "Detached shops, barns, and metal R-panel outbuildings are everywhere in Blanchard — and they almost never get the airflow attention they need. We install dedicated mini-splits and unit heaters for shop spaces, with sleeve runs and condensate routing planned around your floor layout instead of just slapped on the easiest wall.",
        "We also coordinate with your propane provider when an install requires a tank top-off or a regulator swap, so a furnace replacement isn't a multi-vendor headache.",
      ],
    },
    topServices: [
      "AC Replacement",
      "Propane Furnace Service",
      "Shop Mini-Splits",
      "Water Heater Replacement",
      "Annual Maintenance",
      "Heat Pump Install",
    ],
    faqKeys: baseFaqKeys,
  },
  {
    slug: "air-conditioning-contractor-in-purcell-ok",
    city: "Purcell",
    cityFull: "Purcell, OK",
    title: "Air Conditioning Contractor in Purcell, OK",
    excerpt:
      "Honest, local HVAC service for Purcell — repair, install, and maintenance with the same fair pricing and 24/7 dispatch we give every customer.",
    heroImageKey: "service-commercial",
    featureImageKey: "standards-feature",
    intro: [
      "Purcell sits at the southern edge of the OKC metro along I-35, and we cover the whole town and the surrounding rural acreage. From historic homes near Main Street to newer builds south of the river, our techs are comfortable with whatever your system needs.",
      "Same-day service is the norm. After-hours emergency dispatch is available for true no-cool, no-heat situations year-round.",
      "Family-owned, NATE-certified, BBB-accredited. The quote you get is the price you pay — no commission, no upselling.",
    ],
    localHook:
      "From the historic district downtown to acreage homes south of the South Canadian River — we serve all of Purcell.",
    localSection: {
      eyebrow: "Purcell HVAC Local",
      heading: "Why Purcell Homeowners Trust Local HVAC",
      body: [
        "A lot of Purcell homeowners commute north to OKC or Norman every day, which means HVAC repairs need to happen on a schedule that doesn't require taking off work. We do appointment windows, key-pickup options, and same-day call-aheads so a no-cool day doesn't turn into a no-paycheck day.",
        "Historic homes near downtown Purcell often have original cast-iron radiators paired with retrofit central air — a combination plenty of contractors won't touch. We will, and we'll keep the character intact while the comfort gets fixed.",
      ],
    },
    topServices: [
      "AC Repair",
      "Furnace Replacement",
      "Heat Pump Install",
      "Water Heater Service",
      "Ductwork Replacement",
      "Mini-Split Installation",
    ],
    faqKeys: baseFaqKeys,
  },
  {
    slug: "air-conditioning-contractor-in-chickasha-ok",
    city: "Chickasha",
    cityFull: "Chickasha, OK",
    title: "Air Conditioning Contractor in Chickasha, OK",
    excerpt:
      "HVAC service for Chickasha homeowners and small businesses — fair pricing, written quotes, and locally-based techs who actually show up.",
    heroImageKey: "service-commercial-feature",
    featureImageKey: "service-ac-install-hero",
    intro: [
      "Chickasha is far enough from the OKC metro that some HVAC contractors won't bother making the drive. We do — and we treat Chickasha calls with the same priority as any other service area. Same-day appointments and 24/7 emergency dispatch are standard.",
      "We service residential and small commercial across town, including older homes near downtown, USAO-area neighborhoods, and newer subdivisions on the outskirts. Every brand, every age of system.",
      "Advantage is family-owned, locally-staffed, NATE-certified, and BBB-accredited. We give you a written quote up front and stand behind every install with a workmanship warranty.",
    ],
    localHook:
      "From downtown Chickasha to homes near USAO and the Festival of Light park — we cover Grady County.",
    localSection: {
      eyebrow: "Chickasha & Grady County",
      heading: "Chickasha HVAC Without the Drive Excuse",
      body: [
        "Plenty of OKC contractors quietly redline their service area at the Grady County line. We don't. Chickasha calls go on the same dispatch board as every other city we serve, with no travel surcharges and no \"we'll get out there next week\" answers.",
        "Small commercial HVAC is also a regular part of our Chickasha work — corner restaurants, professional offices near downtown, and small retail near the bypass. Same crew, same pricing structure, same workmanship warranty.",
      ],
    },
    topServices: [
      "AC Replacement",
      "Furnace Service",
      "Floor Furnace",
      "Small Commercial HVAC",
      "Water Heater Replacement",
      "Maintenance Plans",
    ],
    faqKeys: baseFaqKeys,
  },
  {
    slug: "air-conditioning-contractor-in-shawnee-ok",
    city: "Shawnee",
    cityFull: "Shawnee, OK",
    title: "Air Conditioning Contractor in Shawnee, OK",
    excerpt:
      "HVAC contractor serving Shawnee — repair, replace, and maintain. Same-day service when summer heat doesn't wait.",
    heroImageKey: "service-vent-hero",
    featureImageKey: "service-ac-install-feature",
    intro: [
      "Shawnee is a city with deep history and a mix of old and new housing — historic Beard Street homes, OBU-area rentals, and newer subdivisions on the city's edges. We service all of it, with crews comfortable on every age of equipment.",
      "Storm season is rough on Shawnee — hail damage, lightning-fried boards, and tornado-related repairs are all regular work for our crew. We respond fast after big weather events.",
      "Family-owned, locally-staffed, on call 24/7. Honest diagnoses, fair quotes, written warranties.",
    ],
    localHook:
      "From historic homes near Bell Avenue to OBU-area rentals to newer builds along Kickapoo Spur — we cover Shawnee.",
    localSection: {
      eyebrow: "Shawnee HVAC Notes",
      heading: "Shawnee Storm Cleanup & Rental Property HVAC",
      body: [
        "Shawnee storms — especially the 2023 tornado — taught us a lot about what fails first on outdoor equipment under wind and hail load. We document hail damage thoroughly, work with adjusters when there's a claim, and stage condenser swaps so a property isn't sitting without cooling longer than it has to.",
        "OBU-area rental properties are also a regular category here. Property managers get one point of contact, simple invoicing, and quick turnaround between tenants — including off-season maintenance scheduling that keeps lease renewals on track.",
      ],
    },
    topServices: [
      "Storm Damage Repair",
      "AC Repair & Replacement",
      "Furnace Service",
      "Floor Furnace",
      "Ductwork Repair",
      "Water Heater Services",
    ],
    faqKeys: baseFaqKeys,
  },
  {
    slug: "air-conditioning-contractor-in-el-rino-oklahoma-city-ok",
    city: "El Reno",
    cityFull: "El Reno, OK",
    title: "Air Conditioning Contractor in El Reno, OK",
    excerpt:
      "Local HVAC service for El Reno — repair, replace, and maintain. Family-owned, NATE-certified, on call 24/7.",
    heroImageKey: "service-vent-feature",
    featureImageKey: "service-ac-repair",
    intro: [
      "El Reno's classic small-town housing stock comes with a lot of older HVAC systems, gas furnaces, and original ductwork. We're comfortable on every generation of equipment and can give you an honest read on whether to repair or replace.",
      "We also serve newer construction on the east and south sides of town, and we cover surrounding rural Canadian County for those acreage HVAC and shop heating needs.",
      "Same-day service is the norm. We answer the phone 24/7 for true emergencies. Family-owned, NATE-certified, fair pricing.",
    ],
    localHook:
      "From historic homes near Country Club Road to acreage out toward Calumet — we serve El Reno and rural Canadian County.",
    localSection: {
      eyebrow: "El Reno HVAC Specifics",
      heading: "Original Gas Furnace Repair in El Reno",
      body: [
        "Plenty of El Reno homes are still running gas furnaces from the 1970s and 80s — equipment that's technically still functional but nowhere near a modern unit's efficiency. We service them safely (heat-exchanger inspection and CO sweep on every visit) and we'll give you an honest side-by-side on whether to keep patching it or upgrade.",
        "Acreage out toward Calumet adds propane furnaces and outbuilding HVAC into the mix. Our techs work the rural side of Canadian County weekly, so a 20-mile drive past town isn't a special-trip ask.",
      ],
    },
    topServices: [
      "AC Repair",
      "Furnace Replacement",
      "Floor Furnace Service",
      "Acreage HVAC",
      "Water Heater Service",
      "Mini-Split Install",
    ],
    faqKeys: baseFaqKeys,
  },
  {
    slug: "air-conditioning-contractor-in-harrah-ok",
    city: "Harrah",
    cityFull: "Harrah, OK",
    title: "Air Conditioning Contractor in Harrah, OK",
    excerpt:
      "HVAC service across Harrah — town and country. Repair, install, and 24/7 emergency dispatch when summer doesn't wait.",
    heroImageKey: "service-vent-mini-split",
    featureImageKey: "service-ac-repair-hero",
    intro: [
      "Harrah is one of those Oklahoma County towns that feels rural even though it's a short drive from OKC. We service homes all across town — from neighborhoods near Harrah Middle School to acreage homes along NE 23rd and beyond.",
      "Acreage HVAC often means propane furnaces, well-water-fed water heaters, and outbuilding mini-splits. Our techs handle all of it.",
      "Family-owned, NATE-certified, locally based. Your call goes to a real person and your tech is on staff — not a sub-contractor.",
    ],
    localHook:
      "From neighborhoods near Harrah Middle School to acreage homes along NE 23rd — we cover all of Harrah.",
    localSection: {
      eyebrow: "Harrah Town & Country HVAC",
      heading: "Servicing Harrah's Acreage Homes & In-Town Builds",
      body: [
        "Harrah is one of those eastern Oklahoma County towns where one driveway runs to a tidy in-town subdivision and the next one runs back a quarter mile to a ranch-style home with a detached shop and a propane tank. We handle both kinds of HVAC on the same dispatch — main-house tune-ups, shop mini-splits, and outbuilding heat all on a single visit when it makes sense.",
        "Well-water-fed water heaters and septic-adjacent ductwork (the kind that runs under crawlspaces with high humidity) are also common here. We design around them instead of pretending they're not there.",
      ],
    },
    topServices: [
      "AC Replacement",
      "Propane Furnace Service",
      "Shop Mini-Splits",
      "Tankless Water Heater",
      "Acreage HVAC",
      "Annual Maintenance",
    ],
    faqKeys: baseFaqKeys,
  },
  {
    slug: "air-conditioning-contractor-in-mccloud-ok",
    city: "McCloud",
    cityFull: "McLoud, OK",
    title: "Air Conditioning Contractor in McLoud, OK",
    excerpt:
      "HVAC service for McLoud — including rural acreage, shop heating, and small-town homes. Same-day service when possible, 24/7 emergency dispatch.",
    heroImageKey: "img-mini-split-clean",
    featureImageKey: "service-ac-repair-feature",
    intro: [
      "McLoud sits east of OKC in Pottawatomie County, and we drive out for service calls every week. Whether you're in town near the schools or out on acreage along the railroad tracks, we cover all of it — including shop and outbuilding HVAC.",
      "Rural acreage often means propane furnaces, well-fed water heaters, and unique ductwork challenges. Our crew handles every variation.",
      "Family-owned, locally based, NATE-certified. We give you a written quote up front and stand behind every install.",
    ],
    localHook:
      "From in-town McLoud to acreage homes and ranch properties throughout western Pottawatomie County.",
    localSection: {
      eyebrow: "McLoud HVAC by the Mile",
      heading: "Ranch, Acreage & Small-Town HVAC in McLoud",
      body: [
        "McLoud is rural enough that some HVAC contractors will quote a service trip as if it's another state. Not us — McLoud sits on our standard eastern dispatch route, and our trucks roll out here every week. Same-day service for no-cool and no-heat calls is normal, not a special exception.",
        "Long driveways, pasture views, and outbuilding HVAC are part of the normal scope here. Propane furnaces, well-fed water heaters, and shop mini-splits all get the same diagnostic discipline as a typical OKC suburban call.",
      ],
    },
    topServices: [
      "AC Repair",
      "Propane Furnace",
      "Shop Mini-Splits",
      "Water Heater Service",
      "Acreage HVAC",
      "Heat Pump Install",
    ],
    faqKeys: baseFaqKeys,
  },
];

export function getAreaBySlug(slug: string): AreaConfig | undefined {
  return areas.find((a) => a.slug === slug);
}
