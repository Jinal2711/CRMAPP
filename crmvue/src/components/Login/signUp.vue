<template>
  <div>
    <div class="signUpBox">
      <p style="text-align:center;font-size:20px;">
        <i>
          <b>Sign Up</b>
        </i>
      </p>

      <form action="/action_page.php">
        <div class="form-group">
          <label for="user_name">User Name</label>
          <input type="text" class="form-control" id="user_name">
        </div>
        <div class="form-group">
          <label for="email">Email address:</label>
          <input type="email" class="form-control" id="email">
        </div>
        <div class="form-group">
          <label for="pwd">Password:</label>
          <input type="password" class="form-control" id="pwd">
        </div>
        <div class="form-group">
          <label for="pwd">Confirm Password:</label>
          <input type="password" class="form-control" id="pwd">
        </div>

        <button type="button" class="btn btn-default btn-primary btn-sm loginBtn">
          <span class="glyphicon glyphicon-lock icons"></span> Sign Up
        </button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "sign-up"
};
</script>
<style>
.signUpBox {
  width: 50%;
  margin: 100px auto;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 0px 21px -5px black;
}
.loginBtn {
  margin: 0 auto;
  text-align: center;
  display: block;
  outline: none;
  padding: 10px 30px;
  font-size: 16px;
}
</style>


