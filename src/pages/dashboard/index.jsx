import React, { useState } from "react";
import Header from "../../components/Header";
import StateCard from "../../components/StateCard";
import Filter from "../../components/Filter";
import {
  ChartColumnIncreasing,
  CircleCheckBig,
  ClockFading,
  TrendingUp,
  TriangleAlert,
} from "lucide-react";
import TaskCard from "../../Components/TaskCard";

function dashboard() {
  const [totalTasks, setTotalTasks] = useState(4);
  const [completedTasks, setCompletedTasks] = useState(1);
  const [inProgressTasks, setInProgressTasks] = useState(1);
  const [pendingTasks, setPendingTasks] = useState(1);
  const [overdueTasks, setOverdueTasks] = useState(3);

  const widgets = [
    {
      title: "Total Tasks",
      value: totalTasks,
      icon: <ChartColumnIncreasing color="#858dff" size={28} />,
    },
    {
      title: "Completed Tasks",
      value: completedTasks,
      icon: <CircleCheckBig color="#4caf50" size={28} />,
    },
    {
      title: "In Progress Tasks",
      value: inProgressTasks,
      icon: <TrendingUp color="#ff9800" size={28} />,
    },
    {
      title: "Pending Tasks",
      value: pendingTasks,
      icon: <ClockFading color="#f44336" size={28} />,
    },
    {
      title: "Overdue Tasks",
      value: overdueTasks,
      icon: <TriangleAlert color="#9c27b0" size={28} />,
    },
  ];

  const mockTasks = [
    {
      title: "Complete Project Proposal",
      priority: "high",
      state: "in-progress",
      description:
        "Draft the project proposal for the upcoming client meeting.",
      due: "2025-07-18",
      assignedBy: "John Doe",
    },
    {
      title: "Update Website Content",
      priority: "medium",
      state: "pending",
      description: "Revise the content on the homepage and services page.",
      due: "2025-07-20",
      assignedBy: "Jane Smith",
    },
    {
      title: "Prepare Presentation Slides",
      priority: "low",
      state: "completed",
      description:
        "Create slides for the quarterly business review presentation.",
      due: "2025-07-22",
      assignedBy: "Alice Johnson",
    },
    {
      title: "Conduct Market Research",
      priority: "urgent",
      state: "overdue",
      description: "Gather data on market trends and competitor analysis.",
      due: "2025-07-15",
      assignedBy: "Bob Brown",
    },
  ];

  return (
    <div className="overflow-hidden">
      <Header />
      <div className="w-[95%] mx-auto mt-10 ">
        <h1 className="text-black text-lg ">Welcome back, wyssal!</h1>
        <p className="text-gray-500 text-sm mt-2">
          here's an overview of our tasks and current progress
        </p>
        <div className=" flex flex-row gap-8 mt-9">
          {widgets.map((widget) => (
            <StateCard infos={widget} />
          ))}
        </div>
        <Filter />
        <div className="flex flex-row gap-6 mt-10 flex-wrap  ">
          {mockTasks.map((mockTask) => {
            return <TaskCard infos={mockTask} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default dashboard;
