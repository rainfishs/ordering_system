<template>
    <n-layout>
        <n-layout-header class="page-header">
            <span>學生頁面 學號: {{sId}}</span>
        </n-layout-header>
        

        <NLayoutContent class="main-page">
            <n-tabs
            class="card-tabs"
            default-value="Student"
            size="large"
            animated
            justify-content="space-evenly" 
            type="line"
            >
            <n-tab-pane name="Student" label="選課">
                <n-flex justify="space-around">
                    <n-card title="加選課程" style="width: max-content;">
                    <n-flex>
                        <n-select v-model:value="course_will_add" placeholder="選擇課程" :options="course_options_not_takes"
                                @update:value="getCourseInformation(0)" style="width: 150px; padding-left: 25px;" filterable />
                        <n-popconfirm @positive-click="AddTakesCourse">
                            <template #trigger>
                            <n-button color="#22D9E4">
                                加入 <template #icon><n-icon> <AddCircleOutline/> </n-icon></template>
                            </n-button>
                            </template>
                            加入: {{ course_will_add }}
                        </n-popconfirm>
                    </n-flex>
                    <n-card style="width: 240px; margin-left: 25px;" bordered>
                        課程名稱: {{courseInfomations0.cName}}<br />
                        學分數: {{courseInfomations0.cCredit}}<br />
                        開課教師: {{courseInfomations0.tName}}<br />
                        學生數: {{courseInfomations0.sNum}}<br />
                    </n-card>
                    </n-card>
                    <n-card title="退選課程" style="width: max-content;">
                    <n-flex>
                        <n-select v-model:value="course_will_delete" placeholder="選擇課程" :options="course_options_takes"
                                @update:value="getCourseInformation(1)" style="width: 150px; padding-left: 25px;" filterable />
                        <n-popconfirm @positive-click="DeletetakesCourse">
                            <template #trigger>
                            <n-button color="#ff69b4">
                                刪除 <template #icon><n-icon> <trash/> </n-icon></template>
                            </n-button>
                            </template>
                            刪除: {{ course_will_delete }}
                        </n-popconfirm>
                    </n-flex>
                    <n-card style="width: 240px; margin-left: 25px;" bordered>
                        課程名稱: {{courseInfomations1.cName}}<br />
                        學分數: {{courseInfomations1.cCredit}}<br />
                        開課教師: {{courseInfomations1.tName}}<br />
                        學生數: {{courseInfomations1.sNum}}<br />
                    </n-card>
                    </n-card>
                </n-flex>
                
            </n-tab-pane>
            <n-tab-pane name="Judge" label="分數">

                
                <n-select v-model:value="course_select" placeholder="選擇課程" :options="course_options_takes"
                @update:value="getCourseInformation(2);GetCourseScores();GetCourseFinalScore()" style="width: 150px; padding-left: 25px;" filterable />
                <n-flex>
                <n-card style="width: 240px; margin-left: 25px;" bordered>
                    課程名稱: {{courseInfomations2.cName}}<br />
                    學分數: {{courseInfomations2.cCredit}}<br />
                    開課教師: {{courseInfomations2.tName}}<br />
                    學生數: {{courseInfomations2.sNum}}<br />
                </n-card>
                
                <n-card size="small" style="width: fit-content;" bordered>
                    總成績<br/>
                    {{ score }}
                </n-card>
                </n-flex>
                <n-divider/>
                <n-data-table
                    :columns="Itemscolumns"
                    :data="ItemData"
                    :loading="ItemTableLoading"
                />
                
            </n-tab-pane>

            </n-tabs>
        </NLayoutContent>




        <n-layout-footer class="page-footer">
            made by rainfishs
        </n-layout-footer>
    </n-layout>
</template>

<script setup>
import axios from "axios";
import { onMounted, onBeforeMount, reactive, toRaw, ref, h } from "vue";
import { useDialog, useMessage, NModal, NSelect, NPopover, NRadioGroup, NRadio, NCheckboxGroup, NCheckbox, NDivider, NGrid, NGridItem,NGi, NMenu, NLayout, NLayoutFooter, NLayoutHeader, NLayoutContent, NCard, NButton, NIcon, NInputNumber, NImage, NTabPane, NTabs, NDataTable, NForm, NFormItem, NInput, NFlex, NPopconfirm,NDynamicInput} from 'naive-ui'
import { Fa500Px, TrashAlt } from '@vicons/fa'
import { Trash, CheckmarkCircleOutline,AddCircleOutline } from '@vicons/ionicons5'
const sId = document.getElementById('test-dom').value

