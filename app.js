// ── Template definitions ─────────────────────────────────────────────────────

const TEMPLATES = {
  rare: {
    title: "Note & Deed of Trust — RARE Template",
    subtitle: "Real American Real Estate LLC",
    file: "templates/Note_and_DOT_RARE__Template.docx",
    sections: [
      {
        label: "Parties & Dates",
        fields: [
          { key: "Name", label: "County", hint: "Texas county where the property is located", placeholder: "e.g. Harris" },
          { key: "EFFECTIVE_DATE", label: "Effective Date", hint: "Date the Note takes effect", placeholder: "e.g. May 6, 2026" },
          { key: "EXECUTED_DATE", label: "Execution Date", hint: "Date the document is signed", placeholder: "e.g. May 6, 2026" },
        ],
      },
      {
        label: "Loan Terms",
        fields: [
          { key: "WRITTEN_AMOUNT", label: "Principal Amount", hint: "Numeric and written out", placeholder: "e.g. $150,000.00 (One Hundred Fifty Thousand Dollars)", wide: true },
          { key: "MATURITY_DATE", label: "Maturity Date", hint: "Date full payment is due", placeholder: "e.g. June 20, 2026" },
          { key: "PERCENT", label: "Flat Fee Interest %", hint: "Applied to the principal", placeholder: "e.g. 5%" },
        ],
      },
      {
        label: "Property",
        fields: [
          { key: "LEGAL_DESCRIPTION", label: "Legal Description", hint: "As it appears in county records", placeholder: "e.g. Lot 12, Block 3, Sunset Hills Subdivision, Harris County, Texas", textarea: true },
          { key: "ADDRESS", label: "Street Address", hint: "", placeholder: "e.g. 123 Main St, Houston, TX 77001" },
        ],
      },
    ],
  },
  protected: {
    title: "Note & Deed of Trust — Protected Series",
    subtitle: "Protected Series Entity Template",
    file: "templates/Note_and_DOT_Protected_Series__Template.docx",
    sections: [
      {
        label: "Parties & Dates",
        fields: [
          { key: "Name", label: "County", hint: "Texas county where the property is located", placeholder: "e.g. Harris" },
          { key: "EFFECTIVE_DATE", label: "Effective Date", hint: "Date the Note takes effect", placeholder: "e.g. May 6, 2026" },
          { key: "PROTECTEDSERIES_NAME", label: "Protected Series Name", hint: "Full name of the protected series entity", placeholder: "e.g. Rockwell Goldmann Properties LLC - Series A" },
          { key: "EXECUTED_DATE", label: "Execution Date", hint: "Date the document is signed", placeholder: "e.g. May 6, 2026" },
        ],
      },
      {
        label: "Loan Terms",
        fields: [
          { key: "WRITTEN_PRINCIPALAMOUNT", label: "Principal Amount", hint: "Numeric and written out", placeholder: "e.g. $150,000.00 (One Hundred Fifty Thousand Dollars)", wide: true },
          { key: "MATURITY_DATE", label: "Maturity Date", hint: "Date full payment is due", placeholder: "e.g. June 20, 2026" },
          { key: "PERCENT", label: "Flat Fee Interest %", hint: "Applied to the principal", placeholder: "e.g. 5%" },
        ],
      },
      {
        label: "Property",
        fields: [
          { key: "LEGAL_DESCRIPTION", label: "Legal Description", hint: "As it appears in county records", placeholder: "e.g. Lot 12, Block 3, Sunset Hills Subdivision, Harris County, Texas", textarea: true },
          { key: "ADDRESS", label: "Street Address", hint: "", placeholder: "e.g. 123 Main St, Houston, TX 77001" },
          { key: "NAME", label: "Signatory Name", hint: "Name as it appears in the signature block", placeholder: "e.g. Maria Molina" },
        ],
      },
    ],
  },
  protectedSecond: {
    title: "Second Deed of Trust — Protected Series",
    subtitle: "Protected Series second lien template",
    file: "templates/Second_DOT_Protected_Series_Template.docx",
    sections: [
      {
        label: "Parties",
        fields: [
          { key: "COUNTY_NAME", label: "County Name", hint: "Texas county where the property is located", placeholder: "e.g. Harris" },
          { key: "BORROWER_NAME", label: "Borrower Name", hint: "Protected series borrower name", placeholder: "e.g. Goldstone Acquisition Group" },
          { key: "SERIES_NAME", label: "Series Name", hint: "Series entity name used in the acknowledgment", placeholder: "e.g. Goldstone Acquisition Group" },
          { key: "SIGNATORY", label: "Signatory", hint: "Name used in the signature block", placeholder: "e.g. Maria Molina" },
          { key: "EXECUTION_MONTH", label: "Execution Month", hint: "Month name used in the execution clause", placeholder: "e.g. May" },
        ],
      },
      {
        label: "Loan Amount",
        fields: [
          { key: "WRITTEN_AMOUNT", label: "Written Amount", hint: "Dollar amount written out in words", placeholder: "e.g. One Hundred Fifty Thousand", wide: true },
          { key: "CENTS_AMOUNT", label: "Cents Amount", hint: "Cents only, for the /100 portion", placeholder: "e.g. 00" },
          { key: "AMOUNT", label: "Numeric Amount", hint: "Whole dollar amount used inside parentheses", placeholder: "e.g. 150000" },
        ],
      },
      {
        label: "Property",
        fields: [
          { key: "LEGAL_DESCRIPTION", label: "Legal Description", hint: "As it appears in county records", placeholder: "e.g. Lot 12, Block 3, Sunset Hills Subdivision, Harris County, Texas", textarea: true },
          { key: "ADDRESS", label: "Property Address", hint: "Street address of the property", placeholder: "e.g. 123 Main St, Houston, TX 77001" },
        ],
      },
    ],
  },
  loan: {
    title: "Capital Loan Agreement — Investors",
    subtitle: "Short-term investor funding agreement",
    file: "templates/TEMPLATE_CAPITAL_LOAN_AGREEMENT_Investors.docx",
    sections: [
      {
        label: "Investor Details",
        fields: [
          { key: "Investor's Name", label: "Investor's Name", hint: "Full legal name of the investor", placeholder: "e.g. John Smith" },
          { key: "Investor's Address", label: "Investor's Address", hint: "Full mailing address of the investor", placeholder: "e.g. 456 Oak Ave, Dallas, TX 75201" },
          { key: "DATE", label: "Agreement Date", hint: "Date the agreement is executed", placeholder: "e.g. May 6, 2026" },
        ],
      },
      {
        label: "Loan Terms",
        fields: [
          { key: "WRITTEN_AMOUNT", label: "Principal Amount (written)", hint: "Written out in words", placeholder: "e.g. One Hundred Fifty Thousand", wide: true },
          { key: "AMOUNT", label: "Principal Amount (numeric)", hint: "Numbers only", placeholder: "e.g. 150,000.00" },
          { key: "INTEREST_WRITTEN_AMOUNT", label: "Interest Amount (written)", hint: "Written out in words", placeholder: "e.g. Seven Thousand Five Hundred", wide: true },
          { key: "INTEREST_AMOUNT", label: "Interest Amount (numeric)", hint: "Numbers only", placeholder: "e.g. 7,500.00" },
          { key: "TOTAL_WRITTEN_AMOUNT", label: "Total Repayment (written)", hint: "Principal + interest in words", placeholder: "e.g. One Hundred Fifty-Seven Thousand Five Hundred", wide: true },
          { key: "TOTAL_AMOUNT", label: "Total Repayment (numeric)", hint: "Numbers only", placeholder: "e.g. 157,500.00" },
          { key: "MATURITY_DATE", label: "Maturity Date", hint: "Days or date of repayment", placeholder: "e.g. 45" },
        ],
      },
    ],
  },
  payoff1: {
    title: "Payoff Letter — 1 Lien",
    subtitle: "Single Deed of Trust payoff statement",
    file: "templates/Payoff_Letter__Template_1_Lien.docx",
    sections: [
      {
        label: "Borrower & Property",
        fields: [
          { key: "DATE", label: "Letter Date", hint: "Date of this payoff letter", placeholder: "e.g. May 6, 2026" },
          { key: "PROTECTEDSERIES_NAME", label: "Protected Series / Borrower Name", hint: "Entity or person name", placeholder: "e.g. Rockwell Goldmann Properties LLC - Series A" },
          { key: "ADDRESS", label: "Property Address", hint: "Address of the subject property", placeholder: "e.g. 123 Main St, Houston, TX 77001" },
          { key: "EXECUTION_DATE", label: "Note Execution Date", hint: "Date the original note was signed", placeholder: "e.g. March 15, 2026" },
          { key: "EFFECTIVE_DATE", label: "Effective Date", hint: "Effective date of the payoff", placeholder: "e.g. May 6, 2026" },
          { key: "GOODTHROUGH_DATE", label: "Good Through Date", hint: "Date through which payoff is valid", placeholder: "e.g. May 20, 2026" },
          { key: "PROJECTEDPAYOFF_DATE", label: "Projected Payoff Date", hint: "Expected date of full payoff", placeholder: "e.g. May 20, 2026" },
        ],
      },
      {
        label: "Payoff Amounts — First Deed of Trust",
        fields: [
          { key: "PRINCIPAL_AMOUNT", label: "Principal Amount", hint: "Outstanding principal balance", placeholder: "e.g. 150,000.00" },
          { key: "INTEREST_AMOUNT", label: "Interest Amount", hint: "Accrued interest", placeholder: "e.g. 7,500.00" },
          { key: "TOTAL_AMOUNT", label: "Total Payoff", hint: "Principal + interest", placeholder: "e.g. 157,500.00" },
        ],
      },
    ],
  },
  payoff2: {
    title: "Payoff Letter — 2 Liens",
    subtitle: "First and Second Deed of Trust payoff statement",
    file: "templates/Payoff_Letter_Template_2_Lien.docx",
    sections: [
      {
        label: "Borrower & Property",
        fields: [
          { key: "DATE", label: "Letter Date", hint: "Date of this payoff letter", placeholder: "e.g. May 6, 2026" },
          { key: "PROTECTEDSERIES_NAME", label: "Protected Series / Borrower Name", hint: "Entity or person name", placeholder: "e.g. Rockwell Goldmann Properties LLC - Series A" },
          { key: "ADDRESS", label: "Property Address", hint: "Address of the subject property", placeholder: "e.g. 123 Main St, Houston, TX 77001" },
          { key: "EXECUTE_DATE", label: "Note Execution Date", hint: "Date the original note was signed", placeholder: "e.g. March 15, 2026" },
          { key: "EFFECTIVE_DATE", label: "Effective Date", hint: "Effective date of the payoff", placeholder: "e.g. May 6, 2026" },
          { key: "GOODTHROUGH_DATE", label: "Good Through Date", hint: "Date through which payoff is valid", placeholder: "e.g. May 20, 2026" },
          { key: "PROJECTEDPAYOFF_DATE", label: "Projected Payoff Date", hint: "Expected date of full payoff", placeholder: "e.g. May 20, 2026" },
        ],
      },
      {
        label: "First Deed of Trust",
        fields: [
          { key: "PRINCIPAL_AMOUNT", label: "Principal Amount", hint: "Outstanding principal balance (1st lien)", placeholder: "e.g. 150,000.00" },
          { key: "INTEREST_AMOUNT", label: "Interest Amount", hint: "Accrued interest (1st lien)", placeholder: "e.g. 7,500.00" },
          { key: "TOTAL_AMOUNT", label: "Total (1st Lien)", hint: "Principal + interest (1st lien)", placeholder: "e.g. 157,500.00" },
        ],
      },
      {
        label: "Second Deed of Trust",
        fields: [
          { key: "PRINCIPAL_AMOUNT2", label: "Principal Amount", hint: "Outstanding principal balance (2nd lien)", placeholder: "e.g. 50,000.00" },
          { key: "INTEREST_AMOUNT2", label: "Interest Amount", hint: "Accrued interest (2nd lien)", placeholder: "e.g. 2,500.00" },
          { key: "TOTAL_AMOUNT2", label: "Total (2nd Lien)", hint: "Principal + interest (2nd lien)", placeholder: "e.g. 52,500.00" },
          { key: "TOTAL_PAYOFF", label: "TOTAL PAYOFF", hint: "Combined payoff of both liens", placeholder: "e.g. 210,000.00" },
        ],
      },
    ],
  },
};

