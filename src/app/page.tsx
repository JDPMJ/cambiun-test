import Link from "next/link";
import gSession from "./components/gSession";
import ButtonSignOut from "./components/ButtonSignOut";

export default async function House() {
  const session = await gSession();

  return (
    <div>
      <h1>House</h1>
      {session?.user ? (
        <ButtonSignOut />
      ) : (
        <button><Link href="/sign-in">Ingresar</Link></button>
      )}
    </div>
  );
}