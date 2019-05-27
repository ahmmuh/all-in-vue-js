<template>
  <div id="app" class="container">
   <nav class="navbar navbar-expand-md navbar-dark fixed-top">
      <a class="navbar-brand" href="#">ALL IN</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/books">Books</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/employees">Employees</router-link>
          </li>
            <li class="nav-item">
            <router-link to="/create">Create</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <hr>
<router-view></router-view>

<footer class="fixed-bottom font-small blue">


  <div class="footer-copyright text-center py-3">© 2018 Copyright:
    <a href="https://makesite.se">Make Site</a>
  </div>
  

</footer>

  </div>
  
</template>

<script>

</script>

<style>
.navbar{
  background: #40E0D0;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #FF0080, #FF8C00, #40E0D0);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #FF0080, #FF8C00, #40E0D0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


}

.navbar ul li {
  padding: 8px 6px;
  font-size: 20px;
  float: right;
}
.navbar ul li  a{
  color: #fff;
  
}
.navbar-dark .navbar-brand{
  float: right;
  font-family: 'Sofia';font-size: 30px;
}
.fixed-bottom{
  width: 100%;
  background: #bdc3c7;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #2c3e50, #bdc3c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
 color: #fff;
  clear: both;
}
.footer-copyright a{
  color: #fff;
}
</style>