let currentTemplate = null;
let currentDocxBlob = null;
let currentFilename = "";

function showHome() {
  document.getElementById("view-home").classList.add("active");
  document.getElementById("view-form").classList.remove("active");
  document.getElementById("backBtn").style.display = "none";
  clearStatus();
}

function showForm(templateKey) {
  currentTemplate = TEMPLATES[templateKey];
  document.getElementById("view-home").classList.remove("active");
  document.getElementById("view-form").classList.add("active");
  document.getElementById("backBtn").style.display = "block";
  document.getElementById("form-title").textContent = currentTemplate.title;
  document.getElementById("form-subtitle").textContent = currentTemplate.subtitle;
  renderFields(currentTemplate);
  clearStatus();
  window.scrollTo(0, 0);
}

function renderFields(tpl) {
  const container = document.getElementById("form-fields-container");
  container.innerHTML = "";

  tpl.sections.forEach((section) => {
    const sectionEl = document.createElement("div");
    const sLabel = document.createElement("p");
    sLabel.className = "section-label";
    sLabel.textContent = section.label;
    sectionEl.appendChild(sLabel);

    section.fields.forEach((field) => {
      const fg = document.createElement("div");
      fg.className = "field-group";

      const lbl = document.createElement("label");
      lbl.setAttribute("for", "field_" + field.key);
      lbl.innerHTML = field.label + (field.hint ? `<span class="hint">${field.hint}</span>` : "");
      fg.appendChild(lbl);

      if (field.textarea) {
        const ta = document.createElement("textarea");
        ta.id = "field_" + field.key;
        ta.name = field.key;
        ta.placeholder = field.placeholder || "";
        ta.required = true;
        fg.appendChild(ta);
      } else {
        const inp = document.createElement("input");
        inp.type = "text";
        inp.id = "field_" + field.key;
        inp.name = field.key;
        inp.placeholder = field.placeholder || "";
        inp.required = true;
        fg.appendChild(inp);
      }

      sectionEl.appendChild(fg);
    });

    container.appendChild(sectionEl);
    const hr = document.createElement("hr");
    hr.className = "divider";
    container.appendChild(hr);
  });
}

