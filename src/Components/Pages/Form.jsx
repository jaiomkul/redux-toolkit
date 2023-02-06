export const FormData = () => {
  return (
    <div className="formdata">
      <h2>User Details</h2>
      <label htmlFor="">Name</label>
      <input
        type="text"
        name="name"
        value=""
        className="inputData"
        placeholder="Enter your Name"
      />
      <br />
      <label htmlFor="">Email</label>
      <input
        type="text"
        name="name"
        value=""
        className="inputData"
        placeholder="Enter your Email"
      />
      <br />
      <label htmlFor="">Phone Number</label>
      <input
        type="text"
        name="name"
        value=""
        className="inputData"
        placeholder="Enter your Number"
      />
      <br />
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Add your Message"
      ></textarea>
      <br />
      <input type="submit" value="Submit" />
    </div>
  );
};
