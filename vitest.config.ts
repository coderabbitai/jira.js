import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    typecheck: {
      enabled: true,
      tsconfig: 'tsconfig.lint.json',
    },
    setupFiles: ['dotenv/config'],
  },
});
