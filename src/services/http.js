const URL = 'http://ec2-3-87-201-249.compute-1.amazonaws.com';
const PORT = '8082';


export const getLimit = (data) => {
    return fetch(`${URL}:${PORT}/get-limit`, {
        method: 'POST',
        body: JSON.stringify(data)
    })
};