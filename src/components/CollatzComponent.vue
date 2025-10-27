<template>
  <h1>Collatz</h1>
  <label>Introduzca número:</label>
    <!-- va a dar error por el v-model -->
   <input type="number" v-model="numero"/>
   <button @click="generarCollatz()">Insertar</button>
   <ul>
    <li v-for="num in numerosCollatz" :key="num" v-html="$filters.evaluarNums(num)"></li>
   </ul>
</template>

<script>
export default {
name:"CollatzComponent",
data(){
    return{
        numero:0,
        numerosCollatz:[]
    }
},

methods:{
    generarCollatz(){
        this.numerosCollatz=[]
        let num=this.numero
         while(num!=1){
            if(num%2==0){//si es par 
                num = num / 2;
            }else{
                num=num*3 +1;
            }
            this.numerosCollatz.push(num);
        }
    }
}

}
</script>

<style>

</style>