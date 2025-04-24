import ResourceCard from './ResourceCard';

// Updated ResourceSection with blue underline
const ResourceSection = ({ title, resources, gridCols = 'grid-cols-1 md:grid-cols-3' }) => {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold text-blue-900 mb-2 text-center">{title}</h2>
      
      {/* Add underline below title */}
      <div className="flex justify-center mb-6">
        <div className="w-16 h-1 bg-blue-600"></div>
      </div>
      
      <div className={`grid ${gridCols} gap-6`}>
        {resources.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>
    </section>
  );
};

export default ResourceSection;