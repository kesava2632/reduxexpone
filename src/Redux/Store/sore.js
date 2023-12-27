import { createStore } from "redux";
import {reduser} from '../Reduce/reduce'

const store = createStore(reduser)


export default store