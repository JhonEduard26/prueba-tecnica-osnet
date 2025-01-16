import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    redirect("/");
  }
  
  return (
    <div>
      <h1>Profile</h1>
      <img src={user.picture} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
