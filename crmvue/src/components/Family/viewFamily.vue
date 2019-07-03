<template>
  <div>
    <div class="mainHeader">
      <div class="headerHeading">Product Family</div>
      <div class="headerButtons">
        <router-link class="btn btn-primary icons" to="/createFamily">
          <span class="glyphicon glyphicon-plus icons"></span>New
        </router-link>
        <!-- <button type="button" class="btn btn-primary icons">
          <span class="glyphicon glyphicon-plus icons"></span>New
        </button>-->
      </div>
    </div>
    <br>
    <div class="container-fluid">
      <div class="table-responsive table-bordered">
        <table class="table">
          <thead>
            <tr>
              <th>Family name</th>
              <th colspan="2">Options</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(fam,index) in familyData" :key="index">
              <td>{{fam.familyName}}</td>
              <td>
                <router-link :to="`/editFamily/${fam.id}`" class="btn btn-success">
                  <span class="glyphicon glyphicon-pencil icons"></span>Edit
                </router-link>
                <!-- <button type="button" class="btn btn-success">
                  <span class="glyphicon glyphicon-pencil icons"></span>Edit
                </button>-->
              </td>
              <td>
                <button type="button" class="btn btn-danger" v-on:click="deleteFamilyData(fam.id)">
                  <span class="glyphicon glyphicon-trash icons"></span>Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "view-family",
  data: function() {
    return {
      familyData: []
    };
  },
  mounted: function() {
    this.viewFamilyData();
  },
  methods: {
    viewFamilyData: function() {
      fetch("http://localhost:3000/productFamily", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "content-type": "application/json"
        }
      })
        .then(res => res.json())
        .then(data => {
          this.familyData = data;
          console.log(JSON.stringify(this.familyData));
        });
    },
    deleteFamilyData: function(id) {
      fetch("http://localhost:3000/productFamily/delete/" + id, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "content-type": "application/json"
        }
      })
        .then(res => res.json())
        .then(data => {
          if (data.status == "OK") {
            alert("Family data deleted successfully");
            this.viewFamilyData();
          }
        });
    }
  }
};
</script>

