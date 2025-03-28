import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Varshini042/repos")
      .then((response) => response.json())
      .then((data) => {
        const filteredRepos = data.filter((repo) =>
          ["Fabric-Data-Engineering", "SQL-Data-Warehouse", "SQL-Data-Analytics", "Netflix-Project"].includes(repo.name)
        );
        setRepos(filteredRepos);
      });
  }, []);

  const projectDetails = {
    "Fabric-Data-Engineering": {
      title: "Fabric Data Engineering",
      description: "Microsoft Fabric implementation for modern data engineering pipelines and workflows.",
      tags: ["Azure", "Fabric", "Data Engineering"],
    },
    "SQL-Data-Warehouse": {
      title: "SQL Data Warehouse Project",
      description: "End-to-end data warehouse implementation using SQL Server and modern data modeling techniques.",
      tags: ["SQL", "Data Warehouse", "ETL"],
    },
    "SQL-Data-Analytics": {
      title: "SQL Data Analytics Project",
      description: "Advanced SQL analytics project with complex queries and performance optimization techniques.",
      tags: ["SQL", "Data Analysis", "Reporting"],
    },
    "Netflix-Project": {
      title: "Azure Data Engineering on Netflix Data",
      description: "Built a scalable data pipeline using Azure Data Factory, Databricks, and Synapse Analytics to process and analyze Netflix viewing data. Designed an efficient ETL workflow for structured data transformation and reporting using Power BI.",
      tags: ["Azure", "Data Engineering", "BI"],
    },
  };

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold text-center">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {repos.map((repo) => (
          <Card key={repo.id} className="bg-gradient-to-r from-blue-100 to-purple-100 p-4">
            <CardContent>
              <span className="bg-gray-200 text-sm px-2 py-1 rounded-md">
                {projectDetails[repo.name]?.tags[0]}
              </span>
              <h3 className="text-xl font-semibold mt-2">
                {projectDetails[repo.name]?.title}
              </h3>
              <p className="text-sm mt-2">
                {projectDetails[repo.name]?.description}
              </p>
              <div className="flex gap-2 mt-3">
                {projectDetails[repo.name]?.tags.map((tag) => (
                  <span key={tag} className="bg-white px-2 py-1 text-xs rounded-md shadow">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 mt-3 block hover:underline"
              >
                View on GitHub
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
