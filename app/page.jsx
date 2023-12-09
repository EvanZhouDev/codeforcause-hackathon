import TestForm from "@/components/TestForm";
import Link from "next/link";

export default async function Index() {
	return (
		<div>
			<Link href="/login">hi</Link>
			<button className="btn btn-filled">hi this is a button</button>
			<button className="btn btn-primary">hi this is a button</button>
			<TestForm />
		</div>
	);
}
