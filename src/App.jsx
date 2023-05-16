import { useEffect, useState } from "react";
import data from "./dummyData.json";
import { calcMean, calcMedian, calcMode } from "./utils";
import RenderTableComponent from "./TableComponent";
import "./App.css";

const newData = data.map((item) => {
  return {
    ...item,
    Gamma: (item.Ash * item.Hue) / item.Magnesium,
  };
});

function CommonCompo({ componentAttribute }) {
  const [dataset, setdataset] = useState({ rows: [], columns: [] });

  useEffect(() => {
    const localSet = new Set();
    const localObject = {};
    newData.forEach((item) => {
      if (!localSet.has(item.Alcohol)) localSet.add(item.Alcohol);
      if (localObject[item.Alcohol])
        localObject[item.Alcohol] = [
          ...localObject[item.Alcohol],
          item[componentAttribute],
        ];
      else localObject[item.Alcohol] = [item[componentAttribute]];
    });

    const localColumns = ["Measure"];
    const localRows = [
      [componentAttribute + " Mean"],
      [componentAttribute + " Median"],
      [componentAttribute + " Mode"],
    ];

    Object.entries(localObject).forEach(([k, v]) => {
      localColumns.push("Class" + k);
      localRows[0].push(calcMean(v));
      localRows[1].push(calcMedian(v));
      localRows[2].push(calcMode(v));
    });

    setdataset({ rows: localRows, columns: localColumns });
  }, []);

  return (
    <>
      <h3>{componentAttribute} Table:</h3>
      <RenderTableComponent dataset={dataset} />
    </>
  );
}

function App() {
  return (
    <>
      <CommonCompo componentAttribute="Flavanoids" />
      <CommonCompo componentAttribute="Gamma" />
    </>
  );
}

export default App;
