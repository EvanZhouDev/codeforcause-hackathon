'use client'

import Icon from "@/components/Icon"
import { useSearchParams } from 'next/navigation'

export default function Page() {
    const searchParams = useSearchParams();
    console.log(searchParams);
    return (
        <div className="hero min-h-screen bg-neutral">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Joined class.</h1>
                    <p className="mt-5">Joined with code "{searchParams.get("code")}"</p>
                    <p className="py-6 max-w opacity-50">
                        It is safe to close this tab.
                    </p>
                </div>
            </div>
        </div>
    )
}