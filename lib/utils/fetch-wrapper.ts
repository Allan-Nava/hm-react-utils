export const fetchWrapper = {
    ajax
};

async function ajax(method, url, headers, params, options) {
    const base_header = new Headers(headers);
    base_header.append("Content-Type", "application/json");

    if (process.env.NODE_ENV != "production") {
        base_header.append("x-debug", "SuyPBUZPau1F4Jd")
    }

    let requestOptions = <any>{
        method: method,
        headers: base_header,
    }

    if (params) {
        if (method == 'GET') {
            url += '?'+ new URLSearchParams(params)
        } else {
            requestOptions.body = JSON.stringify(params)
        }
    }

    if (options) {
        requestOptions = { ...requestOptions, ...options }
        if (options.headers) {
            requestOptions.headers = { ...requestOptions.headers, ...headers }
        }
    }
    const response = await fetch(url, requestOptions);
    return response
}

async function handleResponse(response) {
    const json = await response.json()
    return json
}