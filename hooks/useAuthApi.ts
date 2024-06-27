import { useCallback } from "react";
import { z } from "zod";

export const LogInUserResponse = z.object({
  token: z.string(),
});

export default function useAuthApi() {
  const logInUser = useCallback(
    async ({ email, password }: { email: string; password: string }) => {
      try {
        const res = await fetch(
          `${process.env.EXPO_PUBLIC_BFF_URL}/api/v1/auth/login`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email,
              password,
            }),
          },
        );

        if (res.status === 200) {
          const data = await res.json();
          const parsedData = LogInUserResponse.parse(data);
          return parsedData.token;
        }

        throw new Error("Error while logging in...");
      } catch (error) {
        console.log(error);
        return null;
      }
    },
    [],
  );

  return { logInUser };
}
