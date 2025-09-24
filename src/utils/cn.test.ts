import { cn } from "@/styles/tailwind-utilities";

describe("cn helper", () => {
  it("joins truthy classes and ignores falsy values", () => {
    expect(cn("a", undefined, false, null, "b")).toBe("a b");
  });
});
