<template>
    <div class="header">
      <h1>{{cityArr[activeCity].zh_tw}}觀光景點</h1>
    </div>
    <div class="scenicSpot"    
        v-for="(item) in source"
        :key="item.ScenicSpotID">
  
        <h1>{{item.ScenicSpotName}}</h1>
        <span class="pictures">
          <!-- 使用v-bind 對img動態賦值 -->
          <img :src = "item.Picture.PictureUrl1" :alt = "item.Picture.PictureUrl1"/>
        </span>
        <div>
          <!-- Tag 如果無資料則不顯示 -->
          <p v-show="item.Class1 !== undefined" class="tag" >{{item.Class1}}</p>
          <p v-show="item.Level !== undefined" class="tag" >{{item.Level}}</p>
        </div>
        <p>{{item.DescriptionDetail}}</p>
        <p>聯絡資訊：{{item.Phone}}</p>
  
    </div>
  
    <div >
      <b-pagination class="pagination" align = "center"
          v-model="currentPage"
          :total-rows="5"
          :per-page="perPage"
          :hide-goto-end-buttons = "true"
          first-number
      ></b-pagination>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, reactive, computed, watch} from 'vue'
  import { useStore } from 'vuex'
  import { useRoute } from 'vue-router';

  const store = useStore()

onMounted(() => {
//於畫面渲染時取得api資料
store.dispatch('getData',{
  skip: currentPage.value-1, //從第1筆開始
  city: route.name //縣市api
});
console.log(store.state.data);
});

//-----------監聽儲存庫(store)內資料變化--------
let source = computed(()=>store.state.data);
let total = computed(()=>store.state.data.total);
//--------------------------------------------

// 縣市變數 吃route.name
const route = useRoute();
let activeCity = ref(route.name);
console.log('route.name :' + route.name);


// 設定api中的縣市(中英文)
const cityArr = reactive(
  {
    Taipei: {
      zh_tw: "台北市",
      eng:'Taipei'
    },
    NewTaipei: {
      zh_tw: "新北市",
      eng:'NewTaipei'
    },
    Taoyuan: {
      zh_tw: "桃園市",
      eng:'Taoyuan'
    },
    Taichung: {
      zh_tw: "台中市",
      eng:'Taichung'
    },
    Tainan: {
      zh_tw: "台南市",
      eng:'Tainan'
    },
    Kaohsiung: {
      zh_tw: "高雄市",
      eng:'Kaohsiung'
    }
  }
)

//----------------pagination------------------
//分頁每頁筆數
let perPage = ref(1);
//目前頁數
let currentPage = ref(1);
//監聽目前頁數若換頁重新取得api資料
watch(currentPage, (nv, pv) => {
  store.dispatch('getData', { 
    skip: nv - 1,
    city: cityArr[activeCity.value].eng});
})
//監聽目前縣市若換頁重新取得api資料
watch(activeCity, (nv, pv) => { //nv:後值，pv:前值
  store.dispatch('getData', { 
    skip: currentPage.value - 1,
    city: cityArr[nv].eng});
})

//nav
watch(route, (nv,pv) =>{

  store.dispatch('getData',{
  skip: currentPage.value-1,
  city: nv.name //縣市api
  });
  //reload activeCity.value
  activeCity.value = nv.name;
})

  </script>
  
  <style>
  .read-the-docs {
    color: #888;
  }
  
  .scenicSpot {
    text-align:left;
    border-style: solid;
    border-width: 2px;
    border-color: black;
    border-radius: 10px;
    margin: 10px;
    padding: 0 2.5em;
  }
  
  .tag {
    display: inline-block;
      background: #008080;
      color: white;
      padding: 10px;
      margin-right: 1em;
      border-radius: 10px;
  
  }
  
  .pictures {
    display: flex;
    justify-content: center;
    margin: 0 0 3em 0;
  }
  .pictures img {
    border-radius: 10px;
      width: 100%;
  }
  
  p {
    margin: 0 0 2em 0;
  }
  
  h1 {
    margin:1em 0;
  }

  
  </style>
  