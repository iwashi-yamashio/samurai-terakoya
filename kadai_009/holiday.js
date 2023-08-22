
const Holidays = ["正月", "成人の日", "建国記念日", "天皇誕生日", "春分の日", "昭和の日", "憲法記念日", "みどりの日", "こどもの日", "海の日", "山の日", "敬老の日", "秋分の日", "スポーツの日", "文化の日", "勤労感謝の日"]

// 正月～勤労感謝の日までを順番に出力する
//祝日は全部で16日　インデックス０〜15。０以上の場合trueを返し、＋１ずつ繰り返す
for (let i = 0; i <= 15; i++) {
  console.log(Holidays[i]);
}

//「length」で配列の要素の長さを取得。０よりも祝日に振られたインデックスが大きい場合trueを返し、＋１ずつ繰り返す
let index = 0
while (index < Holidays.length) {
  console.log(Holidays[index]);
  index++;
}