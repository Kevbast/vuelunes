<template>
  <h1>Collatz</h1>
  <label>Introduzca número:</label>
    <!-- va a dar error por el v-model -->
   <input type="number" v-model="numero"/>
   <button @click="collatz()">Insertar</button>
   <ul>
    <li v-for="num in nums" :key="num" v-html="$filters.evaluarNums(num)"></li>
   </ul>
</template>

<script>
export default {
name:"CollatzComponent",
data(){
    return{
        numero:0,
        nums:[]
    }
},

methods:{
    collatz(){
        this.nums=[]
        let num=this.numero
         while(num!=1){
            if(num%2==0){//si es par 
                num = num / 2;
            }else{
                num=num*3 +1;
            }
            this.nums.push(num);
        }
    }
}

}
</script>

<style>

</style>