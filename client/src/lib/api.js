import axios from 'axios' ;



const api = axios.create({
    baseURL : "http://localhost:3000/api",
})
//interceptors 
api.interceptors.request.use((config)=>{
const token = localStorage.getItem('accessToken') ;
config.headers.Authorization = `Bearer ${token}`
config.headers.name  = 'ritesh'
return config
})

axios.interceptors.response.use(
    (response) => {
      // Process successful responses
      return response;
    },
   async (error) => {
      if (error.response.status === 401) {
      try {
        const response = await axios.post('http://localhost:3000/api/v1/refresh' , {refreshToken : localStorage.getItem('refreshToken')})
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }
    //   } else if (error.response.status === 500) {
    //     // Handle server errors
    //     console.error('Server error');
    //   }
      return Promise.reject(error);
    }
   );

export default api  



