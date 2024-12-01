import Link from "next/link";

export default function NotFound() {
    return (
        <div className="w-full h-svh flex justify-center items-center text-center">
            <div className="">
                <h1 className="text-2xl lg:text-7xl">
                    404 <br /> Page Not Found
                </h1>
                <Link className="underline leading-10" href="/">
                    Go back to home
                </Link>
            </div>
        </div>
    );
}
