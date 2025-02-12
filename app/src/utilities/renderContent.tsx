import ReactMarkdown from "react-markdown";

const renderHeader = (title: string, level: number) => {
  const HeaderTag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <HeaderTag>
      <ReactMarkdown
        components={{
          p: ({ children }) => <>{children}</>, 
          em: ({ children }) => <em>{children}</em>, 
          strong: ({ children }) => <strong>{children}</strong>,
        }}
      >
        {title}
      </ReactMarkdown>
    </HeaderTag>
  );
};

export default renderHeader;
