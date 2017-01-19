// practice.js

jQuery(document).ready(function () { //$(document).ready( function(){ とかいてもよい

    // ページ読み込み時に実行したい処理
    console.log('this is practice.js あいうえお'); // コメントアウトしていい

    // 課題 1
    // ブラウザでhttp://localhost:8080/index.html にアクセスしたらすぐ、
    // jQueryのgetJson()を使って http://localhost:8080/api/books にアクセスして、
    // json情報をconsole.logに出す. ブラウザの開発ツール窓でなんらかのログが見れればよしとする

    // $.getJSON("/api/books", function(json){
    //     console.log(json);
    // });

    // 課題 2
    // 課題1を改良し、もう少し格好よくログを出す。 jQueryの"each"を使う。
    // "id = 99, title = hogehoge" のような形でログが複数でるようにする

    // 課題 3
    // 2を改良し、 9001,9002,9003のどれでもいいのでひとつisbnを指定してそのbook情報だけをAPIから取得し、ログ出力する
    //
    // APIのURLやパラメータはどんな形式になるのか？は、BookApiControllerを見てブラウザで試しつつ考えてる.
    // getJSON()にどういう形でパラメータ(isbn)を渡せばいいのかは、ググる。

    // 課題4
    // 3を改良し、 9999 のような存在しないisbnを指定した場合=404になる=のときのエラー処理も実装する。
    // エラーの中ではステータスやレスポンスされたステータスやボディを適当にconsole.logするだけでよい
    // ヒント: $.getJSON(...).done(...).fail(...); のように書ける

    // 課題5
    // ここまで、http://localhost:8080/index.html にアクセスした瞬間にconsole.log()させていたが
    // 今度は画面上の<button>タグを押したらconsole.log()するように改造する
    // ヒント1 getJSONしてログを吐くまでの処理を何らかの関数にまとめる
    // ヒント2 id="doLog"というid属性を持つbuttonタグのクリックイベントで上の関数が実行されるようにする

    // 課題6
    // 全てのbookのtitleを、console.logではなく、<li>タグを使ってブラウザ上に表示する
    // 専用の関数と専用のボタンをつくって、そのボタンを押したら<li>タグが表示されるようにすること。
    // ヒント たとえば $("<a></a>") で新規のDOM要素をつくれる. "DOM要素変数名.html(タグに書きたいこと);" で要素内部に書き込める

    // 課題7
    // 課題6で表示できるようになったliタグの背景色を1行ずつ変えて表示する。例えば白,青,白,青...のように。
    // ヒント: jQueryのセレクタには "odd" "even" という便利なやつがある.
    // ヒント: jQueryのDOM要素は .addClass(cssクラス名)というメソッドを持っているのでclass名の追加はこれでOK. cssで任意のclass名に背景色を指定する


});
