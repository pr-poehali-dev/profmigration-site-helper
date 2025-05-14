
import Icon from "@/components/ui/icon";

const advantages = [
  {
    icon: "Shield",
    title: "Официальный статус",
    description: "Все документы оформляются легально, с соблюдением требований законодательства России",
  },
  {
    icon: "Clock",
    title: "Быстрые сроки",
    description: "Оптимизированный процесс работы позволяет значительно сократить время оформления",
  },
  {
    icon: "Award",
    title: "Гарантия результата",
    description: "Гарантируем положительный результат по условиям заключенного договора",
  },
  {
    icon: "Users",
    title: "Опытные специалисты",
    description: "Наши специалисты имеют многолетний опыт работы с миграционным законодательством",
  },
];

const AdvantagesSection = () => {
  return (
    <section id="advantages" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему выбирают нас</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Мы специализируемся на комплексном решении вопросов, связанных с миграцией
            и предлагаем надежное сопровождение на каждом этапе
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {advantages.map((advantage, index) => (
            <div key={index} className="flex hover-scale">
              <div className="mr-4 bg-primary/10 rounded-full p-4 text-primary">
                <Icon name={advantage.icon} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
