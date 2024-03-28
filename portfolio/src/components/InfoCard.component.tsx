import React from "react";

import {
  Card,
  Button,
  CardHeader,
  CardBody,
  Image,
  Chip,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import Icons from "../assests";

interface InfoCardProps {
  Id: string;
  title: string;
  logo: string;
  Language: string;
  description: string;
  category: string[];
  icon?: typeof Icons;
}

function InfoCard(inforCardProps: InfoCardProps) {
  return (
    <div>
      <Link to={`/project/${inforCardProps.Id}`}>
        <Card
          className="h-32 w-unit-9xl bg-secondary"
          isBlurred
          isHoverable
          isPressable
        >
          <CardBody className="grid grid-cols-10 grid-rows-8">
            <div className="col-span-4">
              <Image
                src="https://placehold.co/200"
                alt="Logo"
                className=" h-24 w-24 rounded-full col-span-3 col"
              />
            </div>
            <div className="flex justify-center col-span-10 row-start-1">
              <p className="text-background">{inforCardProps.title}</p>
            </div>
            <div className="col-span-4  col-start-3 row-start-3 flex flex-row gap-1">
              {inforCardProps.Language ? (
                <Chip color="primary" className="rounded-full">
                  {inforCardProps.Language}
                </Chip>
              ) : null}
            </div>
            <div className="flex flex-row col-span-7 col-start-5 row-start-3">
              {inforCardProps.category.map((category) => (
                <Chip color="primary" className="rounded-full">
                  {category}
                </Chip>
              ))}
            </div>
            <div className="col-span-10 row-start-5 col-start-3 py-3">
              <p className="text-background">{inforCardProps.description}</p>
            </div>
          </CardBody>
        </Card>
      </Link>
    </div>
  );
}
export default InfoCard;
