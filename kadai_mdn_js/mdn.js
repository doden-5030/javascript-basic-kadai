const date = new Date(2024,9,12);

const year = date.getFullYear();
const month = date.getMonth() +1;
const day =date.getDate();

console.log(`${year}年${month}月${day}日`);