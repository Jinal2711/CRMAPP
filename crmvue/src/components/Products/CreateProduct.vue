<template>
  <div>
    <div class="mainHeader">
      <div class="headerHeading">
        <b>Product Form</b>
      </div>
      <div class="headerButtons">
        <div class="btn-group">
          <button type="button" class="btn btn-success" v-on:click="postProductData();">
            <span class="glyphicon glyphicon-ok icons"></span>Save
          </button>
          <button type="button" class="btn btn-danger">
            <span class="glyphicon glyphicon-remove icons"></span>Delete
          </button>
        </div>
      </div>
    </div>
    <br>
    <div class="container-fluid">
      <div class="col-sm-6">
        <div class="panel panel-primary">
          <div class="panel-heading">New product</div>
          <div class="panel-body">
            <div class="form-group">
              <label for="family_id">Family</label>

              <select
                name="family_id"
                id="family_id"
                class="form-control simple-select select2-hidden-accessible"
                tabindex="-1"
                aria-hidden="true"
                v-model="family"
              >
                <option value selected disabled>Select family</option>
                <option
                  v-for="(fam,index) in familyData"
                  :key="index"
                  :value="fam.id"
                >{{fam.familyName}}</option>
              </select>
            </div>

            <div class="form-group">
              <label for="product_sku">SKU</label>

              <input
                type="text"
                name="product_sku"
                id="product_sku"
                class="form-control"
                v-model="sku"
              >
            </div>

            <div class="form-group">
              <label for="product_name">Product name</label>

              <input
                type="text"
                name="product_name"
                id="product_name"
                class="form-control"
                v-model="productName"
              >
            </div>

            <div class="form-group">
              <label for="product_description">Product description</label>

              <textarea
                name="product_description"
                id="product_description"
                class="form-control"
                rows="3"
                v-model="productDesc"
              ></textarea>
            </div>

            <div class="form-group">
              <label for="product_price">Price</label>

              <div class="input-group has-feedback">
                <input
                  type="text"
                  name="product_price"
                  id="product_price"
                  class="form-control"
                  v-model="price"
                >
                <span class="input-group-addon">$</span>
              </div>
            </div>

            <div class="form-group">
              <label for="unit_id">Product Unit</label>

              <select
                name="unit_id"
                id="unit_id"
                class="form-control simple-select select2-hidden-accessible"
                tabindex="-1"
                aria-hidden="true"
                v-model="productUnit"
              >
                <option value selected disabled>Select unit</option>
                <option
                  v-for="(unit,index) in unitData"
                  :key="index"
                  :value="unit.id"
                >{{unit.unitName}}/{{unit.pluralUnitName}}</option>
              </select>
            </div>

            <div class="form-group">
              <label for="tax_rate_id">Tax Rate</label>

              <select
                name="tax_rate_id"
                id="tax_rate_id"
                class="form-control simple-select select2-hidden-accessible"
                tabindex="-1"
                aria-hidden="true"
                v-model="taxRate"
              >
                <option value selected disabled>Select Tax Rate</option>
                <option
                  v-for="(tax,index) in taxData"
                  :key="index"
                  :value="tax.id"
                >{{tax.taxRateName}} ({{tax.taxRatePerc}}%)</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="panel panel-primary">
          <div class="panel-heading">New product</div>
          <div class="panel-body">
            <div class="form-group">
              <label for="provider_name">Provider Name</label>

              <input
                type="text"
                name="provider_name"
                id="provider_name"
                class="form-control"
                v-model="providerName"
              >
            </div>

            <div class="form-group">
              <label for="purchase_price">Purchase Price</label>

              <div class="input-group has-feedback">
                <input
                  type="text"
                  name="purchase_price"
                  id="purchase_price"
                  class="form-control"
                  v-model="purchasePrice"
                >
                <span class="input-group-addon">$</span>
              </div>
            </div>

            <div class="form-group">
              <label for="tariff">Tariff</label>

              <input type="text" name="tariff" id="tariff" class="form-control" v-model="tariff">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "create-product",
  data: function() {
    return {
      family: "",
      sku: "",
      productName: "",
      productDesc: "",
      price: "",
      productUnit: "",
      taxRate: "",
      providerName: "",
      purchasePrice: "",
      tariff: "",
      familyData: [],
      unitData: [],
      taxData: []
    };
  },
  mounted: function() {
    if (this.productId) {
      fetch(`http://localhost:3000/products/${this.productId}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          this.family = data.family;
          this.sku = data.sku;
          this.productName = data.productName;
          this.productDesc = data.productDesc;
          this.price = data.price;
          this.productUnit = data.productUnit;
          this.taxRate = data.taxRate;
          this.providerName = data.providerName;
          this.purchasePrice = data.purchasePrice;
          this.tariff = data.tariff;
        });
    }
    this.bindFamilyData();
    this.bindUnitData();
    this.bindTaxData();
  },
  methods: {
    postProductData: function() {
      if (this.productId) {
        this.sendUpdatedProductData();
      } else {
        this.sendProductData();
      }
    },
    sendProductData: function() {
      fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          family: this.family,
          sku: this.sku,
          productName: this.productName,
          productDesc: this.productDesc,
          price: this.price,
          productUnit: this.productUnit,
          taxRate: this.taxRate,
          providerName: this.providerName,
          purchasePrice: this.purchasePrice,
          tariff: this.tariff
        })
      })
        .then(res => res.json())
        .then(data => {
          if (data.status == "OK") {
            alert("Data send successfully");
            this.$router.push("/viewProduct");
          }
        });
    },
    sendUpdatedProductData: function() {
      this.productId = this.$route.query.prodId;
      fetch(`http://localhost:3000/products/update/${this.productId}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          family: this.family,
          sku: this.sku,
          productName: this.productName,
          productDesc: this.productDesc,
          price: this.price,
          productUnit: this.productUnit,
          taxRate: this.taxRate,
          providerName: this.providerName,
          purchasePrice: this.purchasePrice,
          tariff: this.tariff
        })
      })
        .then(res => res.json())
        .then(data => {
          if (data.status == "OK") {
            alert("Product Data updated successfully");
            this.$router.push("/viewProduct");
          }
        });
    },
    bindFamilyData: function() {
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
        });
    },
    bindUnitData: function() {
      fetch("http://localhost:3000/productUnits", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "content-type": "application/json"
        }
      })
        .then(res => res.json())
        .then(data => {
          this.unitData = data;
        });
    },
    bindTaxData: function() {
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
    }
  },
  computed: {
    productId: function() {
      return this.$route.params.id;
    }
  }
};
</script>

