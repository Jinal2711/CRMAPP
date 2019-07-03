<template>
  <div>
    <div class="mainHeader">
      <div class="headerHeading">
        <b>Client Form</b>
      </div>
      <div class="headerButtons">
        <div class="btn-group">
          <button type="button" class="btn btn-success" v-on:click="postClientData">
            <span class="glyphicon glyphicon-ok icons"></span>Save
          </button>
          <button type="button" class="btn btn-danger">
            <span class="glyphicon glyphicon-remove icons"></span>Delete
          </button>
        </div>
      </div>
    </div>
    <br>
    <!-- ============== Personal information================ -->
    <div class="container-fluid">
      <div class="col-sm-6">
        <div class="panel panel-primary">
          <div class="panel-heading" style="display:flex;justify-content: space-between;">
            Personal Information
            <div>
              <input type="checkbox" value="1" v-model="active">
            </div>
          </div>
          <div class="panel-body">
            <div class="form-group">
              <label for="client_name">Cient Name</label>
              <input
                type="text"
                name="client_name"
                id="client_name"
                class="form-control"
                v-model="clientName"
              >
            </div>

            <div class="form-group">
              <label for="client_surname">Client Surname</label>
              <input
                type="text"
                name="client_surname"
                id="client_surname"
                class="form-control"
                v-model="clientSurname"
              >
            </div>

            <div class="form-group">
              <label for="language">Language</label>
              <input
                type="text"
                name="language"
                id="language"
                class="form-control"
                v-model="language"
              >
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6"></div>
    </div>
    <!-- ============== address and contact information================ -->
    <div class="container-fluid">
      <div class="col-sm-6">
        <div class="panel panel-primary">
          <div class="panel-heading">Address</div>
          <div class="panel-body">
            <div class="form-group">
              <label for="add1">Street Address</label>
              <input type="text" name="add1" id="add1" class="form-control" v-model="addr1">
            </div>

            <div class="form-group">
              <label for="add2">Street Address2</label>
              <input type="text" name="add2" id="add2" class="form-control" v-model="addr2">
            </div>

            <div class="form-group">
              <label for="city">City</label>
              <input type="text" name="city" id="city" class="form-control" v-model="city">
            </div>

            <div class="form-group">
              <label for="State">State</label>
              <input type="text" name="State" id="State" class="form-control" v-model="state">
            </div>

            <div class="form-group">
              <label for="zip">Zip Code</label>
              <input type="text" name="zip" id="zip" class="form-control" v-model="zipCode">
            </div>

            <div class="form-group">
              <label for="country">Country</label>

              <select
                name="country"
                id="country"
                class="form-control simple-select select2-hidden-accessible"
                tabindex="-1"
                aria-hidden="true"
                v-model="country"
              >
                <option value selected disabled>Select Country</option>
                <option value="India">India</option>
                <option value="Australia">Australia</option>
                <option value="South Africa">South Africa</option>
                <option value="England">England</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="panel panel-primary">
          <div class="panel-heading">Contact Information</div>
          <div class="panel-body">
            <div class="form-group">
              <label for="faxNo">Phone Number</label>
              <input
                type="text"
                name="phone_number"
                id="phone_number"
                class="form-control"
                v-model="phoneNumber"
              >
            </div>

            <div class="form-group">
              <label for="faxNo">Fax Number</label>

              <input type="text" name="faxNo" id="faxNo" class="form-control" v-model="faxNumber">
            </div>

            <div class="form-group">
              <label for="mobile_number">Mobile Number</label>
              <input
                type="text"
                name="mobile_number"
                id="mobile_number"
                class="form-control"
                v-model="mobileNumber"
              >
            </div>

            <div class="form-group">
              <label for="email">Email Address</label>
              <input
                type="text"
                name="email"
                id="email"
                class="form-control"
                v-model="emailAddress"
              >
            </div>

            <div class="form-group">
              <label for="webAdd">Web Address</label>

              <input
                type="text"
                name="webAdd"
                id="webAdd"
                class="form-control"
                v-model="webAddress"
              >
            </div>

            <div class="form-group">
              <label for="crmid">CRM ID</label>

              <input type="text" name="crmid" id="crmid" class="form-control" v-model="crmId">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ============== Personal information 2================ -->
    <div class="container-fluid">
      <div class="col-sm-6">
        <div class="panel panel-primary">
          <div class="panel-heading">Personal Information</div>
          <div class="panel-body">
            <div class="form-group">
              <label for="gender">Gender</label>
              <select
                name="gender"
                id="gender"
                class="form-control simple-select select2-hidden-accessible"
                tabindex="-1"
                aria-hidden="true"
                v-model="gender"
              >
                <option value selected disabled>Select family</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="3">Other</option>
              </select>
            </div>

            <div class="form-group">
              <label for="dob">Birthdate</label>
              <div class="input-group has-feedback">
                <input type="date" name="dob" id="dob" class="form-control" v-model="dob">
                <span class="input-group-addon">
                  <span class="glyphicon glyphicon-calendar"></span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="panel panel-primary">
          <div class="panel-heading">Tax Information</div>
          <div class="panel-body">
            <div class="form-group">
              <label for="vatID">VAT ID</label>
              <input type="text" name="vatID" id="vatID" class="form-control" v-model="vatId">
            </div>
            <div class="form-group">
              <label for="tax_code">Taxes Code</label>

              <input
                type="text"
                name="tax_code"
                id="tax_code"
                class="form-control"
                v-model="taxCode"
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "add-client",
  data: function() {
    return {
      active: "",
      clientName: "",
      clientSurname: "",
      language: "",
      addr1: "",
      addr2: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
      phoneNumber: "",
      faxNumber: "",
      mobileNumber: "",
      emailAddress: "",
      webAddress: "",
      crmId: "",
      gender: "",
      dob: "",
      vatId: "",
      taxCode: ""
    };
  },
  mounted: function() {
    if (this.clientId) {
      fetch(`http://localhost:3000/clients/${this.clientId}`, {
        method: "GET",
        Accept: "application/json",
        "content-type": "application/json"
      })
        .then(res => res.json())
        .then(data => {
          this.active = data.active;
          this.clientName = data.clientName;
          this.clientSurname = data.clientSurname;
          this.language = data.language;
          this.addr1 = data.addr1;
          this.addr2 = data.addr2;
          this.city = data.city;
          this.state = data.state;
          this.zipCode = data.zipCode;
          this.country = data.country;
          this.phoneNumber = data.phoneNumber;
          this.faxNumber = data.faxNumber;
          this.mobileNumber = data.mobileNumber;
          this.emailAddress = data.emailAddress;
          this.webAddress = data.webAddress;
          this.crmId = data.crmId;
          this.gender = data.gender;
          this.dob = this.format(data.dob);
          this.vatId = data.vatId;
          this.taxCode = data.taxCode;
        });
    }
  },
  methods: {
    postClientData: function() {
      if (this.clientId) {
        this.saveUpdatedClientData();
      } else {
        this.saveClientData();
      }
    },
    saveClientData: function() {
      fetch("http://localhost:3000/clients", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          active: this.active == "1" ? 1 : 0,
          clientName: this.clientName,
          clientSurname: this.clientSurname,
          language: this.language,
          addr1: this.addr1,
          addr2: this.addr2,
          city: this.city,
          state: this.state,
          zipCode: this.zipCode,
          country: this.country,
          phoneNumber: this.phoneNumber,
          faxNumber: this.faxNumber,
          mobileNumber: this.mobileNumber,
          emailAddress: this.emailAddress,
          webAddress: this.webAddress,
          crmId: this.crmId,
          gender: this.gender,
          dob: this.dob,
          vatId: this.vatId,
          taxCode: this.taxCode
        })
      })
        .then(res => res.json())
        .then(data => {
          if (data.status == "OK") {
            alert("Client Data saved successfully");
            this.$router.push("/viewClient");
          }
        });
    },
    saveUpdatedClientData: function() {
      fetch(`http://localhost:3000/clients/update/${this.clientId}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          active: this.active == "1" ? 1 : 0,
          clientName: this.clientName,
          clientSurname: this.clientSurname,
          language: this.language,
          addr1: this.addr1,
          addr2: this.addr2,
          city: this.city,
          state: this.state,
          zipCode: this.zipCode,
          country: this.country,
          phoneNumber: this.phoneNumber,
          faxNumber: this.faxNumber,
          mobileNumber: this.mobileNumber,
          emailAddress: this.emailAddress,
          webAddress: this.webAddress,
          crmId: this.crmId,
          gender: this.gender,
          dob: this.dob,
          vatId: this.vatId,
          taxCode: this.taxCode
        })
      })
        .then(res => res.json())
        .then(data => {
          if (data.status == "OK") {
            alert("Client Data updated successfully");
            this.$router.push("/viewClient");
          }
        });
    },
    format: function(date) {
      return new Date(date).toISOString().substr(0, 10);
    }
  },
  computed: {
    clientId: function() {
      return this.$route.params.id;
    }
  }
};
</script>

