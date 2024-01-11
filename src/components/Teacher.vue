<template>
    <n-layout>
        <n-layout-header class="page-header">
            <span>老師頁面 職員編號: {{tId}}</span>
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
                    <n-card title="新增任教課程" style="width: max-content;">
                    <n-flex>
                        <n-select v-model:value="course_will_add" placeholder="選擇課程" :options="course_options_not_teaches"
                                style="width: 150px; padding-left: 25px;" filterable />
                        <n-popconfirm @positive-click="AddTeachesCourse">
                            <template #trigger>
                            <n-button color="#22D9E4">
                                加入 <template #icon><n-icon> <AddCircleOutline/> </n-icon></template>
                            </n-button>
                            </template>
                            加入: {{ course_will_add }}
                        </n-popconfirm>
                    </n-flex>
                    <n-card style="width: 240px; margin-left: 25px;" bordered>
                        <span>課程名稱: {{ getCourseInformation(course_will_add).name }}</span><br />
                        <span>學分數: {{ getCourseInformation(course_will_add).cCredit }}</span>
                    </n-card>
                    </n-card>
                    <n-card title="刪除已任教課程" style="width: max-content;">
                    <n-flex>
                        <n-select v-model:value="course_will_delete" placeholder="選擇課程" :options="course_options_teaches"
                                style="width: 150px; padding-left: 25px;" filterable />
                        <n-popconfirm @positive-click="DeleteTeachesCourse">
                            <template #trigger>
                            <n-button color="#ff69b4">
                                刪除 <template #icon><n-icon> <trash/> </n-icon></template>
                            </n-button>
                            </template>
                            刪除: {{ course_will_delete }}
                        </n-popconfirm>
                    </n-flex>
                    <n-card style="width: 240px; margin-left: 25px;" bordered>
                        <span>課程名稱: {{ getCourseInformation(course_will_delete).name }}</span><br />
                        <span>學分數: {{ getCourseInformation(course_will_delete).cCredit }}</span>
                    </n-card>
                    </n-card>
                </n-flex>
                
            </n-tab-pane>
            <n-tab-pane name="Judge" label="評分">
                <n-grid x-gap="12" :cols="2">
                    <n-gi>
                        <n-flex justify="center">
                        <span>
                        <n-select v-model:value="course_select" placeholder="選擇課程" :options="course_options_teaches"
                        @update:value="GetItem();GetTakes();item_select= null;GetCourseStudent();select_student=null;GetCourseItem()" style="width: 150px; padding-left: 25px;" filterable />
                        <n-card style="width: 240px; margin-left: 25px;" bordered>
                            <span>課程名稱: {{ getCourseInformation(course_select).name }}</span><br />
                            <span>學分數: {{ getCourseInformation(course_select).cCredit }}</span>
                        </n-card>
                        </span>
                        </n-flex>
                    </n-gi>
                    <n-gi style="padding-right: 25px;">
                        <n-card title="新增計分項目" style="width: max-content; margin-left: 25px;" bordered>
                            
                            <n-form
                                ref="formRef"
                                inline
                                :label-width="80"
                                :model="formValue"
                                >
                                <n-form-item label="項目名稱">
                                <n-input v-model:value="formValue.item.iName" placeholder="輸入名稱" />
                                </n-form-item>
                                <n-form-item label="占比">
                                <n-input v-model:value="formValue.item.scale" placeholder="輸入比例0~1" />
                                </n-form-item>
                                <n-form-item>
                                <n-button attr-type="button" @click="AddItem">
                                    新增
                                </n-button>
                                </n-form-item>
                            </n-form>
                        </n-card>
                    </n-gi>
                    

                </n-grid>
                
                <n-tabs
                class="card-tabs"
                default-value="Finalscore"
                size="large"
                animated
                justify-content="space-evenly" 
                type="line"
                >
                <n-tab-pane name="Finalscore" label="學期成績">
                    <n-data-table
                    :columns="Takescolumns"
                    :data="TakesTableData"
                    />
                </n-tab-pane>
                <n-tab-pane name="Items" label="計分項目">
                    <n-flex justify="space-around">
                        <n-flex justify="center">
                        <n-select v-model:value="item_select" placeholder="選擇計分項目" :options="item_options"
                            @update:value="GetCourseItem()" style="width: 165px;" filterable />
                        <n-popconfirm @positive-click="DeleteItem();item_select=null">
                            <template #trigger>
                            <n-button color="#ff69b4">
                                刪除 <template #icon><n-icon> <trash/> </n-icon></template>
                            </n-button>
                            </template>
                            刪除: {{ item_select }}
                        </n-popconfirm>
                        </n-flex>
                        <n-flex justify="end">
                            <n-select v-model:value="select_student" placeholder="選擇學生" :options="student_options"
                                style="width: 165px;" filterable />
                            <n-input-number v-model:value="score" :min="0" :max="100" placeholder="分數" style="width: 60px;" :show-button="false"/>
                            <n-popconfirm @positive-click="AddCourseItem">
                                <template #trigger>
                                <n-button color="#22D9E4">
                                    新增 <template #icon><n-icon> <AddCircleOutline/> </n-icon></template>
                                </n-button>
                                </template>
                                新增: {{ select_student }} 分數: {{ score }}
                            </n-popconfirm>
                        </n-flex>
                    </n-flex>
                    <n-divider/>
                    <n-data-table
                    :columns="CourseItemcolumns"
                    :data="CourseItemTableData"
                    />
                </n-tab-pane>
                

                </n-tabs>
                
                
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
const tId = document.getElementById('test-dom').value

