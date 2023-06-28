<template>
    <n-config-provider :theme=darkTheme>
        <n-layout>
            <n-layout-header class="page-header">
                <span>點餐系統 v0.1</span>
            </n-layout-header>
            <NLayoutContent class="main-page">
                <n-grid cols="1 600:2 1200:3 1600:4" x-gap="20" y-gap="20">
                    <n-grid-item v-for="cate in Menu.categories">
                        <n-card :title="cate.cat" header-style="font-size:30px">
                            <n-menu v-if="resetmenubutton" :options="reformattedArray(cate)" />
                            <n-menu v-else :options="reformattedArray(cate)" @update:value="handleUpdateValue" />
                        </n-card>
                    </n-grid-item>
                </n-grid>
                <n-divider>在下面進行調整</n-divider>
                <n-grid cols="1 600:2 1200:3 1600:4" x-gap="20" y-gap="20">
                    <n-grid-item v-for="cate in Menu.categories">
                        <n-card :title="cate.cat" header-style="font-size:30px">
                            <n-menu v-if="resetmenubutton" :options="reformattedArray(cate)" />
                            <n-menu v-else :options="reformattedArray(cate)" @update:value="handleUpdateValue" />
                        </n-card>
                    </n-grid-item>
                </n-grid>
                

            </NLayoutContent>
            <n-layout-footer class="page-footer">
                Footer Footer Footer
            </n-layout-footer>
        </n-layout>
    </n-config-provider>
</template>

<script setup>
import axios from "axios";
import { onBeforeMount, reactive, toRaw, ref } from "vue";
import { NSwitch, NDivider, NConfigProvider, darkTheme, NGrid, NGridItem, NMenu, NLayout, NLayoutFooter, NLayoutHeader, NLayoutContent, NCard, NSpace } from 'naive-ui'

const resetmenubutton = ref(false)

const handleUpdateValue = (key) => {
    console.log(key);
    setTimeout(() => {
        resetmenubutton.value = true
        setTimeout(() => {
            resetmenubutton.value = false
        }, 1)
    }, 250)
}

const reformattedArray = (cate) => {
    const newarray = toRaw(cate).items.map((obj) => {
        var rObj = {};
        rObj["label"] = rObj["key"] = obj.name;
        return rObj;
    });
    return newarray;
}

const Menu = reactive({
    categories: [
        {
            cat: "主食", items: [
                {
                    name: '鐵板麵', options: [
                        { name: "口味", type: "radio", items: ["黑胡椒", "蘑菇", "綜合"] },
                        { name: "加點", type: "checkbox", items: ["加麵", "加蛋"] }
                    ]
                },
                {
                    name: '白醬', options: [
                        { name: "飯/麵", type: "radio", items: ["燉飯", "義大利麵"] },
                        { name: "加點", type: "checkbox", items: ["焗烤", "(焗烤)加更多起司"] }
                    ]
                },
            ]
        },
        {
            cat: "點心", items: [{
                name: '薯條', options: [
                    { name: "口味", type: "radio", items: ["一般", "黃金地瓜"] },
                    { name: "大小", type: "radio", items: ["大包", "小包"] },
                    { name: "調味", type: "checkbox", items: ["胡椒鹽", "梅粉", "辣椒粉"] }
                ]
            }]
        },
        {
            cat: "點心2", items: [{
                name: '薯條', options: [
                    { name: "口味", type: "radio", items: ["一般", "黃金地瓜"] },
                    { name: "大小", type: "radio", items: ["大包", "小包"] },
                    { name: "調味", type: "checkbox", items: ["胡椒鹽", "梅粉", "辣椒粉"] }
                ]
            }]
        },
        {
            cat: "點心3", items: [{
                name: '薯條', options: [
                    { name: "口味", type: "radio", items: ["一般", "黃金地瓜"] },
                    { name: "大小", type: "radio", items: ["大包", "小包"] },
                    { name: "調味", type: "checkbox", items: ["胡椒鹽", "梅粉", "辣椒粉"] }
                ]
            }]
        },
        {
            cat: "more點心", items: [{
                name: '薯條', options: [
                    { name: "口味", type: "radio", items: ["一般", "黃金地瓜"] },
                    { name: "大小", type: "radio", items: ["大包", "小包"] },
                    { name: "調味", type: "checkbox", items: ["胡椒鹽", "梅粉", "辣椒粉"] }
                ]
            }]
        },
        {
            cat: "摸多點心", items: [{
                name: '薯條', options: [
                    { name: "口味", type: "radio", items: ["一般", "黃金地瓜"] },
                    { name: "大小", type: "radio", items: ["大包", "小包"] },
                    { name: "調味", type: "checkbox", items: ["胡椒鹽", "梅粉", "辣椒粉"] }
                ]
            }]
        }
    ]
})
onBeforeMount(async () => {
    try {
        const response = await axios.get('/Get');
        Menu.categories = response.data
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
}
</style>
