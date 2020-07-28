import {combineReducers} from "redux";
import newsReducer from "./news/news-reducer";
import careersReducer from "./careers/careers-reducer";

const rootReducer = combineReducers({
    news: newsReducer,
    careers: careersReducer
});

export default rootReducer;
