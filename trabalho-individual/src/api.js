const API_URL = "https://jsonplaceholder.typicode.com";

export async function getPosts() {
  const res = await fetch(`${API_URL}/posts`);
  if (!res.ok) throw new Error("Erro ao buscar posts");
  return res.json();
}

export async function createPost(data) {
  const res = await fetch(`${API_URL}/posts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Erro ao enviar post");
  return res.json();
}