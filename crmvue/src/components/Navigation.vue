<template>
  <div>
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle"
            data-toggle="collapse"
            data-target="#myNavbar"
          >
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">WebSiteName</a>
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
          <ul class="nav navbar-nav">
            <li class="dropdown">
              <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                Clients
                <span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <router-link to="/addClient">Add Client</router-link>
                </li>
                <li>
                  <router-link to="/viewClient">View Clients</router-link>
                </li>
              </ul>
            </li>
            <li class="dropdown">
              <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                Products
                <span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <router-link to="/createProduct">Create Products</router-link>
                </li>
                <li>
                  <router-link to="/viewProduct">View Products</router-link>
                </li>
                <li>
                  <router-link to="/viewFamily">Product Families</router-link>
                </li>
                <li>
                  <router-link to="/viewUnits">Product Units</router-link>
                </li>
              </ul>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li>
              <router-link to="/signUp">Sign Up</router-link>
            </li>
            <li>
              <router-link to="/login">Login</router-link>
            </li>
            <li>
              <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                <span class="glyphicon glyphicon-cog"></span>
                <span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a href="#">Payment Methods</a>
                </li>
                <li>
                  <a href="#">User Account</a>
                </li>
                <li>
                  <router-link to="/viewTaxRate">Tax Rates</router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "navigation"
};
</script>

