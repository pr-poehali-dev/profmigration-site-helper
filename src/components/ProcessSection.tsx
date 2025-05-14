
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    title: "Консультация",
    description: "Бесплатная консультация по вашей ситуации и подбор оптимального решения",
  },
  {
    number: "02",
    title: "Сбор документов",
    description: "Подготовка необходимого пакета документов с учетом всех требований",
  },
  {
    number: "03",
    title: "Оформление",
    description: "Подача документов и сопровождение процесса рассмотрения в госорганах",
  },
  {
    number: "04",
    title: "Результат",
    description: "Получение необходимых документов и дальнейшая поддержка по вопросам",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Как мы работаем</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Четкий и отлаженный процесс работы позволяет нам эффективно 
            решать задачи любой сложности
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary/20 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Нужна консультация по вашей ситуации?
          </p>
          <a 
            href="#contacts" 
            className="inline-block bg-primary hover:bg-primary/90 text-white font-medium px-8 py-3 rounded-md transition-colors"
          >
            Связаться с нами
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
