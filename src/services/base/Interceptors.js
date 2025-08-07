const AuthInterceptor = (config) => {
  const token = localStorage.getItem("ACCESS_TOKEN");
  config.headers = config.headers || {};
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};

const ResponseInterceptor = (response) => {
  return response?.data;
};

const ErrorInterceptor = (error) => {
  try {
    const { response } = error;
    if (response?.status === 401) {
      localStorage.removeItem("ACCESS_TOKEN");
    }
  } catch (e) {
    console.error(e);
  }
  throw error;
};
export { ResponseInterceptor, AuthInterceptor, ErrorInterceptor };
