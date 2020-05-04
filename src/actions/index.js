import * as c from './ActionTypes';

export const deleteMemory = id => ({
  type: c.DELETE_MEMORY,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const updateTime = (id, formattedWaitTime) => ({ 
  type: c.UPDATE_TIME,
  id: id,
  formattedWaitTime: formattedWaitTime
});
