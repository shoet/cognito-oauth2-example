export const Config = {
  AWS_REGION: import.meta.env.VITE_AWS_REGION,
  AWS_USER_POOL_ID: import.meta.env.VITE_COGNITO_USER_POOL_ID,
  AWS_USER_POOL_APP_CLIENT_ID: import.meta.env
    .VITE_COGNITO_USER_POOL_APP_CLIENT_ID,
  AWS_ID_POOL_ID: import.meta.env.VITE_COGNITO_ID_POOL_ID,
};
