<template>
    <n-config-provider :theme=darkTheme>
        <n-layout>
            <n-layout-header class="page-header">
                <span>綜合業務組AD106點餐系統(統計午餐系統) v0.13</span>
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


                <n-divider title-placement="right">

                    
                    <n-image height="50" src="/GetImgb" preview-src="/GetImg" show-toolbar-tooltip />
                    <n-select v-model:value="stuff" placeholder="輸入或選擇人員" :options="stuffs" style="width: 150px; padding-left: 25px;"
                        filterable tag />
                </n-divider>



                <n-grid cols="1 600:2 1200:3 1600:4" x-gap="10" y-gap="20">
                    <n-grid-item v-for="(meal, index) in chosenMeal">
                        <n-card :title="meal.name" header-style="font-size:30px" content-style="font-size:26px">
                            <div v-for="option in meal.options">
                                {{ option.name }}
                                <n-checkbox-group v-if="option.type === 'checkbox'" v-model:value="meal['addition']">
                                    <n-checkbox v-for="item in option.items" :value="item" :label="item"
                                        style="font-size: 26px;" />
                                </n-checkbox-group>
                                <n-radio-group v-else v-model:value="meal[option.name]">
                                    .
                                    <n-radio v-for="item in option.items" :value="item" :label="item"
                                        style="font-size: 26px;" />
                                </n-radio-group>
                            </div>
                            <n-input-number v-model:value="meal['amount']" placeholder="數量" min="1" size="large"
                                button-placement="both" style="width: 30%;text-align: center;float: right;" allow-input
                                show-button />
                            <!--{{ meal }}-->
                            <template #header-extra>
                                <n-popover trigger="hover">
                                    <template #trigger>
                                        <n-button @click="chosenMeal.splice(index, 1)" text style="font-size: 24px">
                                            <n-icon>
                                                <trash-alt />
                                            </n-icon>
                                        </n-button>
                                    </template>
                                    <span style="font-size: 22px;">刪除此項目</span>
                                </n-popover>
                            </template>
                        </n-card>
                    </n-grid-item>
                </n-grid>
                <n-button @click="sendMeal" icon-placement="right" color="#ff69b4"
                    style="float: right; margin: 20px; font-size: 20px;">
                    <span>傳送</span>
                    <template #icon>
                        <n-icon>
                            <send />
                        </n-icon>
                    </template>
                </n-button>

            </NLayoutContent>
            <n-layout-footer class="page-footer">
                made by rainfishs
            </n-layout-footer>
        </n-layout>
    </n-config-provider>
</template>

<script setup>
import axios from "axios";
import { onBeforeMount, reactive, toRaw, ref } from "vue";
import { NSelect, NPopover, NRadioGroup, NRadio, NCheckboxGroup, NCheckbox, NDivider, NConfigProvider, darkTheme, NGrid, NGridItem, NMenu, NLayout, NLayoutFooter, NLayoutHeader, NLayoutContent, NCard, NButton, NIcon, NInputNumber, NImage } from 'naive-ui'
import { TrashAlt } from '@vicons/fa'
import { Send } from '@vicons/ionicons5'
const chosenMeal = ref([])
const stuff = ref(null)
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
    //console.log(key);
    //console.log(getoptions(key));
    let obj = Object.assign({}, getoptions(key))
    obj['amount'] = 1
    chosenMeal.value.push(obj)

    //console.log(chosenMeal.value);
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

const sendMeal = () => {
    console.log(toRaw(chosenMeal.value));
    console.log(toRaw(stuff.value));
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
const getMenu = async () => {
    try {
        const response = await axios.get('/GetMenu');
        Menu.categories = response.data
    } catch (error) {
        console.error(error);
    }
}
getMenu()
const stuffs = ref([])

const getStuffs = async () => {
    try {
        const response = await axios.get('/GetStuffs');
        stuffs.value = response.data
        
    } catch (error) {
        console.error(error);
    }
    finally{
        stuffs.value = stuffs.value.map((obj) => {
            var rObj = {};
            rObj["label"] = rObj["value"] = obj;
            return rObj;
        });
    }
}
getStuffs()



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
