$(function () {
    // 当我们点击了li 此时不需要执行页面滚动事件里面的li的背景选择 添加current类
    // 函数的节流阀 互斥锁
    var flag = true;
    // 显示隐藏电梯导航
    var toolTop = $(".recommend").offset().top;
    toggleTool();

    function toggleTool() {
        if ($(document).scrollTop() >= toolTop) {
            $(".fixedtool").fadeIn();
        } else {
            $(".fixedtool").fadeOut();
        }
    }
    $(window).scroll(function () {
        toggleTool();
        // 3.页面滚动到某个内容区域,左侧电梯导航li相应添加和删除current类名
        if (flag) {
            $(".floor .w").each(function (i, ele) {
                if ($(document).scrollTop() >= $(ele).offset().top) {
                    // console.log(i);
                    $(".fixedtool li").eq(i).addClass("current").siblings().removeClass();
                }
            })
        }
    });
    // 点击电梯导航页面可以滚动到相应的位置区域
    $(".fixedtool li").click(function () {
        flag = false;
        // console.log($(this).index());
        // 当我们每次点击li就需要计算页面要去往的位置
        // 选出对应索引号的内容盒子 计算它的 offset().Top;
        var current = $(".floor .w").eq($(this).index()).offset().top;
        // 页面动画滚动效果
        $("body,html").stop().animate({
            scrollTop: current
        },function(){
            flag=true;
        });
        // 点击之后,让当前的li添加current类名,兄弟移出类名
        $(this).addClass("current").siblings().removeClass();
    });
})