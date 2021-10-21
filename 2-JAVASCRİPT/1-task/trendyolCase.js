const table = [
  ["Adam", "2020/06/10", "2020/06/19"],
  ["hasan", "2020/07/10", "2020/10/19"],
  ["ali", "2021/7/10", ],
];

const solution = (today = "2021/10/10", limit = 7) => {
  bookEndDate = [];
  overdueBook = [];
  dayToMili = limit * 1000 * 60 * 60 * 24;
  table.map((item) => bookEndDate.push(new Date(item[2])));
  let end = new Date(today);

  bookEndDate.map((bookDate) => {
    if (bookDate < end && end - bookDate > dayToMili) {
      overdueBook.push(bookDate);
    }
  });
  return overdueBook.length;
};

console.log(solution());
