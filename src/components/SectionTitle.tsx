interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">{title}</h2>
      {subtitle && <p className="text-lg text-secondary max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}
