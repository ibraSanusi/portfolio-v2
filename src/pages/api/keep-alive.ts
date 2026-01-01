import { supabase } from "@/lib/supabase";

export const prerender = false;

export async function GET() {
  await supabase.from("leads").select("email").limit(1);

  console.log("El cron job sigue vivo...");

  return new Response("ok");
}
