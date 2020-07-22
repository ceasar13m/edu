import {Types} from "../Types";

const initialState = {
    isDrawerOpen: false,
};
export const drawerReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.SHOW_DRAWER: {
            return {
                ...state,
                isDrawerOpen: true
            }
        }
        case Types.HIDE_DRAWER: {
            return {
                ...state,
                isDrawerOpen: false
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
};