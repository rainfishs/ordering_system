<template>
    <n-config-provider :theme=darkTheme>
        <n-layout>
            <n-layout-header class="page-header">
                <span>點餐系統 v0.1</span>
            </n-layout-header>
            <NLayoutContent class="main-page">
                <n-grid cols="2 400:4 600:6" x-gap="10px">
                    <n-grid-item>
                        <n-collapse class="menu-list">
                            <n-collapse-item  v-for="(item, _, index) in menu.value">
                                <template #header>
                                    <div>{{ item }}</div>
                                </template>
                                <div>通过</div>
                            </n-collapse-item>
                        </n-collapse></n-grid-item>
                    <n-grid-item>
                        <n-collapse class="menu-list">
                            <n-collapse-item content-style="higth: 10px" v-for="(item, _, index) in menu.value">
                                <template #header>
                                    <div>{{ item }}</div>
                                </template>
                                <div>通过</div>
                            </n-collapse-item>
                        </n-collapse>
                    </n-grid-item>
                </n-grid>
                {{ menu }}
            </NLayoutContent>
            <n-layout-footer class="page-footer">
                Footer Footer Footer
            </n-layout-footer>
        </n-layout>
    </n-config-provider>
</template>

<script setup>
import axios from "axios";
import { onBeforeMount, reactive } from "vue";
import { NConfigProvider, darkTheme, NGrid, NGridItem, NLayout, NLayoutFooter, NLayoutHeader, NLayoutContent, NCollapse, NCollapseItem } from 'naive-ui'

const menu = reactive({ value: 2 })
onBeforeMount(async () => {
    try {
        const response = await axios.get('/Get');
        menu.value = response.data
    } catch (error) {
        console.error(error);
    }
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
    background-color: rgb(42, 42, 42);
}

.menu-list {background-color: rgb(36, 9, 81)}


.page-header {
    font-size: 16px;
    background-color: rgb(31, 31, 31);
}

.page-footer {
    font-size: 5px;
    background: linear-gradient(to right, rgb(97, 0, 142), rgb(18, 1, 130), rgb(97, 0, 142), rgb(18, 1, 130), rgb(97, 0, 142));
    background-size: 200% 100%;
    animation: footer-changer 3s linear infinite;
}
</style>
