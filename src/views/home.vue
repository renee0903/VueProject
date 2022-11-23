<template>
  <h1>臺灣觀光景點查詢</h1>
  <p>本次DEMO作業，僅提供臺灣六都景點查詢，資料來源為交通部公共運輸整合資訊流通服務平臺<br />
  → <a href="https://ptx.transportdata.tw/MOTC/?urls.primaryName=%E8%A7%80%E5%85%89V2"> 網站連結</a></p>
  
  <section class="tiles">
    <article class="style1">
      <span class="image">
        <img src="@/assets/images/taipei.jpg" alt="" />
      </span>
      <router-link :to="{ name: 'Taipei'}">
        <h2>Taipei</h2>
        <div class="content">
          <p>臺北市</p>
        </div>
      </router-link>
    </article>
    <article class="style2">
      <span class="image">
        <img src="@/assets/images/newtaipei.jpg" alt="" />
      </span>
      <router-link :to="{ name: 'NewTaipei'}">
        <h2>New Taipei</h2>
        <div class="content">
          <p>新北市</p>
        </div>
      </router-link>
    </article>
    <article class="style3">
      <span class="image">
        <img src="@/assets/images/taoyuan.jpg" alt="" />
      </span>
      <router-link :to="{ name: 'Taoyuan'}">
        <h2>Taoyuan</h2>
        <div class="content">
          <p>桃園市</p>
        </div>
      </router-link>
    </article>
    <article class="style4">
      <span class="image">
        <img src="@/assets/images/taichung.jpg" alt="" />
      </span>
      <router-link :to="{ name: 'Taichung'}">
        <h2>Taichung</h2>
        <div class="content">
          <p>臺中市</p>
        </div>
      </router-link>
    </article>
    <article class="style5">
      <span class="image">
        <img src="@/assets/images/tainan.jpg" alt="" />
      </span>
      <router-link :to="{ name: 'Tainan'}">
        <h2>Tainan</h2>
        <div class="content">
          <p>臺南市</p>
        </div>
      </router-link>
    </article>
    <article class="style6">
      <span class="image">
        <img src="@/assets/images/kaohsiung.jpg" alt="" />
      </span>
      <router-link :to="{ name: 'Kaohsiung'}">
        <h2>Kaohsiung</h2>
        <div class="content">
          <p>高雄市</p>
        </div>
      </router-link>
    </article>
  </section>
  <br/><br/>
</template>

<script>
import footerLayout from '@/components/footer-layout.vue';

export default {
  components: {
    footerLayout
  }
}
</script>
