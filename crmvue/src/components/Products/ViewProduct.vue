<template>
  <div>
    <div class="mainHeader">
      <div class="headerHeading">Product Form</div>
      <div class="headerButtons">
        <router-link class="btn btn-primary icons" to="/createProduct">
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
              <th>id</th>
              <th>Family</th>
              <th>SKU</th>
              <th>Product Name</th>
              <th>Product Description</th>
              <th>Price</th>
              <th>Product Unit</th>
              <th>Tax Rate</th>
              <th>Provider Name</th>
              <th>Purchase Price</th>
              <th>Tarif</th>
              <th colspan="2">Options</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product,index) in productData" :key="index">
              <td>{{product.id}}</td>
              <td>{{product.familyName}}</td>
              <td>{{product.sku}}</td>
              <td>{{product.productName}}</td>
              <td>{{product.productDesc}}</td>
              <td>{{product.price}}</td>
              <td>{{product.unitName}}/{{product.pluralUnitName}}</td>
              <td>{{product.taxRateName}} ({{product.taxRatePerc}} %)</td>
              <td>{{product.providerName}}</td>
              <td>{{product.purchasePrice}}</td>
              <td>{{product.tariff}}</td>
              <td>
                <router-link :to="`/editProduct/${product.id}`" class="btn btn-success">
                  <span class="glyphicon glyphicon-pencil icons"></span>Edit
                </router-link>
                <!-- <button type="button" class="btn btn-success">
                  <span class="glyphicon glyphicon-pencil icons"></span>Edit
                </button>-->
              </td>
              <td>
                <button type="button" class="btn btn-danger" v-on:click="deleteProduct(product.id)">
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
  name: "view-product",
  data: function() {
    return {
      productData: []
    };
  },
  mounted: function() {
    this.viewProductData();
  },
  methods: {
    viewProductData: function() {
      fetch("http://localhost:3000/products", {
        method: "GET",
        headers: {
          Accept: "Application/json",
          "content-type": "Application/json"
        }
      })
        .then(res => res.json())
        .then(data => {
          this.productData = data;
          console.log(JSON.stringify(this.productData));
        });
    },
    deleteProduct: function(id) {
      fetch("http://localhost:3000/products/delete/" + id, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "content-type": "application/json"
        }
      })
        .then(res => res.json())
        .then(data => {
          if (data.status == "OK") {
            alert("Product data deleted successfully");
            this.viewProductData();
          }
        });
    }
  }
};
</script>

