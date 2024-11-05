const baseUrl = "https://app.mode.com/jasperai/reports/8770a4060686/embed"; // Replace with your Mode embed URL
const timestamp = Math.floor(Date.now() / 1000); // Current UNIX time in seconds
const accessKey = "1d3b8f05ef4865d765500c95"; // Replace with the access key

const signedUrl = `${baseUrl}?timestamp=${timestamp}&access_key=${accessKey}`;
console.log(signedUrl);
