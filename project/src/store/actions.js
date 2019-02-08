import axios from 'axios'
import * as types from './type'

let actions={
    [types.VIEW_HEADER]:({commit},payload)=>commit(types.VIEW_HEADER,payload),
    [types.VIEW_FOOTER]:({commit},payload)=>commit(types.VIEW_FOOTER,payload),
    [types.VIEW_LOADING]:({commit},payload)=>commit(types.VIEW_LOADING,payload),
    [types.VIEW_HOMELIST]:({commit},payload)=>{
        axios({
            url:payload,
        }).then(res=>commit(types.VIEW_HOMELIST,res.data))
    },
    [types.VIEW_HOMEMAIN]:({commit},payload)=>{
        axios({
            url:payload,
        }).then(res=>commit(types.VIEW_HOMEMAIN,res.data))
    },
    add:({commit,state},payload)=>{
        let arr=[...state.shopcar]
        let close=false
        arr.forEach((item,index)=>{
            if(item.id==payload.id){
                item.number++
                close=true
            }
        })
        if(!close){
            payload.number=1
            arr.push(payload)
        }
        commit(types.ADD,arr)
    },
    change:({commit,state},payload)=>{
        state.shopcar.forEach((item,index)=>{
            if(item.id==payload.id){
                item.number+=payload.num
            }
        })
        commit(types.CHANGE,[...state.shopcar])
    }
}
export default actions