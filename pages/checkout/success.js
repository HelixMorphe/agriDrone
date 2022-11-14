import { Button } from "@mui/material";
import React from "react";
import { useRouter } from "next/router";
const Success = () => {
  const router = useRouter();
  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col">
      <div className="h-[500px] flex justify-center items-center flex-col gap-11">
        <h1 className="text-4xl font-bold slide-in-elliptic-top-bck">
          Congratulation! Your payment is{" "}
          <span className="text-green-600">Successful</span>
        </h1>
        <Button
          className="bg-[#1565c0]"
          onClick={() => {
            router.push("/");
          }}
          variant="contained"
        >
          Back to dashboard
        </Button>
      </div>
    </div>
  );
};

export default Success;