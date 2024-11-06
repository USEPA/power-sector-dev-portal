export const extractInfoBlock = (markdownContent: string) => {
    const sections = markdownContent.split(/##\s+/);

    let introTitle = '';
    let introContent = '';
    if (sections[1]) {
      const introSection = sections[1].split("\n\n");
      introTitle = introSection[0]?.trim() || '';
      introContent = introSection[1]?.trim() || '';
    }
  
    // Extract principles
    const info = sections.slice(2).map((section) => {
      const lines = section.split("\n").map(line => line.trim()).filter(line => line);
      const principleTitle = lines[0] || '';
  
      // Separate content and link if present
      const bodyLines = lines.slice(1);
      const contentParts: string[] = [];
      let link = '';
  
      bodyLines.forEach(line => {
        const linkMatch = line.match(/\[(.*?)\]\((.*?)\)/);
        if (linkMatch) {
          link = linkMatch[2];
        } else {
          contentParts.push(line);
        }
      });
  
      const content = contentParts.join("\n").trim();
  
      return { title: principleTitle.trim(), content, link };
    });
  
    return { introTitle, introContent, info };
  };
  