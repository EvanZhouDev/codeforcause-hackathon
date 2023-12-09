"use server";

import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export async function getClasses() {
	const cookieStore = cookies();
	const client = createClient(cookieStore);
	const res = await client
		.from("classes")
		.select("name")
		.eq("admin", (await client.auth.getUser()).data.user!.id);
	return res;
}
