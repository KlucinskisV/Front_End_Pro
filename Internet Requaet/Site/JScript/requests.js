class Request {
    constructor(){
        this.baseURL = "http://49.13.31.246:9191/";
        this.headers = {
            "content-type": "application/json",
            "x-access-token" : localStorage.getItem('token')
        };
    }
    async get(endPoint) {
        try {
            const response = await fetch(this.baseURL + endPoint,{
                headers : this.headers
            });
            if(!response.ok){
                    throw new Error('Error Network')
                }
                return await response.json();
        } catch(error){
            console.error('Error in Get',error.message);
            throw error;

        }
    }

    async post (endPoint,data){
        try {
            const response = await fetch(this.baseURL + endPoint, {
                method: 'POST',
                headers: this.headers,
                body: JSON.stringify(data)
            })
            if(!response.ok){
                throw new Error('Error Network')
            }
            return await response.json();
    } catch(error){
        console.error('Error in Get',error.message);
        throw error;

    }

    }
    
}