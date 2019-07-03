<template>
  <div>
    <div class="mainHeader">
      <div class="headerHeading">
        <b>Add Family</b>
      </div>
      <div class="headerButtons">
        <div class="btn-group">
          <button type="button" class="btn btn-success" v-on:click="postFamilyData">
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
          <label for="family_name">Family name</label>
          <input
            type="text"
            name="family_name"
            id="family_name"
            class="form-control"
            v-model="familyName"
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "create-family",
  data: function() {
    return {
      familyName: "",
      famId: ""
    };
  },
  mounted: function() {
    if (this.familyId) {
      fetch(`http://localhost:3000/productFamily/${this.familyId}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(data => {
          this.familyName = data.familyName;
        });
    }
  },
  methods: {
    postFamilyData: function() {
      if (this.familyId) {
        this.sendUpdateFamilyData();
      } else {
        this.sendFamilyData();
      }
    },
    sendFamilyData: function() {
      fetch("http://localhost:3000/productFamily", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "content-type": "application/json"
        },
        body: JSON.stringify({
          familyName: this.familyName
        })
      })
        .then(res => res.json())
        .then(data => {
          if (data.status == "OK") {
            alert("Family added successfully");
            this.$router.push("/viewFamily");
          }
        });
    },
    sendUpdateFamilyData: function() {
      fetch(`http://localhost:3000/productFamily/update/${this.familyId}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "content-type": "application/json"
        },
        body: JSON.stringify({
          familyName: this.familyName
        })
      })
        .then(res => res.json())
        .then(data => {
          if (data.status == "OK") {
            alert("Family updated successfully");
            this.$router.push("/viewFamily");
          }
        });
    }
  },
  computed: {
    familyId: function() {
      return this.$route.params.id;
    }
  }
};
</script>


