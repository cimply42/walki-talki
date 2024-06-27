import { useCallback } from "react";
import { z } from "zod";
import { useReduxSelector } from "@/store";

export const GetUserInfoResponse = z.object({
  uuid: z.string(),
  email: z.string().email(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  isFtu: z.boolean(),
  isVerified: z.boolean(),
});

export default function useUserApi() {
  const jwtToken = useReduxSelector((state) => state.auth.token);
  const getUserInfo = useCallback(async () => {
    try {
      const res = await fetch(
        `${process.env.EXPO_PUBLIC_BFF_URL}/api/v1/user`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        },
      );

      if (res.status === 200) {
        const data = await res.json();
        const parsedData = GetUserInfoResponse.parse(data);
        return parsedData;
      }

      throw new Error("Error while getting user info...");
    } catch (error) {
      console.log(error);
      return null;
    }
  }, [jwtToken]);

  const updateUserInfo = useCallback(async () => {
    try {
      const res = await fetch(
        `${process.env.EXPO_PUBLIC_BFF_URL}/api/v1/user`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        },
      );

      if (res.status === 200) {
        return;
      }

      throw new Error("Error while updating user info...");
    } catch (error) {
      console.log(error);
    }
  }, [jwtToken]);

  return {
    getUserInfo,
    updateUserInfo,
  };
}
