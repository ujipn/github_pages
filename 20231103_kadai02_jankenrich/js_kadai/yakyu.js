$(document).ready(function() {
    let strikeCount = 0;
    let ballCount = 0;
    let outCount = 0;
    let score = 0; 
    let runners = 0; 

    const imageElement = $(".pic");


$(".select-button").on("click",function(){
    const playerSelect = $(this) .data("value");
console.log(playerSelect,"ボタン選択")
    const computerSelects = ["ストレート","カーブ","フォーク"]
    const computerSelect = computerSelects[Math.floor(Math.random() *3)]; // コンピュータがランダムで選んだボタンの値
  

    // コンピューターの選択結果を表示
    $("#computerSelection").text("ピッチャーの球種: " + computerSelect);
    // プレイヤーとコンピュータの選択を比較し、結果を表示

    let text = "";



// ストレート選択
        if (playerSelect === "ストレート"&& computerSelect === "ストレート") {
              text = "ナイスバッティング"
              console.log("ナイスバッティング")
              const randomOutcome = Math.random();
              if (randomOutcome < 0.2) {
              text = "ホームラン";
              score++;
              const hitSound = new Audio("audio/homerun.mp3");
              hitSound.play();
              console.log("ホームラン");
              } else {
              text = "ヒット";
              runners++;
              console.log("ヒット");}
              // ヒット音を再生
             const hitSound = new Audio("audio/hit.mp3");
              hitSound.play();
 
        } else if(playerSelect === "ストレート"&& computerSelect === "カーブ"){
            // result = '<img src="js_kadai/img/zannen.jpg">';
               const randomOutcome = Math.random();
              if (randomOutcome < 0.2) {
              text = "ヒット";
              console.log("ヒット");
              runners++;
              const hitSound = new Audio("audio/hit.mp3");
              hitSound.play();
              } else if(randomOutcome < 0.2){
              text = "ストライク";
              console.log("ストライク");
              strikeCount++;
              const hitSound = new Audio("audio/bush.mp3");
              hitSound.play();
              } else {
              text = "内野ゴロ";
              console.log("内野ゴロ");
              const hitSound = new Audio("audio/out.mp3");
              hitSound.play();
              outCount++;
              }

        }else if(playerSelect === "ストレート"&& computerSelect === "フォーク"){
            // result = '<img src="js_kadai/img/zannen.jpg">';
               text = "ストライク"
               console.log("ストライク")
               strikeCount++;
               const hitSound = new Audio("audio/bush.mp3");
               hitSound.play();

// カーブ選択
        }else if(playerSelect === "カーブ"&& computerSelect === "ストレート"){
            // result = '<img src="js_kadai/img/zannen.jpg">';
               text = "ストライク"
               console.log("ストライク")
               strikeCount++;
               const hitSound = new Audio("audio/bush.mp3");
               hitSound.play();

        }else if(playerSelect === "カーブ"&& computerSelect === "カーブ"){
            // result = '<img src="js_kadai/img/zannen.jpg">';
               text = "ナイスバッティング"
               console.log("ナイスバッティング")
               const randomOutcome = Math.random();
              if (randomOutcome < 0.4) {
              text = "ホームラン";
              score++;
              const hitSound = new Audio("audio/homerun.mp3");
              hitSound.play();
              console.log("ホームラン");
              } else {
              text = "ヒット";
              runners++;
              const hitSound = new Audio("audio/hit.mp3");
              hitSound.play();
              console.log("ヒット");}

        }else if(playerSelect === "カーブ"&& computerSelect === "フォーク"){
            // result = '<img src="js_kadai/img/zannen.jpg">';
               const randomOutcome = Math.random();
               if (randomOutcome < 0.6) {
               text = "ストライク";
               console.log("ストライク");
               strikeCount++;
               const hitSound = new Audio("audio/bush.mp3");
               hitSound.play();
               } else {
               text = "内野ゴロ";
               console.log("内野ゴロ");
               const hitSound = new Audio("audio/out.mp3");
              hitSound.play();
               outCount++;
               }

//見送る選択
        }else if(playerSelect === "見送る"&& computerSelect === "ストレート"){
            // result = '<img src="js_kadai/img/zannen.jpg">';
               text = "ストライク"
               console.log("ストライク")
               strikeCount++;
               const hitSound = new Audio("audio/bush.mp3");
               hitSound.play();

        }else if(playerSelect === "見送る"&& computerSelect === "カーブ"){
            // result = '<img src="js_kadai/img/zannen.jpg">';
               const randomOutcome = Math.random();
               if (randomOutcome < 0.8) {
               text = "ボール";
               console.log("ボール");
               ballCount++;
               const hitSound = new Audio("audio/bush.mp3");
               hitSound.play();
               } else {
               text = "ストライク";
               console.log("ストライク");
               strikeCount++;
               const hitSound = new Audio("audio/bush.mp3");
               hitSound.play();
               }

        }else if(playerSelect === "見送る"&& computerSelect === "フォーク"){
            // result = '<img src="js_kadai/img/zannen.jpg">';
            const randomOutcome = Math.random();
            if (randomOutcome < 0.8) {
            text = "ボール";
            console.log("ボール");
            ballCount++;
            const hitSound = new Audio("audio/bush.mp3");
            hitSound.play();
            } else {
            text = "ストライク";
            console.log("ストライク");
            strikeCount++;
            const hitSound = new Audio("audio/bush.mp3");
            hitSound.play();
            }
            
        }

        if (text === "ヒット" || text === "ホームラン" || text === "内野ゴロ") {
            strikeCount = 0;
            ballCount = 0;
        }

        // ストライクアウトまたはフォアボール判定
        if (strikeCount === 3) {
            text = "三振！";
            strikeCount = 0;
            ballCount = 0;
            const hitSound = new Audio("audio/out.mp3");
              hitSound.play();
            outCount++;
        } else if (ballCount === 4) {
            text = "フォアボール！";
            strikeCount = 0;
            ballCount = 0;
            runners++;
        } else if (outCount === 3) {
            text = "チェンジ！";
            strikeCount = 0;
            ballCount = 0;
            outCount = 0;
            runners = 0;
        } 
        
        if (text === "ホームラン" ) {
            score +=runners;
            runners = 0;
        }

         // ランナーがホームに帰ると得点
         if (runners > 3) {
            score += runners - 3;
            runners = 3;
        }

        if (text === "ヒット") {
            imageElement.attr('src',"js_kadai/img/katuo_hit_01.jpg"); 
          } else if (text === "内野ゴロ") {
            imageElement.attr('src',"js_kadai/img/katuo_sozai_05.jpg");
        } else if (text === "ホームラン") {
            imageElement.attr('src',"js_kadai/img/homerun.jpg");  
        } else if (text === "三振！") {
            imageElement.attr('src',"js_kadai/img/katuo_sozai_04.jpg"); 
        //   } else if (comSelect === "パー") {
        //     imageElement.attr('src',"js_kadai/img/paper.jpg"); 
          }
    console.log("画像")
        
        
            // ストライクとボールのカウントに応じてCSSクラスを適用
            $("#strikeCount .circle").removeClass("yellow-circle");
            $("#ballCount .circle").removeClass("green-circle");
            $("#outCount .circle").removeClass("red-circle");
            
            for (let i = 0; i < strikeCount; i++) {
                $("#strikeCount .circle").eq(i).addClass("yellow-circle");
            }
            for (let i = 0; i < ballCount; i++) {
                $("#ballCount .circle").eq(i).addClass("green-circle");
            }
            for (let i = 0; i < outCount; i++) {
                $("#outCount .circle").eq(i).addClass("red-circle");
            }
        

        // 現在のカウントをHTMLに反映
        $("#counts").text("ストライク: " + strikeCount + " ボール: " + ballCount);
        // 結果を表示
        $("#result").text(text);

        // 得点とランナー数を表示
        $("#score").text("得点: " + score);
        $("#runners").text("ランナー: " + runners);

        var resetButton = $(".resetButton")[0];
        resetButton.addEventListener("click", function() {
            // ゲームのリセット処理をここに記述
            // TOPとリセットの使い分けがわからなかった
    
            // ページをリロードしてゲームを初期状態に戻す
            location.reload();
            console.log("リセット")
        });

});

});