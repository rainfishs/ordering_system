<template>
    <n-config-provider :theme=darkTheme>
        <n-layout>
            <n-layout-header class="page-header">
                <span>綜合業務組AD106點餐系統(統計午餐系統) v0.13</span>
            </n-layout-header>
            <NLayoutContent class="main-page">
                {{ connected  }}
            </NLayoutContent>
            <n-layout-footer class="page-footer">
               <span>made by rainfishs</span>
            </n-layout-footer>
        </n-layout>
    </n-config-provider>
</template>

<script setup>
import { state } from "../socket";
import { computed } from "vue";
import { NLayoutContent,NLayoutHeader,NLayoutFooter,NLayout,NConfigProvider,darkTheme } from "naive-ui";
const connected = computed(()=>{
    return state.received
})


</script>


<style scoped>
@keyframes footer-changer {
    0% {
        background-position: 0%
    }

    100% {
        background-position: 100%
    }
}

.main-page {
    height: calc(100vh - 45px);

}

.n-menu {
    font-size: 2em;
}

.page-header {
    font-size: 16px;
    background-color: rgb(31, 31, 31);

}

.page-footer {
    font-size: 5px;
    background: linear-gradient(to right, rgb(97, 0, 142), rgb(18, 1, 130), rgb(97, 0, 142), rgb(18, 1, 130), rgb(97, 0, 142));
    background-size: 200% 100%;
    animation: footer-changer 3s linear infinite;
    text-align: right;
}
</style>
