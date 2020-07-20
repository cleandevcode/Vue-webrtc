<template>
  <div id="home" class="container">
    <div class="row">
      <div class="col-md-12 my-3">
        <h2>Device Camera</h2>
        <!-- <input v-model="roomId" /> -->
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <vue-webrtc ref="webrtc" width="100%" :roomId="roomId" @error="onError" />
      </div>
      <div class="row">
        <div class="col-md-12 my-3">
          <button type="button" class="btn btn-primary" @click="onJoin">On</button>
          <button type="button" class="btn btn-danger" @click="onLeave">Off</button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 my-3">
        <h3>Comments list</h3>
      </div>
      <div v-if="loading" class="loading">Loading...</div>
      <div v-if="error" class="error">{{ error }}</div>
      <div v-if="comments" class="content">
        <div v-for="comment in comments" :key="comment.id">
          <div class="d-flex align-items-center">
            <h5>{{ comment.name }}</h5>
            <h6 class="ml-5">{{ comment.email }}</h6>
          </div>

          <p>{{ comment.body }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { WebRTC } from "plugin";
import { find, head } from "lodash";
import axios from "axios";

Vue.component(WebRTC.name, WebRTC);

export default {
  name: "home",
  components: {},
  data() {
    return {
      roomId: "public-room",
      loading: false,
      comments: [],
      error: null
    };
  },
  mounted() {
    this.comment = this.error = null;
    this.loading = true;
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then(res => res.json())
      .then(result => {
        this.comments = result;
        this.loading = false;
        this.error = null;
      })
      .catch(error => {
        this.error = error.toString();
      });
  },
  methods: {
    onJoin() {
      this.$refs.webrtc.join();
    },
    onLeave() {
      this.$refs.webrtc.leave();
    },
    onError(error, stream) {
      console.log("On Error Event", error, stream);
    }
  }
};
</script>