function collectValues() {
  const values = {};
  let valid = true;
  currentTemplate.sections.forEach((section) => {
    section.fields.forEach((field) => {
      const el = document.getElementById("field_" + field.key);
      el.classList.remove("error");
      const val = el.value.trim();
      if (!val) {
        el.classList.add("error");
        valid = false;
      }
      values[field.key] = val;
    });
  });
  return valid ? values : null;
}

function clearForm() {
  document.querySelectorAll("#form-fields-container input, #form-fields-container textarea").forEach((el) => {
    el.value = "";
    el.classList.remove("error");
  });
  clearStatus();
}

function showStatus(type, html) {
  const el = document.getElementById("status");
  el.className = type;
  el.innerHTML = (type === "loading" ? '<span class="spinner"></span>' : "") + html;
}

function clearStatus() {
  const el = document.getElementById("status");
  el.className = "";
  el.innerHTML = "";
}

// ── Fill DOCX template with form values ─────────────────────────────────────
async function generateDocx(values) {
  try {
    const resp = await fetch(currentTemplate.file);
    if (!resp.ok) throw new Error(`Could not load template: ${currentTemplate.file}`);
    const arrayBuffer = await resp.arrayBuffer();

    const zip = await JSZip.loadAsync(arrayBuffer);
    let docXml = await zip.file("word/document.xml").async("string");
    const mergedValues = buildTemplateValues(values);
    docXml = fillTemplatePlaceholders(docXml, mergedValues);

    zip.file("word/document.xml", docXml);

    const blob = await zip.generateAsync({
      type: "blob",
      mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    });

    if (!blob || blob.size === 0) throw new Error("Generated DOCX is empty");
    return blob;
  } catch (error) {
    console.error("DOCX generation error:", error);
    throw error;
  }
}

