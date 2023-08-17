// 変数numに0～100までのランダムな整数を代入する
let num = Math.floor(Math.random() * 101);

// 変数numの値を出力する（確認用）
console.log(num);

//もし定数numが3と5の倍数ならば、「３と5の倍数です」という文字列を出力する
if ((num % 3 === 0) && (num % 5 === 0)) {
  console.log('3と5の倍数です');
}

//もし定数numが3の倍数ならば、「3の倍数です」という文字列を出力する
else if (num % 3 === 0) {
  console.log('3の倍数です');
}

//もし定数numが5の倍数ならば、「5の倍数です」という文字列を出力する
else if (num % 5 === 0) {
  console.log('5の倍数です');
}

else {
  console.log(num)
}