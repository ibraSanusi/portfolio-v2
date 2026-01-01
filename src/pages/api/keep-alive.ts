import { supabase } from "@/lib/supabase";

export const prerender = false;

export async function GET() {
  await supabase.from("leads").select("email").limit(1);

  return new Response("ok");
}
