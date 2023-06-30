import { reactive } from "vue";
import { io } from "socket.io-client";

export const state = reactive({
  connected: false,
  received: null,
});

export const socket = io();

socket.on("connect", () => {
  state.connected = true;
});

socket.on("disconnect", () => {
  state.connected = false;
});

socket.on("received", (...args) => {
  state.received = args;
});

