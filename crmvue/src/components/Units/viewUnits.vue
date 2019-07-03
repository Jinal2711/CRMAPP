<template>
  <div>
    <div class="mainHeader">
      <div class="headerHeading">Units</div>
      <div class="headerButtons">
        <router-link class="btn btn-primary icons" to="/createUnit">
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
              <th>Unit Name</th>
              <th>Unit Name (plural form)</th>
              <th colspan="2">Options</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(unit,index) in unitsData" :key="index">
              <td>{{unit.unitName}}</td>
              <td>{{unit.pluralUnitName}}</td>
              <td>
                <router-link :to="`/editUnit/${unit.id}`" class="btn btn-success">
                  <span class="glyphicon glyphicon-pencil icons"></span>Edit
                </router-link>
                <!-- <button type="button" class="btn btn-success">
                  <span class="glyphicon glyphicon-pencil icons"></span>Edit
                </button>-->
              </td>
              <td>
                <button type="button" class="btn btn-danger" v-on:click="deleteUnitData(unit.id)">
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
  name: "view-units",
  data: function() {
    return {
      unitsData: []
    };
  },
  mounted: function() {
    this.viewUnitData();
  },
  methods: {
    viewUnitData: function() {
      fetch("http://localhost:3000/productUnits", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "content-type": "application/json"
        }
      })
        .then(res => res.json())
        .then(data => {
          this.unitsData = data;
        });
    },
    deleteUnitData: function(id) {
      fetch("http://localhost:3000/productUnits/delete/" + id, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "content-type": "application/json"
        }
      })
        .then(res => res.json())
        .then(data => {
          if (data.status == "OK") {
            alert("Unit data deleted successfully");
            this.viewUnitData();
          }
        });
    }
  }
};
</script>

