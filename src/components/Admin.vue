<template>
    <n-layout>
        <n-layout-header class="page-header">
            <span>學校管理頁面</span>
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
            <n-tab-pane name="Student" label="學生">
                <n-form
                    ref="formRef"
                    inline
                    :label-width="80"
                    :model="formValue"
                    >
                    <n-form-item label="學號">
                    <n-input v-model:value="formValue.student.sId" placeholder="輸入學號" />
                    </n-form-item>
                    <n-form-item label="姓名">
                    <n-input v-model:value="formValue.student.sName" placeholder="輸入姓名" />
                    </n-form-item>
                    <n-form-item>
                    <n-button attr-type="button" @click="handleAddStudent">
                        新增
                    </n-button>
                    </n-form-item>
                </n-form>
                <n-flex>
                    <n-select v-model:value="student" placeholder="選擇人" :options="student_options"
                            style="width: 150px; padding-left: 25px;" filterable />
                    <n-popconfirm @positive-click="deleteStudent">
                        <template #trigger>
                        <n-button color="#ff69b4">
                            刪除 <template #icon><n-icon> <trash/> </n-icon></template>
                        </n-button>
                        </template>
                        刪除: {{ student }}
                    </n-popconfirm>
                    <n-popconfirm @positive-click="updateStudent">
                        <template #trigger>
                        <n-button color="#d9ff00">
                            更新 <template #icon><n-icon> <CheckmarkCircleOutline/> </n-icon></template>
                        </n-button>
                        </template>
                        {{ student }} 姓名設定為: {{ formValue.student.sName }}
                    </n-popconfirm>
                </n-flex>
                <n-data-table
                    :columns="Studentcolumns"
                    :data="StudentTableData"
                />
            </n-tab-pane>
            <n-tab-pane name="Teacher" label="老師">
                <n-form
                    ref="formRef"
                    inline
                    :label-width="80"
                    :model="formValue"
                    >
                    <n-form-item label="老師識別號">
                    <n-input v-model:value="formValue.teacher.tId" placeholder="輸入識別號" />
                    </n-form-item>
                    <n-form-item label="姓名">
                    <n-input v-model:value="formValue.teacher.tName" placeholder="輸入姓名" />
                    </n-form-item>
                    <n-form-item label="單位">
                    <n-dynamic-input
                        v-model:value="formValue.teacher.dName"
                        placeholder="請輸入單位名"
                        :min="1"
                    />
                    </n-form-item>
                    <n-form-item>
                    <n-button attr-type="button" @click="handleAddTeacher">
                        新增
                    </n-button>
                    </n-form-item>
                </n-form>
                <n-flex>
                    <n-select v-model:value="teacher" placeholder="選擇人" :options="teacher_options"
                            style="width: 150px; padding-left: 25px;" filterable />
                    <n-popconfirm @positive-click="deleteTeacher">
                        <template #trigger>
                        <n-button color="#ff69b4">
                            刪除 <template #icon><n-icon> <trash/> </n-icon></template>
                        </n-button>
                        </template>
                        刪除: {{ teacher }}
                    </n-popconfirm>
                </n-flex>
                <n-data-table
                    :columns="Teachercolumns"
                    :data="TeacherTableData"
                />
            </n-tab-pane>
            <n-tab-pane name="Course" label="課程">
                <n-form
                    ref="formRef"
                    inline
                    :label-width="80"
                    :model="formValue"
                    >
                    <n-form-item label="編號">
                    <n-input v-model:value="formValue.course.cNo" placeholder="輸入編號" />
                    </n-form-item>
                    <n-form-item label="名稱">
                    <n-input v-model:value="formValue.course.cName" placeholder="輸入名稱" />
                    </n-form-item>
                    <n-form-item label="學分">
                    <n-input v-model:value="formValue.course.cCredit" placeholder="輸入學分" />
                    </n-form-item>
                    <n-form-item>
                    <n-button attr-type="button" @click="handleAddCourse">
                        新增
                    </n-button>
                    </n-form-item>
                </n-form>
                <n-flex>
                    <n-select v-model:value="course" placeholder="選擇課程" :options="course_options"
                            style="width: 150px; padding-left: 25px;" filterable />
                    <n-popconfirm @positive-click="deleteCourse">
                        <template #trigger>
                        <n-button color="#ff69b4">
                            刪除 <template #icon><n-icon> <trash/> </n-icon></template>
                        </n-button>
                        </template>
                        刪除: {{ course }}
                    </n-popconfirm>
                </n-flex>
                <n-data-table
                    :columns="Coursecolumns"
                    :data="CourseTableData"
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
import { onBeforeMount, reactive, toRaw, ref } from "vue";
import { useDialog, useMessage, NModal, NSelect, NPopover, NRadioGroup, NRadio, NCheckboxGroup, NCheckbox, NDivider, NGrid, NGridItem, NMenu, NLayout, NLayoutFooter, NLayoutHeader, NLayoutContent, NCard, NButton, NIcon, NInputNumber, NImage, NTabPane, NTabs, NDataTable, NForm, NFormItem, NInput, NFlex, NPopconfirm,NDynamicInput} from 'naive-ui'
import { TrashAlt } from '@vicons/fa'
import { Trash, CheckmarkCircleOutline } from '@vicons/ionicons5'

const message = useMessage();
const dialog = useDialog();

