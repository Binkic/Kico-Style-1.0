/* ----

# Kico Style Docs
# By: Dreamer-Paul
# Last Update: 2017.7.23

一个简洁、有趣的开源响应式框架，仅包含基础样式，需按照一定规则进行二次开发。

欢迎你加入缤奇，和我们一起改变世界。
本代码为缤奇保罗原创，并遵守 MIT 开源协议。保罗的个人博客：https://hi-paul.space

---- */

// 菜单按钮
function nav_btn() {
    var nav_btn = document.getElementsByClassName('toggle-btn')[0];
    var nav_bar = document.getElementsByClassName('head-menu')[0];

    nav_btn.addEventListener("click", function () {
        nav_bar.classList.toggle("active");
    });
}
nav_btn();

function navtrans() {
    var header = document.getElementsByTagName("header")[0];
    var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    if(scroll >= 160)
    {
        header.classList.add("active");
    }
    else
    {
        header.classList.remove("active");
    }
}

// 遮罩示例
function overlay_test_a() {
    overlay(3000);
}

function alert_test_a() {
    alert_box("这是一个弹窗测试", 1000);
}
function alert_test_b() {
    alert_box("这是一个弹窗测试", 1000, false);
}
function alert_test_c() {
    alert_box("这是一个弹窗测试", 1000, true, "green");
}

// 页面滚动事件
window.onscroll = function () {
    navtrans();
};