import { Button, CardBody, CardHeader, Card } from "@nextui-org/react";
import React from "react";
import { useNavigate } from "react-router-dom";

type ErrorComponentProps = {
  errorMessage?: string;
};
/**
 *
 * @param errorMessage optional error message
 * @returns full page error component
 */
const ErrorComponent = ({ errorMessage }: ErrorComponentProps) => {
  const Navigate = useNavigate();
  return (
    <div className="flex h-screen justify-center items-center">
      <Card
        isBlurred
        className=" border-none bg-secondary w-96 h-96 items-center flex flex-col gap-4"
      >
        <CardHeader className="py-4 text-center">
          Looks like the project you were looking for went missing.
        </CardHeader>
        <CardBody className="items-center gap-4">
          <p>Sorry about that</p>
          <p>{errorMessage}</p>
          <Button onClick={() => Navigate("/projects")}>Go to Projects</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ErrorComponent;
