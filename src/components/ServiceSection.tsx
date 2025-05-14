
import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: "FileText",
    title: "Оформление документов",
    description: "Помощь в оформлении всех необходимых документов для легального пребывания и работы в России",
  },
  {
    icon: "Briefcase",
    title: "Трудоустройство",
    description: "Поиск работы, соответствующей вашей квалификации и опыту, с официальным трудоустройством",
  },
  {
    icon: "Home",
    title: "Поиск жилья",
    description: "Помощь в поиске безопасного и доступного жилья, оформление договора аренды",
  },
  {
    icon: "GraduationCap",
    title: "Образование",
    description: "Информирование о возможностях получения образования и профессиональных навыков",
  },
  {
    icon: "Stethoscope",
    title: "Медицинская помощь",
    description: "Оформление медицинской страховки и организация медицинского обслуживания",
  },
  {
    icon: "Scale",
    title: "Юридическая защита",
    description: "Защита ваших прав, юридические консультации и представительство в госорганах",
  },
];

const ServiceSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Мы предлагаем комплексные решения для мигрантов, 
            охватывающие все аспекты легализации и адаптации в России
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="service-card border shadow hover:border-primary">
              <CardContent className="p-6">
                <div className="service-icon inline-block">
                  <Icon name={service.icon} className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
