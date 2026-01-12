"use server";   
import { supabase } from '@/lib/supabaseClient';

export async function joinWaitlist(email: string) {
  const { data, error } = await supabase
    .from("waitlist")
    .insert([{ email, is_verified: false }]);

  if (error) {
    if (error.code === "23505") {
      return { success: false, message: "This email is already on the list!" };
    }
    return { success: false, message: "Something went wrong. Try again." };
  }

  return { success: true };
}