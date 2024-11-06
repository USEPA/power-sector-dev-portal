export const extractIntro = (markdownContent: string) => {
    const sections = markdownContent.split(/##\s+/);

    let introTitle = '';
    let introContent = '';
    if (sections[1]) {
      const introSection = sections[1].split("\n\n");
      introTitle = introSection[0]?.trim() || '';
      introContent = introSection[1]?.trim() || '';
    }
  
  
    return { introTitle, introContent };
  };
  