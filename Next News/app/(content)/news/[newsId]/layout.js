export default function PageLayout({ children, modal }) {
    return (
      <>
        {modal}
        {children}
      </>
    );
  }
  