<template>

  <div id="app">
  <div class="navBar">
      <nav class="isDesktop">
        <router-link to="/">Overview</router-link>
        <router-link to="/account">Account</router-link>
        <router-link to="/investment">Investment</router-link>
        <router-link to="/loan">Loan</router-link>
        <router-link to="/info">Info</router-link>
      </nav>
      <nav class="isMobile">
        <router-link to="/"></router-link>
        <router-link to="/account"><font-awesome-icon class="fal" icon="piggy-bank" /></router-link>
        <router-link to="/investment"><font-awesome-icon class="fal" icon="exchange-alt" /></router-link>
        <router-link to="/loan"><font-awesome-icon icon="credit-card" /></router-link>
        <router-link to="/info"><font-awesome-icon icon="info" /></router-link>
      </nav>
      <div class="userDetails">
        <p>Ankita Meshram</p>
        <p>23109025801</p>
        
      </div>
   </div>   
    <router-view/>
 
   
  </div>
</template>

<script>

import overview from './components/Overview/overview.vue'


export default {
  name: 'app',
  components: {
    overview
  }
}

</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat");

body{
  font-family: 'Montserrat', sans-serif;
  background: #26243E;
}
#app{
      width: 90%;
    margin: 0 auto;
    color:#fff;
}
h3{
     color: #fff;
    padding: 10px 0 0 26px;
    margin: 0;
}
p{
  color:#fff;
}

nav {
  width: 50%;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    font-weight: bold;
}

nav a {
  text-decoration: none;
  color: #fff;
  }

 nav a:hover{
 color: #42b983;
}

.navBar{
  width: 100%;
    background: #261F38;
    margin: 0;
    padding: 5px;
    display: flex;
    justify-content: space-between;
}
.userDetails{
   margin-right: 14px;
}
.userDetails p{
   margin: 0;
   padding:0;
}

.isDesktop{
  display:flex;
}
.isMobile{
  display:none;
}
 @media (max-width: 700px){
   .isDesktop{
  display:none;
}
.isMobile{
  display:flex;
}
 }

/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background-color: #EEEEEE;
  font-family: 'Montserrat', sans-serif;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  padding-top: 50px;
}

*/
</style>
