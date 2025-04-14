import { app } from './app';
import { DIContainer } from './core/di-container';

async function start() {
  await DIContainer.init();

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
  });
}

start().catch(console.error);
