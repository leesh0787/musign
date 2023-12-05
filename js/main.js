//메인메뉴의 움직이는 바 -----------
$('.gnb li a').mouseenter(function(){
    let bar=$(this).position().left;

    //.position():jquery메서드 중 하나로, 요소의 위치정보(top,left)를 반환한다

    //console.log(bar)
    
    let widnum=$(this).width()

    // $('.bar').animate({실행문},시간)

    $('.bar').animate({
        'left':bar +"px",
        'width':widnum+"px",
        'opacity':1,

    },300)
})

//전체 애니메이션 💫💨💦------------

$('.animate').scrolla({
    // default
    mobile: false, // 모바일버전에서 활성화
    once: false, // 스크롤시 한번 또는 여러번 실행을 결정
    animateCssVersion: 4 // ainmate.css 버전
    
});

// path의 총길이 (px단위)를 알아내기
let pathH = document.querySelector('.st0')
let pathHeigth = pathH.getTotalLength()

//console.log(pathHeigth)

//menuopen

$('.menuOpen .open').click(function(e){
    e.preventDefault()
    $('.menuOpen .menuWrap').addClass('on')
})

$('.menuOpen .close').click(function(e){
    e.preventDefault()
    $('.menuOpen .menuWrap').removeClass('on')
})

//service 영역시 배경컬러 바꾸기

$(window).scroll(function(){
    // $(this) --> window
    let scrollTop = $(this).scrollTop()
    // viewport 의 높이값 (현재 페이지 위의 높이값)
    //console.log(scrollTop)
    let offset = $('.service').offset().top
    // service 영역이 viewport 의 top에 위치하는 지점
    //==> 전체문서에서 .service 영역 전까지의 높이값 추출
    
    if(scrollTop>offset){
        $('body').addClass('on')
    }
    else{
        $('body').removeClass('on')
    }
})