import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Are the templates free to use?",
    answer:
      "Some templates are free, while others may be available for purchase. Each template’s pricing details are mentioned on its page.",
  },
  {
    question: "Can I use the templates for commercial purposes?",
    answer:
      "Yes, you can use the templates for commercial purposes. However, you have to keep the footer credit link.",
  },

  {
    question: "How do I get the templates?",
    answer:
      "You can download the templates from this website. You can also get the free templates from GitHub.",
  },

  {
    question: "Can I customize the templates?",
    answer:
      "Absolutely! Each template is designed to be flexible and customizable to match your project's unique requirements.",
  },
  {
    question: "What tech stack do these templates use?",
    answer:
      "Our templates are built using modern frameworks like Next.js, Tailwind CSS, and other popular technologies to ensure scalability and performance.",
  },
  {
    question: "Do these templates support internationalization (i18n)?",
    answer:
      "No, not yet. But we will add this feature in the future. If you need this feature, please let us know.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-20">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center">
        Frequently Asked Questions
      </h2>
      <p className="text-muted-foreground text-center">
        If you have any questions, please don&apos;t hesitate to contact us.
      </p>

      <Accordion
        type="single"
        collapsible
        className=" w-full max-w-2xl mx-auto mt-10"
      >
        {faqData.map((faq) => (
          <AccordionItem key={faq.question} value={faq.question}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
