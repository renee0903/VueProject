import { createStore } from "vuex"
import axios from "axios";
import jsSHA from "jssha";

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
                    headers: getAuthorizationHeader(),
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

//api author
const getAuthorizationHeader = () => {
    let AppID = '656b7c83f4ef4f88b75a3954635bae57';
    let AppKey = 'H-zCMCw_m8kikASQKZJBihv4SJQ';

    let GMTString = new Date().toGMTString();
    let ShaObj = new jsSHA('SHA-1', 'TEXT');
    ShaObj.setHMACKey(AppKey, 'TEXT');
    ShaObj.update('x-date: ' + GMTString);
    let HMAC = ShaObj.getHMAC('B64');
    let Authorization = 'hmac username=\"' + AppID + '\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"' + HMAC + '\"';

    return { 'Authorization': Authorization, 'X-Date': GMTString };
};

export default store