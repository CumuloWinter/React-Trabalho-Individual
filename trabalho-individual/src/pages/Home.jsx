import { useEffect, useState } from "react";
import { getPosts } from "../api";
import Card from "../components/Card";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [erro, setErro] = useState("");

  useEffect(() => {
    getPosts()
      .then(setPosts)
      .catch(() => setErro("Falha ao carregar"));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Lista de Posts</h2>
      {erro && <p className="text-red-500">{erro}</p>}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.slice(0, 6).map((post) => (
          <Card key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    </div>
  );
}