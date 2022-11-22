import { createStore } from "vuex"
import axios from "axios";

const store = createStore({
    //狀態儲存庫
    state: {
        data: {}, //api資料
    },
    mutations: { //更改狀態的行為
        //更新api 資料
        updateData(state, payload) {
            console.log(payload)
            state.data = payload
        }
    },
    actions: {
        //取得api資料動作
        async getData({ commit }, payload) { //(context.commit,payload)
            try {
                // console.log('payload:' + JSON.stringify(payload))

                let res = await axios.get("https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/" + payload.city + "?%24filter=Picture%2FPictureUrl1%20ne%20null%20and%20Picture%2FPictureDescription1%20ne%20null%20and%20Class1%20ne%20null&%24top=1&%24skip=" + payload.skip + "&%24format=JSON", {
                    headers: { 'Accept': 'application/json' },
                });
                console.log(res)

                //更新api資料
                commit('updateData', res.data);
            } catch (error) { //錯誤處理
                console.log(error)
            }
        }
    }
})

export default store