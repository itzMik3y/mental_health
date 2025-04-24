import { FC } from "react";
import { Resource } from "../types/resource"; // Adjust the import path as necessary

interface Props {
  resource: Resource;
}

const ResourceCard: FC<Props> = ({ resource }) => {
  const IconComponent =
    resource.icon ??
    (() => (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        {/* …svg path… */}
      </svg>
    ));

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      {/* tags */}
      {resource.freeService && (
        <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5">
          Free Service
        </span>
      )}
      {/* …repeat for lowCost / slidingScale… */}

      {/* body */}
      <div className="p-4 flex flex-col h-full">
        <div className="flex items-start gap-3 mb-3">
          <span
            className={`w-8 h-8 flex items-center justify-center rounded-full ${
              resource.iconBgColor ?? "bg-blue-100"
            }`}
          >
            <IconComponent
              className={`w-4 h-4 ${resource.iconColor ?? "text-blue-600"}`}
            />
          </span>
          <h3 className="text-base font-semibold">{resource.title}</h3>
        </div>

        <p className="text-sm text-gray-600 mb-4">{resource.shortDescription}</p>

        {/* address / phone / email / pricing render exactly as you had them */}

        <div className="mt-auto pt-2">
          <a
            href="#"
            className="block text-center bg-blue-50 hover:bg-blue-100 text-blue-600
                       py-2 text-sm font-medium rounded-md"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
