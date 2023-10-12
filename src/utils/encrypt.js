// 假设你已经获取到了后端提供的RSA公钥，存储在publicKey变量中
import store from "@/store/index";
import JSEncrypt from 'jsencrypt';


export default {
    encrypt(data){
        const encrypt = new JSEncrypt();
        encrypt.setPublicKey(store.state.systemConfig.pubKey);
// 使用公钥进行加密
        return  encrypt.encrypt(data);
    }
}

