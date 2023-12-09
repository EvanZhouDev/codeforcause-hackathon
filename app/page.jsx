import TestForm from "@/components/TestForm";

export default async function Index() {
	return (
		<div>
			<button className="btn btn-filled">hi this is a button</button>
			<button className="btn btn-primary">hi this is a button</button>
			<TestForm />
		</div>
	);
}
