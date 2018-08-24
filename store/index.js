import Vue from 'vue'
import Vuex  from 'vuex'

Vue.use(Vuex);

const store = ()=>new Vuex.Store({
    state:{
       fullPermisson:{},
       permission:{}
    },
    mutations:{
        addPermission(state,paras){
            if(paras)
            {   
                sessionStorage.setItem('USER_P',JSON.stringify(paras));
                state.permission = paras
                }
            else
                state.permission = JSON.parse(sessionStorage.getItem['USER_P'])
        },
        addFullPermission(state,paras){
           if(paras)
           {
               sessionStorage.setItem('USER_FULL',JSON.stringify(paras))
               state.fullPermisson = paras
           }
           else
               state.fullPermisson =JSON.parse(sessionStorage.getItem['USER_P']);
        }
    },
    actions:{
        addPermission(context,paras){
            context.commit('addPermission',paras)
        },
        addFullPermission(context,paras){
            context.commit('addFullPermission',paras);
        }
    }
})

export default store