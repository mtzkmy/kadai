const date = new Date("2024-07-26");
const [month, day, year] = [
  date.getMonth(),
  date.getDate(),
  date.getFullYear(),
];

console.log(date.getFullYear() + '年' + date.getMonth() + '月' + date.getDate() + '日');
