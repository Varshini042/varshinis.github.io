import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const skills = [
  { name: "SQL", category: "Data" },
  { name: "Power BI", category: "Visualization" },
  { name: "Tableau", category: "Visualization" },
  { name: "Databricks", category: "Platform" },
  { name: "ETL/ELT", category: "Data" },
  { name: "Fabric", category: "Platform" },
  { name: "Python", category: "Programming" },
  { name: "PySpark", category: "Programming" },
  { name: "Azure", category: "Cloud" }
];

const tools = [
  "SQL Server", "Azure SQL", "Synapse Analytics", "Power BI Desktop",
  "Power BI Service", "DAX", "Power Query", "Tableau Desktop", "Tableau Server",
  "Python", "PySpark", "Azure Data Factory", "Azure Databricks",
  "Microsoft Fabric", "Azure Data Lake", "Azure Synapse"
];

const specializations = [
  {
    title: "Data Engineering",
    description: "Building robust ETL pipelines and data infrastructure with Azure, Databricks, and Microsoft Fabric.",
    icon: "📂"
  },
  {
    title: "Business Intelligence",
    description: "Creating interactive dashboards and reports with Power BI and Tableau to transform data into insights.",
    icon: "📊"
  },
  {
    title: "Data Analysis",
    description: "Extracting insights from complex datasets using Python, PySpark and SQL to drive business decisions.",
    icon: "🔍"
  }
];

export default function Skills() {
  return (
    <div className="px-10 py-16 text-white">
      <h2 className="text-4xl font-bold text-center mb-8">Skills & Expertise</h2>
      
      <h3 className="text-2xl font-semibold text-center mb-6">Technical Skills</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 justify-center">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="p-4 bg-gray-800 rounded-lg text-center"
          >
            <h4 className="text-lg font-semibold">{skill.name}</h4>
            <p className="text-sm text-teal-300">{skill.category}</p>
          </motion.div>
        ))}
      </div>
      
      <h3 className="text-2xl font-semibold text-center mt-12 mb-6">Tools & Technologies</h3>
      <div className="flex flex-wrap justify-center gap-3">
        {tools.map((tool, index) => (
          <span key={index} className="px-4 py-2 bg-gray-700 rounded-full text-sm">{tool}</span>
        ))}
      </div>
      
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {specializations.map((spec, index) => (
          <Card key={index} className="bg-gray-800 p-6">
            <CardContent className="text-center">
              <div className="text-4xl mb-4">{spec.icon}</div>
              <h4 className="text-lg font-semibold">{spec.title}</h4>
              <p className="text-sm mt-2 text-gray-300">{spec.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
