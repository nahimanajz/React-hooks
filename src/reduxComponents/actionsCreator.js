import * as actions from "./actionTypes";

export  const bugAdded = desc => ({
    type:actions.BUG_ADDED,
    payload: {
        description: desc
    }
});

export const bugResolved = (id)=> ({
    type:actions.BUG_RESOLVED,
    payload: {
        id
    }
});
