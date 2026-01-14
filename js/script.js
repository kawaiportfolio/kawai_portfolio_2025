$(function () {

var logo = jQuery('.profile');
jQuery(window).scroll(function () {
  if (jQuery(this).scrollTop() > 500) { //スクロールが500pxを越えたら
    logo.addClass('invert');
  } else { //スクロールが500pxを越えなければ
    logo.removeClass('invert');
  }
});

var logo = jQuery('.profile');
	var height = jQuery(window).height(); //ウィンドウの高さ
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > height) { //スクロールが画面の高さを越えたら
			logo.addClass('invert');
		} else { //スクロールが画面の高さを越えなければ
			logo.removeClass('invert');
		}
	});

//じわっと表示
$('img').on('inview', function(event, isInView) {
  if (isInView) {
  //表示領域に入った時
    $(this).addClass('img-blur');
  } else {
  //表示領域から出た時
    $(this).removeClass('img-blur');
  }
});

// ===== splash: 毎回ふわっと & すぐ捌ける=====
function hideSplashFast() {
  const splash = document.getElementById("splash");
  if (!splash) return;
  splash.classList.add("is-hidden");
}

window.addEventListener("load", function () {
  setTimeout(hideSplashFast, 60); // ←待ち時間（短くしたいなら 0〜30）
});

window.addEventListener("pageshow", function () {
  hideSplashFast(); // 戻る/進むでも即消し
}, { capture: true });

setTimeout(hideSplashFast, 1200); // 最終保険

  //ページ内スクロール
  var $nav = $(".header");
  var navHeight = $nav.outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate(
      {
        scrollTop: position,
      },
      300,
      "swing"
    );
    return false;
  });

  //スクロールに応じてヘッダーの背景色が変化
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('.header').addClass('active');
    } else {
      $('.header').removeClass('active');
    }
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      300
    );
    return false;
  });

// smoothTriggerにsmoothTextAppearというクラス名を付ける定義
function SmoothTextAnime() {
  $('.smoothTextTrigger').each(function(){ //smoothTextTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('smoothTextAppear');// 画面内に入ったらsmoothTextAppearというクラス名を追記
    }else{
    $(this).removeClass('smoothTextAppear');// 画面外に出たらsmoothTextAppearというクラス名を外す
    }
    }); 
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  SmoothTextAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  SmoothTextAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述

});

//ハンバーガーメニュー
$('#menu-button').on('click',function(){
  $('.gnav-sp-wrap').fadeToggle(500);
  $('#menu-button').toggleClass('open');
});

//メニュー内のリンククリックしたとき
$(".gnav-sp a").on("click", function() {
  $('.gnav-sp-wrap').fadeToggle(500);

});







