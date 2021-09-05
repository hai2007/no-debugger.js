/*!
* no-debugger - ✔️ 阻止别人调试你的前端JavaScript代码
* git+https://github.com/hai2007/no-debugger.js.git
*
* author 你好2007
*
* Copyright hai2007 < https://hai2007.gitee.io/sweethome/ >
* Released under the MIT license
*
*/

(function () {

    try {

        // 定时运行调试
        setInterval(function () {

            // 替换 debugger 语句
            // 是为了防止手动去除debugger
            // 比如在此处右键点击 "Nerver pause here" 去掉这里调试
            // Function 构造器生成的 debugger 会在每一次执行时开启一个临时 js 文件
            // 语法: new Function ([arg1[, arg2[, ...argN]],] functionBody)
            new Function("debugger")();
            // debugger;

        }, 50);

    } catch (err) {
        console.log("[调试工具错误]", err);
    }

})();
