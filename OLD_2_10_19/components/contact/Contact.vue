<template>
  <div id="contact-us">
    <div class="theme-container">
      <p>
        Have a question about our products? Interested in partnering with us? Or just want to say Hello? Fill out the form below and we will reply as soon as we can. Or, you can reach us by phone during normal business hours at
        <strong>508-XXX-XXXX.</strong>
      </p>
      <form>
        <div class="cu-flexbox">
          <div class="cu-flex cu-flex-30">
            <div class="form-group">
              <label for="firstName">First Name</label>
              <input
                type="text"
                class="form-control"
                id="firstName"
                name="firstName"
                spellcheck="false"
              >
            </div>
          </div>
          <div class="cu-flex cu-flex-30">
            <div class="form-group">
              <label for="lastName">Last Name</label>
              <input
                type="text"
                class="form-control"
                id="lastName"
                name="lastName"
                spellcheck="false"
              >
            </div>
          </div>
          <div class="cu-flex cu-flex-30">
            <div class="form-group">
              <label for="phoneNumber">Phone Number -Optional</label>
              <input
                type="tel"
                class="form-control"
                id="phoneNumber"
                name="phone"
                spellcheck="false"
              >
            </div>
          </div>
          <div class="cu-flex cu-flex-60">
            <div class="form-group">
              <label for="emailAddress">Email</label>
              <input
                type="email"
                class="form-control"
                id="emailAddress"
                name="email"
                spellcheck="false"
              >
            </div>
          </div>
          <div class="cu-flex cu-flex-30 cu-flex-empty"></div>
          <div class="cu-flex cu-flex-30">
            <div class="form-group">
              <label for="topic">Topic</label>
              <select class="form-control" id="topic" name="topic">
                <option value></option>
              </select>
            </div>
          </div>
          <div class="cu-flex cu-flex-60 cu-flex-empty"></div>
          <div class="cu-flex cu-flex-60">
            <div class="form-group">
              <label for="description">Description</label>
              <textarea
                class="form-control"
                id="description"
                rows="10"
                name="description"
                spellcheck="false"
              ></textarea>
            </div>
          </div>
        </div>
        <button type="button" class="theme-primary-btn" v-on:click="openEmailSuccessMsg()">Submit</button>
      </form>
      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Email Sent!</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">We will respond as soon as possible!</div>
            <div class="modal-footer">
              <button type="button" class="btn btn-success" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jQuery from "jquery";

if (process.browser) {
  window.jQuery = jQuery;
  window.$ = jQuery;
  require("bootstrap");
}

export default {
  name: "Contact",
  methods: {
    openEmailSuccessMsg: function() {
      if (process.browser) {
        $("#exampleModal").modal("show");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#contact-us {
  overflow: hidden;
  width: 100%;
}

.cu-flexbox {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 50px 0 0;
  @media screen and (min-width: 1024px) {
    width: 90%;
  }
}
.cu-flex {
  width: 100%;

  @media screen and (min-width: 768px) {
    padding-right: 20px;
    &-30 {
      width: 33%;
    }
    &-60 {
      width: 66%;
    }
  }

  &-empty {
    background-color: transparent;
    border: none;
    display: none;
    @media screen and (min-width: 768px) {
      display: block;
    }
  }

  label {
    font-weight: 500;
  }

  input,
  select,
  textarea {
    background-color: #dedcdc;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    border-bottom: 1px solid black;
    resize: none;

    &:focus {
      border-color: #efa61e;
      box-shadow: 0 0 0 0.2rem rgba(239, 166, 30, 0.25);
    }
  }
}
</style>
