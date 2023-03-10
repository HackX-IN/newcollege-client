import { createReducer } from "@reduxjs/toolkit";


export const adminReducer=createReducer({},{


    getAdminstatsRequest:state=>{
        state.loading=true
    },
    getAdminstatsSuccess:(state,action)=>{
        state.loading=false
        state.stats=action.payload.stats
        state.userscount=action.payload.userscount
        state.subscriptioncount=action.payload.subscriptioncount
        state.viewscount=action.payload.viewscount
        state.subscriptionPercetage=action.payload.subscriptionPercetage
        state.usersPercetage=action.payload.usersPercetage
        state.viewsPercetage=action.payload.viewsPercetage
        state.viewsProfit=action.payload.viewsProfit
        state.usersProfit=action.payload.usersProfit
        state.subscriptionProfit=action.payload.subscriptionProfit
    },
    getAdminstatsFail:(state,action)=>{
        state.loading=false
        state.error=action.payload;
    },
  getAllUsersRequest:state=>{
        state.loading=true
    },
    getAllUsersSuccess:(state,action)=>{
        state.loading=false
        state.users=action.payload
    },
    getAllUsersFail:(state,action)=>{
        state.loading=false
        state.error=action.payload;
    },
    deleteUsersRequest:state=>{
        state.loading=true
    },
    deleteUsersSuccess:(state,action)=>{
        state.loading=false
        state.message=action.payload
    },
    deleteUsersFail:(state,action)=>{
        state.loading=false
        state.error=action.payload;
    },

  updateRoleRequest:state=>{
        state.loading=true
    },
    updateRoleSuccess:(state,action)=>{
        state.loading=false
        state.message=action.payload
    },
    updateRoleFail:(state,action)=>{
        state.loading=false
        state.error=action.payload;
    },


    createCourseRequest:state=>{
        state.loading=true
    },
    createCourseSuccess:(state,action)=>{
        state.loading=false
        state.message=action.payload
    },
    createCourseFail:(state,action)=>{
        state.loading=false
        state.error=action.payload;
    },

    deleteCourseRequest:state=>{
        state.loading=true
    },
    deleteCourseSuccess:(state,action)=>{
        state.loading=false
        state.message=action.payload
    },
    deleteCourseFail:(state,action)=>{
        state.loading=false
        state.error=action.payload;
    },
    addLectureRequest:state=>{
        state.loading=true
    },
    addLectureSuccess:(state,action)=>{
        state.loading=false
        state.message=action.payload
    },
    addLectureFail:(state,action)=>{
        state.loading=false
        state.error=action.payload;
    },
    deleteLectureRequest:state=>{
        state.loading=true
    },
    deleteLectureSuccess:(state,action)=>{
        state.loading=false
        state.message=action.payload
    },
    deleteLectureFail:(state,action)=>{
        state.loading=false
        state.error=action.payload;
    },
    clearError:(state)=>{
        state.error=null;
    },
    clearMessage:(state)=>{
        state.message=null
    }
})