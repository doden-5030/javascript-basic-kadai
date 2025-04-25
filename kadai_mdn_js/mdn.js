const date = new Date();

date.setFullYear(2024);
date.setMonth(9);
date.setDate(12);

const year = date.getFullYear();
const month = date.getMonth() +1;
const day =date.getDate();

console.log(`${year}年${month}月${day}日`);