const message = useMessage();
const dialog = useDialog();

const formValue = reactive({
    item: {
        iName: '',
        scale: '',
    },
})
const score = ref(null)

const course_will_add = ref(null)
const course_will_delete = ref(null)
const course_select = ref(null)
const item_select = ref(null)
const select_student = ref(null)

const Course_not_teaches = ref([])
const Course_teaches = ref([])
const ItemData = ref([])
const TakesTableData = ref([])
const CourseItemTableData = ref([])

const course_options_not_teaches = ref([])
const course_options_teaches = ref([])
const item_options = ref([])
const student_options = ref([]) //有修某堂課的學生

const Takescolumns = [
    {title: '學號', key: 'sId'},
    {title: '姓名', key: 'sName'},
    {title: '學期成績', key: 'finalScore', render(row,index){return h(NInputNumber,{onUpdateValue(v) {TakesTableData.value[index].finalScore = v},defaultValue:row.finalScore,max:100,min:0,showButton:false,style:"width: 60px;"})}},
    {title: '變更成績', key: 'update', render(row,index){return h(NButton,{color:"#22D9E4",onClick:()=>{UpdateFinalScore(course_select.value,row.sId,TakesTableData.value[index].finalScore)}},()=>{return "更新"})}},
]
const CourseItemcolumns = [
    {title: '學號', key: 'sId'},
    {title: '姓名', key: 'sName'},
    {title: '成績', key: 'Score', render(row,index){return h(NInputNumber,{onUpdateValue(v) {CourseItemTableData.value[index].Score = v},defaultValue:row.score,max:100,min:0,showButton:false,style:"width: 60px;"})}},
    {title: '變更成績', key: 'update', render(row,index){return h(NButton,{color:"#22D9E4",onClick:()=>{UpdateSubmit(course_select.value,item_select.value,row.sId,CourseItemTableData.value[index].Score)}},()=>{return "更新"})}},
]

const transformcourse_to_options = (data) => {
    const newarray = toRaw(data).map((obj) => {
        var rObj = {};
        rObj["label"] = rObj["value"] = obj.cNo;
        return rObj;
    });
    return newarray;
}
const transformitem_to_options = (data) => {
    const newarray = toRaw(data).map((obj) => {
        var rObj = {};
        rObj["label"] = obj.iName + "( "+ obj.scale * 100 + "% )";
        rObj["value"] = obj.iName;
        return rObj;
    });
    return newarray;
}
const transformstudent_to_options = (data) => {
    const newarray = toRaw(data).map((obj) => {
        var rObj = {};
        rObj["label"] = rObj["value"] = obj.sId;
        return rObj;
    });
    return newarray;
}
const getCourseInformation = (cNo) => {
    //從Course_teaches和Course_not_teaches找

    var course
    if (Course_not_teaches.value.length > 0) {
        course = Course_not_teaches.value.find((course) => course.cNo === cNo);
    }
    if (!course && Course_teaches.value.length > 0) {
        course = Course_teaches.value.find((course) => course.cNo === cNo);
    }
    
    if (!course) {
        return { name: "未選擇或不存在", cCredit: "未知" };
    }
    return { name: course.cName, cCredit: course.cCredit };
}
const GetCourseNotTeaches = async () => { 
    try{
        const response = await axios.post('http://localhost/GetCourseNotTeaches',{tId:tId})
        Course_not_teaches.value = response.data
        course_options_not_teaches.value = transformcourse_to_options(response.data)
    }
    catch(error){
        console.log(error)
    }
}
GetCourseNotTeaches()
const GetCourseTeaches = async () => { 
    try{
        const response = await axios.post('http://localhost/GetCourseTeaches',{tId:tId})
        Course_teaches.value = response.data
        course_options_teaches.value = transformcourse_to_options(response.data)
    }
    catch(error){
        console.log(error)
    }
}
GetCourseTeaches()
const GetItem = async () => { 
    try{
        const response = await axios.post('http://localhost/GetItem',{cNo:course_select.value})
        ItemData.value = response.data
        item_options.value = transformitem_to_options(response.data)
    }
    catch(error){
        console.log(error)
    }
}
//靠cNo找takes所有修這門課的學生列出其學號姓名和學期成績(takes.finalScore)
const GetTakes = async () => { 
    try{
        const response = await axios.post('http://localhost/GetTakes',{cNo:course_select.value})
        TakesTableData.value = response.data
    }
    catch(error){
        console.log(error)
    }
}
//依所選課程及其計分項目，列出所有修這門課的學生的學號姓名及這個項目成績
const GetCourseItem = async () => { 
    try{
        const response = await axios.post('http://localhost/GetSubmit',{cNo:course_select.value,iName:item_select.value})
        CourseItemTableData.value = response.data
    }
    catch(error){
        console.log(error)
    }
}
GetCourseItem()
//查詢所有修這門課的學生的學號姓名
const GetCourseStudent = async () => { 
    try{
        const response = await axios.post('http://localhost/GetCourseStudent',{cNo:course_select.value})
        student_options.value = transformstudent_to_options(response.data)
    }
    catch(error){
        console.log(error)
    }
}
const AddTeachesCourse = async () => { 
    if (course_will_add.value == null) {
        message.error("請選擇課程")
        return
    }
    try{
        const response = await axios.post('http://localhost/AddTeachesCourse',{tId:tId,cNo:course_will_add.value})
        if(response.data == "success"){
            message.success("加入成功")
            GetCourseNotTeaches()
            GetCourseTeaches()
        }
        else{
            message.error("加入失敗")
        }
    }
    catch(error){
        console.log(error)
    }
}

