<template>
  <div id="app" class="container">
   <div class="card">
     <div class="card-header">
       <p><strong>Här kan du skapa ett nytt projekt !</strong></p>
     </div>
       <div class="card-body">
         <form id="form" v-on:submit.prevent="addProject">
           <div class="form-group">
             <label for="bookTitle">Projektnamn:</label>
             <input type="text"  class="form-control" placeholder="Namn" v-model="newProject.name" />
           </div>

           <div class="form-group">
             <label for="authorTitle">Start Datum:</label>
             <input type="number" class="form-control" placeholder="Start datum" v-model="newProject.startDate" />
           </div>
           <div class="form-group">
             <label>Slut datum:</label>
             <input type="number" class="form-control" v-model="newProject.endDate" />
           </div>
              <div class="form-group">
             <label>Omfattning:</label>
             <input type="number" class="form-control" v-model="newProject.scope" />
           </div>
          
           <button type="submit" class="btn btn-primary">Skapa</button>
         </form>
     </div>
   </div>
    <div class="card">
      <div class="card-header">
        <h3>Projekt</h3>
      </div>
      <div class="card-body">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Projektnamn</th>
              <th>Start Datum</th>
              <th>Slut Datum</th>
              <th>Omfattning</th>
             
            </tr>
          </thead>
          <tbody>
            <tr v-for="project in projects">
              <td>{{project.name}}</td>
              <td>{{project.startDate}}</td>
              <td>{{project.endDate}}</td>
              <td>{{project.scope}}</td>
              <td><span class="fas fa-trash-alt" v-on:click="removeProject(project)"></span></td>
             
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
import { projectsRef } from "./../firebase";
import toastr from 'toastr'

export default {
  name: 'app',
    firebase: {
    projects: projectsRef
  },
  data(){
return {
  newProject : {
    name : '',
    startDate : '',
    endDate: '',
    scope: ''
  

  }
}
  },
  methods:{
   addProject: function () {
     projectsRef.push(this.newProject);
     this.newProject.name = '';
     this.newProject.startDate = '';
     this.newProject.endDate = '';
     this.newProject.scope = '';
     toastr.success('You added a new book');
   },
   removeProject: function(project){
     projectsRef.child(project['.key']).remove();
     toastr.success('one Project Removed');
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
