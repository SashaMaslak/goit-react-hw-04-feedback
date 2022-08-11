import section from './Section.module.css';

export const Section = ({ title, children }) => {
   return (
      <section className={section.section}>
         <h1 className={section.title}>{title}</h1>
         {children}
      </section>
   );
};