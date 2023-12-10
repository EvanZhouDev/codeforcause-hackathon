"use server";

import { createClient } from "@/utils/supabase/server";
import { createClient as createBrowserClient } from "@/utils/supabase/client";
import { cookies } from "next/headers";

export async function getStudentData(classID: string) {
	"use client";
	const client = createBrowserClient();
	const res = await client
		.from("students")
		.select("profiles (username)")
		.eq("class", classID);
	console.log(res); // rls issues?
	return res;
}
export async function createClass(className: string) {
	const cookieStore = cookies();
	const client = createClient(cookieStore);
	const res = await client
		.from("classes")
		.insert([
			{ admin: (await client.auth.getUser()).data.user!.id, name: className },
		])
		.select();
	return res;
}
export async function deleteClass(classId: string) {
	const cookieStore = cookies();
	const client = createClient(cookieStore);
	const res = await client.from("classes").delete().eq("id", classId);
	return res;
}
