//
const manths: string[] = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const date = new Date();
const year = date.getFullYear();
const firstDay = new Date(year, 1 - 1, 1).getDay();
//

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
let weeks = Math.ceil(totalDays / 7);
//

//要素数およそ365の配列
let calendar: (string | null)[] = [];
for (let i = 0; i < weeks * 7; i++) {
  calendar[i] = null;
}
//

//calendarに日付をいれる
let counter = 0;
for (let i = 0; i < 12; i++) {
  for (let day = 1; day <= daysInAMonth[i]; day++) {
    calendar[counter + firstDay] = `${manths[i]}/${day}`;
    counter++;
  }
  if (counter == totalDays) {
    break;
  }
}
//

//weeks行7列のslicedCalendar配列をnullで初期化
let calendarSliced: (string | null)[][] = [];
for (let i = 0; i < weeks; i++) {
  calendarSliced[i] = [];
  for (let j = 0; j < 7; j++) {
    calendarSliced[i][j] = null;
  }
}
//

//calendar配列を7つ事にスライス
counter = 0;
for (let i = 0; i < weeks; i++) {
  for (let j = 0; j < 7; j++) {
    calendarSliced[i][j] = calendar[counter];
    counter++;
  }
}
//

//7行weeks列のcalendarFormatted配列をnullで初期化
let calendarFormatted: (string | null)[][] = [];
for (let i = 0; i < 7; i++) {
  calendarFormatted[i] = [];
  for (let j = 0; j < weeks; j++) {
    calendarFormatted[i][j] = null;
  }
}
//

//calendarSlicedをcalendarFormattedに入れ替え
for (let i = 0; i < 7; i++) {
  calendarFormatted[i] = [];
  for (let j = 0; j < weeks; j++) {
    calendarFormatted[i][j] = calendarSliced[j][i];
  }
}
//

//
console.log(calendarSliced);
console.log(calendarFormatted);
//

export default calendarFormatted;
