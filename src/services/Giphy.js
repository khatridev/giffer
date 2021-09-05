import api from "../utils/ApiBase";
const API_KEY = "PTo8OaVWQlYP78CMUQtajXkPZ9eNEVxH"; // TODO: add a secure place 

export async function getTrendingStickers(limit,offset){
    return res = await api.get("/stickers/trending", {
        params: {
            limit: limit,
            offset: offset,
            api_key: API_KEY 
        }
    });
}
export async function queryStickers(term,limit,offset){
    return res = await api.get("/stickers/search", {
      params: {
        q:term,
        limit: limit,
        offset:offset,
        api_key:  API_KEY 
      }
    });
}