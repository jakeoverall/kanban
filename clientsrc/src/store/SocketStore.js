import io from "socket.io-client"
import { baseURL } from "./resource"
import { toastError } from "@bcwdev/quickvue"

let socket = io(baseURL)

socket.on("CONNECTED", (payload) => {
  console.log("You are connected via sockets", payload)

  socket.on("socketError", (e) => {
    toastError(e.message)
  })

  socket.emit("dispatch", {
    action: "TESTING",
    data: { message: "Hello World" }
  })

})


function socketDispatch(action, data) {
  socket.emit("dispatch", {
    action,
    data
  })
}

export default {
  actions: {
    initializeSocket({ commit, dispatch }) {
      socket.on("JOINED", (data) => {
        console.log("JOINED", data)
      })
      socket.on("LEFT", (data) => {
        console.log("LEFT", data)
      })

      socket.on("addList", list => {
        commit("addList", list)
      })
    },
    joinBoard({ dispatch, commit }, boardId) {
      socketDispatch("JoinRoom", boardId)
    },
    leaveBoard({ dispatch, commit }, boardId) {
      socketDispatch("LeaveRoom", boardId)
    }
  }
}