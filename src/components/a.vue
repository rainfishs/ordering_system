<template>
    <n-layout>
        <n-layout-header class="page-header">
            Header Header Header
        </n-layout-header>
        <NLayoutContent class="main-page">
            <div>
                <button @click="getData">Get</button>
                <span>{{jojo}}</span>
                <button @click="setData">Set</button>
            </div>
            <n-space>
                
                <n-button>Default</n-button>
                <n-button type="tertiary">
                    Tertiary
                </n-button>
                <n-button type="primary">
                    Primary
                </n-button>
                
                <n-dropdown trigger="click" :options="options" @select="handleSelect">
                    <n-button type="info">
                        Info
                    </n-button>
                </n-dropdown>

                <n-button type="success">
                    Success
                </n-button>
                <n-button type="warning">
                    Warning
                </n-button>
                <n-button type="error">
                    Error
                </n-button>
            </n-space>
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

const message = useMessage();
const options= [
        {
          label: "Marina Bay Sands",
          key: "Marina Bay Sands",
          disabled: true
        },
        {
          label: "Brown's Hotel, London",
          key: "Brown's Hotel, London"
        },
        {
          label: "Atlantis Bahamas, Nassau",
          key: "Atlantis Bahamas, Nassau"
        },
        {
          label: "The Beverly Hills Hotel, Los Angeles",
          key: "The Beverly Hills Hotel, Los Angeles"
        }
      ]
const handleSelect = (key)=> {
message.info(String(key));
}
let jojo = ref('none')
const getData = () => {
    axios.get('/Get').then((res) => {
        jojo.value=res.data
    })
}
const setData = () => {
    axios.post('/Set', {
        firstName: 'Fred',     
        lastName: 'Flintstone'}
    )
}

</script>


<style scoped>
.main-page {height: calc(100vh  - 45px);
            background-color: rgb(42, 42, 42);}
.page-header {background-color: rgb(42, 42, 42);}
.page-footer {background-color: rgb(3, 52, 26);}
</style>