const AddItem = async () => { 
    if (formValue.item.iName == "" || formValue.item.scale == "" || course_select.value == null) {
        message.error("請輸入完整資訊")
        return
    }
    try{
        const response = await axios.post('http://localhost/AddItem',{cNo:course_select.value,iName:formValue.item.iName,scale:formValue.item.scale})
        if(response.data == "success"){
            message.success("新增成功")
            GetItem()
        }
        else{
            message.error("新增失敗")
        }
    }
    catch(error){
        console.log(error)
    }
}
const AddCourseItem = async () => { 
    if (select_student.value == null || item_select.value == null || score.value == null || course_select.value == null) {
        message.error("請選擇課程/項目/學生/分數")
        return
    }
    try{
        const response = await axios.post('http://localhost/AddSubmit',{cNo:course_select.value,iName:item_select.value,sId:select_student.value,score:score.value})
        if(response.data == "success"){
            message.success("新增成功")
            GetCourseItem()
        }
        else{
            message.error("新增失敗")
        }
    }
    catch(error){
        console.log(error)
    }
}
const DeleteTeachesCourse = async () => { 
    if (course_will_delete.value == null) {
        message.error("請選擇課程")
        return
    }
    try{
        const response = await axios.post('http://localhost/DeleteTeachesCourse',{tId:tId,cNo:course_will_delete.value})
        if(response.data == "success"){
            message.success("刪除成功")
            GetCourseNotTeaches()
            GetCourseTeaches()
        }
        else{
            message.error("刪除失敗")
        }
    }
    catch(error){
        console.log(error)
    }
}
const DeleteItem = async () => { 
    if (item_select.value == null || course_select.value == null) {
        message.error("請選擇課程/項目")
        return
    }
    try{
        const response = await axios.post('http://localhost/DeleteItem',{cNo:course_select.value,iName:item_select.value})
        if(response.data == "success"){
            message.success("刪除成功")
            GetItem()
        }
        else{
            message.error("刪除失敗")
        }
    }
    catch(error){
        console.log(error)
    }
}
const UpdateFinalScore = async (cNo,sId,finalScore) => {
    //console.log(cNo,sId,finalScore)
    try{
        const response = await axios.post('http://localhost/UpdateFinalScore',{cNo:cNo,sId:sId,finalScore:finalScore})
        if(response.data == "success"){
            message.success("更新成功")
            GetTakes()
        }
        else{
            message.error("更新失敗")
        }
    }
    catch(error){
        console.log(error)
    }
}
const UpdateSubmit = async (cNo,iName,sId,score) => {
    //console.log(cNo,iName,sId,score)
    try{
        const response = await axios.post('http://localhost/UpdateSubmit',{cNo:cNo,iName:iName,sId:sId,score:score})
        if(response.data == "success"){
            message.success("更新成功")
            GetCourseItem()
        }
        else{
            message.error("更新失敗")
        }
    }
    catch(error){
        console.log(error)
    }
}
//用來裝從資料庫撈出來的任意資訊的容器 






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
