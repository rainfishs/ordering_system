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
                <n-grid cols="1 600:2 1200:3 1600:4" x-gap="10" y-gap="20">
                    <n-grid-item v-for="(meal,index) in chosenMeal">
                        <n-card :title="meal.name" header-style="font-size:30px">
                            <div v-for="option in meal.options">
                                {{ option.name }}
                                <n-checkbox-group v-if="option.type === 'checkbox'" v-model:value="meal.addition">
                                    <n-checkbox v-for="item in option.items" :value="item" :label="item" />
                                </n-checkbox-group>
                                <n-radio-group v-else v-model:value="meal[option.name]">
                                    <n-radio v-for="item in option.items" :value="item" :label="item" />
                                </n-radio-group>
                            </div>
                            {{ meal }}
                            <template #header-extra>
                                <n-button @click="chosenMeal.splice(index,1)" text style="font-size: 24px">
                                    <n-icon>
                                        <trash-alt />
                                    </n-icon>
                                </n-button>
                            </template>
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
import { NRadioGroup, NRadio, NCheckboxGroup, NCheckbox, NDivider, NConfigProvider, darkTheme, NGrid, NGridItem, NMenu, NLayout, NLayoutFooter, NLayoutHeader, NLayoutContent, NCard, NButton , NIcon } from 'naive-ui'
import {TrashAlt} from '@vicons/fa'

const chosenMeal = ref([])
const resetmenubutton = ref(false)

const getoptions = (key) => {
    //console.log(Menu.categories);
    for (let i = 0; i < Menu.categories.length; i++) {
        for (let j = 0; j < Menu.categories[i].items.length; j++) {
            if (Menu.categories[i].items[j].name === key) {
                return Menu.categories[i].items[j]
            }
        }
    }
}

const handleUpdateValue = (key) => {
    console.log(key);
    console.log(getoptions(key));
    chosenMeal.value.push(Object.assign({}, getoptions(key)))
    console.log(chosenMeal.value);
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

const Menu = {
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
                        { name: "加點", type: "checkbox", items: ["焗烤", "(焗烤)加更多起司"] },
                        { name: "家", type: "checkbox", items: ["只因"] }
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
    ]
}
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
