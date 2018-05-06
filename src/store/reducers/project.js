import types from "../actionTypes/project";

const obj = {
  mapSection: {
    action: {
      type: "",
      attempt: "",
      message: ""
    },
    projectDataForMaps: []
  },
  projectSection:{
    projects: [],
    action: {
      type: "",
      attempt: "",
      message: ""
    },

  } 
};

export default (state = obj, payload) => {
  switch (payload.type) {

    case types.FETCH_PROJECTS_IN_PROGRESS:
      return {
        ...state,
        projectSection: {
          ...state.projectSection,
        action: {
          type: types.FETCH_PROJECTS_IN_PROGRESS,
          attempt: "in-progress"
        }
      }
      };

    case types.FETCH_PROJECTS_SUCCESSFUL:
      return {
        ...state,
        projectSection: {
          ...state.projectSection,
       
        action: {
          type: types.FETCH_PROJECTS_SUCCESSFUL,
          attempt: "successful"
        },
        projects: payload.projects
      }
      };

    case types.FETCH_PROJECTS_FAILED:
      return {
        ...state,
        projectSection: {
          ...state.projectSection,
       
        action: {
          type: types.FETCH_PROJECTS_FAILED,
          attempt: "failed"
        },
        projects: []
      }
      };

    case types.FETCH_ALL_PROJECTS_DATA_FOR_MAPS_IN_PROGRESS:
      return {
        ...state,
        mapSection: {
          ...state.mapSection,
       
        action: {
          type: types.FETCH_ALL_PROJECTS_DATA_FOR_MAPS_IN_PROGRESS,
          attempt: "in-progress"
        }
      }
      };

    case types.FETCH_ALL_PROJECTS_DATA_FOR_MAPS_SUCCESSFUL:
      return {
        ...state,
        mapSection: {
          ...state.mapSection,
       
        action: {
          type: types.FETCH_ALL_PROJECTS_DATA_FOR_MAPS_SUCCESSFUL,
          attempt: "successful"
        },
        projectDataForMaps: payload.projects
      }
      };

    case types.FETCH_ALL_PROJECTS_DATA_FOR_MAPS_FAILED:
      return {
        ...state,
        mapSection: {
          ...state.mapSection,
       
        action: {
          type: types.FETCH_ALL_PROJECTS_DATA_FOR_MAPS_FAILED,
          attempt: "failed"
        },
        projectDataForMaps: []
      }
      };

      case types.ADD_PROJECT_IN_PROGRESS:
      return {
        ...state,
        action: {
          type: types.ADD_PROJECT_IN_PROGRESS,
          attempt: "in-progress"
        }
      };

    case types.ADD_PROJECT_SUCCESSFUL:
      return {
        ...state,
        action: {
          type: types.ADD_PROJECT_SUCCESSFUL,
          attempt: "successful"
        }
      };

    case types.ADD_PROJECT_FAILED:
      return {
        ...state,
        action: {
          type: types.ADD_PROJECT_FAILED,
          attempt: "failed",
          message: payload.message
        }
      };

    default:
      return state;
  }
};
