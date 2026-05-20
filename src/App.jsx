import React, { useState } from "react";
import starIcon from "./assets/icon-star.svg";
import plusIcon from "./assets/icon-plus.svg";
import minusIcon from "./assets/icon-minus.svg";

const faqData = [
  {
    id: 1,
    question: "What is Frontend Mentor, and how will it help me?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    id: 2,
    question: "Is Frontend Mentor free?",
    answer:
      "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  },
  {
    id: 3,
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer:
      "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
  {
    id: 4,
    question: "How can I get help if I'm stuck on a challenge?",
    answer:
      "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
];

const App = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const toggleAccordion = (id) => {
    setActiveIndex(activeIndex === id ? null : id);
  };

  return (
    <div className="min-h-screen w-full bg-[#f8eeff] bg-[url('./assets/background-pattern-mobile.svg')] sm:bg-[url('./assets/background-pattern-desktop.svg')] bg-no-repeat bg-contain flex items-center justify-center p-6 font-['Work_Sans',sans-serif]">
      <main className="w-full  max-w-150 bg-white p-6 sm:p-10 rounded-2xl shadow-[0_24px_56px_rgba(45,10,56,0.1)]">
        <div className="flex items-center gap-6 mb-8">
          <img
            src={starIcon}
            alt=""
            aria-hidden="true"
            className="w-6 h-6 sm:w-10 sm:h-10"
          />
          <h1 className="text-3xl sm:text-5xl font-bold text-[#301534]">
            FAQs
          </h1>
        </div>

        <div className="flex flex-col">
          {faqData.map((item) => {
            const isOpen = activeIndex === item.id;

            return (
              <div
                key={item.id}
                className="border-b border-[#f8eeff] last:border-none"
              >
                <button
                  className="w-full flex justify-between items-center text-left py-6 group outline-none focus-visible:ring-2 focus-visible:ring-[#ad28eb] focus-visible:ring-offset-2 rounded"
                  onClick={() => toggleAccordion(item.id)}
                  aria-expanded={isOpen}
                >
                  <span className="text-lg sm:text-base font-extrabold text-[#301534] pr-6 transition-colors duration-200 group-hover:text-[#ad28eb]">
                    {item.question}
                  </span>
                  <img
                    src={isOpen ? minusIcon : plusIcon}
                    alt=""
                    className="w-6 h-6 shrink-0"
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm sm:text-base text-[#8c6991] leading-relaxed pb-6">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};
export default App;
