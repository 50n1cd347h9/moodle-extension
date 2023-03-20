const week: Array<String> = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const date = new Date();
const year = date.getFullYear();

let daysInAMonth: Array<Number> = [];
// 1~12月までの各月の日数を取得、格納
for (let i = 1; i <= 12; i++) {
  let lastDate = new Date(year, i, 0);
  daysInAMonth.push(lastDate.getDate());
}

let firstDayOfWeek: Array<Number> = [];
//各月の1日の曜日を取得、格納　日曜日が0
for (let i = 1; i <= 12; i++) {
  let lastDate = new Date(year, i, 0);
  firstDayOfWeek.push(lastDate.getDay());
}

// ( 曜日(1~6) + その月の日数 ) / 7 = その行の要素数となる
const months: Array<String> = [
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
//　1月1日の曜日を特定。0が日曜日
const firstDay = new Date(year, 1 - 1, 1).getDay();
// 12月31日の曜日を特定
const lastDay = new Date(year, 12 - 1, 1).getDay();
//カレンダーの1行目の1番左のブロックの月日
