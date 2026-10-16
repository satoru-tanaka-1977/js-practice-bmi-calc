// 「計算する」ボタンがクリックされたときに動き出す仕組み
document.getElementById("calc-btn").addEventListener("click",function(){
    // ① 入力ブロック：画面から身長と体重の数字を取り出す
    const heightCm = Number(document.getElementById("height").value);
    const weight = Number(document.getElementById("weight").value);

    // ② 処理ブロック：身長を m に直して、BMIの計算をする
    const heightM = heightCm / 100;
    const bmi = weight / (heightM * heightM);

    // ③ 出力ブロック：計算結果を小数点第1位までにして画面に表示する
    document.getElementById("result").textContent = `あなたのBMIは${bmi.toFixed(1)}です`
});