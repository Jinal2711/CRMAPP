<template>
  <div>
    <form enctype="multipart/form-data">
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text aadharUpload" id="inputGroupFileAddon01">Aaddhar Card</span>
        </div>
        <div class="custom-file">
          <input
            type="file"
            name="imgUploader"
            multiple
            class="custom-file-input"
            @change="uploadFile"
            aria-describedby="inputGroupFileAddon01"
          >
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      default: null
    }
  },
  $_veeValidate: {
    value() {
      return this.value;
    },
    name() {
      return this.name;
    }
  },
  methods: {
    uploadFile(e) {
      var context = this;
      var formdata = new FormData(); //FormData object
      var fileInput = e.target;
      formdata.append("imageUploader", fileInput.files[0]);
      fetch("http://localhost:3000/clients/upload", {
        method: "POST",
        body: formdata
      })
        .then(res => res.json())
        .then(data => {
          context.$emit("input", data.path);
        });
    }
  }
};
</script>

