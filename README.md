# @reduxjs/toolkit helps to configure redux into application without much efforts
# previously we were using redux thunk & combined reducers to configure redux package
# use createSlice function to create reducers and export the slice. (refer slice.ts)
# create configureStore to configure the redux store, once reducers are created. (refer store.ts)
# import store into the app
# use useDispatch function to trigger action creators and call the reducers accordingly. (Refer Login.tsx)