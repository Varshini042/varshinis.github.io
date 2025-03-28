import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center px-10 py-16">
      <h2 className="text-4xl font-bold mb-6">About <span className="underline">Me</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <span role="img" aria-label="profile">👤</span> Who I Am
              </h3>
              <p className="text-gray-600 mt-2">
                I'm a passionate data professional with expertise in analytics, business intelligence, and data engineering. I specialize in transforming raw data into actionable insights that drive business decisions.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <span role="img" aria-label="education">🎓</span> Education
              </h3>
              <p className="text-gray-600 mt-2">
                I hold a Master's degree in Data Science with a focus on advanced analytics and machine learning techniques. My technical foundation is complemented by continuous learning in emerging data technologies.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <span role="img" aria-label="experience">💼</span> Experience
              </h3>
              <p className="text-gray-600 mt-2">
                With experience across various industries, I've developed expertise in data pipeline development, BI dashboard creation, and analytical reporting. I've helped organizations leverage their data assets to gain competitive advantages.
              </p>
            </CardContent>
          </Card>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">My Approach to Data</h3>
          <p className="text-gray-600 mb-4">
            I believe that effective data work is about more than just technical skills—it's about understanding business needs, asking the right questions, and communicating insights in a way that drives action.
          </p>
          <p className="text-gray-600 mb-4">
            My approach combines technical rigor with business acumen to deliver solutions that create real value. I focus on building scalable, maintainable data systems that evolve with an organization's needs.
          </p>
          <p className="text-gray-600">
            Whether I'm building ETL pipelines, creating interactive dashboards, or performing complex analyses, my goal remains the same: to help you harness the power of your data.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-lg">Data Analytics</span>
            <span className="px-4 py-2 bg-green-100 text-green-600 rounded-lg">Business Intelligence</span>
            <span className="px-4 py-2 bg-purple-100 text-purple-600 rounded-lg">Data Engineering</span>
            <span className="px-4 py-2 bg-pink-100 text-pink-600 rounded-lg">Data Visualization</span>
            <span className="px-4 py-2 bg-teal-100 text-teal-600 rounded-lg">ML Integration</span>
            <span className="px-4 py-2 bg-yellow-100 text-yellow-600 rounded-lg">Data Strategy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
