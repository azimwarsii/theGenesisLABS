import ServiceUi from "../ui/ServiceUi";
import Heading from "../ui/Heading";

export default function Services() {
  const expertiseItems = [
    "Designing",
    "Web Development",
    "Android &",
    "iOS Development",
    "WEB3",
    "Hosting & SEO",
    "AI/ML Development"
  ];

  const toolBoxItems = [
    "TailwindCSS",
    "NextJS",
    "Firebase",
    "React Native",
    "AWS",
    "PostgreSQL"
  ];

  return (
    <section id="services" className="my-[10%]" aria-label="services">
      <Heading title="services" />
      <div className="space-y-14">
        <ServiceUi
          title="our expertises."
          description="We focus on all things design and web related. With each of my
          services, my goal is to deliver an impactful and elevating
          digital experience for everyone."
          items={expertiseItems}
        />
        {/* <ServiceUi
          title="our digital tool box."
          description="These are our go to tech stack to make any projects happen."
          items={toolBoxItems}
        /> */}
      </div>
    </section>
  );
}
