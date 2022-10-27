window.addEventListener("load", function (e) {
  // header navbar menu toggle
  $("header .activeBars").click(function () {
    $("header .activeMenuBars").slideToggle(1000);
  });

  /// header navbar signin close
  // header navbar signin form eye show/hide password

  $("header .eyes").click(function () {
    var attr = $("header .pass input").attr("type");
    if (attr == "password") {
      $("header .pass input").attr("type", "text");
    } else {
      $("header .pass input").attr("type", "password");
    }
  });

  // header navbar signin form error Validation togirlash kerak

  $(".headerLogin button").click(function (e) {
    e.preventDefault();
    if ($(".headerLogin input").val() === "") {
      $(".errorMsg").show();
    } else {
      $(".errorMsg").hide();
    }
  });

  /// header navbar signin close

  $(".headerLogin .close").click(function () {
    $(".headerLogin").fadeOut(500);
  });

  $("header .signUp").click(function () {
    $(".headerLogin").fadeIn();
    $(".headerLogin").css("display", "flex");
  });
  // carusel
  $("main .owl-carousel").owlCarousel({
    items: 3,
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 1000,
    nav: true,
  });
  // About
  $(".About .close").click(function () {
    $(".About").fadeOut(500);
  });
  $(".products .signUp").click(function () {
    $(".About").fadeIn();
    $(".About").css("display", "flex");
  });
  $(".About .owl-carousel").owlCarousel({
    items: 1,
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    nav: true,
  });

  let time = 3600;
    const countDownEl = document.getElementById
      ("countdown");
    const countEl = document.getElementById  
    ("count")
    const lilEl = this.document.getElementById
    ("lil")
  
    setInterval(updatecountdown, 1000);
  
    function updatecountdown() {
      const minutes = Math.floor(time / 60)
      let seconds = time % 60;
      seconds = seconds < 10 ? "0" + seconds :
        seconds;
      countDownEl.innerHTML = `${minutes} :
         ${seconds}`;
      time--; 

      const sec = Math.floor(time / 80)
      let conds = time % 60;
      conds = conds < 10 ? "0" + conds:
      conds;
       countEl.innerHTML = `${sec} : ${conds}`
       time--;

       const ces = Math.floor(time / 100)
       let nec = time % 60;
       nec = nec < 10 ? "0" + nec:
       nec;
       lilEl.innerHTML = `${ces} : ${nec}`
       time--;
      }
      // video
      $(".video .fa-play").click(function () {
        document.querySelector(".videoPlayer video").play();
        $(".video .videoPlayer").addClass("active");
        $(this).fadeOut();
      });
    
      $(".video .videoPlayer").mouseover(function () {
        if ($(this).hasClass("active")) {
          $(".video .fa-pause").fadeIn(); // block
          $(".video .fa-pause").css("display", "flex");
        }
      });
    
      $(".video .videoPlayer").mouseout(function () {
        $(".video .fa-pause").fadeOut();
      });
    
      $(".video .fa-pause").click(function () {
        document.querySelector(".videoPlayer video").pause();
        $(".video .fa-play").fadeIn();
        $(".video .videoPlayer").removeClass("active");
      });
      // mentor
      $(".mentor .owl-carousel").owlCarousel({
        items: 3,
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 1000,
        nav: true,
      });
      // footer
      $("footer #accardionTitle").click(function () {
        $(this.children[0]).css("transform", "rotate(180deg)").addClass("act");
        $("footer #accardionContent").not($(this).next()).slideUp();
        $(this).next().slideToggle();
        if ($(this.children[0]).hasClass("act")) {
          $(this.children[0]).css("transform", "rotate(360deg)").removeClass("act");
        }
      });
});