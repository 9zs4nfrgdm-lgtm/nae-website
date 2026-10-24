export type RepairCategory = "washing-machines" | "dryers" | "refrigeration" | "dishwashers" | "ovens" | "cooktops" | "microwaves" | "coffee-machines";

export type BrandRepairData = {
  slug: string;
  name: string;
  categories: RepairCategory[];
  overview: string;
  rangeContext: string;
  modelGuidance: string;
  diagnosticFocus: string;
  symptoms: Partial<Record<RepairCategory, string[]>>;
  specificFaq: { question: string; answer: string };
};

export const categoryDetails: Record<
  RepairCategory,
  { title: string; href: string; label: string }
> = {
  "washing-machines": {
    title: "Washing Machine Repairs",
    href: "/washing-machine-repairs",
    label: "washing machines",
  },
  dryers: {
    title: "Dryer Repairs",
    href: "/dryer-repairs",
    label: "dryers",
  },
  refrigeration: {
    title: "Fridge & Freezer Repairs",
    href: "/fridge-freezer-repairs",
    label: "fridges and freezers",
  },
  dishwashers: { title: "Dishwasher Repairs", href: "/dishwasher-repairs", label: "dishwashers" },
  ovens: { title: "Oven Repairs", href: "/oven-repairs", label: "ovens" },
  cooktops: { title: "Cooktop Repairs", href: "/cooktop-repairs", label: "cooktops" },
  microwaves: { title: "Microwave Repairs", href: "/microwave-repairs", label: "microwaves" },
  "coffee-machines": { title: "Coffee Machine Repairs", href: "/coffee-machine-repairs", label: "coffee machines" },
};

