import Cookies from 'js-cookie';
export const fetcher = (url: RequestInfo | URL) => fetch(url, {headers: {
        'X-Requested-With': 'XMLHttpRequest',
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('access_token')}`
    }}).then((res) => res.json());