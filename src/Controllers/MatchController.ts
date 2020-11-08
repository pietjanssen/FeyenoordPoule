const apiUrl: string = "https://www.feyenoord.nl/api/matches/results";

export default class MatchController {
    private readonly endpoint: string;
    private readonly apiUrl: string = apiUrl;

    constructor() {
        this.endpoint = this.apiUrl;
    }

    get(requestBody?: {  }, headers: Headers = new Headers()): Promise<any> {
        const url: URL = new URL(this.endpoint);
        if (requestBody) {
            Object.entries(requestBody).forEach(item => {
                url.searchParams.append(item[0], item[1] as string)
            })
        }

        headers.append("Access-Control-Allow-Origin", "*")
        headers.append("User-Agent", "python-requests/2.24.0")
        headers.append("Accept-Encoding", "gzip, deflate")
        headers.append("Accept", "*/*")
        headers.append("Connection", "keep-alive")

        // console.log("GET", url.href);
        return fetch(url.href, {
            headers,
            method: "GET",
        })
            .then(this._checkStatus)
            .then(response => response.json());
    }

    async _checkStatus(response: Response): Promise<any> {
        // raises an error in case response status is not a success
        if (response.status >= 200 && response.status < 400) {
            // Success status lies between 200 to 400
            return response;
        } else {
            const error: Error = new Error(response.statusText);
            error.message = await response.json();
            throw error;
        }
    }
}
