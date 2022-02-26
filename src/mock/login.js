import { param2Obj } from "utils";

const userMap = {
    admin: {
        role: "admin",
        token: "admin",
        desc: "我是超级管理员",
        name: "Super Admin",
        uid: "001"
    },
    visitor: {
        role: "visitor",
        token: "visitor",
        desc: "我是访客",
        name: "Visitor",
        uid: "002"
    },
    developer: {
        role: "developer",
        token: "developer",
        desc: "我是开发者",
        name: "开发-01",
        uid: "003"
    },
}

export default {
    /**
     * 向 userMap 查找对应的角色 
    */
    loginByEmail: config => {
        // console.log("config---------", config)
        const { email } = JSON.parse(config.body);
        return userMap[email.split('@')[0]];
    },
    /**
     * 获取 该角色对应的 角色信息
    */
    getInfo: config => {
        const { token } = param2Obj(config.url);
        if (userMap[token]) {
            return userMap[token];
        } else {
            return Promise.reject('a');
        }
    },
    /**
     * 退出登录成功
    */
    logout: () => 'success'
}