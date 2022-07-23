window.addEventListener('load', function () {
    // this.alert(1);
    // 获取元素
    var focus = document.querySelector('.focus');
    var ul = focus.children[0];
    // 获得focus的宽度
    var w = focus.offsetWidth;
    var ol = focus.children[1];
    // 利用定时器自动轮播图片
    var index = 0;
    var timer = setInterval(function () {
        index++;
        var translatex = -index * w;
        ul.style.transition = 'all .3s';
        ul.style.transform = 'translateX(' + translatex + 'px)';
    }, 2000);
    //等着我们过渡完成之后,再去判断 监听过渡完成的事件 transitionend
    ul.addEventListener('transitionend', function () {
        // 无缝滚动
        if (index >= 3) {
            index = 0;
            // 去掉过渡效果 让ul快速跳到目标位置
            ul.style.transition = 'none';
            // 利用最新的索引*宽度 去滚动图片
            var translatex = -index * w;
            ul.style.transform = 'translateX(' + translatex + 'px)';
        } else if (index < 0) {
            index = 2;
            ul.style.transition = 'none';
            var translatex = -index * w;
            ul.style.transform = 'translateX(' + translatex + 'px)';
        }
        // 小li跟随变化
        // 把ol里面带有current类名的li选出来 去除类名 remove
        ol.querySelector('.current').classList.remove('current');
        // 让当前索引号的li加上current add
        ol.children[index].classList.add('current');
    });
    // 手指滑动轮播图
    // 触摸元素 touchstart 获取手指初始坐标
    var startX = 0;
    var moveX = 0; //后面我们会使用 所以定义一个全局变量
    var flag = false;
    ul.addEventListener('touchstart', function (e) {
        startX = e.targetTouches[0].pageX;
        // 手指触摸的时候就停止定时器
        clearInterval(timer);
    })
    // 移动手指 touchmove 计算手指的滑动距离,并且移动盒子

    ul.addEventListener('touchmove', function (e) {
        // 计算移动距离 
        moveX = e.targetTouches[0].pageX - startX;
        // 移动盒子 盒子原来位置+手指移动的距离
        var translatex = -index * w + moveX;
        // 手指拨动的时候不需要动画效果 所以要取消过渡效果
        ul.style.transition = 'none';
        ul.style.transform = 'translateX(' + translatex + 'px)';
        flag = true; //如果用户手指移动过 我们再去做判断效果 否则不做判断效果
        e.defaultPrevented(); //阻止屏幕滚动行为
    })
    // 手指离开 根据移动距离判断是回弹还是播放上一张下一张
    ul.addEventListener('touchend', function (e) {
        if (flag) {
            // 如果移动距离大于50px就播放上一张或下一张
            if (Math.abs(moveX) > 50) {
                // 如果是右滑就播放上一张 moveX是正值
                if (moveX > 0) {
                    index--;
                }
                // 如果是左滑就播放下一张 moveX是负值
                else {
                    index++;
                }
                var translatex = -index * w;
                ul.style.transition = 'all .3s';
                ul.style.transform = 'translateX(' + translatex + 'px)';
            } else {
                // 如果移动距离小于50px就回弹
                var translatex = -index * w;
                ul.style.transition = 'all .3s';
                ul.style.transform = 'translateX(' + translatex + 'px)';

            }
        }
        // 手指离开的时候重新开启定时器  开定时器之前先清除定时器 确保当前环境只有一个定时器在运行
        clearInterval(timer);
        timer = setInterval(function () {
            index++;
            var translatex = -index * w;
            ul.style.transition = 'all .3s';
            ul.style.transform = 'translateX(' + translatex + 'px)';
        }, 2000);
    });
    // 返回顶部模块
    var goBack = document.querySelector('.goBack');
    var nav = document.querySelector('nav');
    window.addEventListener('scroll', function () {
        if (window.pageYOffset >= nav.offsetTop) {
            goBack.style.display = 'block';
        } else {
            goBack.style.display = 'none';
        }
    });
    goBack.addEventListener('click', function () {
        window.scroll(0, 0);
    })
})