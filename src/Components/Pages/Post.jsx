import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostApi, initialStatuses } from "../../Redux/postSlice";

export const Post = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.post);
  console.log("Hiii", data);

  useEffect(() => {
    dispatch(getPostApi());
  }, []);

  if (status === initialStatuses.Loading) {
    return <h2>Loading...</h2>;
  }

  if (status === initialStatuses.Error) {
    return <h2>Something went wrong</h2>;
  }

  return (
    <div>
      <h2>Post</h2>
      {data.map((p) => (
        <div className="card" key={p.id}>
          <h3>{p.title}</h3>
        </div>
      ))}
    </div>
  );
};
