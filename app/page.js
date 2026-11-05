const names = ["Nelson", "Esther", "Luke", "Lua"];

export default function Home() {
  return (
    <ul>
      {names.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
}
