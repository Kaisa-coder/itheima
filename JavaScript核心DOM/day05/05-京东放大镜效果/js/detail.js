var preview_img = document.querySelector('.preview_img');
var mask = document.querySelector('.mask');
var big = document.querySelector('.big');
// 当鼠标经过preview_img 就显示mask和big
preview_img.addEventListener('mouseover', function () {
    mask.style.display = 'block';
    big.style.display = 'block';
})
preview_img.addEventListener('mouseout', function () {
    mask.style.display = 'none';
    big.style.display = 'none';
})
// 鼠标移动的时候,让黄色盒子跟着鼠标来走
preview_img.addEventListener('mousemove', function (e) {
    // 先计算出鼠标在盒子内的坐标
    var x = e.pageX - this.offsetLeft;
    var y = e.pageY - this.offsetTop;
    var maskX = x - mask.offsetWidth / 2;
    var maskY = y - mask.offsetHeight / 2
    // 如果x坐标小于0就让它停在0的位置 y同理
    // 遮挡层最大移动距离
    var maskMax = preview_img.offsetHeight - mask.offsetHeight;
    if (maskX <= 0) {
        maskX = 0;
    } else if (maskX >= maskMax) {
        maskX = maskMax;
    }
    if (maskY <= 0) {
        maskY = 0;
    } else if (maskY >= maskMax) {
        maskY = maskMax;
    }
    mask.style.left = maskX + 'px';
    mask.style.top = maskY + 'px';
    // 大图片移动距离=遮挡层移动距离*大图片最大移动距离/遮挡层最大移动距离
    // 大图
    var bigImg = document.querySelector('.bigImg');
    // 大图片最大移动距离
    var bigMax = bigImg.offsetWidth - big.offsetWidth;
    // 大图片移动距离 x y
    var bigX = maskX * bigMax / maskMax;
    var bigY = maskY * bigMax / maskMax;
    bigImg.style.left = -bigX + 'px';
    bigImg.style.top = -bigY + 'px';
})