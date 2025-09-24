export const scrollToTop = (smooth: boolean = true) => {
  if (typeof window !== "undefined") {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: smooth ? "smooth" : "auto",
    });
  }
};

export const scrollToElement = (elementId: string, offset: number = 0) => {
  if (typeof window !== "undefined") {
    const element = document.getElementById(elementId);
    if (element) {
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  }
};
