import type { Config } from "jest"

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    // CSS and style imports
    "\\.css$": "<rootDir>/src/__mocks__/fileMock.js",
    // yet-another-react-lightbox — mock the full module for tests
    "^yet-another-react-lightbox(.*)$": "<rootDir>/src/__mocks__/lightboxMock.tsx",
    // react-masonry-css — mock to avoid ESM issues
    "^react-masonry-css$": "<rootDir>/src/__mocks__/masonryMock.tsx",
  },
  testMatch: ["**/__tests__/**/*.test.tsx", "**/__tests__/**/*.test.ts"],
  transform: {
    "^.+\\.(ts|tsx)$": ["ts-jest", {
      tsconfig: { jsx: "react-jsx" },
    }],
  },
}

export default config
