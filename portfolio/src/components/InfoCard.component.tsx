import React, { FC } from "react";

import { Card, CardBody, Image, Chip } from "@heroui/react";
import { Link } from "react-router-dom";
import Icons, { getIcon } from "../assests";

interface InfoCardProps {
  Id: string;
  title: string;
  logo: string;
  Language: string;
  description: string;
  category: string[];
  icon?: typeof Icons;
}

export default function InfoCard(inforCardProps: InfoCardProps) {
  return (
    <div>
      <Link to={`/project/${inforCardProps.Id}`}>
        <Card
          className="h-32 w-unit-8xl bg-primary/30 border-none shadow-md shadow-secondary"
          isBlurred
          isHoverable
          isPressable
        >
          <CardBody className="grid grid-cols-10 grid-rows-8">
            <div className="col-span-4">
              <Image
                src="https://placehold.co/200"
                alt="Logo"
                className=" h-24 w-24 rounded-full"
              />
            </div>
            <div className="flex justify-center col-span-10 row-start-1">
              <p className="text-background">{inforCardProps.title}</p>
            </div>
            <div className="col-span-4  col-start-4 row-start-3 flex flex-row gap-1">
              {inforCardProps.Language ? (
                <Chip className="rounded-full opacity-100">
                  {getIcon(inforCardProps.Language)}
                </Chip>
              ) : null}
            </div>
            <div className="flex flex-row col-span-7 col-start-7 row-start-3 gap-1">
              {inforCardProps.category.map((category) => (
                <Chip
                  key={category}
                  color="primary"
                  className="rounded-full opacity-100"
                >
                  {category}
                </Chip>
              ))}
            </div>
            <div className="col-span-10 row-start-5  py-3 text-center">
              <p className="text-background">{inforCardProps.description}</p>
            </div>
          </CardBody>
        </Card>
      </Link>
    </div>
  );
}
