const { daysUntilNewYear } = require('./method');

const currentDate = new Date();
const daysLeft = daysUntilNewYear(currentDate);

console.log(`До Нового года осталось ${daysLeft} дней.`);