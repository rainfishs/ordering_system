<template>
    <n-config-provider :theme=darkTheme>
        <n-layout>
            <n-layout-header class="page-header">
                <span>點餐系統 v0.1</span>
            </n-layout-header>
            <NLayoutContent class="main-page">
                <n-grid cols="2 400:3 600:4">
                    <n-grid-item>
                    <n-tree block-line :data="menu.value" checkable expand-on-click selectable />
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
import { NConfigProvider, darkTheme, NGrid, NGridItem, NTree, NLayout, NLayoutFooter, NLayoutHeader, NLayoutContent, NCollapse, NCollapseItem } from 'naive-ui'



const menu = reactive({value: [{"label":"漢堡","key":"a","checkboxDisabled":"true","children":[{"label":"只因寶","key":"ji"},{"label":"每位謝寶","key":"ci"}]},{"label":"早安","key":"b","children":void 0}]} )
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
.n-tree {
    font-size: 3em;
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
}
</style>
