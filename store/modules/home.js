const homeModules = {
    state: {
        num: 0,
		name:'nihao'
    },
    mutations: {
        handleSetNum1(state, data) { // 使用mutations直接更改state的值
           state.num = data
		   state.name=data
		   console.log(state.num)
        },
        setNum2(state, data) {
            state.num = data
			console.log(state.num)
			
        }
    },
    actions: { // 使用actions，通过mutations更改state的值
        handleSetNum2({ commit }, data) {
            commit('setNum2', data)
        }
    }
}
export default homeModules