<template>
    <n-config-provider :theme=darkTheme>
        <n-dialog-provider>
            <n-message-provider>
                <A />
            </n-message-provider>
        </n-dialog-provider>
    </n-config-provider>
</template>

<style scoped>
</style>

<script setup>
import A from '../../components/Teacher.vue'
import { NMessageProvider, NDialogProvider,NConfigProvider,darkTheme } from 'naive-ui'
</script>