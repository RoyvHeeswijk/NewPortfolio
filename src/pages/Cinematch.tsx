"use client";

import { useEffect } from "react";
import { useRouter } from "next/router";

export default function CinematchRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  }, [router]);

  return null;
}
