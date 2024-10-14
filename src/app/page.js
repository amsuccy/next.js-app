import Image from "next/image";
import Counter from "./components/counter";
import UserList from "./components/useEffect";

export default function Home() {
  return (
    <div>
      <Counter/>
      <UserList/>
    </div>
  );
}
