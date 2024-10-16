import Input from "./Input";

function Form({ onChange }) {
  return (
    <div id="user-input">
      <Input
        key="1"
        label="INITIAL INVESTMENT"
        name="initialInvestment"
        onChange={onChange}
      />
      <Input
        key="2"
        label="ANNUAL INVESTMENT"
        name="annualInvestment"
        onChange={onChange}
      />
      <Input
        key="3"
        label="EXPECTED RETURN"
        name="expectedReturn"
        onChange={onChange}
      />
      <Input key="4" label="DURATION" name="duration" onChange={onChange} />
    </div>
  );
}

export default Form;
