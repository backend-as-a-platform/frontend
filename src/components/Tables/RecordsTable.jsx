import { Link } from 'react-router-dom';

const RecordsTable = ({ formId, cols, records, version, latestVersion }) => {
  return (
    <table className="table w-full mb-8">
      <thead>
        <tr>
          <th>#</th>
          {cols.map((col, i) => (
            <th key={i}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {records &&
          records.map((record, i) => {
            let link;

            if (version == latestVersion) {
              link = `/forms/${formId}/${record._id}`;
            } else {
              link = `/forms/${formId}/v/${version}/${record._id}`;
            }

            return (
              <tr key={i} className="hover">
                <td>
                  <Link to={link}>{i + 1}</Link>
                </td>
                {cols.map((col, i) => (
                  <td key={i}>
                    {i === 0 ? (
                      <Link to={link}>{record[col]}</Link>
                    ) : (
                      record[col]
                    )}
                  </td>
                ))}
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default RecordsTable;
