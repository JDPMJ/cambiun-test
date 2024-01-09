import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function gSession() {
  const s = await getServerSession(authOptions);
  return s;
}