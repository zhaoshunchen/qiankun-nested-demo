/*
 * @Author: 赵顺陈
 * @Date: 2021-10-25 14:08:54
 * @LastEditors: 赵顺陈
 * @LastEditTime: 2021-10-25 20:02:12
 * @Description: 
 */
(function () {
    if (window.__POWERED_BY_QIANKUN__) {
        if (process.env.NODE_ENV === 'development') {
            // eslint-disable-next-line no-undef
            __webpack_public_path__ = `//localhost:8082/`;
            return;
        }
        // eslint-disable-next-line no-undef
        __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
    }
})();