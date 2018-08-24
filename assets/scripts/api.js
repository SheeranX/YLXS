import http from '~/plugins/axios';

let baseUrl = 'http://192.168.18.19:1100';


//登陆接口
const login=(params)=>{
    return new Promise((resolve,reject)=>{
        http.get(baseUrl+'/user/backstage/publicAuthority/userLogin/userLogin',params,false)
        .then(res=>{
              sessionStorage.setItem('USER_TOKEN',res.message);
              return resolve(res)
        })
        .catch(error=>{
            return reject(error);
        })
    })
};

/** 
 * 编号管理
 * 
*/

// 查询编号及分页
const getCodeList=(params)=>{
    return http.post(baseUrl+'/system/backstage/privateAuthority/sequenceAction/toSeqList',params,true)
}
//按条件查询编号
const findSequenceBySequenceId = (params)=>{
    return http.post(baseUrl+'/system/backstage/privateAuthority/sequenceAction/findSequenceBySequenceId',params,true);
}
// 添加编号

const addSeqInfo = (params)=>{
    return http.post(baseUrl+'/system/backstage/privateAuthority/sequenceAction/addSeqInfo',params,true);
}

// 修改编号

const updateSeqInfo = (params)=>{
    return http.post(baseUrl+'/system/backstage/privateAuthority/sequenceAction/updateSeqInfo',params,true);
}
//删除编号
const deleteSeqInfo = (id)=>{
    return http.get(baseUrl+'/system/backstage/privateAuthority/sequenceAction/deleteSeqInfo',id,true);
}

export {
    login,
    getCodeList,
    addSeqInfo,
    updateSeqInfo,
    deleteSeqInfo,
    findSequenceBySequenceId
}