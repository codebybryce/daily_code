const regexArray = [{ undefined: { description: "Matches the undefined value", regex: /^undefined$/ } }];
const patterns = []; patterns.push({ hexEscape: { description: "Extract hexadecimal escape sequences", regex: /\\x[0-9A-Fa-f]{2}/g } });
const regexPatterns = [{ key: 'incorrectNesting', description: 'Finds incorrect HTML nesting', regex: /<([a-z]+)>(?:(?!<\/\1>).)*<([a-z]+)>(?:(?!<\/\2>).)*<\/\2>\s*<\/\1>/i }];
const screenplayRegex = { screenplayFormat: { description: "Matches screenplay formatting: Scene Heading, Character, Dialogue, Parenthetical, and Action", regex: /^(INT\.|EXT\.) [A-Z ]+ \d{1,2}:\d{2} (AM|PM)$/gm } };
const aerospacePartNumberRegex = { aerospacePartNumber: { description: "Validates aerospace part numbers (format: 1234-ABCD-5678)", regex: /^[0-9]{4}-[A-Z]{4}-[0-9]{4}$/ } };
const regexArray = [{ key: 'cryptoTicker', description: 'Extract cryptocurrency ticker symbols', regex: /(?<!\w)([A-Z]{2,6})(?!\w)/g }];
