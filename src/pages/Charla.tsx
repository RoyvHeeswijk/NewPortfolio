"use client";

import { useEffect } from "react";
import { useRouter } from "next/router";

export default function CharlaRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  }, [router]);

  return null;
}
