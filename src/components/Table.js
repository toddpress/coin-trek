import "./Table.css";

const Table = ({ data = [], columns = [] }) => {
  const headers = columns.length
    ? columns.reduce((acc, { header, key }) => acc.concat(header || key), [])
    : Object.keys(data[0]) || [];

  return (
    <table className="table is-fullwidth">
      <thead className="Table__header">
        <tr className="table__header-row">
          {headers.map((header, i) => (
            <th
              key={`Table__header_${i}`}
              className={`Table__header Table__header-${i}`}
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="Table__body">
        {data.map((item, i) => (
          <tr
            key={`Table__body-row-${i}`}
            className={`Table__body-row row-${i}`}
          >
            {columns.map(({ key, header = key, formatter = (v) => v }, i) => (
              <td
                key={`Table__data-cell-${i}`}
                className={`Table__data-cell cell-${i}`}
                style={{ "--header": `'${header}'` }}
              >
                {formatter.apply(null, [item[key]])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
