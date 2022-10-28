import axios from 'axios'


const KEY = 'AIzaSyAHZS4KYQfYr09JgHwm0cq3AqnTLYkZuNY'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet', 
      type: 'video',
      maxResults: 5,
      key: KEY
  }
});