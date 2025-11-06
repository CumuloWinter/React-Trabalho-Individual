import { useState } from "react";
import { createPost } from "../api";
import Button from "../components/Button";

export default function Cadastro() {
  const [titulo, setTitulo] = useState("");
  const [conteudo, setConteudo] = useState("");
  const [mensagem, setMensagem] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setMensagem("");

    try {
      const novoPost = await createPost({ title: titulo, body: conteudo, userId: 1 });
      setMensagem(`Post cadastrado com sucesso! ID: ${novoPost.id}`);
      setTitulo("");
      setConteudo("");
    } catch {
      setMensagem("Erro ao cadastrar o post 😢");
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Cadastrar Novo Post</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <textarea
          placeholder="Conteúdo"
          value={conteudo}
          onChange={(e) => setConteudo(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <Button type="submit" text="Cadastrar" />
      </form>
      {mensagem && <p className="mt-4 text-blue-600">{mensagem}</p>}
    </div>
  );
}