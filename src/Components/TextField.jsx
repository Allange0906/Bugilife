import "../Classes/TextField.css";

export default function TextField(props) {
  const { label, value, onChange} = props;

  return (
    <div className="container">
      <input
        className="input"
        value={value}
        onChange={onChange}
      />
      <label className="label">{label}</label>
    </div>
  );
}