function buildTemplateValues(values) {
  const mergedValues = { ...values };

  if (currentTemplate === TEMPLATES.protected) {
    mergedValues.PERCENT_AMOUNT = calculatePercentAmount(values.PERCENT, values.WRITTEN_PRINCIPALAMOUNT);
  }

  if (currentTemplate === TEMPLATES.rare) {
    mergedValues.PERCENT_AMOUNT = calculatePercentAmount(values.PERCENT, values.WRITTEN_AMOUNT);
  }

  return mergedValues;
}

function calculatePercentAmount(percentValue, principalValue) {
  const percent = parsePercentValue(percentValue);
  const principal = parseCurrencyAmount(principalValue);

  if (percent === null || principal === null) {
    throw new Error(
      "Could not calculate PERCENT_AMOUNT. Enter the principal amount starting with a numeric value, like $150,000.00 (One Hundred Fifty Thousand Dollars), and a percent like 5%."
    );
  }

  const computedAmount = roundCurrency((principal * percent) / 100);
  return formatCurrencyWithWords(computedAmount);
}

function parsePercentValue(value) {
  const normalized = String(value || "")
    .replace(/%/g, "")
    .replace(/\s+/g, "")
    .trim();

  if (!normalized) return null;

  const parsed = Number(normalized.replace(/,/g, ""));
  return Number.isFinite(parsed) ? parsed : null;
}

