export default async function page ({ params }) {
  const { demoid } = await params;

  return (
    <div className="flex flex-col m-20 gap-4 text-black">
      <h1 className="text-3xl font-bold caret-amber-400">Note Page </h1>
      <ul>
        <li className="drop-shadow-amber-400">Note {demoid}</li>
        <li className="drop-shadow-amber-400">Note 2 {demoid}</li>
        <li className="drop-shadow-amber-400">Note 3 {demoid}</li>
        <p>Ini catatan dari Note Detail {demoid}</p>
      </ul>
    </div>
   );
};

