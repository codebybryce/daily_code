const regexArray = [{ undefined: { description: "Matches the undefined value", regex: /^undefined$/ } }];
const patterns = []; patterns.push({ hexEscape: { description: "Extract hexadecimal escape sequences", regex: /\\x[0-9A-Fa-f]{2}/g } });
const regexPatterns = [{ key: 'incorrectNesting', description: 'Finds incorrect HTML nesting', regex: /<([a-z]+)>(?:(?!<\/\1>).)*<([a-z]+)>(?:(?!<\/\2>).)*<\/\2>\s*<\/\1>/i }];
const screenplayRegex = { screenplayFormat: { description: "Matches screenplay formatting: Scene Heading, Character, Dialogue, Parenthetical, and Action", regex: /^(INT\.|EXT\.) [A-Z ]+ \d{1,2}:\d{2} (AM|PM)$/gm } };
const aerospacePartNumberRegex = { aerospacePartNumber: { description: "Validates aerospace part numbers (format: 1234-ABCD-5678)", regex: /^[0-9]{4}-[A-Z]{4}-[0-9]{4}$/ } };
const regexArray = [{ key: 'cryptoTicker', description: 'Extract cryptocurrency ticker symbols', regex: /(?<!\w)([A-Z]{2,6})(?!\w)/g }];
const transactions = []; transactions.push({ transactionID: { description: "Financial transaction ID", regex: /[A-Z]{3}-\d{4}-[A-Z]{2}/ } });
const flightNumberRegex = { flightNumber: { description: "Matches airline flight numbers (e.g., AA1234, DL5678)", regex: /^[A-Z]{2}\d{1,4}$/ } };
const electionDistrictCodeValidator = { electionDistrictCode: { description: "Validates election district codes (2 letters followed by 3 digits)", regex: /^[A-Z]{2}\d{3}$/ } };
const citationKeyRegex = { bibtexKey: { description: "Extract BibTeX citation keys", regex: /@\w+\{([^,]+),/ } };
const references = [{ key: "references", description: "Find references in scientific papers", regex: /(?:\[(\d+)\]|\((\d+)\))/g }];
const commentsRegex = { comments: { description: "Matches user-submitted comments", regex: /^.+$/ } };
const validations = []; validations.push({ decimalPrecision: { description: "Validates a number with up to 2 decimal places", regex: /^\d+(\.\d{1,2})?$/ } });
const cityExtractor = { city: { description: "Extract city names from addresses", regex: /,\s*([^,]+)\s*\d{5}/ } };
const unusedCSSRulesRegex = { unusedCSS: { description: "Find unused CSS rules", regex: /\.([a-zA-Z_][\w-]*)\s*\{/g } };
const regexPatterns = []; regexPatterns.push({ directoryPath: { description: "Matches directory paths in system logs", regex: /(?:\/[^\/\0]+)+\/?/ } });
const regexValidations = []; regexValidations.push({ titleValidation: { description: "Validates forum post titles: 5-100 characters, no special characters except hyphens and underscores", regex: /^[A-Za-z0-9][A-Za-z0-9-_ ]{4,95}[A-Za-z0-9]$/ } });
const authorRegex = { authorExtract: { description: "Extract author names from papers", regex: /(?<=Author[s]?:?\s)(.*?)(?=\s*[\n\r]|$)/g } };
const regexPatterns = [{ misplacedCommas: { description: "Find misplaced commas in lists", regex: /,(?=\s*,)/ } }];
const regexArray = [{ key: 'leadingZeros', description: 'Match leading zeros in numbers', regex: /^0+/ }];
const validations = [{ key: "whitespaceFormat", description: "Validates that there are no leading or trailing whitespaces and ensures single spaces between words", regex: /^\S(.*\S)?$/ }];
const jsonPropertyNamesRegex = /"(\w+)":/g; const output = [{ key: { description: "Extract JSON property names", regex: jsonPropertyNamesRegex } }];
const errors = [{ key: 'erroneousSpaces', description: 'Find erroneous spaces in code', regex: /[^\S\r\n]+/ }];
const units = [{ key: 'physicsUnits', description: 'Matches common physics measurement units', regex: /^(m|kg|s|A|K|mol|cd|N|J|W|Pa|C|V|F|Ω|S|H|T|Bq|Gy|Sv|lm|lx|cd|rad|sr|Hz|N·m|J·s|W·s|Pa·s|C·m|V·A|C·s|J·m|N·s|kg·m|m·s|kg·m²|m³|m²|Hz·s|K·m|kg·s|mol·m|cd·m|A·s)$/ }];
const apiKeyValidation = { apiKey: { description: "Validates API key format (32 alphanumeric characters)", regex: /^[a-zA-Z0-9]{32}$/ } };
const regexPatterns = [{ key: 'xpath', description: 'Extract XPath expressions', regex: /\/[a-zA-Z0-9_.-]+(\/[a-zA-Z0-9_.-]+)*/g }];
const javaPackageRegex = { javaPackage: { description: "Matches Java package names", regex: /(?:package\s+)([a-zA-Z_][a-zA-Z0-9_]*(?:\.[a-zA-Z_][a-zA-Z0-9_]*)*)/g } };
const regexArray = [{ doctype: { description: "Matches HTML doctype declarations", regex: /<!DOCTYPE\s+([a-zA-Z]+)(\s+.+)?>/ } }];
const colorValidation = { rgb: { description: "Valid RGB color code (e.g. rgb(255, 255, 255))", regex: /^\s*rgb\s*\(\s*(\d{1,3}\s*,\s*){2}\d{1,3}\s*\)\s*$/ } };
const regexPatterns = [{ title: { description: "Extract titles from bibliographies", regex: /(?<=\.\s)(.*?)(?=\.\s|\n)/g } }];
const regexArray = []; regexArray.push({ sentenceEndPunctuation: { description: "Matches sentence-ending punctuation", regex: /[.!?]/ } });
const patterns = []; patterns.push({ timestamp: { description: "Matches timestamps in logs", regex: /\b\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\b/ } });
const regexValidations = []; 
regexValidations.push({ physicsFormula: { description: "Validates physics formula notation with optional whitespace, variables (letters), operators (+-*/), and numbers", regex: /^[A-Za-z0-9\s\+\-\*\/\(\)]+$/ } });
const regexPatterns = [{ year: { description: "Extract publication years", regex: /\b(19|20)\d{2}\b/g } }];
const misformattedCSVRows = [{ key: 'misformattedRow', description: 'Rows with inconsistent number of commas', regex: /^(?:[^,]*,)*[^,]*$/ }];
const regexPatterns = []; 
regexPatterns.push({ complexSearchQuery: { description: "Matches complex search queries with optional operators", regex: /(?=.*\bquery\b)(?=.*\b(?:AND|OR|NOT)\b).*$/ } });
const imeiValidation = { imei: { description: "Validate IMEI numbers", regex: /^(?:[0-9]{15}|[0-9]{14}[Xx])$/ } };
const dnsRecords = logs.match(/(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}/g).map((record, index) => ({ [`dnsRecord${index + 1}`]: { description: "DNS record extracted", regex: new RegExp(record) } }));
const regexArray = [{ trailingSlashes: { description: "Matches trailing slashes in URLs", regex: /\/+$/ } }];
const regexArray = []; regexArray.push({ referrerURL: { description: "Matches referrer URLs", regex: /^(https?:\/\/)?(www\.)?([a-z0-9-]+\.)+[a-z]{2,}\/?.*$/i } });
const validations = []; validations.push({ port: { description: "Validates network port numbers (0-65535)", regex: /^(6553[0-5]|655[0-2][0-9]|65[0-4][0-9]{2}|6[0-4][0-9]{3}|[1-5][0-9]{0,4}|[1-9][0-9]{0,4}|[0-9])$/ } });
const countryRegex = { countryNames: { description: "Extracts country names", regex: /\b[A-Z][a-z]+(?:\s[A-Z][a-z]+)*\b/g } };
const trackingCodeRegex = { gaTrackingCode: { description: "Google Analytics tracking code", regex: /G-[A-Z0-9]+/ } };
const discountCodes = [{ retailDiscount: { description: "Matches retail discount codes", regex: /^(?=.*[A-Z])(?=.*\d)[A-Z\d]{5,10}$/ } }];
const trackingParamsValidation = { marketingTracking: { description: "Validates marketing tracking parameters", regex: /^(utm_source|utm_medium|utm_campaign|utm_term|utm_content)=[^&]+$/ } };
