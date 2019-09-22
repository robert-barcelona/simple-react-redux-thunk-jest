import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import App from "./components/app/App"
import configureStore from "./redux/configure-store"
import ReactModal from "react-modal"

ReactModal.setAppElement("#root")
ReactModal.defaultStyles.overlay.backgroundColor = "rgba(111,130,180,0.8)"
ReactModal.defaultStyles.content.backgroundColor = "rgb(228, 224, 197)"

const store = configureStore()
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
