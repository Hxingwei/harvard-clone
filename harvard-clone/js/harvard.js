/**
 * Created by xingwei on 2016/10/9.
 */
$(document).ready(function () {





    $(".has-drop-nav").hover(
        function () {
            $(".has-drop-nav:hover>ul").fadeIn("fast");
        },function () {
            $(".has-drop-nav>ul").hide();
        }
    );
    $(".has-underline").hover(
        function () {
        $(".has-underline:hover>.underline").animate({
            width: "100%",
            opacity:1
        },20);
    },function () {
            $(".has-underline>.underline").animate({
                width: "0%",
                opacity:0
            },20);
        }
    );





    var showTopnav=function () {
        var top=parseInt(document.body.scrollTop)|| parseInt(document.documentElement.scrollTop)
        // console.log(top)
        if(top>90){
            // console.log("true")
            $(".nav-group-first").animate({
                fontSize: "1.2em"
            },10);
            $(".harvard-logo").css("cssText",  "height: 56px!important; width: 110px!important");
            $(".harvard-logo_link").css("cssText",  "width: 110px!important; height: 44px!important;margin:auto;background-position:center bottom;background:106% auto")
            $(".nav-group>.clearfix>.navbar-left").css("padding-right","60px");
            $(".nav-group>.clearfix>.navbar-right").css("padding-left","60px")
            $(".nav-tabs>.first-link ").animate({
                opacity:1
            },300);
            $(".nav-tabs>.first-link ").css({"display": "block"});
            $(".nav-group").css({"box-shadow":"0 2px 3px rgba(0,0,0,0.25)"})
        }
        if(top<=90){
            console.log("false")
            $(".nav-group-first").animate({
                fontSize: "1.5em"
            },10);
            $(".harvard-logo").css({ "height": "172px", "width": "246px"});
            $(".harvard-logo_link").css({"width": "100%","height": "100%","margin":0,"background-position": "center center",
                "background-size": "80% auto"});
            $(".nav-group>.clearfix>.navbar-left").css("padding-right","138px");
            $(".nav-group>.clearfix>.navbar-right").css("padding-left","138px")
            $(".nav-tabs>.first-link ").animate({
                opacity:0
            },300);
            $(".nav-tabs>.first-link ").css({"display": "none"})
            $(".nav-group").css({"box-shadow":"none"})
        }
    }
    $(document).scroll(showTopnav);
    showTopnav();






    var showMeun =function() {
        $(".main-nav").toggle("fast", function () {
            $(".main-nav").css({"right": "0"});
        })

    }

    showMeun();
    $(".btn--menu").click(function () {
        showMeun();
    });










    var textList = function (x) {
        var seeWidth = $(".content-list").width();
        var contentWidth = seeWidth / x * ($(".content-box").length);
        $(".content").innerWidth(contentWidth);
        $(".content-box").innerWidth($(".content").width() / ($(".content-box").length));

    }

    var num=0;
    var index=0;
    var indexlength=0;

    var showtextList=function () {
        var width = parseInt(document.body.clientWidth) || parseInt(document.documentElement.clientWidth)

        if(width>900){
            num=3
            textList(3);
        }
        if(width>600&&width<=900){
            num=2
            textList(2);
        }
        else if(width<=600){
            num=1
            textList(1);
        }
        return num;
    }






    var turnShowText=function (x) {


        $(".next").click(function () {

            x=showtextList();
            indexlength=$(".content-box").length-x;
            length=$(".content-box").innerWidth();
            $(".prev").show();
            if (index < indexlength-x) {
                index = index + x;
                $(".content-box").animate({
                    right: index * length
                }, 300);
                console.log(index)
            }
            else {
                index = index + x;
                $(".content-box").animate({
                    right: index * length
                }, 300);
                $(".next").hide();

            }
        })

        $(".prev").click(function () {
            x=showtextList();
            indexlength=$(".content-box").length-x;
            length=$(".content-box").innerWidth();
            $(".next").show();
            if (index > x) {
                index = index - x;
                $(".content-box").animate({
                    right: index * length
                }, 300);
                console.log(index)

            }
            else {
                index = index - x;
                $(".content-box").animate({
                    right: index * length
                }, 300);
                $(".prev").hide();
                console.log(index)
            }
        })
    }


    showtextList();
    turnShowText();




    var showSearch=function () {

        $("#searchArea").focusin(function () {
            $(this).animate().animate({
                right: "-44px"
            }, 300);
        })
        $("#searchArea").focusout(function () {
            var width = parseInt(document.body.clientWidth) || parseInt(document.documentElement.clientWidth)
            if(width>1200){
                $("#searchArea").css({"right":"-44px"})
            }
            else {
                $(this).animate().animate({
                    right: "-236px"
                }, 300);
            }

        })
    }

    $(window).resize(function() {
        showtextList();
        var width = parseInt(document.body.clientWidth) || parseInt(document.documentElement.clientWidth)
        if (width<1200){
            showSearch();
        }
    });

    $("#searchArea1").focusin(function () {
            $(this).css({"background":"#000"})
            $(this).animate().animate({
                right: "0px"
            }, 300);
    })
    $("#searchArea1").focusout(function () {
            $(this).css({"background":"#30393a"})
            $(this).animate().animate({
                right: "-195px"
            }, 300);
    })



















    //     $("#searchArea1").focusin(function () {
    //     $(this).animate().animate({
    //         right: "-44px"
    //     }, 300);
    //     })
    //      $("#searchArea1").focusout(function () {
    //     $(this).animate().animate({
    //         right: "-236px"
    //     }, 300);
    // })

});