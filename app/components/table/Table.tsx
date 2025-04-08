interface TableProps {
  headers: string[];
  rows: Array<{ [key: string]: React.ReactNode }>;
  additionalClasses?: string;
}

export function Table({ headers, rows, additionalClasses }: TableProps) {
  return (
    <div
      className={`overflow-hidden overflow-x-auto rounded-lg bg-tertiary shadow-xl ${additionalClasses}`}
    >
      <table className="min-w-full text-left text-sm text-white">
        <thead className="bg-tertiary">
          <tr className="border-b border-border">
            {headers.map((header, index) => (
              <th key={index} className="px-6 py-3 text-sm font-medium uppercase text-white">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`border-b ${rowIndex === rows.length - 1 ? "border-none" : "border-border-dark"}`}
            >
              {headers.map((header, cellIndex) => (
                <td key={cellIndex} className="px-6 py-4 text-sm text-white">
                  {row[header.toLowerCase() as keyof typeof row]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
