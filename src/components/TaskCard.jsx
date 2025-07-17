import { AlertCircle, Calendar, User } from "lucide-react";
import React from "react";

const TaskCard = ({ infos }) => {
  const getStatusColor = (state) => {
    if (state === "pending")
      return "border border-gray-300 bg-gray-200 text-gray-900";
    else if (state === "in-progress")
      return "border border-blue-300 bg-blue-200 text-blue-900";
    else if (state === "complete")
      return "border border-green-300 bg-green-200 text-green-900";
    else if (state === "overdue")
      return "border border-red-300 bg-red-200 text-red-900";
  };
  const getPriorityColor = (priority) => {
    if (priority === "low")
      return "border border-green-300 bg-green-200 text-green-900";
    else if (priority === "medium")
      return "border border-yellow-300 bg-yellow-200 text-yellow-900";
    else if (priority === "high")
      return "border border-orange-300 bg-orange-200 text-orange-900";
    else if (priority === "urgent")
      return "border border-red-300 bg-red-200 text-red-900";
  };

  const isOverdue = (dueDate) => {
    let now = new Date();
    now.setDate(now.getDate() + 3);
    const due = new Date(dueDate);
    return due < now;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div className="p-6">
        {/* Task Header */}
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
            {infos.title}
          </h3>
          <div className="flex flex-col items-end space-y-2">
            <span
              className={`px-2 py-1 text-xs font-medium rounded-full border ${getPriorityColor(
                infos.priority
              )}`}
            >
              {infos.priority}
            </span>
            <span
              className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(
                infos.status
              )}`}
            >
              {infos.state}
            </span>
          </div>
        </div>

        {/* infos Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {infos.description}
        </p>

        {/* infos Meta */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="w-4 h-4 mr-2" />
            <span
              className={`${
                isOverdue(infos.due) ? "text-red-600 font-bold" : ""
              }`}
            >
              Due: {infos.due}
            </span>
            {isOverdue(infos.due) && (
              <AlertCircle className="w-4 h-4 ml-2 text-red-500" />
            )}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <User className="w-4 h-4 mr-2" />
            <span>Assigned by: {infos.assignedBy} </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center">
          {infos.status !== "completed" && (
            <div className="flex space-x-2">
              {infos.status === "pending" && (
                <button className="px-3 py-1 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition-colors">
                  Start
                </button>
              )}
              {infos.status === "in-progress" && (
                <button className="px-3 py-1 bg-green-500 text-white text-sm rounded-md hover:bg-green-600 transition-colors">
                  Complete
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