const message = useMessage();
const dialog = useDialog();

const formValue = reactive({
    item: {
        iName: '',
        scale: 0,
    },
})
const score = ref(null)
const ItemTableLoading = ref(false)

const course_will_add = ref(null)
const course_will_delete = ref(null)
const course_select = ref(null)

const Course_not_takes = ref([])
const Course_takes = ref([])
const ItemData = ref([])

const course_options_not_takes = ref([])
const course_options_takes = ref([])


const courseInfomations0 = ref(
    {
        cName: "",
        cCredit: "",
        tName: "",
        sNum: "",
    }
)
const courseInfomations1 = ref(
    {
        cName: "",
        cCredit: "",
        tName: "",
        sNum: "",
    }
)
const courseInfomations2 = ref(
    {
        cName: "",
        cCredit: "",
        tName: "",
        sNum: "",
    }
)

const Itemscolumns = [
    {title: '項目名', key: 'iName'},
    {title: '比例', key: 'scale',render(row) {
        return h('span', {}, row.scale * 100 + '%')}},
    {title: '分數', key: 'score'},
]
const transformcourse_to_options = (data) => {
    const newarray = toRaw(data).map((obj) => {
        var rObj = {};
        rObj["label"] = rObj["value"] = obj.cNo;
        return rObj;
    });
    return newarray;
}

const getCourseInformation = async (no) => {
    try{
        if (no == 0) {
            const response = await axios.post('http://localhost/GetCourseInformation',{cNo:course_will_add.value})
            courseInfomations0.value = response.data
        }
        else if (no == 1){
            const response = await axios.post('http://localhost/GetCourseInformation',{cNo:course_will_delete.value})
            courseInfomations1.value = response.data
        }
        else{
            const response = await axios.post('http://localhost/GetCourseInformation',{cNo:course_select.value})
            courseInfomations2.value = response.data
        }
    }
    catch(error){
        console.log(error)
    }
}

const GetCourseNotTakes = async () => { 
    try{
        const response = await axios.post('http://localhost/GetCourseNotTakes',{sId:sId})
        Course_not_takes.value = response.data
        course_options_not_takes.value = transformcourse_to_options(response.data)
    }
    catch(error){
        console.log(error)
    }
}
GetCourseNotTakes()
const GetCourseTakes = async () => { 
    try{
        const response = await axios.post('http://localhost/GetCourseTakes',{sId:sId})
        Course_takes.value = response.data
        course_options_takes.value = transformcourse_to_options(response.data)
    }
    catch(error){
        console.log(error)
    }
}
GetCourseTakes()
const GetCourseScores = async () => { 
    ItemTableLoading.value = true
    try{
        const response = await axios.post('http://localhost/GetCourseScores',{sId:sId,cNo:course_select.value})
        ItemData.value = response.data
        console.log(response.data)
    }
    catch(error){
        console.log(error)
    }
    finally{
        ItemTableLoading.value = false
    }
}
const GetCourseFinalScore = async () => { 
    try{
        const response = await axios.post('http://localhost/GetCourseFinalScore',{sId:sId,cNo:course_select.value})
        score.value = response.data[0].finalScore
    }
    catch(error){
        console.log(error)
    }
}
const DeletetakesCourse = async () => { 
    if (course_will_delete.value == null) {
        message.error("請選擇課程")
        return
    }
    try{
        const response = await axios.post('http://localhost/DeleteTakesCourse',{sId:sId,cNo:course_will_delete.value})
        if(response.data == "success"){
            message.success("刪除成功")
            GetCourseNotTakes()
            GetCourseTakes()
            course_select.value = null
            course_will_delete.value = null
        }
        else{
            message.error("刪除失敗")
        }
    }
    catch(error){
        console.log(error)
    }
}
const AddTakesCourse = async () => { 
    if (course_will_add.value == null) {
        message.error("請選擇課程")
        return
    }
    try{
        const response = await axios.post('http://localhost/AddTakesCourse',{sId:sId,cNo:course_will_add.value})
        if(response.data == "success"){
            message.success("加入成功")
            GetCourseNotTakes()
            GetCourseTakes()
        }
        else{
            message.error("加入失敗")
        }
    }
    catch(error){
        console.log(error)
    }
}







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
