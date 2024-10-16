function Input({ label, name, onChange }) {
  return (
    <>
      <label>{label}</label>
      <input
        name={name}
        onChange={(event) => onChange(name, event.target.value)}
      />
    </>
  );
}

export default Input;
