import { sendMail } from "@/lib/mailsender";
import { createLead } from "@/lib/supabase";

export const prerender = false; // Necesario para aceptar POST en modo estático

export async function POST({ request }: { request: Request }) {
  const formData = await request.formData();
  const fullname = formData.get("fullname");
  const email = formData.get("email");
  const comment = formData.get("comment");

  if (!fullname || !email) {
    return new Response(
      JSON.stringify({ error: "fullname y email son obligatorios" }),
      { status: 400 }
    );
  }

  console.log({ fullname, email, comment });

  const { error } = await createLead(formData);

  if (error) {
    console.error("Endpoint error:", error);
    return new Response(JSON.stringify({ error }), { status: 500 });
  }

  await sendMail(formData);

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
