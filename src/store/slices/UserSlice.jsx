import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser(state, action) { 
            state.push(action.payload);
            console.log(action.payload);
        },
        removeUser(state, action) { 
            // state.pop(action.payload); // through pop we can not delete desire name the name will delete who will first eneter
            // console.log("hi" + action.payload);
               state.splice(action.payload, 1); // while using splice can delete any name 
        },
        clearAllUsers(state, action) { 
            return [];  // its mean above intialState we cleared [] that's why all data will delete
        },
    },

    // if we need one reducer who define mulitple slices then we will use extra reducers
    extraReducers(builder){ // builder parameter we got be default
       builder.addCase(userSlice.actions.clearAllUsers, () => {
        return [];
       })
    }
});

console.log(userSlice.actions)


export default userSlice.reducer;
export const {addUser, removeUser, clearAllUsers} = userSlice.actions;

// export {userSlice} //(we can export this way as well)


//  If action is supposed to be handled by one reducer, use reducers.
// If action is supposed to be handled by mulitple reducers, use extraReducers.
