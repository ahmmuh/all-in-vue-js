<template>
  <div id="app" class="container">
   <div class="card">
     <div class="card-header">
       <h3>Låna bok</h3>
     </div>
       <div class="card-body">
         <form id="form" v-on:submit.prevent="addBook">
           <div class="form-group">
             <label for="bookTitle">Title:</label>
             <input type="text"  class="form-control" placeholder="Namn" v-model="newBook.title" />
           </div>

           <div class="form-group">
             <label for="authorTitle">Författare:</label><br />
             <input type="text" id="bookTitle" class="form-control" placeholder="Namn" v-model="newBook.author" />
           </div>
           <div class="form-group">
             <label for="bookUrl">Låna datum:</label><br>
             <input type="date" id="bookTitle" class="form-control" v-model="newBook.date" />
           </div>
          
           <button type="submit" class="btn btn-primary">Låna bok</button>
         </form>
     </div>
   </div>
    <div class="card">
      <div class="card-header">
        <h3>Books list</h3>
      </div>
      <div class="card-body">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Titel</th>
              <th>Författare</th>
              <th>Låna datum</th>
              <th>Ta bort</th>
             
            </tr>
          </thead>
          <tbody>
            <tr v-for="book in books">
              <td>{{book.title}}</td>
              <td>{{book.author}}</td>
              <td><a v-bind:href="book.date">{{book.date}}</a></td>
              <td><span class="fas fa-trash-alt" v-on:click="removeBook(book)"></span></td>
             
            </tr>
          </tbody>
        </table>
      </div>
   
  </div>
  </div>
  
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { booksRef } from "./../firebase";
import toastr from 'toastr'

export default {
  name: 'app',
    firebase: {
    books: booksRef
  },
  data(){
return {
  newBook : {
    title : '',
    author : '',
    date: ''
  

  }
}
  },
  methods:{
   addBook: function () {
     booksRef.push(this.newBook);
     this.newBook.title = '';
     this.newBook.author = '';
     this.newBook.date = '';
     toastr.success('You added a new book');
   },
   removeBook: function(book){
     booksRef.child(book['.key']).remove();
     toastr.success('Book Removed');
   }
  },
  components: {
   
   
  }
}
</script>

<style>
#app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin-top: 60px;
  color: #2c3e50;
}
td span{
  font-size: 30px;
  color: #000;
}
</style>
