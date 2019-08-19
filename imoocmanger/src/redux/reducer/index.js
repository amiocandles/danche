/*reducer数据处理*/
import { combineReducers } from 'redux'
import { type } from '../action';
const ebikeData = (state, action) => {
    switch (action.type) {
        case type.SWITCH_MENU:
            return {
                ...state,//保留原有状态
                menuName:action.menuName//返回新的值
            };
        default:
            return {...state};
    }
};
export default ebikeData;