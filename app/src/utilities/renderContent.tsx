import ReactMarkdown from "react-markdown";

const renderHeader = (title: string, level: number) => {
  const HeaderTag = `h${level}` as keyof JSX.IntrinsicElements;

  function toTitleCase(str: string) {
    return str.replace(
      /\w\S*/g,
      (text) => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
    );
  }

  return (
    <HeaderTag>
      <ReactMarkdown
        components={{
          p: ({ children }) => <>{children}</>,
          em: ({ children }) => <em>{children}</em>,
          strong: ({ children }) => <strong>{children}</strong>,
        }}
      >
        {toTitleCase(title)}
      </ReactMarkdown>
    </HeaderTag>
  );
};

export default renderHeader;
