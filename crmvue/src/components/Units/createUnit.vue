<template>
  <div>
    <div class="mainHeader">
      <div class="headerHeading">
        <b>Add Family</b>
      </div>
      <div class="headerButtons">
        <div class="btn-group">
          <button type="button" class="btn btn-success" v-on:click="postUnitData">
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
          <label for="unit_name">Unit Name</label>
          <input
            type="text"
            name="unit_name"
            id="unit_name"
            class="form-control"
            v-model="unitName"
          >
        </div>
        <div class="form-group">
          <label for="plural_form">Unit Name (plural form)</label>
          <input
            type="text"
            name="plural_form"
            id="plural_form"
            class="form-control"
            v-model="pluralUnitName"
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
      unitName: "",
      pluralUnitName: ""
    };
  },
  mounted: function() {
    if (this.unitId) {
      fetch(`http://localhost:3000/productUnits/${this.unitId}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(data => {
          this.unitName = data.unitName;
          this.pluralUnitName = data.pluralUnitName;
        });
    }
  },
  methods: {
    postUnitData: function() {
      if (this.unitId) {
        this.sendUpdatedUnitData();
      } else {
        this.sendUnitData();
      }
    },
    sendUnitData: function() {
      fetch("http://localhost:3000/productUnits", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "content-type": "application/json"
        },
        body: JSON.stringify({
          unitName: this.unitName,
          pluralUnitName: this.pluralUnitName
        })
      })
        .then(res => res.json())
        .then(data => {
          if (data.status == "OK") {
            alert("Unit data added successfully");
            this.$router.push("/viewUnits");
          }
        });
    },
    sendUpdatedUnitData: function() {
      fetch(`http://localhost:3000/productUnits/update/${this.unitId}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "content-type": "application/json"
        },
        body: JSON.stringify({
          unitName: this.unitName,
          pluralUnitName: this.pluralUnitName
        })
      })
        .then(res => res.json())
        .then(data => {
          if (data.status == "OK") {
            alert("Unit data updated successfully");
            this.$router.push("/viewUnits");
          }
        });
    }
  },
  computed: {
    unitId: function() {
      return this.$route.params.id;
    }
  }
};
</script>

