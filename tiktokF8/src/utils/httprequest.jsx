import axios from 'axios';
const httprequest = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_BASE_URL,
});
export const get = async (path, options = {}) => {
    const response = await httprequest.get(path, options);

    return response.data;
};
export default httprequest;
