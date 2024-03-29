let dat = {
  "list": {
    "g1": [
      {
        "id": "2022030428673",
        "event_id": "28673",
        "start_time": "2022-03-04T04:35:00+09:00",
        "end_time": "2022-03-04T04:40:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "みんなのうた「ごっつぉさま」／「超変身！ミネラルフォーマーズ」",
        "subtitle": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "content": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "act": "",
        "genres": [
          "0409",
          "0700",
          "0504"
        ]
      },
      {
        "id": "2022030427069",
        "event_id": "27069",
        "start_time": "2022-03-04T23:05:00+09:00",
        "end_time": "2022-03-04T23:10:00+09:00",
        "s": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "パラスポーツ×アニメ「アニ×パラ」▽パラアルペンスキーテーマ曲江口寿史×ＡＣＣ",
        "subtitle": "パラスポーツの魅力をアニメで伝える番組。高速滑走に挑む精神力が試されるパラアルペンスキーを描く。キャラ原案：江口寿史／曲：Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ",
        "content": "パラスポーツの魅力をアニメで伝えるプロジェクトの第１３弾。圧倒的なスピードに挑む「パラアルペンスキー」の世界を江口寿史原案の魅力的なキャラクターで描く。平昌パラリンピック金メダリストの村岡桃佳選手への取材から生まれた主人公・桃は、スピードへの恐怖を克服していく。その壁を越えた先にあるものとは…　テーマ曲　♪「Ｏｎ　Ｙｏｕｒ　Ｍａｒｋ」はＡｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂが手掛けた。",
        "act": "【声】松本まりか，【出演】Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ，【監督】西村一彦，【脚本】加納新太，【原案】江口寿史",
        "genres": [
          "0700"
        ]
      }
    ]
  }
};

/////////////////// 課題3-2 はここから書き始めよう


let b = document.querySelector('#print');
b.addEventListener('click', print);

function print() {
 let s =document.querySelector('input[name="banngumi1"]');
 let service= s.value;
	let g=document.querySelector('input[name="banngumi2"]');
  let genre= g.value;
  let url='https://www.nishita-lab.org/web-contents/jsons/nhk/'+service+'-'+genre+'-j.json';
 
  axios.get(url)
  .then(showResult)
  .catch(showError)
  .then(finish);
}

// 通信が成功した時の処理
function showResult(resp) {


  let data = resp.data;
  
	if (typeof data === 'string') {
   
		data = JSON.parse(data);
	}
  let s =document.querySelector('input[name="banngumi1"]');
 let service= s.value;
 if(service==="g1"){
 let x=0;
  for (let n of data.list.g1) {
   
    
  let p1=document.querySelector('p#z');
   let aa = document.createElement('p');
  aa.textContent=n.title;
 p1.insertAdjacentElement('afterend', aa);



 let p4=document.querySelector('p#z1');
 let a4 = document.createElement('p');
 a4.textContent=n.start_time;
 p4.insertAdjacentElement('afterend', a4);


 let p5=document.querySelector('p#z2');
 let a5 = document.createElement('p');
 a5.textContent=n.end_time;
 p5.insertAdjacentElement('afterend', a5);


  } 
 }
  data = resp.data;
  if(service==="e1"){

    for (let n of data.list.e1) {
  

      let p1=document.querySelector('p#z');
  let aa = document.createElement('p');
  aa.textContent=n.title;
 p1.insertAdjacentElement('afterend', aa);



 let p4=document.querySelector('p#z1');
 let a4 = document.createElement('p');
 a4.textContent=n.start_time;
 p4.insertAdjacentElement('afterend', a4);

 let p5=document.querySelector('p#z2');
 let a5 = document.createElement('p');
 a5.textContent=n.end_time;
 p5.insertAdjacentElement('afterend', a5);

    }
  }
}




// 通信エラーが発生した時の処理
function showError(err) {
	console.log(err);
}	

// 通信の最後にいつも実行する処理
function finish() { 

	console.log('Ajax 通信が終わりました');
}

  
