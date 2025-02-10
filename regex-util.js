const emailRegex = { emailFinder: { description: "Find hidden email addresses in text", regex: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g } };
const invoiceRegex = { invoiceNumber: { description: "Extract invoice numbers", regex: /\bINV-\d{4}-\d{6}\b/g } };
