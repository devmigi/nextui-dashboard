"use client";
import React from "react";
import dynamic from "next/dynamic";

import { Card, CardBody, CardFooter, CircularProgress, Chip, Progress } from "@nextui-org/react";

const Chart = dynamic(
  () => import("../charts/steam").then((mod) => mod.Steam),
  {
    ssr: false,
  }
);

export const Content = () => (
  <div className="h-full lg:px-6">
    <div className="flex justify-center gap-4 xl:gap-6 pt-3 px-4 lg:px-0 flex-wrap xl:flex-nowrap sm:pt-10 max-w-[90rem] mx-auto w-full">

      <div className="gap-6 flex flex-col w-full">
        {/* Card Section Top */}
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold mb-4">Reconcilation Summary</h3>
          <div className="grid grid-cols-1 gap-5 justify-center w-full">

            <Progress
              classNames={{
                base: "w-full",
                track: "drop-shadow-md border border-default",
                indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                label: "tracking-wider font-medium text-default-600",
                value: "text-foreground/60",
              }}
              label="Bank Statement"
              radius="full"
              showValueLabel={true}
              size="lg"
              value={65}
            />

            <Progress
              classNames={{
                base: "w-full",
                track: "drop-shadow-md border border-default",
                indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                label: "tracking-wider font-medium text-default-600",
                value: "text-foreground/60",
              }}
              label="Payment Gateway"
              radius="full"
              showValueLabel={true}
              size="lg"
              value={98}
            />

            <Progress
              classNames={{
                base: "w-full",
                track: "drop-shadow-md border border-default",
                indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                label: "tracking-wider font-medium text-default-600",
                value: "text-foreground/60",
              }}
              label="Premium Register"
              radius="full"
              showValueLabel={true}
              size="lg"
              value={88}
            />

            {/* <CardBalance2 />
            <CardBalance2 />
            <CardBalance2 /> */}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold mt-8 mb-4">Missing in Reports</h3>
          <div className="flex flex-row gap-5 w-full">

            <Card className="w-[340px] h-[240px] border-none bg-gradient-to-br from-violet-700 to-fuchsia-500">
              <CardBody className="justify-center items-center pb-0">
                <CircularProgress
                  classNames={{
                    svg: "w-36 h-36 drop-shadow-md",
                    indicator: "stroke-white",
                    track: "stroke-white/10",
                    value: "text-3xl font-semibold text-white",
                  }}
                  showValueLabel={true}
                  strokeWidth={4}
                  value={20}
                />
              </CardBody>
              <CardFooter className="justify-center items-center pt-0">
                <Chip
                  classNames={{
                    base: "border-1 border-white/30",
                    content: "text-white/90 text-small font-semibold",
                  }}
                  variant="bordered"
                >
                  Payment Gateway
                </Chip>
              </CardFooter>
            </Card>


            <Card className="w-[340px] h-[240px] border-none bg-gradient-to-br from-violet-700 to-fuchsia-500">
              <CardBody className="justify-center items-center pb-0">
                <CircularProgress
                  classNames={{
                    svg: "w-36 h-36 drop-shadow-md",
                    indicator: "stroke-white",
                    track: "stroke-white/10",
                    value: "text-3xl font-semibold text-white",
                  }}
                  showValueLabel={true}
                  strokeWidth={4}
                  value={2}
                />
              </CardBody>
              <CardFooter className="justify-center items-center pt-0">
                <Chip
                  classNames={{
                    base: "border-1 border-white/30",
                    content: "text-white/90 text-small font-semibold",
                  }}
                  variant="bordered"
                >
                  Premium Register
                </Chip>
              </CardFooter>
            </Card>

            {/* <CardBalance2 />
            <CardBalance2 />
            <CardBalance2 /> */}
          </div>
        </div>
      </div>

      {/* Left Section */}
      <div className="mt-4 gap-2 flex flex-col xl:max-w-md w-full">
        <h3 className="text-xl font-semibold"> </h3>
        <div className="mt-4 gap-2 flex flex-col xl:max-w-md w-full">



        </div>
      </div>

    </div>
  </div>
);
