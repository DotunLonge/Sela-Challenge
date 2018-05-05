import axios from "axios";
import endpoints from "../../endpoints";
import types from "../actionTypes/project";

export const add = obj=>{
    return dispatch => {
        
        dispatch({ type: types.ADD_PROJECT_IN_PROGRESS })
        
        axios.post(endpoints.projects, obj)
        
        .then((res)=> {
            dispatch({ type: types.ADD_PROJECT_SUCCESSFUL, message:  res.message })
        })
        .catch((res) => {
            dispatch({ type: types.ADD_PROJECT_FAILED, message: res.response.data.message })
        })

    }
}

export const fetchAll = ()=>{
    return dispatch => {
        
        dispatch({type: types.FETCH_PROJECTS_IN_PROGRESS})
        
        axios.get(endpoints.projects)
        
        .then( response => dispatch({type: types.FETCH_PROJECTS_SUCCESSFUL, projects: response.data }))
        
        .catch(response=> dispatch({type: types.FETCH_PROJECTS_FAILED}))

    }
}


export const sortByBudget = ()=>{
    return { type: types.SORT_BY_BUDGET}
}


export const sortByStartDate = ()=>{
    return { type: types.SORT_BY_START_DATE}
}

export const sortByEndDate = ()=>{
    return { type: types.SORT_BY_END_DATE}
}