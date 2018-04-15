<template>
  <div id="app">
     <section id="code">
      <div class="group">
        <div class="box"><img src="./assets/firebase.png" class="size"/>
          <h2>firebase<span>frontend</span></h2>
        </div>
        <div class="box"><img src="./assets/vue.png" class="size"/>
          <h2>VUE<span>Responsive</span></h2>
        </div>
      </div>
    </section>

   <header>
      <div class="company"><img src="./assets/payconiq-logo-clear.png" class="logo"/>
        <h1>Payconiq</h1>
      </div>
      <div class="group">
        <div class="box">
          <h2>Save an article</h2>
          <form  v-on:submit.prevent="addArticle">
            <input v-model="newArticle.user" placeholder="User Post"/>
            <input v-model="newArticle.name" placeholder="Article Name"/>
            <input v-model="newArticle.url" placeholder="URL"/>
            <button type="submit">Add This!</button>
          </form>
        </div>
      </div>
    </header>
    <main>
      <div class="title">
        <h3>Article Storage</h3>
      </div>
      <div class="group">
        <div class="box" v-for="article in articles">
          <div class="box__item"> <img src="./assets/missile.png" class="icon"/></div>
          <div class="box__item"> 
            <p class="user">{{article.user}}</p>
            <h2>{{article.name}}</h2><a target="_blank" v-bind:href="article.url" class="url">view page</a>
            <div v-on:click="deleteArticle(article)" class="delete">delete</div>
          </div>
        </div>
      </div>
    </main>
    <footer>
      <h3>How to Use</h3>
      <ul> 
        <li>Looking for information through internet I found something.</li>
        <li>I write my name, article reference, and URL of site.</li>
        <li>This data come to add in "Article Storage": .</li>
        <li>You can keep articles from your interest in this app.</li>
        <li>Also, keep this URL in my App.</li>
        <li>Delete the article: Click on "delete" for this action.</li>
        <li class="developer">Developer: Jhon Stark - Colombia</li>
      </ul>
    </footer>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Firebase from 'firebase';
import '../fonts/SofiaProLight.css';

let config = {
    apiKey: "AIzaSyCETjWILXqWk02tkuefxSKegVOZ2jBIwz0",
    authDomain: "articles-e9b32.firebaseapp.com",
    databaseURL: "https://articles-e9b32.firebaseio.com",
    projectId: "articles-e9b32",
    storageBucket: "",
    messagingSenderId: "324012288733"
};

let app = Firebase.initializeApp(config);
let db = app.database();

let articlesRef = db.ref('articles');


export default {
  name: 'App',
  firebase:{
    articles: articlesRef 
  },
  methods:{
    addArticle: function(){
      articlesRef.push(this.newArticle);
      this.newArticle.user='',
      this.newArticle.name='',
      this.newArticle.url=''
    },
    deleteArticle: function(article){
    articlesRef.child(article['.key']).remove();
  }
  },
  
  data() {
    return {
      newArticle: {
        user: '',
        name: '',
        url: ''
      }
    }
  }
}
</script>

<style>


*, html {
  margin: 0;
  padding: 0;
  font-size: 1rem;
}

body {
  font-size: 18px;
  font-family: "SofiaProLight", sans-serif;
  background: #efe6da;
}

a {
  color: #4BA2ED;
}

a:hover {
  cursor: pointer;
  color: #ff5252;
}

h2 {
  font-size: 1.2em;
}

form {
  padding-right: 3em;
  text-align: center;
  
}
@media screen and (min-width: 801px) {
  form {
    width: 650px;
    margin: auto;
    font-size: 2em;
  }
}
form input {
  background: none;
  border-width: 0 0 2px 0;
  border-style: solid;
  color: #efe6da;
  padding: 5px;
  margin-top: 15px;
  width: 100%;
  color:#efe6da;
}
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #FFFFFF;
    opacity: 1; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: #FFFFFF
}

::-ms-input-placeholder { /* Microsoft Edge */
    color: #FFFFFF
}

