<template>
<div id="home" class="container">

    <h1>Welcome to home page</h1>

<form>
    <div class="form-group">
        <label>First Name</label><br>
        <input type="text" class="form-control">
    </div>
       <div class="form-group">
        <label>Last Name</label><br>
        <input type="text" class="form-control">
    </div>
       <div class="form-group">
        <label>Email</label><br>
        <input type="text" class="form-control">
    </div>
    <button type="button" class="btn btn-success float-right">Send</button>
</form>
  </div>

</template>

<style>
.col-sm-1{
    border: 1px solid #000;
    width: 150px !important;
}
.list-group .list-group-item{
    width: 150px;
}
</style>