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

  return (
    <section id="services" className="my-[10%]" aria-label="services">
      <Heading title="services" />
      <div className="space-y-14">
        <ServiceUi
          title={
            <>Our expertises<span style={{ color: "#b60000" }}>.</span></> // Apply color to the full stop
          }
          description="We focus on all things design and web-related, crafting innovative solutions that bring your vision to life. Whether it's web development, app design, or digital strategy, our approach is centered on delivering impactful and elevating experiences that resonate with users and drive measurable results."
          description1="We start with a personalized consultation to align with your goals, crafting tailored, user-centered solutions. From development to design, we ensure seamless execution. Our marketing services boost your digital presence, driving growth and impact. With a global reach, we provide continuous support, empowering your brand anytime, anywhere."
          items={expertiseItems}
        />
      </div>
    </section>
  );
}
