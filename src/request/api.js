//将request.js整体导入
import request from './request'
import axios from 'axios';

//---登录注册界面API---

//请求获取手机验证码
export const GetPhoneAPI = (params) => request.get('/getCode', { params });
//请求注册
export const PostRegisterAPI = (params, data) => {
    return axios({
        method: 'post',
        url: ' https://www.netdisc.cloud/register',
        params: params,
        data: data

    });
};
//请求登录
export const PostLoginAPI = (params) => {
    return axios({
        method: 'post',
        url: 'https://www.netdisc.cloud/login',
        data: params

    });
};


//----storage界面API----
//初始化头像
export const  PostInitUserAvatar = (params,data) => {
    return axios({
        method: 'post',
        url: 'https://www.netdisc.cloud/user/header/init',
        data: data,
        params:params,
        headers:{
            'Content-Type':'multipart/form-data'
        }
    });
}
//改变用户头像
export const PostChangeUserAvatar = (params,data) => {
    return axios({
        method: 'post',
        url: 'https://www.netdisc.cloud/user/header/change',
        data: data,
        params:params,
        headers:{
            'Content-Type':'multipart/form-data'
        }
    });
}
//修改用户信息-提交按钮
export const PostChangeMessageAPI = (params,data) => {
    return axios({
        method: 'post',
        url: 'https://www.netdisc.cloud/user/update',
        params:params,
        data:data
    });
}

//获取所有文件
export const GetAllFileAPI = (params) => request.get('/file/getAll', { params });
//获取所有图片
export const GetAllImgAPI = (params) => request.get('/img/user', { params });
//获取所有视频详细信息
export const GetAllVideoAPI = (params) => request.get('/video/user/get', { params });
//获取所有音乐
export const GetAllMusicAPI = (params) => request.get('/music/user/get', { params });
//获取所有办公文件
export const GetAllDocumentAPI = (params) => request.get('/document/user/get', { params });
//单张图片上传
export const PostSingleImgAPI = (params,data) => {
    return axios({
        method: 'post',
        url: 'https://www.netdisc.cloud/img/single/upload',
        params: params,
        data:data,
        headers:{
            'Content-Type':'multipart/form-data'
        }
    });
}
//多张图片上传
export const PostMultiImgAPI = (params,data) => {
    return axios({
        method: 'post',
        url: 'https://www.netdisc.cloud/img/multi/upload',
        params: params,
        data:data,
        headers:{
            'Content-Type':'multipart/form-data'
        }
    });
}
//下载图片

//单条视频上传
export const PostSingleVideoAPI = (params,data) => {
    return axios({
        method: 'post',
        url: 'https://www.netdisc.cloud/video/single/upload',
        params: params,
        data:data,
        headers:{
            'Content-Type':'multipart/form-data'
        }
    });
}
//多条视频上传
export const PostMultiVideoAPI = (params,data) => {
    return axios({
        method: 'post',
        url: 'https://www.netdisc.cloud/video/multi/upload',
        params: params,
        data:data,
        headers:{
            'Content-Type':'multipart/form-data'
        }
    });
}
//单条音乐上传
export const PostSingleMusicAPI = (params,data) => {
    return axios({
        method: 'post',
        url: 'https://www.netdisc.cloud/music/single/upload',
        params: params,
        data:data,
        headers:{
            'Content-Type':'multipart/form-data'
        }
    });
}
//多条音乐上传
export const PostMultiMusicAPI = (params,data) => {
    return axios({
        method: 'post',
        url: 'https://www.netdisc.cloud/music/multi/upload',
        params: params,
        data:data,
        headers:{
            'Content-Type':'multipart/form-data'
        }
    });
}
//单个文档上传
export const PostSimgleDocumentAPI = (params,data) => {
    return axios({
        method: 'post',
        url: 'https://www.netdisc.cloud/document/single/upload',
        data: data,
        params:params,
        headers:{
            'Content-Type':'multipart/form-data'
        }
    })
}
//多个文档上传
export const PostMultiDocumentAPI = (params,data) => {
    return axios({
        method: 'post',
        url: 'https://www.netdisc.cloud/document/multi/upload',
        data: data,
        params:params,
        headers:{
            'Content-Type':'multipart/form-data'
        }
    })
}

//----Chart界面API--------

//获取聊天列表
export const GetFriendChartAPI = (params) => request.get('', { params });
//获取好友列表
export const GetFriendListAPI = (params) => request.get('', { params });
//发送文字
export const PostTextAPI = (params) => request.post('', params);
//获取与该好友的聊天数据
export const GetFriendMessageaAPI = (params) => request.get('', { params });
//清空所有好友消息
export const PostClearMessageAPI = (params) => request.post('', params);

//查询用户未处理的好友信息列表
export const GetFriendMessageAPI = (params) => request.get('/user/friendRequest', {params});
//发送好友请求
export const GetFriendRequestAPI = (params) => request.get('/user/make', {params});
//处理好友信息
export const GetUserHangderAPI = (params) => request.get('/user/handler', { params });



//-----首页界面API-----------
export const GetSearchMessageAPI = (params) => request.get('/file/search', { params });