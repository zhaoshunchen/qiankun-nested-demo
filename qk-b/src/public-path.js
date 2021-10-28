/*
 * @Author: 赵顺陈
 * @Date: 2021-10-25 14:08:54
 * @LastEditors: 赵顺陈
 * @LastEditTime: 2021-10-28 10:13:45
 * @Description: 
 */
(function () {
    if (window.__POWERED_BY_QIANKUN__) {
        if (process.env.NODE_ENV === 'development') {
            __webpack_public_path__ = `//localhost:8081/`;
            return;
        }
        __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
    }
})();