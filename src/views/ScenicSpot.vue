<template>
    <div class="navbarList">
        <p><router-link :to="{ name: 'home'}">首頁</router-link> / {{cityArr[activeCity].zh_tw}}</p>
    </div>
    <div class="scenicSpot"    
        v-for="(item) in source"
        :key="item.ScenicSpotID">
  
        <h1>{{item.ScenicSpotName}}</h1>
        <div class="pictures">
          <!-- 使用v-bind 對img動態賦值 -->
          <img :src = "item.Picture.PictureUrl1" :alt = "item.Picture.PictureUrl1"/>
        </div>
        <div class="tag">
          <!-- Tag 使用v-show 如果無資料則不顯示 -->
          <p v-show="item.Class1 !== undefined" class="tagClass" >{{item.Class1}}</p>
          <p v-show="item.Level !== undefined" class="tagLevel" >{{item.Level}}</p>
        </div>
        <div class="scenicSpotDesc">
          <p>{{item.DescriptionDetail}}</p>
          <p>聯絡資訊：{{item.Phone}}</p>
        </div>
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
  import { useRoute } from 'vue-router'

  const store = useStore()
  const route = useRoute()

  onMounted(() => {
  //於畫面渲染時取得api資料
  store.dispatch('getData',{
    skip: currentPage.value-1, //index
    city: route.name //縣市api
  });
  console.log(store.state.data);
  });

//-----------監聽儲存庫(store)內資料變化--------
let source = computed(()=>store.state.data);
let total = computed(()=>store.state.data.total);
//--------------------------------------------

// 縣市變數 吃route.name
const activeCity = ref(route.name);
console.log('route.name :' + route.name);

// 設定api中的縣市(中英文)
const cityArr = reactive(
  {
    Taipei: {
      zh_tw: "臺北市",
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
      zh_tw: "臺中市",
      eng:'Taichung'
    },
    Tainan: {
      zh_tw: "臺南市",
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
watch(currentPage, (nv, pv) => {//nv:後值，pv:前值
  store.dispatch('getData', { 
    skip: nv - 1,
    city: cityArr[activeCity.value].eng});
})
//監聽目前縣市若換頁重新取得api資料
watch(activeCity, (nv, pv) => { 
  store.dispatch('getData', { 
    skip: currentPage.value - 1,
    city: cityArr[nv].eng});
})
//監聽若navbar切換要重新取的api資料，並對activeCity重新賦值
watch(route, (nv,pv) =>{
  store.dispatch('getData',{
  skip: currentPage.value-1,
  city: nv.name //縣市api
  });
  //reload activeCity currentPage
  activeCity.value = nv.name;
  currentPage.value = 0;
})
</script>

