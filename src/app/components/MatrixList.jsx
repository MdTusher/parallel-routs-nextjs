const MatrixList = ({ customerData }) => {
  return (
    <ul className="w-full">
      {customerData.map((data) => {
        return (
          <li
            key={data.id}
            className="p-2 border-b flex justify-between even:bg-blue-200 odd:bg-green-200 px-4 gap-4"
          >
            <span>{data.name} </span>
            <span>{new Intl.NumberFormat().format(data.value)} Tk</span>
          </li>
        );
      })}
    </ul>
  );
};

export default MatrixList;
