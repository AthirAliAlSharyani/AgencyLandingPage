import { Box } from "@chakra-ui/react";
import Image from "next/image";

type User =
  | {
      name?: string | null | undefined;
      email?: string | null | undefined;
      image?: string | null | undefined;
    }
  | undefined;

type Props = {
  user: User;
  pagetype: string;
};

export default function Card({ user, pagetype }: Props) {
  //console.log(user)

  const greeting = user?.name ? (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      padding="q0px"
      backgroundColor="white"
      borderRadius="lg"
      fontWeight="bold"
      fontSize="l"
      color="black"
    >
      {" "}
      Hello {user?.name}!
    </Box>
  ) : null;

  // const emailDisplay = user?.email ? (
  //     <div className="flex flex-col items-center p-6 bg-white rounded-lg font-bold text-5xl text-black">
  //         {user?.email}
  //     </div>
  // ) : null

  const userImage = user?.image ? (
    <Image
      src={user?.image}
      width={200}
      height={200}
      alt={user?.name ?? "Profile Pic"}
      priority={true}
      style={{ borderRadius: "50%", padding: "30px" }}
    />
  ) : null;

  return (
    <section className="flex flex-col gap-4">
      {/* {emailDisplay} */}
      {userImage}

      {greeting}
    </section>
  );
}
