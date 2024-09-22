import UniverCard from "../ui/UniverCard";
import { universities } from "../../constants";

const UniversitiesList = () => {
  return (
    <section className="w-full grid grid-cols-4 gap-4">
      {universities.map((university, index) => (
        <UniverCard
          key={index}
          name={university.name}
          description={university.description}
          establishedYear={university.establishedYear}
          location={university.location}
          departments={university.departments}
        />
      ))}
    </section>
  );
};

export default UniversitiesList;
