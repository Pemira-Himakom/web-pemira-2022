import { useState } from "react";

function Form(props) {
  const { title, identification, password } = props;
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.handleForm({
      username: form.username,
      password: form.password,
    });
    // sends back username & password
  }

  return (
    <>
      <h2>{title}</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          type="text"
          onChange={handleChange}
          placeholder={identification}
          value={form.username}
        />
        <input
          name="password"
          type="password"
          onChange={handleChange}
          placeholder={password}
          value={form.password}
        />
        <button>Submit</button>
      </form>
    </>
  );
}

export default Form;
