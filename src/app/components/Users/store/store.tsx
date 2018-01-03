import axios from "axios";
import {createStore} from "redux";
import Users from "./reducers";

const store = createStore(Users);

export default store;
