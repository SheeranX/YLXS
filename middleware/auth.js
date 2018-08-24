import { mapActions } from "../node_modules/vuex";

export default function({route,store})
{   
    let currentRouter = route.path;
    let fullPermisson = store.state.fullPermisson;

    for(let i = 0;i<fullPermisson.length;i++){
        let arr = fullPermisson[i]
        for(let j=0;j<arr.PGroup.length;j++)
        {
            let list = arr.PGroup[j];
            if(list.router==currentRouter)
             //store.commit('addPermission',list.meta)
              store.dispatch('addPermission',list.meta);
        }
    }
    console.log(route);
}