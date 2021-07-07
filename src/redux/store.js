import {createStore} from "redux";
import mobReducer from "./Mob/MobReducer";

const store = createStore(mobReducer)

export default store