function parseCurrencyAmount(value) {
  const match = String(value || "").match(/-?\$?\s*([0-9][0-9,]*(?:\.[0-9]+)?)/);
  if (!match) return null;

  const parsed = Number(match[1].replace(/,/g, ""));
  return Number.isFinite(parsed) ? parsed : null;
}

function roundCurrency(amount) {
  return Math.round((amount + Number.EPSILON) * 100) / 100;
}

function formatCurrencyWithWords(amount) {
  const formattedCurrency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);

  const wholeDollars = Math.floor(amount);
  const cents = Math.round((amount - wholeDollars) * 100);
  const dollarWords = numberToWords(wholeDollars);
  const dollarLabel = wholeDollars === 1 ? "Dollar" : "Dollars";
  const centsSuffix = cents > 0 ? ` and ${String(cents).padStart(2, "0")}/100` : "";

  return `${formattedCurrency} (${dollarWords} ${dollarLabel}${centsSuffix})`;
}

function numberToWords(value) {
  if (value === 0) return "Zero";

  const ones = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
  const scales = [
    { value: 1000000000, label: "Billion" },
    { value: 1000000, label: "Million" },
    { value: 1000, label: "Thousand" },
    { value: 100, label: "Hundred" },
  ];

  function underOneHundred(num) {
    if (num < 20) return ones[num];
    const tenValue = Math.floor(num / 10);
    const remainder = num % 10;
    return remainder ? `${tens[tenValue]}-${ones[remainder]}` : tens[tenValue];
  }

  function toWords(num) {
    if (num < 100) return underOneHundred(num);

    for (const scale of scales) {
      if (num >= scale.value) {
        const lead = Math.floor(num / scale.value);
        const remainder = num % scale.value;
        const leadWords = scale.value === 100 ? ones[lead] : toWords(lead);
        const remainderWords = remainder ? ` ${toWords(remainder)}` : "";
        return `${leadWords} ${scale.label}${remainderWords}`;
      }
    }

    return "";
  }

  return toWords(value);
}

function fillTemplatePlaceholders(xml, values) {
  const WORD_NS = "http://schemas.openxmlformats.org/wordprocessingml/2006/main";
  const XML_NS = "http://www.w3.org/XML/1998/namespace";
  const xmlDecl = xml.match(/^<\?xml[^?]+\?>/);
  const parser = new DOMParser();
  const doc = parser.parseFromString(xml, "application/xml");
  const normalizedValues = buildNormalizedValueMap(values);

  if (doc.getElementsByTagName("parsererror").length > 0) {
    throw new Error("Could not parse DOCX template XML");
  }

  Array.from(doc.getElementsByTagNameNS(WORD_NS, "proofErr")).forEach((node) => node.remove());

  const paragraphs = Array.from(doc.getElementsByTagNameNS(WORD_NS, "p"));
  paragraphs.forEach((paragraph) => fillParagraphPlaceholders(paragraph, normalizedValues, WORD_NS, XML_NS));

  const serialized = new XMLSerializer().serializeToString(doc);
  return (xmlDecl ? xmlDecl[0] : "") + serialized.replace(/^<\?xml[^?]+\?>/, "");
}

function fillParagraphPlaceholders(paragraph, values, wordNs, xmlNs) {
  const textNodes = Array.from(paragraph.getElementsByTagNameNS(wordNs, "t")).filter((node) => {
    const ownerParagraph = closestWordParagraph(node, wordNs);
    return ownerParagraph === paragraph;
  });

  if (textNodes.length === 0) return;

  const parts = [];
  const ranges = [];
  let cursor = 0;

  textNodes.forEach((node, index) => {
    const text = node.textContent || "";
    parts.push(text);
    ranges.push({
      index,
      start: cursor,
      end: cursor + text.length,
    });
    cursor += text.length;
  });

  const fullText = parts.join("");
  if (!fullText.includes("{{") || !fullText.includes("}}")) return;

  const matches = [];
  const placeholderRe = /\{\{\s*([^{}]+?)\s*\}\}/g;
  let match;

  while ((match = placeholderRe.exec(fullText)) !== null) {
    const placeholder = parsePlaceholderExpression(match[1]);
    if (Object.prototype.hasOwnProperty.call(values, placeholder.key)) {
      matches.push({
        start: match.index,
        end: match.index + match[0].length,
        value: applyPlaceholderTransform(values[placeholder.key], placeholder.transform),
      });
    }
  }

  for (let i = matches.length - 1; i >= 0; i--) {
    const replacement = matches[i];
    replaceTextRange(textNodes, ranges, replacement.start, replacement.end, replacement.value, xmlNs);
  }
}

