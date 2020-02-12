export const generateBeginAsyncActionType = actionName =>
  `ASYNC_${actionName}_BEGIN`;
export const generateSuccessfulAsyncActionType = actionName =>
  `ASYNC_${actionName}_SUCCESS`;
export const generateFailedAsyncActionType = actionName =>
  `ASYNC_${actionName}_FAIL`;

export const createBeginAsyncAction = ({ type, ...action }) => ({
  ...action,
  type: generateBeginAsyncActionType(type),
});

export const createSuccessfulAsyncAction = ({ type, ...action }) => ({
  ...action,
  type: generateSuccessfulAsyncActionType(type),
});

export const createFailedAsyncAction = ({ type, ...action }) => ({
  ...action,
  type: generateFailedAsyncActionType(type),
});