const student = ref(null)
const teacher = ref(null)
const course = ref(null)
const Studentcolumns = [
    {title: '學號', key: 'sId'},
    {title: '姓名', key: 'sName'},
]
const Teachercolumns = [
    {title: '老師識別號', key: 'tId'},
    {title: '姓名', key: 'tName'},
    {title: '單位', key: 'dName'},
]
const Coursecolumns = [
    {title: '編號', key: 'cNo'},
    {title: '名稱', key: 'cName'},
    {title: '學分', key: 'cCredit'},
]
const StudentTableData = ref([])
const TeacherTableData = ref([])
const CourseTableData = ref([])
const formValue = reactive({
    student: {
        sId: '',
        sName: '',
    },
    teacher: {
        tId: '',
        tName: '',
        dName: [""],
    },
    course: {
        cNo: '',
        cName: '',
        cCredit: '',
    }
})
const student_options = ref([])
const teacher_options = ref([])
const course_options = ref([])

const transformstudentData_to_options = (data) => {
    const newarray = toRaw(data).map((obj) => {
        var rObj = {};
        rObj["label"] = rObj["value"] = obj.sId;
        return rObj;
    });
    return newarray;
}
const transformteacherData_to_options = (data) => {
    const newarray = toRaw(data).map((obj) => {
        var rObj = {};
        rObj["label"] = rObj["value"] = obj.tId;
        return rObj;
    });
    return newarray;
}
const transformcourseData_to_options = (data) => {
    const newarray = toRaw(data).map((obj) => {
        var rObj = {};
        rObj["label"] = rObj["value"] = obj.cNo;
        return rObj;
    });
    return newarray;
}
const GetStudent = async () => { 
    try{
        const response = await axios.get('http://localhost/GetStudent')
        StudentTableData.value = response.data
        student_options.value = transformstudentData_to_options(response.data)
    }
    catch(error){
        console.log(error)
    }
}
GetStudent()
const GetTeacher = async () => { 
    try{
        const response = await axios.get('http://localhost/GetTeacher')
        TeacherTableData.value = response.data
        teacher_options.value = transformteacherData_to_options(response.data)
    }
    catch(error){
        console.log(error)
    }
}
GetTeacher()
const GetCourse = async () => { 
    try{
        const response = await axios.get('http://localhost/GetCourse')
        CourseTableData.value = response.data
        course_options.value = transformcourseData_to_options(response.data)
    }
    catch(error){
        console.log(error)
    }
}
GetCourse()

const handleAddStudent = async () => {
    if (formValue.student.sId === '' || formValue.student.sName === '') {
        message.error('請輸入完整資訊')
        return
    }
    try{
        const response = await axios.post('http://localhost/AddStudent', formValue.student)
        if(response.data === 'success'){
            message.success('新增成功')
            GetStudent()
        }
        else{
            message.error('新增失敗')
        }
    }
    catch(error){
        console.log(error)
    }
}
const handleAddTeacher = async () => {
    if (formValue.teacher.tId === '' || formValue.teacher.tName === '' || formValue.teacher.dName.includes("")) {
        message.error('請輸入完整資訊')
        return
    }
    try{
        const response = await axios.post('http://localhost/AddTeacher', formValue.teacher)
        if(response.data === 'success'){
            message.success('新增成功')
            GetTeacher()
        }
        else{
            message.error('新增失敗')
        }
    }
    catch(error){
        console.log(error)
    }
}
const handleAddCourse = async () => {
    if (formValue.course.cNo === '' || formValue.course.cName === '') {
        message.error('請輸入完整資訊')
        return
    }
    try{
        const response = await axios.post('http://localhost/AddCourse', formValue.course)
        if(response.data === 'success'){
            message.success('新增成功')
            GetCourse()
        }
        else{
            message.error('新增失敗')
        }
    }
    catch(error){
        console.log(error)
    }
}

const deleteStudent = async () => {
    if (student.value === null) {
        message.error('請選擇學號')
        return
    }
    try{
        const response = await axios.post('http://localhost/DeleteStudent', {sId: student.value})
        if(response.data === 'success'){
            message.success('刪除成功')
            GetStudent()
        }
        else{
            message.error('刪除失敗')
        }
    }
    catch(error){
        console.log(error)
    }
}
const deleteTeacher = async () => {
    if (teacher.value === null) {
        message.error('請選擇識別號')
        return
    }
    try{
        const response = await axios.post('http://localhost/DeleteTeacher', {tId: teacher.value})
        if(response.data === 'success'){
            message.success('刪除成功')
            GetTeacher()
        }
        else{
            message.error('刪除失敗')
        }
    }
    catch(error){
        console.log(error)
    }
}
const deleteCourse = async () => {
    if (course.value === null) {
        message.error('請選擇課程')
        return
    }
    try{
        const response = await axios.post('http://localhost/DeleteCourse', {cNo: course.value})
        if(response.data === 'success'){
            message.success('刪除成功')
            GetCourse()
        }
        else{
            message.error('刪除失敗')
        }
    }
    catch(error){
        console.log(error)
    }
}
const updateStudent = async () => {
    if (formValue.student.sName === '' || student.value === null) {
        message.error('請輸入名字或選擇學號')
        return
    }
    try{
        const response = await axios.post('http://localhost/UpdateStudent', {sId: student.value, sName: formValue.student.sName})
        if(response.data === 'success'){
            message.success('更新成功')
            GetStudent()
        }
        else{
            message.error('更新失敗')
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
