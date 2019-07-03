<template>
  <div>
    <div class="mainHeader">
      <div class="headerHeading">Tax Rates</div>
      <div class="headerButtons">
        <router-link class="btn btn-primary icons" to="/createTaxRate">
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
              <th>Tax Rate Name</th>
              <th>Tax Rate Percentage</th>
              <th colspan="2">Options</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(tax,index) in taxData" :key="index">
              <td>{{tax.taxRateName}}</td>
              <td>{{tax.taxRatePerc}}</td>
              <td>
                <router-link :to="`/editTax/${tax.id}`" class="btn btn-success">
                  <span class="glyphicon glyphicon-pencil icons"></span>Edit
                </router-link>
                <!-- <button type="button" class="btn btn-success">
                  <span class="glyphicon glyphicon-pencil icons"></span>Edit
                </button>-->
              </td>
              <td>
                <button type="button" class="btn btn-danger" v-on:click="deleteTaxData(tax.id)">
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
  name: "view-tax",
  data: function() {
    return {
      taxData: []
    };
  },
  mounted: function() {
    this.viewTaxData();
  },
  methods: {
    viewTaxData: function() {
      fetch("http://localhost:3000/productTax", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "content-type": "application/json"
        }
      })
        .then(res => res.json())
        .then(data => {
          this.taxData = data;
        });
    },
    deleteTaxData: function(id) {
      fetch("http://localhost:3000/productTax/delete/" + id, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "content-type": "application/json"
        }
      })
        .then(res => res.json())
        .then(data => {
          if (data.status == "OK") {
            alert("Tax data deleted successfully");
            this.viewTaxData();
          }
        });
    }
  }
};
</script>

