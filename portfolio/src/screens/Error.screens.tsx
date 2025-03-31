import { Button, CardBody, CardHeader, Card } from "@heroui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

type ErrorComponentProps = {
  title?: string;
  message?: string;
};
/**
 *@param {string} {title} - Optional error title to display.
 * @param {string} {message} - Optional error message to display.
 *
 * @returns full page error component
 */
const ErrorComponent: React.FC<ErrorComponentProps> = ({
  message = "An unexpected error occurred",
  title = "Error",
}) => {
  const navigate = useNavigate();
  return (
    <main
      role="alert"
      aria-live="assertive"
      aria-labelledby="error"
      className="flex h-screen justify-center items-center"
    >
      <Card
        id="error"
        className=" border-none bg-secondary w-96 h-96 items-center flex flex-col gap-4"
      >
        <CardHeader className="py-4 text-center">{title}</CardHeader>
        <CardBody className="items-center gap-4">
          <p>{message}</p>
          <Button onPress={() => navigate("/projects")}>Go to Projects</Button>
        </CardBody>
      </Card>
    </main>
  );
};

export default ErrorComponent;
