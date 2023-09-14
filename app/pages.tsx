import { Article } from "./types";

async function getArticles() {
  const res = await fetch("http://localhost:3000/api/articles", {
    cache: "no-store"
  });
  if (!res.ok) {
    throw new Error("Failed to fetch articles.");
  }

  const data = await res.json();
  return data.articles as Article[];
}

export default async function Home() {
  const articles = await getArticles();

  return (
    <div>
      <h1>新着記事</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </div>
  )
}