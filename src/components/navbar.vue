<template>
    <nav class="navbarHeader">
    <div class="menu__container">
      <ul class="list-unstyled menu__left">
        <li class="menu__item">
          <a href="javascript:;" @click="goto('home')" class="menu__item-link">Home</a>
        </li>
        <li class="menu__item">
          <a href="javascript:;" @click="goto('Taipei')" class="menu__item-link">臺北市</a>
        </li>
        <li class="menu__item">
          <a href="javascript:;" @click="goto('NewTaipei')" class="menu__item-link">新北市</a>
        </li>
        <li class="menu__item">
          <a href="javascript:;" @click="goto('Taoyuan')" class="menu__item-link">桃園市</a>
        </li>
        <li class="menu__item">
          <a href="javascript:;" @click="goto('Taichung')" class="menu__item-link">臺中市</a>
        </li>
        <li class="menu__item">
          <a href="javascript:;" @click="goto('Tainan')" class="menu__item-link">臺南市</a>
        </li>
        <li class="menu__item">
          <a href="javascript:;" @click="goto('Kaohsiung')" class="menu__item-link">高雄市</a>
        </li>
      </ul>
      </div>
    </nav>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const goto = (route) => {
      router.push({ name: route });
    };

    return { goto };
  }
}
</script>
