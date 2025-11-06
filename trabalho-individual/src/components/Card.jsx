export default function Card({ title, body }) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p>{body}</p>
    </div>
  );
}