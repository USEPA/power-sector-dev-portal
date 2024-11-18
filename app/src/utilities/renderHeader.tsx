const renderHeader = (title: string, level: number) => {
    switch (level) {
      case 1:
        return <h1>{title}</h1>;
      case 2:
        return <h2>{title}</h2>;
      case 3:
        return <h3>{title}</h3>;
      case 4:
        return <h4>{title}</h4>;
      default:
        return <h5>{title}</h5>;
    }
  };
  
  export default renderHeader;