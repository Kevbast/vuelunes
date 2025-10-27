import { createApp } from 'vue'
import App from './App.vue'
import router from './Router'

var app=createApp(App)
app.config.globalProperties.$filters={
    //CREAMOS LOS MÉTODOS QUE DEVOLVERAN UN RESULTADO
    evaluarNums(num){
        let data="";
        if(num%2==0){
            data= "<h4 style='color:green'>Par:"+ num+"</h4>";
        }else{
            data= "<h4 style='color:red'>Impar:"+ num+"</h4>";
        }
        return data;
    },
    getOperacion(num,multi){
            
            return num +"*"+ multi ;
        },
    getResultado(num,multi){

        return num*multi;    
        }
}

app.use(router)
app.mount('#app')
