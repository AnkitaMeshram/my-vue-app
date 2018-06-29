<template>


  <div class="about">
       <div class="small"><line-chart :chart-data="datacollection"></line-chart></div>
    
    <!--  <h1>{{ fromUrl }}</h1>
    <h1> This is an about page</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali...</p>-->
  <div v-for="(data,index) in  transactionData.activePayments" :key='index'>
      <div  v-if="transactionData.activePayments[index].id === fromUrl">
          <div v-for="(paymentData,i) in transactionData.activePayments[index].paymentMonth" :key='i'>
             <p class="paymentMonth"  >{{paymentData.month}}</p>
             <div v-for="(payments,j) in paymentData.payments" :key='j' class="paymentMonthList">
                <div>{{payments.paymentDate}}</div>
                 <div>{{payments.name}}</div>
                 <div>{{payments.paidAmount | formatAmount }}</div>
                 <div class="creditedAmount">{{payments.debitAmount | formatAmount }}</div>
            
             </div>
             
          </div>
          
      </div>
      

  </div>
  </div>
</template>

<script>
import lineChart from '../js/lineChart.js';
import axios from 'axios';


export default {
    name : 'About',
    data(){
        return {
            fromUrl : this.$route.params.userId?this.$route.params.userId : "5201686573",
            transactionData:null,
             datacollection: null
            
        }
    },mounted(){
       
       
  },created(){
      this.getData();
      
  },methods : {
     showGraph () {
        this.datacollection =
        {
             labels: this.getMonth(),
             
             datasets: [
               {
                 label: 'Account Balance',
                 backgroundColor: '#37A7B8',
                 data: this.getAmount()
               }
             ]
           }, {responsive: true, maintainAspectRatio: false}
     },
      getAmount () {
          var totalAmount=[];
          for (var i= 0; i <this.transactionData.activePayments.length; i++){
              if(this.transactionData.activePayments[i].id === this.fromUrl){
                  for( var j=0;j<this.transactionData.activePayments[i].paymentMonth.length;j++){
                    totalAmount.push(this.transactionData.activePayments[i].paymentMonth[j].totalAmount);
                    
                 }
              }
            }
            return totalAmount;
       },
       getMonth () {
           var monthName=[];
          for (var i= 0; i <this.transactionData.activePayments.length; i++){
              if(this.transactionData.activePayments[i].id === this.fromUrl){
                  for( var j=0;j<this.transactionData.activePayments[i].paymentMonth.length;j++){
                    monthName.push(this.transactionData.activePayments[i].paymentMonth[j].month);
                    
                 }
              }
            }
            return monthName;
       },
       getData(){
            axios.get('https://api.myjson.com/bins/1doc66').
       then(response =>{
           this.transactionData = response.data;
            this.showGraph();
       }).catch(error =>{
           console.log(error);
       })
       }
    },
  components : {
    'line-chart':lineChart
    
  }
   }

</script>

<style>
.paymentMonth{
    background: #261F38;
    padding: 10px;
}
.paymentMonthList{
    display: flex;
    justify-content: space-between;
}

.paymentMonthList div:nth-child(2)
{ width:40%;
    
    }
   
    .paymentMonthList div:first-child, .paymentMonthList div:last-child, .paymentMonthList div:nth-child(3)
{ width:20%
   }
 
.paymentMonthList div{
    padding: 10px;
}
.small{
     
    max-width: 600px;
    margin:  150px auto;
  
}

.creditedAmount{
    color:#00C896;
}
</style>