import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50 text-center">
      <h1 className="text-4xl font-bold mb-4">🎉 Welcome to Event Showcase</h1>

      <SignedOut>
        {" "}
        <p className="text-lg mb-6 text-gray-700">
          Log in or sign up to see events based on your tier!
        </p>
        <div className="flex gap-4">
          <SignInButton
          forceRedirectUrl={"/events"}
            fallbackRedirectUrl="/events"
            signUpFallbackRedirectUrl="/events"
          >
            <button className="bg-blue-600 text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
              Sign In
            </button>
          </SignInButton>

          <SignUpButton
            fallbackRedirectUrl="/events"
            signInFallbackRedirectUrl="/events"
          >
            <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
              Sign Up
            </button>
          </SignUpButton>
        </div>
      </SignedOut>

      <SignedIn>
        <div className="mt-6 flex flex-col items-center gap-4">
          <Link href={"/events"}className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer"> Events</Link>
          <UserButton afterSignOutUrl="/" />
        </div>
      </SignedIn>
    </main>
  );
}
