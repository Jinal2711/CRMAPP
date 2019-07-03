<template>
  <div>
    <div class="container-fluid block1">
      <div class="loginBox">
        <p style="text-align:center;font-size:20px;">
          <i>
            <b>LOGIN</b>
          </i>
        </p>
        <form>
          <div class="input-group">
            <span class="input-group-addon loginInputes">
              <i class="glyphicon glyphicon-user"></i>
            </span>
            <input
              id="email"
              type="text"
              class="form-control loginInputes"
              name="email"
              placeholder="Email"
            >
          </div>
          <br>
          <div class="input-group">
            <span class="input-group-addon loginInputes">
              <i class="glyphicon glyphicon-lock"></i>
            </span>
            <input
              id="password"
              type="password"
              class="form-control loginInputes"
              name="password"
              placeholder="Password"
            >
          </div>
          <br>
          <button type="button" class="btn btn-default btn-primary btn-sm loginBtn">
            <span class="glyphicon glyphicon-lock icons"></span>Login
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "login"
};
</script>

<style>
.block1 {
  background: url("../../assets/background1.jpg") no-repeat;
  background-size: cover;
  height: calc(100vh - 52px);
  background-color: red;
  width: 100%;
  float: left;
}
.loginBox {
  width: 30%;
  margin: 100px 100px;
  background-color: transparent;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 0px 21px -5px black;
}
.loginInputes {
  background-color: transparent;
  outline: none !important;
  border: none;
}
.loginBtn {
  margin: 0 auto;
  text-align: center;
  display: block;
  outline: none;
  padding: 10px 30px;
  font-size: 16px;
}
/* .block2 {
  height: calc(100vh - 52px);
  background-color: blue;
  width: 30%;
  float: right;
} */
</style>