export const brandRepairPages: BrandRepairData[] = [
  {
    slug: "westinghouse",
    name: "Westinghouse",
    categories: ["washing-machines", "dryers", "refrigeration", "dishwashers", "ovens", "cooktops", "microwaves"],
    overview:
      "Westinghouse's Australian range spans laundry, fridges and freezers, dishwashers, ovens, cooktops and microwaves. Identifying the appliance format and exact model is important before interpreting a reported symptom.",
    rangeContext:
      "The relevant fault system varies from laundry water and drum operation to refrigeration cooling, dishwasher wash systems, oven heat, cooktop zones and microwave operation.",
    modelGuidance:
      "Check around a washer or dryer door or lid opening, or inside the refrigerator cabinet, and photograph the full identification label rather than only the branding on the front.",
    diagnosticFocus:
      "Diagnosis distinguishes a cycle or control symptom from a water, airflow, heating or cooling-system problem before a repair direction is chosen.",
    symptoms: {
      "washing-machines": ["Not draining or spinning", "Water leaks or filling issues", "Cycle stopping or an error code"],
      dryers: ["No heat or slow drying", "Drum not turning", "Airflow, noise or control issues"],
      refrigeration: ["Fridge or freezer too warm", "Icing or water leaks", "Fan noise or temperature fluctuation"],
    },
    specificFaq: {
      question: "Can you assess Westinghouse washer-dryer combinations?",
      answer:
        "Washer-dryer combinations fall within the current laundry service categories. Include the exact model and clarify whether the problem occurs while washing, drying or during both functions.",
    },
  },
  {
    slug: "vintec",
    name: "Vintec",
    categories: ["refrigeration"],
    overview:
      "Vintec specialises in temperature-controlled wine cabinets, wine cellars and beverage centres rather than conventional laundry appliances. This page therefore focuses only on refrigeration-related Vintec faults.",
    rangeContext:
      "Single-zone, dual-zone and multi-temperature cabinets can present different symptoms, so it is useful to identify which compartment is affected and the temperatures displayed or observed.",
    modelGuidance:
      "Photograph the cabinet identification label and control display. Include the model number, the number of temperature zones and whether the cabinet is freestanding or built into cabinetry.",
    diagnosticFocus:
      "Useful diagnosis considers actual cabinet temperature, airflow, icing, fan operation, controls and installation context without assuming that a temperature symptom identifies one component.",
    symptoms: {
      refrigeration: ["Cabinet not reaching the set temperature", "One zone warmer than another", "Icing, fan noise or temperature fluctuation", "Display or control problems"],
    },
    specificFaq: {
      question: "Is a Vintec wine cabinet treated like a standard fridge?",
      answer:
        "It is a refrigeration appliance, but wine cabinets may use one or more controlled temperature zones and have different operating requirements. The exact model and zone behaviour are important diagnostic details.",
    },
  },
  {
    slug: "electrolux",
    name: "Electrolux",
    categories: ["washing-machines", "dryers", "refrigeration", "dishwashers", "ovens", "cooktops", "microwaves"],
    overview:
      "Electrolux appliances in Australian homes span laundry, refrigeration, dishwashing, ovens, cooktops and microwave cooking. Model-specific information helps separate features from faults.",
    rangeContext:
      "Because the range includes different laundry and refrigeration configurations, a useful enquiry identifies the appliance type before describing the symptom or displayed message.",
    modelGuidance:
      "Look for the product identification label around the laundry appliance opening or inside the refrigerator. A photo should include the complete model and product details.",
    diagnosticFocus:
      "Testing focuses on the system involved—water and drum operation, drying airflow and heat, or refrigeration temperature and air circulation—rather than guessing from a code alone.",
    symptoms: {
      "washing-machines": ["Drain, spin or fill problems", "Door not locking", "Leaks, noise or interrupted cycles"],
      dryers: ["Dryer running without effective drying", "Heat-pump or airflow symptoms", "Stopping, noise or display messages"],
      refrigeration: ["Uneven or insufficient cooling", "Ice build-up or leaking", "Fan, display or temperature issues"],
    },
    specificFaq: {
      question: "What should I send for an Electrolux appliance with a display message?",
      answer:
        "Send a clear photo of the complete message or code, the model label and a description of what happened immediately before it appeared. Do not treat the code as a confirmed diagnosis.",
    },
  },
  {
    slug: "aeg",
    name: "AEG",
    categories: ["washing-machines", "dryers", "refrigeration", "dishwashers", "ovens", "cooktops", "microwaves"],
    overview:
      "AEG's Australian range includes laundry, refrigeration, dishwashers, ovens, cooktops and built-in or combination microwave products. Controls and features vary by series, making the full model number especially useful.",
    rangeContext:
      "Report whether a laundry problem affects washing, spinning or drying, or whether a refrigeration problem affects one or multiple compartments.",
    modelGuidance:
      "Capture the identification plate around the door opening or inside the fridge cabinet, plus a separate photo of any display message that remains visible.",
    diagnosticFocus:
      "A diagnosis-first check separates sensor or control symptoms from mechanical, water, airflow, heating or cooling faults.",
    symptoms: {
      "washing-machines": ["Machine not starting or completing cycles", "Drain, spin or door-lock issues", "Unusual movement, leaks or codes"],
      dryers: ["Heat-pump dryer not drying effectively", "Cycle ending early", "Drum, noise or moisture-sensing symptoms"],
      refrigeration: ["Compartment temperature problems", "Excess frost or moisture", "Fan, control or cooling symptoms"],
    },
    specificFaq: {
      question: "Does the AEG series number help identify the repair?",
      answer:
        "It provides context, but the complete model and product identification details are needed because appliances within a series can differ. A photo of the full label is preferred.",
    },
  },
  {
    slug: "simpson",
    name: "Simpson",
    categories: ["washing-machines", "dryers", "refrigeration", "dishwashers", "ovens", "cooktops"],
    overview:
      "Simpson appliances are no longer sold new under the brand, but Australian homes still contain Simpson top- and front-load washers, vented dryers and legacy refrigeration models. The age and model range make identification especially important.",
    rangeContext:
      "Older controls may communicate a problem through lights or behaviour rather than a modern text display, so describe the sequence clearly and include photos where useful.",
    modelGuidance:
      "Look around the lid, door frame, rear panel or inside the refrigeration cabinet. Record every character because older model families may have similar names.",
    diagnosticFocus:
      "The practical assessment considers the diagnosed fault, general appliance condition and model-specific repair requirements before deciding on a next step.",
    symptoms: {
      "washing-machines": ["Top loader not filling, draining or spinning", "Agitation or cycle problems", "Leaks, noise or flashing indicators"],
      dryers: ["Vented dryer not heating", "Drum or timer symptoms", "Slow drying or unusual noise"],
      refrigeration: ["Legacy fridge not maintaining temperature", "Ice or water build-up", "Noisy operation or control issues"],
    },
    specificFaq: {
      question: "Can an older Simpson appliance still be assessed?",
      answer:
        "The model and symptoms help us understand the job and prepare. During an on-site visit, the technician can inspect the appliance, diagnose the fault and discuss the practical next step.",
    },
  },
  {
    slug: "beko",
    name: "Beko",
    categories: ["washing-machines", "dryers", "refrigeration", "dishwashers", "ovens", "cooktops"],
    overview:
      "Beko's Australian range covers laundry, fridges and freezers, dishwashers, ovens and cooktops. The variety of configurations makes appliance type and model essential enquiry details.",
    rangeContext:
      "For laundry, note whether the symptom concerns water handling, drum operation or drying. For refrigeration, identify the affected compartment and whether the temperature issue is constant or intermittent.",
    modelGuidance:
      "Beko laundry labels are commonly found on the frame inside the door, while refrigeration labels may be on an internal wall, under crispers or at the rear depending on configuration.",
    diagnosticFocus:
      "Testing follows the actual operating system involved and checks the reported symptom rather than assigning a fault from the product name or code.",
    symptoms: {
      "washing-machines": ["Washer not draining or filling", "Door or spin problems", "Cycle interruption or displayed code"],
      dryers: ["Heat-pump or condenser dryer not drying", "Long cycle or early stopping", "Filter, airflow, drum or control symptoms"],
      refrigeration: ["Fridge-freezer temperature imbalance", "Frost or moisture build-up", "Upright freezer not holding temperature"],
    },
    specificFaq: {
      question: "Where is the Beko model label?",
      answer:
        "On many Beko washers and dryers it is inside the door frame. Fridge and freezer label locations vary by configuration, so check internal walls, beneath crispers or the rear and send a clear photograph.",
    },
  },
  {
    slug: "fisher-paykel",
    name: "Fisher & Paykel",
    categories: ["washing-machines", "dryers", "refrigeration", "dishwashers", "ovens", "cooktops", "microwaves"],
    overview:
      "Fisher & Paykel's Australian ranges span laundry, refrigeration, dishwashing, ovens, cooktops and companion microwave products.",
    rangeContext:
      "Top loaders, front loaders, combination laundry appliances and multi-compartment refrigeration models behave differently, so appliance configuration should be stated clearly.",
    modelGuidance:
      "Photograph the full product label around the laundry opening or inside the refrigerator cabinet, along with the control panel if lights or a message form part of the symptom.",
    diagnosticFocus:
      "Diagnosis follows the affected system—from water level and drum movement to dryer airflow or compartment cooling—and checks the model-specific appliance configuration.",
    symptoms: {
      "washing-machines": ["Top loader not agitating or spinning", "Front loader drain or door symptoms", "Out-of-balance, filling or cycle issues"],
      dryers: ["Vented or heat-pump dryer not drying", "Drum or airflow problems", "Cycle stopping or control messages"],
      refrigeration: ["Refrigerator or freezer temperature fault", "Ice, water or fan symptoms", "One compartment affected more than another"],
    },
    specificFaq: {
      question: "Should I say whether my Fisher & Paykel washer is a top or front loader?",
      answer:
        "Yes. The configuration is diagnostically relevant, as are details such as a washer-dryer combination or the number of refrigeration compartments. Include the exact model in every case.",
    },
  },
  {
    slug: "haier",
    name: "Haier",
    categories: ["washing-machines", "dryers", "refrigeration", "dishwashers", "ovens", "cooktops"],
    overview:
      "Haier's Australian appliance range includes laundry, refrigeration, dishwashers, ovens and cooktops, including combined and multi-compartment configurations.",
    rangeContext:
      "For combined or multi-drum products, identify the specific drum or function affected. For convertible refrigeration compartments, record which mode and compartment show the problem.",
    modelGuidance:
      "Send the complete label rather than an app or series name, and include a photograph of the display, affected compartment or control panel where relevant.",
    diagnosticFocus:
      "The appliance configuration is mapped first, then testing focuses on the affected wash, dry or cooling function.",
    symptoms: {
      "washing-machines": ["One drum or wash function not operating", "Drain, fill, spin or door issues", "Excess movement or displayed errors"],
      dryers: ["Heat-pump drying performance issue", "Moisture, airflow or cycle symptoms", "Drum noise or controls not responding"],
      refrigeration: ["Convertible zone not holding temperature", "Fridge-freezer cooling imbalance", "Ice, water, fan or display symptoms"],
    },
    specificFaq: {
      question: "What should I report for a Haier multi-function appliance?",
      answer:
        "Identify the exact drum, compartment or wash/dry function affected, the selected mode and what the other sections are doing. This helps isolate the symptom before testing.",
    },
  },
  {
    slug: "chef",
    name: "Chef",
    categories: ["ovens", "cooktops"],
    overview:
      "Chef's Australian product range centres on cooking appliances. Newcastle Appliance Experts' relevant current categories are ovens and cooktops; rangehoods are not included.",
    rangeContext:
      "Chef service enquiries on this page are limited to household ovens and cooktops.",
    modelGuidance:
      "If you are checking a brand name, photograph the appliance identification label so the manufacturer and product type can be confirmed accurately.",
    diagnosticFocus:
      "Diagnosis begins with the appliance type, full model and reported heating, ignition or control symptom.",
    symptoms: {},
    specificFaq: {
      question: "Can I book a Chef oven or cooktop repair?",
      answer: "Yes, Chef oven and cooktop enquiries are within the current service scope. Send the full model and describe the fault so suitability can be confirmed.",
    },
  },
  {
    slug: "hisense",
    name: "Hisense",
    categories: ["washing-machines", "dryers", "refrigeration", "dishwashers", "microwaves"],
    overview:
      "Hisense's Australian range includes laundry, fridges and freezers, dishwashers and microwaves. Connected controls on some models do not replace the need for the physical model label.",
    rangeContext:
      "Record whether a problem appears on the appliance display, in a connected interface or only through its physical behaviour, and note when it occurs.",
    modelGuidance:
      "Photograph the appliance label and any on-appliance code. Include the fridge or freezer compartment affected, or whether a laundry issue occurs during wash, spin or dry.",
    diagnosticFocus:
      "Testing links the reported behaviour to the relevant mechanical, electrical, water, airflow or cooling system without treating a notification as a complete diagnosis.",
    symptoms: {
      "washing-machines": ["Wash cycle not starting or finishing", "Drain, spin, fill or door issues", "Noise, vibration or error display"],
      dryers: ["Not heating or drying evenly", "Drum or airflow symptoms", "Cycle or control problems"],
      refrigeration: ["Fridge or freezer temperature problem", "Frost, water or fan noise", "Display or compartment-specific fault"],
    },
    specificFaq: {
      question: "Is a Hisense app notification enough to identify the fault?",
      answer:
        "It provides useful context and helps us prepare, but it does not identify the underlying fault by itself. Inspection and testing are needed, either on-site or in the workshop depending on the appliance and repair type.",
    },
  },
  {
    slug: "kelvinator",
    name: "Kelvinator",
    categories: ["refrigeration"],
    overview:
      "Kelvinator branded appliances are no longer sold new in Australia, but many Kelvinator top- and bottom-mount refrigerators remain in homes. This page focuses only on fridge and freezer diagnosis.",
    rangeContext:
      "For an older refrigerator, report whether fresh-food cooling, freezer temperature or both are affected and whether the condition changed gradually or suddenly.",
    modelGuidance:
      "Check the internal cabinet walls or identification plate and photograph the complete model details. Include the cabinet layout and any visible frost or water location.",
    diagnosticFocus:
      "The assessment considers airflow, temperature behaviour, icing, fan operation and controls while avoiding assumptions about an older model before inspection.",
    symptoms: {
      refrigeration: ["Fresh-food compartment too warm", "Freezer not holding temperature", "Excess icing or water", "Fan noise or intermittent cooling"],
    },
    specificFaq: {
      question: "Can an older Kelvinator fridge be assessed?",
      answer:
        "The exact model and symptoms help us prepare for the job. The appliance condition, underlying fault and practical next step can be assessed during an on-site service visit.",
    },
  },
  {
    slug: "kogan",
    name: "Kogan",
    categories: ["washing-machines", "dryers", "refrigeration", "dishwashers", "ovens", "cooktops", "microwaves"],
    overview:
      "Kogan-branded Australian appliances include top- and front-load washers, heat-pump dryers, fridges, upright freezers and hybrid chest fridge-freezers. Model details distinguish products that can look similar online.",
    rangeContext:
      "For hybrid refrigeration, state the selected operating mode. For laundry, identify whether the unit is top-loading, front-loading or heat-pump drying.",
    modelGuidance:
      "Use the model on the physical appliance label or manual rather than a marketplace order title, and include a clear image of any displayed code.",
    diagnosticFocus:
      "Diagnosis begins with the physical appliance and its configuration, then checks the system related to the reported symptom.",
    symptoms: {
      "washing-machines": ["Not filling, draining or spinning", "Lid, door or cycle issues", "Excessive movement or controls"],
      dryers: ["Heat-pump dryer not drying", "Long or interrupted cycles", "Drum, airflow or display symptoms"],
      refrigeration: ["Hybrid fridge-freezer not holding selected temperature", "Cooling or frost problems", "Noise, water or controls"],
    },
    specificFaq: {
      question: "Should I send my Kogan order listing or appliance model?",
      answer:
        "Send the model from the physical identification label. An order listing can add context, but the appliance label is the more reliable identifier for diagnosis and model research.",
    },
  },
  {
    slug: "panasonic",
    name: "Panasonic",
    categories: ["refrigeration", "microwaves"],
    overview:
      "Panasonic's Australian range includes refrigerator-freezers and microwave ovens. This page is limited to those two appliance categories.",
    rangeContext:
      "Multi-compartment models require a clear account of which refrigerator or freezer section is affected, plus any ice, water or display behaviour.",
    modelGuidance:
      "For refrigeration, look inside the cabinet for the model label. For a microwave, check around the door opening, rear or side and state whether it is freestanding or built in.",
    diagnosticFocus:
      "Testing follows the relevant cooling or microwave function rather than inferring a component from one symptom.",
    symptoms: {
      refrigeration: ["Fresh-food or freezer compartment too warm", "Ice-making or freezing symptom", "Temperature fluctuation or frost", "Fan noise, water or display issue"],
    },
    specificFaq: {
      question: "Does this page cover Panasonic washing machines?",
      answer:
        "No. The Panasonic categories listed here are refrigerator-freezers and microwaves; service suitability still depends on the exact model.",
    },
  },
  {
    slug: "solt",
    name: "Sôlt",
    categories: ["washing-machines", "dryers", "refrigeration", "dishwashers", "ovens", "cooktops", "microwaves"],
    overview:
      "Sôlt's Australian range and model archive cover laundry, refrigeration, dishwashers, ovens, cooktops and microwaves. Current and legacy model details matter when researching a fault.",
    rangeContext:
      "State whether the appliance appears in the current range or is an older model where known, but rely on the physical label for identification.",
    modelGuidance:
      "Photograph the full label, including punctuation in the model code, and capture any flashing lights or display message before power is cycled.",
    diagnosticFocus:
      "The diagnosis checks the affected laundry or cooling function and uses the model information to distinguish current and legacy configurations.",
    symptoms: {
      "washing-machines": ["Top or front loader not completing cycles", "Drain, fill or spin symptoms", "Noise, movement or control issue"],
      dryers: ["Vented or heat-pump dryer not drying", "Drum or airflow problem", "Cycle stopping or display issue"],
      refrigeration: ["Fridge, freezer or wine cabinet temperature issue", "Frost or condensation", "Fan, noise or control symptom"],
    },
    specificFaq: {
      question: "Can a legacy Sôlt model still be identified?",
      answer:
        "Yes, the complete model label can be used to research the appliance configuration. Whether a repair proceeds depends on diagnosis and model-specific requirements, not simply its archive status.",
    },
  },
  {
    slug: "stirling",
    name: "Stirling",
    categories: ["washing-machines", "dryers", "refrigeration", "dishwashers", "ovens", "cooktops", "microwaves"],
    overview:
      "Stirling appliances are sold through ALDI Australia in promotional releases, with archived laundry, refrigeration, dishwashing, oven, cooktop and microwave products. The same brand can cover models from different release periods.",
    rangeContext:
      "Provide the on-sale model code or physical label where available; capacity and appearance alone may not distinguish one promotional release from another.",
    modelGuidance:
      "Photograph the model label and manual cover if retained. For refrigeration include the cabinet type; for laundry state whether the appliance is front-load, top-load, vented or heat-pump.",
    diagnosticFocus:
      "Diagnosis identifies the precise release model and then checks the water, drum, drying or cooling system relevant to the symptom.",
    symptoms: {
      "washing-machines": ["Washer not draining or spinning", "Program or door/lid issue", "Leaks, movement or display symptoms"],
      dryers: ["Vented or heat-pump drying problem", "No drum movement", "Long cycle, airflow or noise"],
      refrigeration: ["Fridge or freezer temperature issue", "Ice, moisture or fan noise", "Display or control problem"],
    },
    specificFaq: {
      question: "Why is the Stirling model number particularly important?",
      answer:
        "Stirling appliances are released through periodic promotions, so products with similar descriptions may come from different releases. The physical model code identifies the actual appliance.",
    },
  },
  {
    slug: "technika",
    name: "Technika",
    categories: ["washing-machines", "dryers", "dishwashers", "ovens", "cooktops", "microwaves"],
    overview:
      "Technika's Australian appliance catalogue includes laundry, cooking, dishwashing and microwave products. Those categories form the relevant service overlap.",
    rangeContext:
      "Identify whether the symptom concerns laundry, dishwashing, oven, cooktop or microwave operation and when it occurs.",
    modelGuidance:
      "Check the appliance label or manual for the complete model. Photograph indicator lights if the unit does not show a text code.",
    diagnosticFocus:
      "Diagnosis follows the affected water, heating, airflow, cooking or control function for the particular appliance.",
    symptoms: {
      "washing-machines": ["Not filling, draining or spinning", "Door or program problem", "Leak, vibration or indicator lights"],
      dryers: ["No heat or slow drying", "Drum not turning", "Airflow, timer or noise issue"],
    },
    specificFaq: {
      question: "Which Technika cooking appliances are included?",
      answer: "Ovens, cooktops and microwaves are included in the listed service categories, subject to the exact model and service suitability.",
    },
  },
  {
    slug: "inalto",
    name: "InAlto",
    categories: ["washing-machines", "dryers", "refrigeration", "dishwashers", "ovens", "cooktops", "microwaves"],
    overview:
      "InAlto's Australian range includes laundry, refrigeration, dishwashers, ovens, cooktops and freestanding or built-in microwaves.",
    rangeContext:
      "For combi or hybrid appliances, explain the selected function and which part of the operation is affected rather than describing only the overall product.",
    modelGuidance:
      "Send a clear label photo with the full InAlto model code. Include flashing-light patterns, display messages and the configuration of the washer, dryer or cooling cabinet.",
    diagnosticFocus:
      "The exact configuration is identified first, then diagnosis follows the water, drum, heat-pump, airflow or cooling function involved.",
    symptoms: {
      "washing-machines": ["Top or front loader not draining", "Spin, vibration or cycle problem", "Door, fill or displayed error"],
      dryers: ["Heat-pump or vented dryer not drying", "Dryer tripping or stopping", "Drum, airflow or flashing-light symptom"],
      refrigeration: ["Fridge, freezer or hybrid cabinet too warm", "Frost, moisture or noise", "Control or mode-selection issue"],
    },
    specificFaq: {
      question: "What should I report for an InAlto combi or hybrid model?",
      answer:
        "State the selected wash, dry, fridge or freezer mode and which function is affected. Include the complete model because the range contains several different configurations.",
    },
  },
];

export function getBrandRepairPage(slug: string): BrandRepairData | undefined {
  return brandRepairPages.find((brand) => brand.slug === slug);
}

export const supportedBrandNames = [
  "De’Longhi",
  "LG",
  ...brandRepairPages.map(({ name }) => name),
] as const;
