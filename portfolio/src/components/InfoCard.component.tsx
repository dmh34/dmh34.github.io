import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Button,
  CardHeader,
  CardBody,
  Image,
  Chip,
} from "@nextui-org/react";
import Icons from "../assests";

interface InfoCardProps {
  title?: string;
  logo?: string;
  description?: string;
  icon?: typeof Icons;
}

function InfoCard(inforCardProps: InfoCardProps) {
  return (
    <div>
      <Card className="h-32 w-96" isBlurred isHoverable isPressable>
        <CardBody className="grid grid-cols-10 grid-rows-8">
          <div className="col-span-4">
            <Image
              src="https://placehold.co/200"
              alt="Logo"
              className=" h-24 w-24 rounded-full col-span-10"
            />
          </div>
          <div className="flex justify-center col-span-7">
            <p className="text-background">The Best Title Ever to Exist</p>
          </div>
          <div className="col-span-4  col-start-4 row-start-3 flex flex-col gap-1">
            <Chip color="primary" className="rounded-full">
              Language
            </Chip>
          </div>
          <div className="flex flex-col col-span-4 col-start-7 row-start-3">
            <Chip color="primary" className="rounded-full">
              category
            </Chip>
          </div>
          <div className="col-span-10 row-start-5 col-start-4">
            <p className="text-background text-center">Description</p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
export default InfoCard;
