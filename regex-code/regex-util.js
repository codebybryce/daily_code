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
