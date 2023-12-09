import ConnectSupabaseSteps from "@/components/ConnectSupabaseSteps";
import Header from "@/components/Header";
import SignUpUserSteps from "@/components/SignUpUserSteps";
import TestForm from "@/components/TestForm";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import AuthButton from "../components/AuthButton";
import DeployButton from "../components/DeployButton";

export default async function Index() {
	const cookieStore = cookies();

	const canInitSupabaseClient = () => {
		// This function is just for the interactive tutorial.
		// Feel free to remove it once you have Supabase connected.
		try {
			createClient(cookieStore);
			return true;
		} catch (e) {
			return false;
		}
	};

	const isSupabaseConnected = canInitSupabaseClient();

	return (
		<div>
			<button className="btn btn-filled">hi this is a button</button>
			<button className="btn btn-primary">hi this is a button</button>
			<TestForm />
		</div>
	);
}
