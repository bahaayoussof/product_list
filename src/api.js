import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "https://dummyjson.com/",
});

axiosInstance.interceptors.request.use(
	request => {
		return request;
	},
	error => {
		console.log("Error in axios request: ", error);
		return Promise.reject(error);
	}
);

axiosInstance.interceptors.response.use(
	response => {
		return response;
	},
	error => {
		console.log("Error in axios response: ", error);
		return Promise.reject(error);
	}
);

export default axiosInstance;
