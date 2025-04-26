import { FC, useState } from "react";
import type { Resource } from "../types/resource";

/**
 * Flippable resource card – now locks its height so the grid doesn’t re-flow
 * when the front and back differ in content length. The parent wrapper owns the
 * height (default 22rem) and both faces are absolutely positioned, ensuring no
 * vertical shift on flip.
 */
const CARD_HEIGHT = "h-[22rem]"; // tweak as needed or pass as prop

const ResourceCard: FC<{ resource: Resource }> = ({ resource }) => {
  const [flipped, setFlipped] = useState(false);

  const IconComponent =
    resource.icon ??
    (() => (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 2l2 5h6l-5 3 2 5-5-3-5 3 2-5-5-3h6z" />
      </svg>
    ));

  const Row = ({ label, value }: { label: string; value?: string }) =>
    value ? (
      <p className="text-sm text-gray-700">
        <span className="font-medium text-gray-900">{label}: </span>
        {value}
      </p>
    ) : null;

  return (
    <div
      className={`relative w-full ${CARD_HEIGHT} cursor-pointer [perspective:1000px]`}
      onClick={() => setFlipped((f) => !f)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") setFlipped((f) => !f);
      }}
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
    >
      <div
        className={`absolute inset-0 w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* FRONT */}
        <div className="absolute inset-0 bg-white rounded-lg shadow-md overflow-hidden flex flex-col backface-hidden">
          {/* tags */}
          <div className="p-2 space-x-1">
            {resource.freeService && (
              <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5">
                Free Service
              </span>
            )}
            {resource.lowCost && (
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5">
                Low Cost
              </span>
            )}
            {resource.slidingScale && (
              <span className="inline-block bg-purple-100 text-purple-800 text-xs font-medium px-2 py-0.5">
                Sliding Scale
              </span>
            )}
          </div>

          {/* body */}
          <div className="p-4 flex-grow flex flex-col">
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
              <h3 className="text-base font-semibold leading-snug">
                {resource.title}
              </h3>
            </div>
            <p className="text-sm text-gray-600 mb-4 line-clamp-3">
              {resource.shortDescription}
            </p>
          </div>

          {/* footer */}
          <div className="p-4 mt-auto">
            <span className="block text-center bg-blue-50 text-blue-600 py-2 text-sm font-medium rounded-md">
              Flip for Details
            </span>
          </div>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 bg-white rounded-lg shadow-md p-4 flex flex-col gap-2 rotate-y-180 backface-hidden overflow-y-auto">
          <h3 className="text-base font-semibold text-blue-900 mb-2 flex items-center gap-2">
            <IconComponent
              className={`w-5 h-5 ${resource.iconColor ?? "text-blue-600"}`}
            />
            {resource.title}
          </h3>
          {Row({ label: "Address", value: resource.address })}
          {Row({ label: "Phone", value: resource.phone })}
          {Row({ label: "Email", value: resource.email })}
          {Row({ label: "Pricing", value: resource.pricing })}
          {Row({ label: "Website", value: resource.website })}
          {Row({ label: "Hours", value: resource.hours })}

          {resource.longDescription && (
            <p className="text-sm text-gray-600 whitespace-pre-wrap mt-2">
              {resource.longDescription}
            </p>
          )}

          <span className="mt-auto text-xs text-gray-400 italic">
            Click or press Enter/Space to flip back
          </span>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;