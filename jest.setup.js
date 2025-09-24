import "@testing-library/jest-dom";

// Mock GSAP since it requires browser environment
jest.mock("gsap", () => ({
  gsap: {
    context: jest.fn(() => ({
      revert: jest.fn(),
    })),
    fromTo: jest.fn(),
    to: jest.fn(),
    registerPlugin: jest.fn(),
  },
  ScrollTrigger: {},
}));

// Mock Next.js Image component
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props) => {
    return <img {...props} />;
  },
}));
