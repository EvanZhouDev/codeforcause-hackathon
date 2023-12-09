import { createClient } from "@/utils/supabase/server";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Index({
	searchParams,
}: {
	searchParams: { message: string };
}) {
	const cookieStore = cookies();
	const client = createClient(cookieStore);
	// const signOut = async () => {
	// 	"use server";

	// 	const cookieStore = cookies();
	// 	const supabase = createClient(cookieStore);
	// 	await supabase.auth.signOut();
	// 	return redirect("/");
	// };
	if ((await client.auth.getUser()).data.user != null) {
		return redirect("/teacher/dashboard");
	}
	// 	return (
	// 		<div>
	// 			Hi{" "}
	// 			<form action={signOut}>
	// 				<button className="btn" type="submit">
	// 					Logo
	// 				</button>
	// 			</form>
	// 		</div>
	// 	);
	// }
	const signIn = async (formData: FormData) => {
		"use server";

		const email = formData.get("email") as string;
		const password = formData.get("password") as string;
		const cookieStore = cookies();
		const supabase = createClient(cookieStore);

		const { error } = await supabase.auth.signInWithPassword({
			email,
			password,
		});

		if (error) {
			return redirect("/?message=Could not authenticate user");
		}

		return redirect("/teacher/dashboard");
	};

	const signUp = async (formData: FormData) => {
		"use server";

		const origin = headers().get("origin");
		const email = formData.get("email") as string;
		const password = formData.get("password") as string;
		const cookieStore = cookies();
		const supabase = createClient(cookieStore);

		const { error } = await supabase.auth.signUp({
			email,
			password,
			options: {
				emailRedirectTo: `${origin}/auth/callback`,
			},
		});

		if (error) {
			return redirect("/?message=Could not authenticate user");
		}

		return redirect("/?message=Check email to continue sign in process");
	};
	return (
		<div className="hero min-h-screen bg-neutral">
			<div className="hero-content text-center">
				<div className="max-w-md">
					<h1 className="text-5xl font-bold">Hello there</h1>
					<p className="py-6">
						Sign in or sign up to start taking attendance.
					</p>
					<div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2 text-left">
						<form
							className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
							action={signIn}
						>
							{/* <label className="text-md" htmlFor="email">
								Email
							</label>
							<input
								className="rounded-md px-4 py-2 bg-inherit border mb-6"
								name="email"
								placeholder="you@example.com"
								required
							/> */}
							<div>
								<label className="label">
									<span className="text-base label-text">Email</span>
								</label>
								<input
									type="email"
									name="email"
									className="w-full input input-bordered border-primary form-input"
								/>
							</div>
							<div>
								<label className="label">
									<span className="text-base label-text">Password</span>
								</label>
								<input
									type="password"
									name="password"
									className="w-full input input-bordered border-primary form-input"
								/>
							</div>
							<button className="btn btn-filled !rounded-lg mt-5">
								Sign In
							</button>
							<button
								formAction={signUp}
								className="btn btn-ghost !rounded-lg"
							>
								Sign Up
							</button>
							{searchParams?.message && (
								<p className="mt-4 p-4 bg-foreground/10 text-foreground text-center rounded-lg">
									{searchParams.message}
								</p>
							)}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
