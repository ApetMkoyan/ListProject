import { json } from "react-router-dom";

const UseSendRequest = () => {
  const get = async (url) => {
    const result = await fetch(url);
    return result.json();
  };
  const post = async (url, data) => {
    const result = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return result.json();
  };

  const put = async (url, data) => {
    const result = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  return { get, post, put };
};

export default UseSendRequest;