function replaceTextRange(textNodes, ranges, start, end, replacement, xmlNs) {
  const startRange = ranges.find((range) => start >= range.start && start < range.end);
  const endRange = ranges.find((range) => end > range.start && end <= range.end);

  if (!startRange || !endRange) return;

  const startNode = textNodes[startRange.index];
  const endNode = textNodes[endRange.index];
  const startOffset = start - startRange.start;
  const endOffset = end - endRange.start;

  if (startRange.index === endRange.index) {
    const original = startNode.textContent || "";
    const nextText = original.slice(0, startOffset) + replacement + original.slice(endOffset);
    setWordText(startNode, nextText, xmlNs);
    return;
  }

  const startText = startNode.textContent || "";
  const endText = endNode.textContent || "";
  const prefix = startText.slice(0, startOffset);
  const suffix = endText.slice(endOffset);

  setWordText(startNode, prefix + replacement, xmlNs);

  for (let i = startRange.index + 1; i < endRange.index; i++) {
    setWordText(textNodes[i], "", xmlNs);
  }

  setWordText(endNode, suffix, xmlNs);
}

function setWordText(node, text, xmlNs) {
  node.textContent = text;

  if (/^\s|\s$| {2,}/.test(text)) {
    node.setAttributeNS(xmlNs, "xml:space", "preserve");
  } else {
    node.removeAttributeNS(xmlNs, "space");
    node.removeAttribute("xml:space");
  }
}

function buildNormalizedValueMap(values) {
  const normalized = {};
  Object.entries(values).forEach(([key, value]) => {
    normalized[normalizePlaceholderKey(key)] = value;
  });
  return normalized;
}

function parsePlaceholderExpression(rawExpression) {
  const expression = normalizePlaceholderKey(rawExpression);
  const parts = expression.split("|");

  return {
    key: normalizePlaceholderKey(parts[0] || ""),
    transform: normalizePlaceholderKey(parts[1] || "").toLowerCase(),
  };
}

function applyPlaceholderTransform(value, transform) {
  const stringValue = String(value);

  if (transform === "upper") return stringValue.toUpperCase();
  if (transform === "lower") return stringValue.toLowerCase();

  return stringValue;
}

function normalizePlaceholderKey(key) {
  return String(key)
    .replace(/[\u2018\u2019\u201A\u201B]/g, "'")
    .replace(/[\u201C\u201D\u201E\u201F]/g, '"')
    .replace(/\u00A0/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function closestWordParagraph(node, wordNs) {
  let current = node.parentNode;
  while (current) {
    if (current.namespaceURI === wordNs && current.localName === "p") return current;
    current = current.parentNode;
  }
  return null;
}

function buildFilename(values, ext) {
  const county = (values["Name"] || values["COUNTY_NAME"] || values["PROTECTEDSERIES_NAME"] || values["BORROWER_NAME"] || values["DATE"] || "doc")
    .replace(/[^A-Za-z0-9]/g, "_")
    .slice(0, 30);
  const ts = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  return `${currentTemplate.title.replace(/[^A-Za-z0-9]/g, "_").slice(0, 40)}_${county}_${ts}.${ext}`;
}


// ── Form submit ───────────────────────────────────────────────────────────────
document.getElementById("docForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const values = collectValues();
  if (!values) {
    showStatus("error", "Please fill in all required fields.");
    return;
  }

  showStatus("loading", "Generating your document…");

  try {
    const docxBlob = await generateDocx(values);
    const filename = buildFilename(values, "docx");
    saveAs(docxBlob, filename);
    showStatus("success", `✓ <strong>${filename}</strong> downloaded successfully.`);
  } catch (err) {
    console.error("Export error:", err);
    showStatus("error", `Error: ${err.message}`);
  }
});
