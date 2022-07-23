$(function () {
    // alert(1);
    // 按下回车 把完成数据存储到本地存储里面
    // 存储的数据类型 var todolist=[{title:"xxx",done:false}]
    load();
    $("#title").on("keydown", function (event) {
        if (event.keyCode == 13) {
            if ($(this).val() == "") {
                alert("您输入的为空,请重新输入")
            } else {
                // alert(1);
                // 先读取本地存储原来的数据
                var local = getData();
                console.log(local);
                // 把local数组进行更新数据 把最新的数据追加给local数组
                local.push({
                    title: $(this).val(),
                    done: false
                });
                // 把local数组的数据存储给本地存储
                saveDate(local);
                // toDoList 本地存储数据渲染加载到页面
                load();
                $(this).val("");
            }
        }
    });
    // todolist删除操作
    $("ol,ul").on("click", "a", function () {
        // alert(1);
        // 先获取本地存储
        var data = getData();
        // 修改数据
        var index = $(this).attr("id");
        // splice(i,1) 可以删除某一个元素 第一个参数是从那个位置开始删除,第二个参数是删除几个元素
        data.splice(index, 1);
        // 保存到本地存储
        saveDate(data);
        // 重新渲染页面
        load();
    });
    // todolist 正在进行和已经完成选项操作
    $("ol,ul").on("click", "input", function () {
        // alert(1);
        // 先获取本地存储
        var data = getData();
        // 修改数据
        var index = $(this).siblings("a").attr("id");
        console.log(index);
        // data[? ].done= ?
        data[index].done = $(this).prop("checked");
        console.log(data);
        // 保存到本地存储
        saveDate(data);
        // 重新渲染页面
        load();
    })
    // 读取本地存储的数据
    function getData() {
        var data = localStorage.getItem("todolist");
        if (data != null) {
            // 本地存储的数据是字符串类型 但是我们需要对象类型
            return JSON.parse(data);
        } else {
            return [];
        }
    };
    // 保存本地存储数据
    function saveDate(data) {
        localStorage.setItem("todolist", JSON.stringify(data));
    };
    // 渲染加载数据
    function load() {
        // 读取本地存储的数据
        var data = getData();
        // console.log(data);
        // 遍历之前先要清空ol里面的内容
        $("ol,ul").empty();
        var todoCount = 0; //正在进行的个数
        var doneCount = 0; //已经完成的个数
        // 遍历这个数据
        $.each(data, function (i, n) {
            // console.log(n);
            if (n.done) {
                $("ul").prepend("<li><input type='checkbox' checked='checked'><p>" + n.title + "</p><a href='javascript:;' id=" + i + "></a></li>");
                doneCount++;
            } else {
                $("ol").prepend("<li><input type='checkbox'><p>" + n.title + "</p><a href='javascript:;' id=" + i + "></a></li>");
                todoCount++;
            };

        });
        $("#todocount").text(todoCount);
        $("#donecount").text(doneCount);
    };
})