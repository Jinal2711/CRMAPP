<template>
  <div>
    <div class="mainHeader">
      <div class="headerHeading">
        <b>Tax Rate Form</b>
      </div>
      <div class="headerButtons">
        <div class="btn-group">
          <button type="button" class="btn btn-success" v-on:click="postTaxData">
            <span class="glyphicon glyphicon-ok icons"></span>Save
          </button>
          <button type="button" class="btn btn-danger">
            <span class="glyphicon glyphicon-remove icons"></span>Delete
          </button>
        </div>
      </div>
    </div>
    <br>
    <div class="container">
      <div class="addFamily">
        <div class="form-group">
          <label for="tax_name">Tax Rate Name</label>
          <input
            type="text"
            name="tax_name"
            id="tax_name"
            class="form-control"
            v-model="taxRateName"
          >
        </div>
        <div class="form-group">
          <label for="tax_perc">Tax Rate Percent</label>
          <input
            type="text"
            name="tax_perc"
            id="tax_perc"
            class="form-control"
            v-model="taxRatePerc"
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "create-unit",
  data: function() {
    return {
      taxRateName: "",
      taxRatePerc: ""
    };
  },
  mounted: function() {
    if (this.taxId) {
      fetch(`http://localhost:3000/productTax/${this.taxId}`, {
        method: "GET",
        Accept: "application/json",
        "content-type": "application/json"
      })
        .then(res => res.json())
        .then(data => {
          this.taxRateName = data.taxRateName;
          this.taxRatePerc = data.taxRatePerc;
        });
    }
  },
  methods: {
    postTaxData: function() {
      if (this.taxId) {
        this.sendUpdatedTaxData();
      } else {
        this.sendTaxData();
      }
    },

    sendTaxData: function() {
      fetch("http://localhost:3000/productTax", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "content-type": "application/json"
        },
        body: JSON.stringify({
          taxRateName: this.taxRateName,
          taxRatePerc: this.taxRatePerc
        })
      })
        .then(res => res.json())
        .then(data => {
          if (data.status == "OK") {
            alert("Tax Rate added successfully");
            this.$router.push("/viewTaxRate");
          }
        });
    },
    sendUpdatedTaxData: function() {
      fetch(`http://localhost:3000/productTax/update/${this.taxId}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "content-type": "application/json"
        },
        body: JSON.stringify({
          taxRateName: this.taxRateName,
          taxRatePerc: this.taxRatePerc
        })
      })
        .then(res => res.json())
        .then(data => {
          alert("Tax Rate updated successfully");
          this.$router.push("/viewTaxRate");
        });
    }
  },
  computed: {
    taxId: function() {
      return this.$route.params.id;
    }
  }
};
</script>

