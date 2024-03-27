import React from "react";
import { Link } from "react-router-dom";
import { Card, Button, CardHeader, CardBody, Image } from "@nextui-org/react";
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
      <Card className="grid h-32 w-80 grid-cols-10 grid-rows-10">
        <CardHeader>Info Card</CardHeader>
        <CardBody>
          <div className="col-span-6 row-span-6 row-start-3 flex">
            <Image
              src={inforCardProps.logo}
              alt="Logo"
              className=" h-24 w-24 rounded-full"
            />
          </div>
          <p>Some text</p>
          <Link to="/info">
            <Button>More Info</Button>
          </Link>
        </CardBody>
      </Card>
    </div>
  );
}
export default InfoCard;
