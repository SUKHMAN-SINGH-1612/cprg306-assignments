"use client";

import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import ShoppingList from "./shopping-list";

export default function Page() {
  const { user } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/week-9");
    }
  }, [user, router]);

  if (!user) {
    return null; // Prevent rendering if user is not logged in
  }

  return <ShoppingList />;
}
