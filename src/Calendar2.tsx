const date = new Date();
const year = date.getFullYear();

const firstDay = new Date(year, 1 - 1, 1).getDay();


// 1~12月までの各月の日数を取得、格納
let daysInAMonth: number[] = [];
for (let i = 1; i <= 12; i++) {
  let lastDate = new Date(year, i, 0);
  daysInAMonth.push(lastDate.getDate());
}
//

//各月の1日の曜日を取得、格納　日曜日が0
let firstDayOfMonth: number[] = [];
for (let i = 1; i <= 12; i++) {
  let lastDate = new Date(year, i, 0);
  firstDayOfMonth.push(lastDate.getDay());
}
//

//カレンダーの行数
const totalDays: number = daysInAMonth.reduce(function (
  sum: number,
  element: number
) {
  return sum + element;
},
0);
let rows = Math.ceil(totalDays / 7);
//

//rows行7列のcalendar配列をnullで初期化
let calendar: (string | null)[][] = [];
for (let i = 0; i < rows; i++) {
  calendar[i] = [];
  for (let j = 0; j < 7; j++) {
    calendar[i][j] = null;
  }
}
//

//
let monthCounter = 0;
let rowCounter = 0;
for (let i = 0; i < rows; i++) {
  let dayCounter = 1;
  for (let j = rowCounter; j + firstDay < 7; j++) {
    if (dayCounter != daysInAMonth[monthCounter]) {
      calendar[i][j] = `${dayCounter}`;
      dayCounter++;
    } else {
      break;
    }
  }
  monthCounter++;
}
//
console.log(calendar);

export default calendar;
