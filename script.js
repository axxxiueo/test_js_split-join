// split join
// 文字列を配列に変換する方法
// 配列を文字列に変換する方法

const text = document.getElementById("test").textContent
console.log(text.split(''))

const fruits = ['りんご','バナナ','いちご']
// let output = ''
// fruits.forEach((text, index) => {
//     output += text
//     if (index !== fruits.length -1) output += '・'
// })
// document.getElementById('output').textContent = output
document.getElementById('output').textContent = fruits.join('・')