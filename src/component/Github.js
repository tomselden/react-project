import { Card } from "react-bootstrap";
import { useEffect } from "react";

const Github = () => {
  useEffect(() => {
    const API_URL = `https://itunes.apple.com/lookup?id=radiohead&entity=song`;
    const fetchData = async () => {
      const response = await fetch(API_URL);
      const resData = await response.json();
      console.log(resData);
    };
    fetchData();
  });
  return (
    <div>
      <Card></Card>
    </div>
  );
};

export default Github;
