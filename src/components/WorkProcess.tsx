import React from 'react';
import { Compass, Palette, Code2, Rocket } from 'lucide-react';
import { ProcessStep } from '../types/portfolio';
import { TranslationDictionary } from '../data/translations';

interface WorkProcessProps {
  theme: 'dark' | 'light';
  steps: ProcessStep[];
  t: TranslationDictionary;
}

export const WorkProcess: React.FC<WorkProcessProps> = ({ theme, steps, t }) => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return Compass;
      case 1:
        return Palette;
      case 2:
        return Code2;
      case 3:
      default:
        return Rocket;
    }
  };

  return (
    <section
      id="process"
      className={`py-20 md:py-28 border-t transition-colors ${
        theme === 'dark' ? 'bg-[#111318] border-[#262A33]' : 'bg-white border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#E67E22] mb-2">
            <span className="w-5 h-0.5 bg-[#E67E22] rounded-full" />
            <span>{t.process.kicker}</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            {t.process.title}
          </h2>
          <p
            className={`mt-3 text-base sm:text-lg leading-relaxed ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            {t.process.subtitle}
          </p>
        </div>

        {/* 4 Connected Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => {
            const Icon = getStepIcon(index);
            const translatedStep = t.process.steps[step.number];

            const title = translatedStep ? translatedStep.title : step.title;
            const subtitle = translatedStep ? translatedStep.subtitle : step.subtitle;
            const description = translatedStep ? translatedStep.description : step.description;
            const keyOutputs = translatedStep ? translatedStep.keyOutputs : step.keyOutputs;

            return (
              <div
                key={step.number}
                className={`relative flex flex-col justify-between p-6 rounded-2xl border transition-all duration-200 group hover:-translate-y-1 ${
                  theme === 'dark'
                    ? 'bg-[#191B21] border-[#262A33] hover:border-[#E67E22]/50 hover:shadow-xl'
                    : 'bg-[#F9FAFB] border-gray-200 hover:border-[#E67E22] hover:shadow-xl'
                }`}
              >
                <div>
                  {/* Step Header with Number and Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold font-mono text-[#E67E22]/70 group-hover:text-[#E67E22] transition-colors">
                      {step.number}
                    </span>
                    <div className="p-2.5 rounded-xl bg-[#E67E22]/10 text-[#E67E22]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3
                    className={`text-xl font-bold tracking-tight ${
                      theme === 'dark' ? 'text-white' : 'text-gray-950'
                    }`}
                  >
                    {title}
                  </h3>
                  <p className="text-xs font-mono text-[#F5A623] mt-0.5 mb-3 font-medium">
                    {subtitle}
                  </p>

                  {/* Description */}
                  <p
                    className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    {description}
                  </p>
                </div>

                {/* Outputs Footer */}
                <div className="pt-4 border-t border-[#262A33]">
                  <p
                    className={`text-[11px] font-mono uppercase tracking-wider mb-2 font-medium ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`}
                  >
                    {t.process.outputsLabel}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {keyOutputs.map((out) => (
                      <span
                        key={out}
                        className={`text-[11px] px-2 py-0.5 rounded-md font-mono ${
                          theme === 'dark'
                            ? 'bg-[#111318] text-gray-300 border border-[#262A33]'
                            : 'bg-white text-gray-700 border border-gray-200'
                        }`}
                      >
                        {out}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
