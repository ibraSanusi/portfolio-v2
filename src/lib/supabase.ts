import { createClient } from "@supabase/supabase-js";

// Usa tipos fuertes para las variables de entorno
const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = import.meta.env.SUPABASE_SERVICE_ROLE_KEY; // No se puede subir

if (!supabaseUrl || !supabaseServiceRoleKey) {
  throw new Error("Faltan las variables de entorno de Supabase");
}

export const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

export async function createLead(formData: FormData) {
  const fullname = formData.get("fullname");
  const email = formData.get("email");
  const comment = formData.get("comment");

  // TODO: validar que los campos
  console.log(fullname, email, comment);
  return await supabase.from("leads").insert([{ fullname, email, comment }]);
}
