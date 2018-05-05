import types from "../actionTypes/project";

const obj = {
  action: {
    type: "",
    attempt: "",
    message: ""
  },
  projects: []
};

export default (state = obj, payload) => {
  switch (payload.type) {

    case types.FETCH_PROJECTS_IN_PROGRESS:
    return {
      ...state,
      action: {
        type: types.FETCH_PROJECTS_IN_PROGRESS,
        attempt: "in-progress"
      }
    }

    case types.FETCH_PROJECTS_SUCCESSFUL:
    return {
      ...state,
      action: {
        type: types.FETCH_PROJECTS_SUCCESSFUL,
        attempt: "successful"
      },
      projects: payload.projects
    }

    case types.FETCH_PROJECTS_FAILED:
    return {
      ...state,
      action: {
        type: types.FETCH_PROJECTS_FAILED,
        attempt: "failed"
      },
      projects: []
    }


    case types.ADD_PROJECT_IN_PROGRESS: 
    return {
      ...state,
      action: {
        type: types.ADD_PROJECT_IN_PROGRESS,
        attempt: "in-progress"
      }
    }

    case types.ADD_PROJECT_SUCCESSFUL: 
    return {
      ...state,
      action: {
        type: types.ADD_PROJECT_SUCCESSFUL,
        attempt: "successful"
      }
    }

    case types.ADD_PROJECT_FAILED: 
    return {
      ...state,
      action: {
        type: types.ADD_PROJECT_FAILED,
        attempt: "failed",
        message: payload.message
      }
    }

    
    default:
      return state;
  }
};
