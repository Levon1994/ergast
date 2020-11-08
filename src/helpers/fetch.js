import { BASE_URL } from '../modules/types';

export default class Fetch {
    static async fetch(options) {
        const { headers, method, body, path, data} = options;

        let requestOptions = {
            headers: {
                'Accept': 'application/json',
                ...headers,
            },
            method,
            redirect: 'follow',
        };

        if (body) {
            requestOptions.headers['Content-Type'] = 'application/json';
            requestOptions.body = JSON.stringify(body);
        } else if(data) {
            requestOptions.body = data;
        }
        // Fire the Request and Return the response promise Object
        return await fetch(new Request(`${BASE_URL}${path}`, requestOptions))
        .then(res => res);
    }

    /* GET (retrieve) */
    static get = options => Fetch.fetch({ ...options, method: 'GET' });

    /* POST (create) */
    static post = options => Fetch.fetch({ ...options, method: 'POST' });

    /* PUT (update) */
    static put = options => Fetch.fetch({ ...options, method: 'PUT' });;

    /* DELETE (remove) */
    static delete = options => Fetch.fetch({ ...options, method: 'DELETE' });
}
