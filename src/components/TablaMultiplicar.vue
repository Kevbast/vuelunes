<template>
  <div>
    <h1>TABLA DE MULTIPLICAR CON MÉTODO</h1>
    <label>Introduzca número:</label>
    <!-- va a dar error por el v-model -->
   <input type="number" v-model="numero"/>
   <button @click="generarTablaMultiplicar()">Insertar</button>
    <ul>
        <li>Numero !! resultado</li>
        <li v-for="num in numeros" :key="num">{{ num }}</li>
    </ul>

    <h1>TABLA DE MULTIPLICAR CON DIRECTIVAS</h1>
    <input type="number" v-model="numero2"/>
    <ul v-if="numero2!=0">
        <li v-for="n in 10 " :key="n">Operacion:{{ numero2 }}X{{ n }}, Resultado:{{ numero2 * n }}</li>
    </ul>

   <h1>TABLA DE MULTIPLICAR CON FILTERS</h1>
    <input type="number" v-model="numeroFilter"/>
   <table border="1">
    <thead>
        <tr>
            <th>Multiplicación:</th>
            <th>RESULTADO:</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="n in 10" :key="n">
            <td v-html="$filters.getOperacion(numeroFilter,n)"></td>
            <td v-html="$filters.getResultado(numeroFilter,n)"></td>
        </tr>
    </tbody>
   </table>

  </div>
</template>

<script>
export default {
    name:"TablaMultiplicar",
    data(){
        return{
            numero:0,
            numero2:0,
            numeroFilter:0,
            numeros:[]
        }
    },
    methods:{
        generarTablaMultiplicar(){
            this.numeros=[]
            let aux=[];
            let n= this.numero;
            for(let i=1;i<=10;i++){
                let mult=n*i;
                var resultado=n+"x"+i +"="+ mult;
                aux.push(resultado);
            }
            this.numeros=aux;
        }
    }


}
</script>

<style>

</style>