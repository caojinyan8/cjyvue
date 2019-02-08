import * as types from './type'
let mutations={
    [types.VIEW_HEADER]:(state,payload)=>state.bHeader=payload,
    [types.VIEW_FOOTER]:(state,payload)=>state.bFooter=payload,
    [types.VIEW_HOMELIST]:(state,payload)=>state.homelist=payload,
    [types.VIEW_HOMEMAIN]:(state,payload)=>state.homemain=payload,
    [types.ADD]:(state,payload)=>state.shopcar=payload,
    [types.CHANGE]:(state,payload)=>state.shopcar=payload,
    [types.VIEW_LOADING]:(state,payload)=>state.bLoading=payload


}
export default mutations