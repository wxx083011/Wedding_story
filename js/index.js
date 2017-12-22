/**
 * Created by admin on 2017/12/20.
 */
$(function () {

  //音乐点击画面
  var audio = $('#audio')[0];
  $('.music-p').click(function () {
    if (audio.paused) {
      audio.play();
      this.style.opacity = '1';
    } else {
      audio.pause();
      this.style.opacity = "0";
    }

  })


  //初始化两个方向
  var direction = {
    up:1,
    down:2
  };

  //初始化当前页面的数字
  var nowIndex=1;
  var lastIndex=0;

  //初始化变量页面没有在滑动时
  var isMoving=false;

  //向上滑动
  $("#container").swipeUp(function () {
    //判断页面是否在滑动
    if(isMoving){
      return
    }
      // 滑屏之后就交换
      lastIndex=nowIndex
      //是不是最后一页
      if(lastIndex<6){
        nowIndex=lastIndex+1;
        movePage(direction.up)

      }
    })

  //向下滑动
  $("#container").swipeDown(function () {
    //判断页面是否在滑动
    if(isMoving){
      return
    }
    lastIndex=nowIndex
      //是不是最后一页
      if(lastIndex>1){
        nowIndex=lastIndex-1;
        movePage(direction.down)

      }
    });


  //定义滑动函数
  function movePage(dir) {
    var lastPage = '.page-'+ lastIndex;
    var nowPage = '.page-' + nowIndex;

    var outClass = '';
    var inClass = '';

    switch (dir){
      case direction.up:
        outClass = 'pt-page-moveToTop';
        inClass = 'pt-page-moveFromBottom';
        break;
      case direction.down:
        outClass = 'pt-page-moveToBottom';
        inClass = 'pt-page-moveFromTop';
        break;
    }

    //为页面添加动画开始的类
    $(nowPage).removeClass('hide');
    $(lastPage).addClass(outClass);
    $(nowPage).addClass(inClass);
    isMoving=true;
     /*动画执行完清除动画类*/

    if(lastIndex==1){
      setTimeout(function(){
        $(".p2-t1").addClass("animated fadeIn").css("opacity",1)
      },500)
      setTimeout(function(){
        $(".p2-t2").addClass("animated fadeIn").css("opacity",1)
      },1000)
      setTimeout(function(){
        $(".p2-t3").addClass("animated fadeIn").css("opacity",1)
      },1500)
      setTimeout(function(){
        $(".p2-t4").addClass("animated fadeIn").css("opacity",1)
      },2000)
    }
    if(lastIndex==3){
      setTimeout(function(){
        $(".p4-planimg").addClass('p4-plan-ani')
      },500);
      setTimeout(function(){
          $(".p4-dangao").addClass("animated fadeIn").css("opacity",1)}
        ,2000);
      setTimeout(function(){
          $(".p4-leftfox").addClass("animated fadeInLeftBig").css("opacity",1)}
        ,2400);
      setTimeout(function(){
          $(".p4-rightfox").addClass("animated fadeInRightBig").css("opacity",1)}
        ,2800);
      setTimeout(function(){
          $(".p4-heart01").addClass("animated fadeInUp").css("opacity",1)}
        ,3800);
      setTimeout(function(){
          $(".p4-heart02").addClass("animated fadeInUp").css("opacity",1)}
        ,4100);
      setTimeout(function(){
          $(".p4-heart03").addClass("animated fadeInUp").css("opacity",1)}
        ,4400);
      setTimeout(function(){
          $(".p4-heart01").removeClass("animated fadeInUp").addClass("heartAni")}
        ,4800);
      setTimeout(function(){
          $(".p4-heart02").removeClass("animated fadeInUp").addClass("heartAni02")}
        ,5000);
      setTimeout(function(){
          $(".p4-heart03").removeClass("animated fadeInUp").addClass("heartAni03")}
        ,5200);
      setTimeout(function(){
          $(".p4-t1").addClass("animated rotateIn").css("opacity",1)}
        ,4800);
      setTimeout(function(){
          $(".p4-t2").addClass("animated rotateIn").css("opacity",1)}
        ,5200);
      setTimeout(function(){
          $(".p4-t3").addClass("animated rotateIn").css("opacity",1)}
        ,5600);
      setTimeout(function(){
          $(".p4-t4").addClass("animated rotateIn").css("opacity",1)}
        ,6000);
      setTimeout(function(){
          $(".p4-t5").addClass("animated rotateIn").css("opacity",1)}
        ,6400);
      setTimeout(function(){
          $(".p4-t6").addClass("animated rotateIn").css("opacity",1)}
        ,6800);
    }
    if(lastIndex==4){
      setTimeout(function(){$(".p5-red").addClass("animated flash")},500);
      setTimeout(function(){$(".p5-t1").addClass("animated fadeInUp").css("opacity",1)},1500);
      setTimeout(function(){$(".p5-t2").addClass("animated fadeInUp").css("opacity",1)},2100);
      setTimeout(function(){$(".p5-t3").addClass("animated fadeInUp").css("opacity",1)},2700);
      setTimeout(function(){$(".p5-t4").addClass("animated fadeInUp").css("opacity",1)},3300);
      setTimeout(function(){$(".p5-t5").addClass("animated fadeInUp").css("opacity",1)},3900);
    }
    if(lastIndex==5){
      setTimeout(function(){$(".p6-plan").addClass("animated fadeInRightBig").css("opacity",1)},500);
      setTimeout(function(){$(".p6-t1").addClass("animated fadeInUp").css("opacity",1)},1500);
      setTimeout(function(){$(".p6-t2").addClass("animated fadeInUp").css("opacity",1)},2100);
      /*p6-out*/
      setTimeout(function(){$(".p6-t2").addClass("animated fadeOutDown").css("opacity",0)},3000);
      setTimeout(function(){$(".p6-t1").addClass("animated fadeOutDown").css("opacity",0)},3800);
      setTimeout(function(){$(".p6-plan").addClass("animated fadeOutLeft").css("opacity",0)},4200);
      setTimeout(function(){$(".p6-step01").removeClass("animated fadeOut").addClass("p6-s1-zoom").css({"bottom":"15%","left":"-40%","-webkit-transform":"scale(.5,.5)"})},4600);
      setTimeout(function(){$(".p6-step02").addClass("animated fadeIn")},6000);
      setTimeout(function(){$(".p6-step02").removeClass("animated fadeIn").addClass("p6-s2-zoom").css({"bottom":"20%","right":"-15%","opacity":"1","-webkit-transform":"scale(.8,.8)"})},5400);
      setTimeout(function(){$(".p6-step03").addClass("animated fadeIn")},6800);
      setTimeout(function(){$(".p6-step03").removeClass("animated fadeIn").addClass("p6-s3-zoom").css({"bottom":"2%","left":"-30%","opacity":"1","-webkit-transform":"scale(.7,.7)"})},6200);
      setTimeout(function(){$(".p6-step04").addClass("animated fadeIn").css("opacity",1)},6600);
      setTimeout(function(){$(".p6-step05").addClass("animated fadeIn").css("opacity",1)},7000);
      setTimeout(function(){$(".p6-end").addClass("animated flipInY").css("opacity",1)},8000);

    }


    setTimeout(function () {
      $(lastPage).removeClass(outClass);
      $(lastPage).addClass('hide');
      // $(lastPage).removeClass('page-current');

      $(nowPage).removeClass(inClass);
      // $(nowPage).addClass('page-current');

      isMoving = false;
    },600);
  }




  })