import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("...Loading");
  const updateMsg = async () => {
    const res = await fetch("/api/") ;
    const { message: msg } = await res.json();
    setMessage(msg);
  };
  useEffect(() => {
    updateMsg();
  }, []);

  return (
    <main>
      <div>{message}</div>
    </main>
  );
}

export default App;
