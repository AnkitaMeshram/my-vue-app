<template>

  <div class="hello">
  <!--<div>
    <input type="text" placeholder="enter" value="test" v-model="skillNew" />
  <p>the value entered by user is {{ skillNew }}</p>
  <div>-->
    <div class="accountDetails">
      <h3>Account Overview</h3>
      <div>
      <h3>Bal: 12349,00</h3>
    </div>
    <pie-chart></pie-chart>
    </div>
    <div class="detailContainer">
    <div class="descriptionBlock">
    <h3> My Accounts</h3>
    <div>
      <div class="investmentBlock accountBlock" v-for="(data,index) in overviewDataJson.userAccountsInfo" :key='index'
      v-on:click="openAccount(overviewDataJson.userAccountsInfo[index].accountnumber)">
        <div class="investmentInnerBlock">
            <p>{{overviewDataJson.userAccountsInfo[index].accountnumber}}</p>
            <font-awesome-icon class="fal" icon="piggy-bank" />
          <span>{{overviewDataJson.userAccountsInfo[index].accounttype}}</span>
         </div>
         <p>{{overviewDataJson.userAccountsInfo[index].accountBal | formatAmount}}</p>
      </div>

     </div>
    </div>
     <div class="descriptionBlock">
    <h3> Investments</h3>
    <div>
     <div class="investmentBlock" v-for="(data,index) in overviewDataJson.activeLoans" :key='index'>
        <div class="investmentInnerBlock">
            <p>{{overviewDataJson.activeLoans[index].activeLoan}}</p>
            <font-awesome-icon class="fal" icon="exchange-alt" />
          <span>{{overviewDataJson.activeLoans[index].dueDate}}</span>
         </div>
         <p>{{overviewDataJson.activeLoans[index].invoiceAmount | formatAmount}}</p>
      </div>
     </div>
    </div>
     <div class="descriptionBlock">
    <h3> Loans</h3>
    <div >
    <div class="investmentBlock" v-for="(data,index) in overviewDataJson.activePayment" :key='index'>
          <div class="investmentInnerBlock">
             <p>{{overviewDataJson.activePayment[index].investmentPlan}}</p>
             <font-awesome-icon icon="credit-card" />
             <span>{{overviewDataJson.activePayment[index].dueDate}}</span>
          </div>
         <p>{{overviewDataJson.activePayment[index].invoiceAmount | formatAmount}}</p></div>
     </div>
       </div>
     </div>
    </div>
    
  <!--  <ul>
      <li v-for="(data, index) in skills" :key = 'index'>{{index}}.{{data.skill}}</li>
    </ul>
    <p v-if="skills.length>=1">more skills </p>
    <p v-else>no skills </p>
  </div>
  {{name}}
  {{btnState ? 'disabled':'active'}} js logics can be added inside 
  <div v-bind:class="{alert: alertObj}"></div>
  <div v-bind:style="{backgroundColor : bgcolor,width:bgwidht,height:bgheight}">
    <button v-on:click= "changeName" v-bind:disabled="btnState">Click</button>-->
  
</template>

<script>
import lineChart from '../js/lineChart.js';
import pieChart from '../js/pieChart.js';
import axios from 'axios';
import overviewDataJson from '../../static/overview.json';

export default {
  name: 'Overview',
 data() {
   return{
     skillNew : ' ',
     skills :[
       {'skill':'js'},
       {'skill':'css'}
     ],
     alertObj :{
       alert : true,
      },
      bgcolor :'red',
      bgwidht:'100%',
      bgheight:'30px',
      overviewDataJson : overviewDataJson,
       datacollection: null
     
   }
  
  },
  components : {
    'line-chart':lineChart,
    'pie-chart': pieChart
    
  },methods : {
     openAccount($event){
     this.$router.push({ name: 'account', params: { userId: $event }});
     
     },
     getData(){
        axios.get('https://api.myjson.com/bins/dj41a').
     //axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').
     then(response => {
       this.overviewDataJson = response.data;
       }).catch(error => {
       
       });
     }
     
   },
   mounted(){
      //this.getData();
    
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

.alert{
  background-color:yellow;
  width:100%;
  height:20px;
}
.myAccount{
  display: flex;
    justify-content: space-around;
}
.accountDetails h3{
   text-align : center;
 }
 .descriptionBlock{
    border-radius: 10px;
    background: #261F38;
    width: 40%;
    margin: 0 5px;
    padding: 5px;
 }
 .myAccount p{
   cursor: pointer;
 }
 .myAccount p:hover{
  color: #42b983;
  font-weight:bold;
 }
 .detailContainer{
   display: flex;
    justify-content: space-between;
    margin-top: 40px;
 }
 .investmentBlock{
   display: flex;
    justify-content: space-between;
    padding: 0 9px;
 }
 .investmentInnerBlock{
       padding-top: 16px;
 }
 .investmentInnerBlock p{
   padding:0;
   margin:0;
 }
 .investmentInnerBlock span{
   padding-left: 5px;
   color:rgba(93, 87, 110, 0.842);
 }
.accountBlock:hover{
  background:#26243E;
  cursor:pointer;
}
 @media (max-width: 700px){
    .detailContainer{
     display: block;
    margin-top: 25px;
    width:100%;
 }
 .descriptionBlock{
    border-radius: 10px;
    background: #261F38;
    width: auto;
    margin: 5px;
 }
 
}
</style>
