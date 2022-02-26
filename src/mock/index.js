import Mock from 'mockjs';
import loginAPI from "./login";

// 登录相关的API 
Mock.mock(/\/login\/loginByEmail/, 'post', loginAPI.loginByEmail)
Mock.mock(/\/login\/logout/, 'post', loginAPI.logout)
Mock.mock(/\/user\/info/, 'post', loginAPI.getInfo)

export default Mock