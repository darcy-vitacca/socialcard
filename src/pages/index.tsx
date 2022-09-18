import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/future/image";
import { useSession, signIn, signOut } from "next-auth/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Biography } from "./components/home/Biography";
import { ContactLink } from "./components/home/ContactLink";

import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaLink,
  FaEdit,
} from "react-icons/fa";

enum AuthStatus {
  LOADING = "loading",
  AUTHENTICATED = "authenticated",
  UNAUTHENTICATED = "unauthenticated",
}

export interface IFormInputs {
  linkedin: string;
  instagram: string;
  twitter: string;
  facebook: string;
  bio: string;
  other: string[];
}

const Home: NextPage = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<IFormInputs>();
  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);
  const [edit, setEdit] = useState(false);

  const { data: session, status } = useSession();

  if (status === AuthStatus.LOADING) {
    return <p>Loading ...</p>;
  }

  return (
    <>
      <Head>
        <title>Social Card</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto flex flex-col items-center justify-center p-4 w-full max-w-sm  h-screen">
        {session?.user?.image && (
          <Image
            alt="Profile picture"
            src={session?.user.image}
            className="rounded-full"
            height="100"
            width="100"
          />
        )}
        {session?.user?.name && (
          <p className="font-bold ">{session?.user?.name}</p>
        )}
        {session?.user?.email && <p>{session?.user?.email}</p>}
        {session?.user?.id && <p>{session?.user?.id}</p>}
        <div className="w-full flex justify-around">
          {status === AuthStatus.AUTHENTICATED ? (
            <>
              <button
                className="btn btn-primary max-w-[150px] w-full"
                onClick={() => setEdit(!edit)}
              >
                Edit
              </button>
              <button
                className="btn btn-primary max-w-[150px] w-full"
                onClick={() => signOut()}
              >
                Sign Out
              </button>
            </>
          ) : (
            <button
              className="btn btn-primary max-w-[150px] w-full"
              onClick={() => signIn()}
            >
              Sign in
            </button>
          )}
        </div>
        {session && (
          <div className="w-full">
            <form onSubmit={handleSubmit(onSubmit)}>
              <ContactLink
                label="Linkedin"
                Icon={FaLinkedin}
                edit={edit}
                href="https://www.linkedin.com/in/darcy-vitacca"
              />
              <ContactLink
                label="Instagram"
                Icon={FaInstagram}
                edit={edit}
                href="https://www.facebook.com/danieldarcy123"
              />
              <ContactLink
                label="Twitter"
                Icon={FaTwitter}
                edit={edit}
                href="https://twitter.com/darcyio_"
              />
              <ContactLink
                label="Facebook"
                Icon={FaFacebook}
                edit={edit}
                href="https://www.facebook.com/danieldarcy123"
              />
              <Biography edit={edit} />
            </form>
          </div>
        )}
      </main>
    </>
  );
};

export default Home;
