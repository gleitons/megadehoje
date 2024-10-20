
import Link from "next/link";
import Logo from "../img/Logo";

export default function Menu() {
  return (
    <Link href='/' className="w-full bg-white border-b-4 border-indigo-500">
      <div className="m-auto">
        <Logo  />
      </div>
        
    </Link>
  );
}
