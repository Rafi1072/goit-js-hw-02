function checkForSpam(message) {
  const lowerCaseMsg = message.toLowerCase();
  return lowerCaseMsg.includes(spam || sale);
}
