import { useState } from "react";

export function MyForm() {
  const [inputs, setInputs] = useState({
    username: "",
    age: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log("kkkkk", { [name]: value });
    setInputs((values) => ({ ...values, [name]: value }));
  };

  //   const handleSubmit = async (event) => {
  //     event.preventDefault();
  //     console.log(inputs);
  //     try {
  //       let res = await fetch("http://localhost:8080/new", {
  //         method: "POST",
  //         body: JSON.stringify(inputs),
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       });
  //       if (res.status === 200) {
  //         console.log("ok");
  //       } else {
  //         console.log("not ok");
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://httpbin.org/news", {
        method: "POST",
        body: JSON.stringify(inputs),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status === 200) {
        console.log("ok");
      } else {
        console.log("not ok");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <input type="submit" />
    </form>
  );
}
