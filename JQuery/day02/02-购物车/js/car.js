$(function () {
    // 全选 全选不选功能模块
    // 就是把全选按钮(checkall) 的状态赋值给三个小按钮(j-checkbox) 就可以了
    // 事件可以使用change
    $(".checkall").change(function () {
        // console.log($(this).prop("checked"));
        $(".j-checkbox,.checkall").prop("checked", $(this).prop("checked"));
        if ($(this).prop("checked")) {
            // 让所有商品添加check-cart-item类名
            $(".cart-item").addClass("check-cart-item");
        } else {
            $(".cart-item").removeClass("check-cart-item");
        }
    });
    // 如果小复选框被全部选中 就应该把全选按钮选上,否则不选
    $(".j-checkbox").change(function () {
        // if(被选中的小复选框的个数===3){
        // 就要选中全选按钮
        // }else{
        // 不要选中全选按钮
        // }
        // console.log($(".j-checkbox:checked").length);
        // if(被选中复选框的个数==所有复选框的个数)
        if ($(".j-checkbox:checked").length == $(".j-checkbox").length) {
            $(".checkall").prop("checked", true);
        } else {
            $(".checkall").prop("checked", false);
        }
        if ($(this).prop("checked")) {
            // 让当前商品添加check-cart-item类名
            $(this).parents(".cart-item").addClass("check-cart-item");
        } else {
            $(this).parents(".cart-item").removeClass("check-cart-item");

        }
    });
    // 增减商品数量模块 首先声明一个变量,当我们点击+号(increment),就让这个值++,然后赋值给这个文本框
    $(".increment").click(function () {
        // 得到当前兄弟文本框的值
        var n = $(this).siblings(".itxt").val();
        // console.log(n);
        n++;
        $(this).siblings(".itxt").val(n);
        // 计算小计模块 根据文本框的值*当前商品的单价=商品的小计
        // 当前商品的单价 p
        var p = $(this).parents(".p-num").siblings(".p-price").text();
        // console.log(p);
        p = p.substr(1);
        console.log(p);
        // toFixed(2) 可以让我们保留2为小数
        var price = (p * n).toFixed(2);
        // 小计模块
        $(this).parents(".p-num").siblings(".p-sum").text("￥" + price);
        getSum();
    });
    $(".decrement").click(function () {
        // 得到当前兄弟文本框的值
        var n = $(this).siblings(".itxt").val();
        if (n == 1) {
            return false;
        }
        // console.log(n);
        n--;
        $(this).siblings(".itxt").val(n);
        // var p = $(this).parent().parent().siblings(".p-price").text();
        // parents(".p-num") 返回指定的祖先元素
        var p = $(this).parents(".p-num").siblings(".p-price").text();
        // 商品的小计
        // console.log(p);
        p = p.substr(1);
        console.log(p);
        // 小计模块 
        $(this).parents(".p-num").siblings(".p-sum").text("￥" + (p * n).toFixed(2));
        getSum();
    });
    // 用户修改了文本框的值 计算小计模块
    $(".itxt").change(function () {
        // 先得到文本框的值*当前商品的单价
        var n = $(this).val();
        // 商品单价
        var p = $(this).parents(".p-num").siblings(".p-price").text();
        // console.log(p);
        p = p.substr(1);
        $(this).parents(".p-num").siblings(".p-sum").text("￥" + (p * n).toFixed(2));
        getSum();
    });
    // 计算总计总额模块
    getSum();

    function getSum() {
        var count = 0; //计算总件数
        var money = 0; //计算总价钱
        $(".itxt").each(function (i, ele) {
            count += parseInt($(ele).val());
        });
        $(".amount-sum em").text(count);
        $(".p-sum").each(function (i, ele) {
            money += parseFloat($(ele).text().substr(1));
        });
        $(".price-sum em").text("￥" + money.toFixed(2));
    };
    // 删除商品模块
    // 商品后面的删除按钮
    $(".p-action a").click(function () {
        // 删除的是当前的商品
        $(this).parents(".cart-item").remove();
        getSum();
    })
    // 删除选中的商品
    $(".remove-batch").click(function () {
        // 删除的是小复选框选中的商品
        $(".j-checkbox:checked").parents(".cart-item").remove();
        getSum();
    })
    // 清空购物车 删除全部商品
    $(".clear-all").click(function () {
        $(".cart-item").remove();
        getSum();
    });

})