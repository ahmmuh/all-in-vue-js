<template>
<div id="employee">
    <div class="container">
        <div class="row">
            <div class="col-12-md">
                <ul class="list-group">
                    <li class="list-group-item"></li>
                </ul>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Ny person
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <p class="modal-title" id="exampleModalLabel">Lägg till ny person</p>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form id="form"  v-on:submit.prevent="addPerson">
            <div class="form-group">
            <label>Namn</label><br>
            <input type="text" class="form-control"  v-model="newPerson.name" />
            </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Nej</button>
        <button type="submit" class="btn btn-primary">Lägg till</button>
      </div>
    </div>
  </div>
</div>
            </div>
            <div class="col-md-7">
  <table class="table table-bordered">
      <thead>
          <tr>
              <th>Mondag</th>
              <th>Tisdag</th>
              <th>Onsdag</th>
              <th>Torsdag</th>
              <th>Fredag</th>
          </tr>
          <tbody>
              <tr>
                  <td>1</td>
                  <td>2</td>
              </tr>
          </tbody>
      </thead>
  </table>
            </div>
                <div class="col-2-md">
                <ul class="list-group">
                    <li class="list-group-item">Total</li>
                    <li class="list-group-item">20%</li>
                    <li class="list-group-item">30%</li>
                    <li class="list-group-item">10%</li>
                </ul>
            </div>
                <div class="col-2-md">
                <ul class="list-group">
                    <li class="list-group-item">Projekt</li>
                    <li class="list-group-item">Project 1</li>
                    <li class="list-group-item">Projekt 2</li>
                    <li class="list-group-item">Projekt 3</li>
                    <li class="list-group-item">Projekt 3</li>
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Nytt Projekt
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <p class="modal-title" id="exampleModalLabel">Lägg till ett nytt projekt</p>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
            <div class="form-group">
            <label>Projekt Namn</label><br>
            <input type="text" class="form-control" />
            </div>
               <div class="form-group">
            <label>Välj färg</label><br>
            <input type="text" class="form-control" />
            </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Nej</button>
        <button type="button" class="btn btn-primary">Spara</button>
      </div>
    </div>
  </div>
</div>
                </ul>
            </div>
        </div>


    </div>
  </div>

</template>


<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { usersRef} from "./../firebase";
import toastr from 'toastr'

export default {
  name: 'app',
    firebase: {
  
  },

  data(){
return {
  newPerson : {
    name : ''
 
  }
}
  },
  methods:{
   addPerson: function () {
    db.push(this.newPerson)
     //personsRef.push(this.newPerson);
     this.newPerson.name = '';
     toastr.success('Du har lagt till en ny person');
   }
  },
  components: {
   
   
  }
}
</script>

<style>
.col-sm-2{
    border: 1px solid #000;
  
    
}

</style>
