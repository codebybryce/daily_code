const regexArray = [{ undefined: { description: "Matches the undefined value", regex: /^undefined$/ } }];
const patterns = []; patterns.push({ hexEscape: { description: "Extract hexadecimal escape sequences", regex: /\\x[0-9A-Fa-f]{2}/g } });
const regexPatterns = [{ key: 'incorrectNesting', description: 'Finds incorrect HTML nesting', regex: /<([a-z]+)>(?:(?!<\/\1>).)*<([a-z]+)>(?:(?!<\/\2>).)*<\/\2>\s*<\/\1>/i }];
