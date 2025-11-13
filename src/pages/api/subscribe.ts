import { addEmail } from "../../lib/supabase";

// TODO: terminar de conectar con supabase
export async function POST({ request }: { request: Request }) {
  const { email } = await request.json();
  const { error } = await addEmail(email);

  if (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