form button {
  background: #95c685;
  width: 50%;
  height: auto;
  padding: 1em;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
}
@media screen and (min-width: 801px) {
  form button {
    float: right;
  }
}
form button:hover {
  cursor: pointer;
  color: #FFF;
}

#code {
  background: #d94a84;
  color: #efe6da;
  height: 150px;
}
#code .group {
  display: flex;
  position: relative;
  margin: auto;
  max-width: 300px;
  top: 20px;
}
#code .group .box {
  width: 100px;
  margin-left: 20px;
}
#code .group .box .size {
  width: 60px;
  height: 60px;
}
#code .group .box img {
  width: 100%;
  height: auto;
  object-fit: contain;
}
#code .group .box h2 {
  display: flex;
  flex-direction: column;
  position: absolute;
  text-transform: uppercase;
}
#code .group .box h2 span {
  font-weight: 100;
}

header {
  background: #BA5370;
  background-image: url("./assets/modelbg.png");
  background: -webkit-linear-gradient(to top, #e76870, #d94a84);
  background: linear-gradient(to top, #e76870, #d94a84);
}
@media screen and (min-width: 801px) {
  header {
    border-radius: 0 0 50% 50%;
  }
}
header .company {
  padding-left: 2em;
  display: flex;
  width: 250px;
}
header .company .logo {
  width: 40px;
  height: auto;
  object-fit: contain;
}
header .company h1 {
  color: #efe6da;
  margin-left: 10px;
  font-size: 1em;
}
header .group {
  width: 100%;
  height: 250px;
  margin: auto;
  background-image: url("../assets/modelbg.png");
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
}
@media screen and (min-width: 480px) and (max-width: 800px) {
  header .group {
    height: 350px;
  }
}
@media screen and (min-width: 801px) {
  header .group {
    height: 600px;
    border-radius: 0 0 50% 50%;
  }
}
header .group .box {
  margin-top: 50px;
  padding-left: 2em;
}
header .group .box h2 {
  display: none;
}
@media screen and (min-width: 801px) {
  header .group .box h2 {
    display: block;
    color: #efe6da;
    text-transform: uppercase;
  }
}
@media screen and (min-width: 801px) {
  header .group .box {
    position: absolute;
    top: 250px;
    left: 5%;
    right: 5%;
  }
}

main .title {
  height: 70px;
  margin-top: 30px;
  text-align: center;
}
main .title h3 {
  color: #444242;
  text-transform: uppercase;
}
main .group {
  display: grid;
  grid-template-columns: 300px;
  grid-gap: 40px;
  width: 300px;
  margin: auto;
}
@media screen and (min-width: 650px) and (max-width: 800px) {
  main .group {
    width: 600px;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }
}
@media screen and (min-width: 801px) {
  main .group {
    width: 1000px;
    grid-template-columns: repeat(3, 1fr);
  }
}
main .group .box {
  width: 280px;
  background: #d94a84;
  display: grid;
  grid-template-columns: 50px 230px;
  border-radius: 10px;
  padding: 10px;
}
main .group .box__item .icon {
  width: 50px;
  height: auto;
  position: absolute;
  margin-top: -40px;
}
main .group .box__item .icon img {
  width: 100%;
  object-fit: contain;
}
main .group .box__item .user {
  text-align: right;
  margin-right: 10px;
  height: 30px;
  color: #95c685;
}
main .group .box__item h2, main .group .box__item a {
  color: #efe6da;
  font-weight: 100;
}
main .group .box__item .delete {
  color: #efe6da;
  text-align: right;
  margin-right: 10px;
  margin-top: 10px;
}
main .group .box__item .delete:hover {
  cursor: pointer;
}
main .group .box:hover {
  background: #95c685;
}
main .group .box:hover .user {
  color: #d94a84;
}

footer {
  margin-top: 50px;
  color: #444242;
  padding: 2em;
}
footer h3 {
  text-transform: uppercase;
}
footer ul {
  margin-top: 20px;
  list-style: none;
  padding-bottom: 40px;
}
footer ul .developer {
  color: #d94a84;
}

</style>
