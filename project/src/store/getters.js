let getters={
    bHeader:(state)=>state.bHeader,
    bFooter:(state)=>state.bFooter,
    bLoading:(state)=>state.bLoading,
    homelist:(state)=>state.homelist,
    homemain:(state)=>state.homemain,
    shopcar:(state)=>{
        return state.shopcar
    },
    total:(state)=>{
        let total=0;
        if(state.shopcar.length>=1){
            for(var i=0;i<state.shopcar.length;i++){
                total+=(state.shopcar[i].price)*(state.shopcar[i].number)
            }
            return total
        }else{
            return 0
        }
    }

}
export default getters