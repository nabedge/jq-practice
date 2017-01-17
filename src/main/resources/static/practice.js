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
    // $.getJSON("/api/books", function(json){
    //     jQuery.each(json, function() {
    //         console.log(this.isbn + ',' + this.title);
    //     });
    // });

    // 課題 3
    // 2を改良し、 9001,9002,9003のどれでもいいのでひとつisbnを指定してそのbook情報だけをAPIから取得し、ログ出力する
    // APIのURLやパラメータはどんな形式になるのか？は、BookApiControllerを見つつブラウザで試しつつ、考えてみましょう.
    // $.getJSON("/api/book", {isbn: 9003}, function(json){
    //     console.log(json.isbn + ',' + json.title);
    // });

    // 課題4
    // 3を改良し、 9999 のような存在しないisbnを指定した場合=404になる=のときのエラー処理も実装する。
    // ヒント: $.getJSON(...).success(...).error(...); のように書ける
    $.getJSON("/api/book", {isbn: 9999}, function(json){

        //console.log(json.isbn + ',' + json.title);

    }).success(function(json) {

        console.log(json.isbn + ',' + json.title);

    }).error(function(jqXHR, textStatus, errorThrown) {

        console.log("エラー：" + textStatus);
        console.log("テキスト：" + jqXHR.responseText);

    });


});
