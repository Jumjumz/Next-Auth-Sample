"use client";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        {session.user?.name} <br />
        <button onClick={() => signOut()}>Sign Out</button>
      </>
    );
  }
  return (
    <>
      Not Signd In <br />
      <button onClick={() => signIn()}>Sign In</button>
    </>
  );
}

export const Navbar = () => {
  const pathName = usePathname();
  return (
    <div className=" h-36 flex flex-col justify-center items-center mt-8">
      <AuthButton />
      <div className=" w-screen h-16 flex flex-row flex-wrap justify-center gap-4">
        <ul className=" w-screen h-full justify-center items-center text-center flex flex-row flex-wrap gap-4">
          <Link href="/">
            <li
              className={
                pathName === "/" ? " text-red-500" : " hover:text-red-500"
              }
            >
              Home
            </li>
          </Link>
          <Link href="/protected">
            <li
              className={
                pathName === "/protected"
                  ? " text-red-500"
                  : " hover:text-red-500"
              }
            >
              Protected Route
            </li>
          </Link>
          <Link href="/serveractions">
            <li
              className={
                pathName === "/serveractions"
                  ? " text-red-500"
                  : " hover:text-red-500"
              }
            >
              Server Actions
            </li>
          </Link>
          <Link href="/APIClient">
            <li
              className={
                pathName === "/APIClient"
                  ? " text-red-500"
                  : " hover:text-red-500"
              }
            >
              API Client
            </li>
          </Link>
          <Link href="/APIServer">
            <li
              className={
                pathName === "/APIServer"
                  ? " text-red-500"
                  : " hover:text-red-500"
              }
            >
              API Server
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
