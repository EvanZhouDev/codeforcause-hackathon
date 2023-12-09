import { ATTENDENCE_STATUS_PRESENT } from "@/components/constants";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Join({
	searchParams,
}: {
	searchParams: { code: string };
}) {
	const cookieStore = cookies();
	const client = createClient(cookieStore);
	const student = (await client.auth.getUser()).data?.user?.id;
	if (student == null) {
		return redirect("/login");
	}
	if (searchParams.code == null) {
		return <p>Invalid code</p>;
	}

	const res = await client
		.from("codes")
		.select("id")
		.eq("code", searchParams.code);
	if (res.error) {
		return <p>Could not fetch codes</p>;
	}
	const data = res.data!;
	if (data.length !== 1) {
		return <p>Invalid code</p>;
	}
	const codeId = data[0].id;
	{
		const { data, error } = await client
			.from("attendance")
			.insert([
				{ student, code_used: codeId, status: ATTENDENCE_STATUS_PRESENT },
			])
			.select();
		if (error || data == null) {
			return <p>An error has occured</p>;
		}
	}

	// TODO: Mark type of attendence
	return <p>You have successfully joined</p>;
}
