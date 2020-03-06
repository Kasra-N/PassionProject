import { articles_url, _api_key } from "../config/rest_config";

export async function getArticles(category='general') {
  try {
    let articles = await fetch(
      `${articles_url}?country=ca&category=${category}&${_api_key}`
    );

    let result = await articles.json();
    articles = null;

    return result.articles;
  } catch (err) {
    throw err;
  }
}
