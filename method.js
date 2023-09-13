function daysUntilNewYear(targetDate) {
  const newYearDate = new Date(targetDate.getFullYear() + 1, 0, 1);
  const timeDiff = newYearDate - targetDate;
  const daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  return daysLeft;
}

module.exports = { daysUntilNewYear };