"use client";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("./Map"), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] w-[90%] mx-auto bg-gray-100 animate-pulse rounded-lg" />
  ),
});

const ClientMap = () => {
  return <Map />;
};

export default ClientMap;
