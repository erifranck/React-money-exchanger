import {create} from 'apisauce'

export const accessKey = "4c907b39e5ddedd65eaa958c253cfcf1";
const fixerApi = create({
    baseURL: "http://data.fixer.io/api/",
    params: {
        access_key: accessKey,
    }
});

export const getConversion = () => fixerApi.get('/latest', {format: 1});
