// src/index.ts
import { app } from './app';
import { Database } from './config/database';
import { UserRepository } from './repositories/user.repository';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    const db = await Database.connect();
    const userRepo = new UserRepository(db);
    const userService = new UserService(userRepo);

    UserController.init(userService); // ✅ Injecting the service properly

    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Failed to start app:', error);
    process.exit(1);
  }
})();
