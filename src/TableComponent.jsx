const RenderTableComponent = ({ dataset }) => {
  return (
    <div className="App">
      <table>
        <tr>
          {dataset.columns.map((col) => (
            <th>{col}</th>
          ))}
        </tr>
        {dataset.rows.map((row) => (
          <tr>
            {row.map((cell) => (
              <td>{cell}</td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
};

export default RenderTableComponent;
