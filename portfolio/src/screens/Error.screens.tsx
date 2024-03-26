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
      <Card isBlurred className=" border-none bg-background">
        <CardHeader>
          Looks like the project you were looking for went missing.
        </CardHeader>
        <CardBody>
          <p>Something went wrong.</p>
          <p>{errorMessage}</p>
          <Button onClick={() => Navigate("/projects")}>Go Back</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ErrorComponent;
