$(document).ready(function() {
  // 스와이퍼

  new Swiper(".newName", {
    effect: "slide", //fade, cube, flip, coverflow, 기본값은 slide
    autoHeight: true, //자동 높이 조절(기본값은 false)
    speed: 1000,
    slidesPerView: 1, // 동시에 보여줄 슬라이드 갯수
    spaceBetween: 0, // 슬라이드간 간격
    slidesPerGroup: 1, // 그룹으로 묶을 수, slidesPerView 와 같은 값을 지정하는게 좋음
    // 그룹수가 맞지 않을 경우 빈칸으로 메우기
    // 3개가 나와야 되는데 1개만 있다면 2개는 빈칸으로 채워서 3개를 만듬
    loopFillGroupWithBlank: true,
    loop: true, // 무한 반복

    pagination: {
      // 페이징
      el: ".swiper-pagination",
      clickable: true // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
    },

    navigation: {
      // 네비게이션
      nextEl: ".swiper-button-next", // 다음 버튼 클래스명
      prevEl: ".swiper-button-prev" // 이번 버튼 클래스명
    }
  });

  $(document).on("click", ".language > a", function() {
    var cl = $(".language > a").prop("class");
    if (cl == "click_language_down") {
      $(".language > a")
        .removeClass("click_language_down")
        .addClass("click_language_up");
      $(".click_lan").addClass("on");
    } else if (cl == "click_language_up") {
      $(".language > a")
        .removeClass("click_language_up")
        .addClass("click_language_down");
      $(".click_lan").removeClass("on");
    }
  });

  $(document).on("click", ".language > a", function() {
    var cl = $(".language > a").prop("class");
    if (cl == "black_down") {
      $(".language > a")
        .removeClass("black_down")
        .addClass("black_up");
      $(".click_lan").addClass("on");
    } else if (cl == "black_up") {
      $(".language > a")
        .removeClass("black_up")
        .addClass("black_down");
      $(".click_lan").removeClass("on");
    }
  });

  $(document).on("click", ".hamberg", function() {
    $(".nav").addClass("on");
    $(".hamberg").addClass("off");
    $(".close").addClass("on");
  });
  $(document).on("click", ".close", function() {
    $(".nav").removeClass("on");
    $(".hamberg").removeClass("off");
    $(".close").removeClass("on");
  });

  // 메인 슬라이드

  var index = 0;
  var length = $(".slide").length;

  $(document).on("click", ".btn_next", function() {
    $(".main_slide")
      .children()
      .removeClass("view");
    index++;
    index = index % length;
    $(".slide")
      .eq(index)
      .addClass("view");
  });
  $(document).on("click", ".btn_prev", function() {
    $(".main_slide")
      .children()
      .removeClass("view");
    index--;

    if (index == -1) {
      index = length - 1;
    }

    $(".slide")
      .eq(index)
      .addClass("view");
  });

  // section4 슬라이드

  var index1 = 0;
  var length1 = $(".sec4_slide").length;

  $(document).on("click", ".sec4_btn_next", function() {
    $(".sec4_web")
      .children()
      .removeClass("sec4_view");
    index1++;
    index1 = index1 % length1;
    $(".sec4_slide")
      .eq(index1)
      .addClass("sec4_view");
  });
  $(document).on("click", ".sec4_btn_prev", function() {
    $(".sec4_web")
      .children()
      .removeClass("sec4_view");
    index1--;

    if (index1 == -1) {
      index = length1 - 1;
    }

    $(".sec4_slide")
      .eq(index1)
      .addClass("sec4_view");
  });

  $(document).scroll(function() {
    var h = $(document).scrollTop();
    if (0 != h) {
      $("header").addClass("bg");
      $(".logo_nav_wrap h1 a").addClass("logo_color");
      $("nav a").addClass("color");
      $(".language p").addClass("color");
      $(".click_language_down")
        .removeClass()
        .addClass("black_down");
      $(".line").addClass("co_black");
    } else {
      $("header").removeClass("bg");
      $(".logo_nav_wrap h1 a").removeClass("logo_color");
      $("nav a").removeClass("color");
      $(".language p").removeClass("color");
      $(".black_down")
        .addClass("click_language_down")
        .removeClass("black_down");
      $(".line").removeClass("co_black");
    }
  });

  // 클릭이벤트

  scrollMove(".abo", 1);
  scrollMove(".cor", 2);
  scrollMove(".gal", 3);
  scrollMove(".med", 4);
  scrollMove(".not", 5);
  scrollMove(".sho", 6);

  function scrollMove(ClassName, num) {
    $(document).on("click", ClassName, function() {
      index = num;
      move(index);
      $(".line").removeClass("view");
      $(".line")
        .eq(index - 1)
        .addClass("view");
    });
  }

  $(document).on("click", ".logo", function() {
    $(".line").removeClass("view");
  });

  function move(index) {
    var top = $("section")
      .eq(index)
      .offset().top;
    $(".link").removeClass("view");
    $(".link")
      .eq(index)
      .addClass("view");
    $("body, html").animate(
      {
        scrollTop: top
      },
      {
        duration: 500,
        complete: function() {
          scrollEvent = false;
        }
      }
    );
  }
});
