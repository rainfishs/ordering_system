<template>
    <n-config-provider :theme=darkTheme>
        <n-dialog-provider>
            <n-message-provider>
                <B />
            </n-message-provider>
        </n-dialog-provider>
    </n-config-provider>
</template>

<style scoped></style>

<script setup>
import B from '../../components/b.vue'
import { NMessageProvider, NDialogProvider,NConfigProvider,darkTheme } from 'naive-ui'

</script>