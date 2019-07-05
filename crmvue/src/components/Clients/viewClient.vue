<template>
  <div>
    <div class="mainHeader">
      <div class="headerHeading">Clients</div>
      <div class="headerButtons">
        <div class="btn-group">
          <button
            type="button"
            class="btn btn-primary"
            :class="{active : isFilteredData == 1}"
            v-on:click="isFilteredData = 1"
          >Active</button>
          <button
            type="button"
            class="btn btn-primary"
            :class="{active : isFilteredData == 0}"
            v-on:click="isFilteredData = 0"
          >Inactive</button>
          <button
            type="button"
            class="btn btn-primary"
            :class="{active : isFilteredData == -1}"
            v-on:click="isFilteredData = -1"
          >All</button>
        </div>

        <router-link class="btn btn-primary icons" to="/addClient">
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
              <th>Active</th>
              <th>Client Name/Surname</th>
              <th>language</th>
              <th>Address1/2</th>
              <th>City/State</th>
              <th>Zip Code</th>
              <th>Country</th>
              <th>Mobile No</th>
              <th>Birth Date</th>
              <th>CRM ID</th>
              <th>Gender</th>
              <th>Image</th>
              <th colspan="2">Options</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(client, index) in getFilteredClients" :key="index">
              <td>{{client.active == 1 ? 'yes' : 'no'}}</td>
              <td>{{client.clientName}} {{client.clientSurname}}</td>
              <td>{{client.language}}</td>
              <td>{{client.addr1}}/{{client.addr2}}</td>
              <td>{{client.city}}/{{client.state}}</td>
              <td>{{client.zipCode}}</td>
              <td>{{client.country}}</td>
              <td>{{client.mobileNumber}}</td>
              <td>{{client.dob}}</td>
              <td>{{client.crmId}}</td>
              <td>{{client.gender == 1 ? 'Male' : 'Female'}}</td>
              <td>
                <img
                  v-if="client.file != null"
                  :src="`http://localhost:3000/${client.file.replace('public/', '')}`"
                  style="width:100px;height:100px"
                >
              </td>
              <td>
                <router-link :to="`/editClient/${client.id}`" class="btn btn-success">
                  <span class="glyphicon glyphicon-pencil icons"></span>Edit
                </router-link>
                <!-- <button type="button" class="btn btn-success">
                  <span class="glyphicon glyphicon-pencil icons"></span>Edit
                </button>-->
              </td>
              <td>
                <button
                  type="button"
                  class="btn btn-danger"
                  v-on:click="deleteClientData(client.id)"
                >
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
  name: "view-client",
  data: function() {
    return {
      clientData: [],
      isFilteredData: -1
    };
  },
  mounted: function() {
    this.viewClientData();
  },
  methods: {
    viewClientData: function() {
      fetch("http://localhost:3000/clients", {
        method: "GET",
        headers: {
          Accept: "Application/json",
          "content-type": "Application/json"
        }
      })
        .then(res => res.json())
        .then(data => {
          this.clientData = data;
        });
    },
    deleteClientData: function(id) {
      fetch("http://localhost:3000/clients/delete/" + id, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "content-type": "application/json"
        }
      })
        .then(res => res.json())
        .then(data => {
          if (data.status == "OK") {
            alert("Client data deleted successfully");
            this.viewClientData();
          }
        });
    },
    filterClient: function(filterId) {
      debugger;
      return (this.filterClientData = this.clientData.filter(
        client => client.active == filterId
      ));
    }
  },
  computed: {
    getFilteredClients: function() {
      if (this.isFilteredData == -1) {
        return this.clientData;
      } else {
        return this.clientData.filter(c => c.active == this.isFilteredData);
      }
    }
  }
};
</script>

