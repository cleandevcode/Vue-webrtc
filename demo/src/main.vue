<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-md-12 my-3">
        <button type="button" class="btn btn-success" @click="onJoin">
          Join
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onJoin() {
      window.location.href = "/home";
    },
  },
};
</script>
