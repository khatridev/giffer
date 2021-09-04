import api from "../utils/ApiBase";

export async function getTrendingStickers(limit,offset){
    console.log("getTrendingStickers",limit,offset);
    return res = await api.get("/stickers/trending", {
        params: {
            limit: limit,
            offset: offset,
            api_key: "PTo8OaVWQlYP78CMUQtajXkPZ9eNEVxH"
        }
    });
}
export async function queryStickers(term,limit,offset){
    return res = await api.get("/stickers/search", {
      params: {
        q:term,
        limit: limit,
        offset:offset,
        api_key: "PTo8OaVWQlYP78CMUQtajXkPZ9eNEVxH"
      }
    });
}