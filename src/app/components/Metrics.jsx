const Metrics = ({ label, ammount }) => {
  return (
    <div className="border p-4 w-full flex flex-wrap text-lg gap-4">
      <h2>{label} :</h2>
      <p>{new Intl.NumberFormat().format(ammount)} TK</p>
    </div>
  );
};

export default Metrics;
