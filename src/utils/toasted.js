import { ElMessage } from 'element-plus'
export default {
    success(message){
        ElMessage({
            message: message,
            type: 'success',
        })
    },
    warning(message){
        ElMessage({
            message: message,
            type: 'warning',
        })
    },
    error(message){
        ElMessage.error(message)
    },
    message(message){
        ElMessage(message)
    }
}
