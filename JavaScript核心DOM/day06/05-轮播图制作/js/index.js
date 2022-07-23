window.addEventListener('load', function () {
    // 获取元素
    var arrow_l = document.querySelector('.arrow-l')
    var arrow_r = document.querySelector('.arrow-r');
    var focus = document.querySelector('.focus');
    var focusWidth = focus.offsetWidth;
    // 鼠标经过focus就显示隐藏左右按钮
    focus.addEventListener('mouseenter', function () {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer);
        timer = null; //清除定时器 变量

    })
    focus.addEventListener('mouseleave', function () {
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
        timer = setInterval(function () {
            // 手动调用右侧点击事件
            arrow_r.click();
            focus.addEventListener('')
        }, 2000)
    })
    // 动态生成小圆圈 有几张图片,就生成几个li
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle');
    // console.log(ul.children.length);
    for (var i = 0; i < ul.children.length; i++) {
        // 创建li
        var li = document.createElement('li');
        // 记录当前li的索引号 通过自定义属性
        li.setAttribute('index', i);
        // 把li插入ol里面
        ol.appendChild(li);
        // 小圆圈的排他思想 我们可以直接在生成的小圆圈的同时直接绑定事件 
        li.addEventListener('click', function () {
            // 干掉所有人 把所有的li清除类名 current
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            // 留下我自己 当前的li设置类名 current
            this.className = 'current';
            // 点击小圆圈移动,移动图片 移动的ul
            // 当我们点击了某个li获得当前li的索引号
            var index = this.getAttribute('index');
            // 当我们点击了li就要把li的索引号给num
            num = index;
            // 当我们点击了li就要把li的索引号给circle
            circle = index;
            // num=circle=index;
            console.log(index);
            // ul的移动距离=小圆圈的索引号*图片的宽度  注意是负值
            console.log(focusWidth);
            animate(ul, -index * focusWidth);
        })
    }
    // 把ol里面第一个li设置类名current
    ol.children[0].className = 'current';
    // 克隆第一张图片
    // 写在声明小圆圈的下面 所以只有四个li
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);

    // 点击右侧按钮,图片滚动一次
    var num = 0;
    // 控制li的播放
    var circle = 0;
    // flag 节流阀
    var flag = true;
    arrow_r.addEventListener('click', function () {
        if (flag) {
            flag = false; //关闭节流阀
            // 如果走到最后复制的一张图片,此时ul要快速复原 left改为0
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0
            }
            num++;
            animate(ul, -num * focusWidth, function () {
                flag = true; //打开节流阀
            });

            // 点击右侧按钮 li也跟着变化
            circle++;
            // circle==4 说明走到最后即克隆的图片
            circle = circle == ol.children.length ? circle = 0 : circle;
            circleChange();
        }
    });
    // 左侧按钮
    arrow_l.addEventListener('click', function () {
        if (flag) {
            flag = false;
            // 如果走到最后复制的一张图片,此时ul要快速复原 left改为0
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * focusWidth + 'px';
            }
            num--;
            animate(ul, -num * focusWidth, function () {
                flag = true;
            });
            // 点击右侧按钮 li也跟着变化
            circle--;
            // circle<0 说明第一张小圆圈改为第四个小圆圈
            circle = circle < 0 ? ol.children.length - 1 : circle;
            circleChange();
        }
    });

    function circleChange() {
        // 先清除其余li的类名 current
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        // 留下当前li的类名
        ol.children[circle].className = 'current';
    }
    // 自动播放轮播图
    var timer = setInterval(function () {
        // 手动调用右侧点击事件
        arrow_r.click();
    }, 2000)
})