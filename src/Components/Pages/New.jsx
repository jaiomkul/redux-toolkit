import { useState } from "react";
import { useDispatch } from "react-redux";
import { postFormApi } from "../../Redux/From";

export function MyForm() {
  const [inputs, setInputs] = useState({
    username: "",
    age: "",
  });

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log("kkkkk", { ...inputs, [name]: value });
    setInputs((values) => ({ ...inputs, [name]: value }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     let res = await fetch("https://httpbin.org/news", {
  //       method: "POST",
  //       body: JSON.stringify(inputs),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     if (res.status === 200) {
  //       console.log("ok");
  //     } else {
  //       console.log("not ok");
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const handleSubmit = () => {
    dispatch(postFormApi(inputs));
    console.log(dispatch);
  };

  return (
    <div>
      <label>
        Enter your name:
        <input
          type="text"
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Enter your age:
        <input
          type="number"
          name="age"
          value={inputs.age || ""}
          onChange={handleChange}
        />
      </label>
      <input type="submit" onClick={handleSubmit} />
    </div>
  );
}
