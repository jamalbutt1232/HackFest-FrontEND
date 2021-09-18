import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/userAuthSlice";

export const store = configureStore({
  reducer: {
    authUser: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     immutableCheck: { ignoredPaths: ["some.nested.path"] },
  //     serializableCheck: { ignoredPaths: ["some.nested.path"] },
  //   }),
});