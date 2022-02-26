
/**
 * @url mock.js 拼接的假的 数据请求的 地址
 * decodeURIComponent() 函数可对 URI 进行解码。
*/
export function param2Obj(url) {
    const search = url.split('?')[1];
    if (!search) {
        return {}
    }
    return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
}