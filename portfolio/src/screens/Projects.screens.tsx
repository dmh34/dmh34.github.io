import { Button, Card, CardFooter, Image } from "@nextui-org/react";
import PortfolioProjects from "../util/projects.util";
import { Categories } from "../util/projects.util";
import { Link } from "react-router-dom";
import Nav from "../components/Nav.component";
import { useEffect, useState } from "react";
import InfoCard from "../components/InfoCard.component";

function Projects() {
  //TODO: Add project filtering by category
  const [filteredProjects, setFilteredProjects] = useState([
    ...PortfolioProjects,
  ]);
  const [selectedCategories, setSelectedCategories] = useState<string>();
  const handleCategoryClick = (category: string) => {
    return function (event: any) {
      setSelectedCategories(category);
    };
  };

  useEffect(() => {
    let filtered = PortfolioProjects.filter((project) => {
      if (selectedCategories && selectedCategories !== "All") {
        console.info("Category selected");
        return project.category.includes(selectedCategories);
      }
      console.info("No category selected");
      return PortfolioProjects;
    });
    setFilteredProjects(filtered);
  }, [selectedCategories]);

  return (
    <div className="grid grid-cols-10 gap-3">
      <div className="col-span-10 ">
        <Nav />
      </div>

      <div className="col-span-10 flex justify-center gap-3">
        <h1 className="text-3xl">Portfolio</h1>
        {/* </div>

        {/* <div className="col-span-10 flex justify-center gap-3">
          {Categories.map((category) => (
            <Chip key={category} color="primary" className="rounded-full">
              <div className="flex flex-row ">
                {category}
                <CloseIcon />
              </div>
            </Chip>
          ))} */}
      </div>
      <div className="col-span-10 flex justify-center gap-3">
        {Categories.map((category) => (
          <Button
            className="bg-primary"
            onClick={handleCategoryClick(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      <div className=" col-span-8 col-start-2 flex flex-wrap justify-center gap-3 p-4 sm:flex-col md:flex-row">
        {/* {filteredProjects.map((project) => (
          <Link to={`/project/${project.id}`} key={project.id}>
            <Card
              key={project.id}
              isFooterBlurred
              isPressable
              className="bg-primary  shadow-primary rounded-full shadow-md hover:shadow-none"
            >
              {/* <CardHeader>
                <h3>{project.ProjectName}</h3>
              </CardHeader> */}
        {/* <Image
                className="rounded-full"
                src={project.ProjectImage[0]}
                alt={project.ProjectImage[1]}
                width={300}
                height={300}
              />
              <CardFooter className="bg-primary  absolute bottom-3 z-10 justify-center rounded-md opacity-85">
                <h4>{project.ProjectName}</h4>
              </CardFooter>
            </Card>
          </Link>
        ))} */}
        {filteredProjects.map((project) => (
          <InfoCard
            Id={project.id}
            key={project.id}
            title={project.ProjectName}
            Language={project.Language}
            description={project.Shortdescription}
            category={project.category}
            logo={project.ProjectImage[0]}
          />
        ))}
      </div>
    </div>
  );
}
export default Projects;
