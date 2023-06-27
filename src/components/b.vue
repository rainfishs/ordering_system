<template>
    <n-layout>
        <n-layout-header class="page-header">
        <span>點餐系統 v0.1</span>
        </n-layout-header>
        <NLayoutContent class="main-page">
        </NLayoutContent>
        <n-layout-footer class="page-footer">
        Footer Footer Footer
        </n-layout-footer>
    </n-layout>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import {NSpace,NButton,NDropdown,useMessage,NLayout,NLayoutFooter,NLayoutHeader,NLayoutContent} from 'naive-ui'



</script>


<style scoped>
@keyframes footer-changer {
    0%{background-position:0%}
    100%{background-position:100%}
}
.main-page {height: calc(100vh  - 45px);
            background-color: rgb(42, 42, 42);}
.page-header {
    font-size: 16px;
    background-color: rgb(31, 31, 31);color: white;
}
.page-footer {
    font-size: 5px;
    background: linear-gradient(to right,rgb(97, 0, 142), rgb(18, 1, 130),rgb(97, 0, 142),rgb(18, 1, 130),rgb(97, 0, 142));
    background-size: 200% 100%;
    animation: footer-changer 3s linear infinite;
}

</style>
