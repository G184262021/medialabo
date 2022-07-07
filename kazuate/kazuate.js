// 答え
let kotae = Math.floor(Math.random()*10) + 1;
   console.log("答え"+kotae);// デバッグ用


// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来: ボタンを押したら， hantei() を呼び出すように修正する


let hante = document.querySelector('#print');
hante.addEventListener('click', hantei);

function hantei() {
    
    kaisu=kaisu+1;
    let i = document.querySelector('input[name="text"]');
	let y= i.value;
    let yoso=Number(y);
    let katta=document.querySelector('#aresult');
         katta.textContent=kaisu+"回目の予想:"+yoso

 if(kaisu>=4){
    let katta=document.querySelector('#result');
         katta.textContent=" 答えは"+kotae+"でした．すでにゲームは終わっています"
     }else if(kotae===yoso){
        let katta=document.querySelector('#result');
         katta.textContent="正解です．おめでとう!"
              kaisu=4;
            }else if(kaisu===3){
        let katta=document.querySelector('#result');
         katta.textContent="まちがい．残念でした答えは"+kotae+"でした．"
// ボタンを押した後の処理をする関数 hantei() の定義
       // 第5回課題:テキストボックスの数値をここに代入
    // 課題3-1：ここの判定処理を作成する．
    //        ページに表示する方法はまだ習っていないので
    //        判定結果はコンソールに出力すること

   
    }else if(kotae<yoso){
        let katta=document.querySelector('#result');
         katta.textContent="まちがい．答えはもっと小さいですよ"
    }else if(kotae>yoso){
        let katta=document.querySelector('#result');
         katta.textContent="まちがい．答えはもっと大きいですよ"
    }
  
}

    
    
    

