<h1 align="center">🍽️ Tastify - Spotify for Recipes 🍽️</h1>

<p align="center">
  <img src="https://img.shields.io/badge/React%20Native-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" />
</p>

<p align="center">
A modern, sleek recipe discovery app with a Spotify-like interface for browsing, discovering, and saving delicious recipes from around the world.
</p>

## 📱 Screenshots

<img width="636" height="1400" alt="image" src="https://github.com/user-attachments/assets/7911efaa-4f31-4b09-b521-77f2aaf64179" />
<img width="636" height="1400" alt="image" src="https://github.com/user-attachments/assets/ff8d11e7-2b6e-4e1f-aff9-94c4d310e229" />
<img width="636" height="1400" alt="image" src="https://github.com/user-attachments/assets/9198ac09-6305-48eb-b0af-6b6a57d780af" />
<img width="636" height="1400" alt="image" src="https://github.com/user-attachments/assets/da0e64be-ffa3-44c6-9c3d-27d8fa5cfe2c" />
<img width="636" height="1400" alt="image" src="https://github.com/user-attachments/assets/fd59b467-ce9c-4c21-8014-8bf988d4e551" />
<img width="636" height="1400" alt="image" src="https://github.com/user-attachments/assets/22c1d940-888d-4d3c-a702-b94aef775321" />
<img width="636" height="1400" alt="image" src="https://github.com/user-attachments/assets/4e4e3af6-98b5-459e-9260-7dd2369136ae" />


## ✨ Key Features

### 🎯 Core Functionality
- 🔐 **Secure Authentication** - Signup, Login, and Email Verification with **Clerk**
- 🍳 **Recipe Discovery** - Browse Featured Recipes & Filter by Categories  
- 🔍 **Smart Search** - Find recipes by name or ingredients
- 📖 **Detailed Instructions** - Step-by-step cooking guides
- 🎥 **Video Tutorials** - YouTube cooking videos integrated
- ❤️ **Favorites System** - Save and manage your favorite recipes
- 📱 **Cross-Platform** - Works seamlessly on iOS and Android

### 🎨 Design & Customization
- � **8 Beautiful Themes** - Coffee, Forest, Purple, Ocean, Sunset, Mint, Midnight, Rose Gold
- 🎵 **Spotify-Inspired UI** - Modern, intuitive interface design
- 📱 **Responsive Layout** - Optimized for all screen sizes
- ✨ **Smooth Animations** - Fluid transitions and interactions

### 🛠️ Technical Highlights
- ⚡ **High Performance** - Fast loading with optimized caching
- 🌐 **Real-time Sync** - Instant updates across devices
- 📶 **Network Flexibility** - Works with local IP, ngrok, or cloud deployment
- 🆓 **100% Free Stack** - No paid services required for development

---

## 🏗️ Tech Stack

| Category | Technology | Purpose |
|----------|------------|---------|
| **Mobile** | React Native + Expo | Cross-platform development |
| **Navigation** | Expo Router | File-based navigation system |
| **Backend** | Node.js + Express | RESTful API server |
| **Database** | PostgreSQL (Neon) | Cloud database with Drizzle ORM |
| **Auth** | Clerk | User management and authentication |
| **API** | TheMealDB | Recipe data source |
| **Media** | YouTube API | Video tutorial integration |
| **Deployment** | EAS Build | Production app builds |

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v16+)
- **npm** or **yarn** 
- **Expo CLI**: `npm install -g @expo/cli`

### 1️⃣ Clone & Install
```bash
# Clone the repository
git clone https://github.com/Niteshagarwal01/Tastify-Spotify-for-Recipes.git
cd Tastify-Spotify-for-Recipes

# Install backend dependencies
cd backend && npm install

# Install mobile dependencies  
cd ../mobile && npm install
```

### 2️⃣ Environment Setup

**Backend** (`/backend/.env`)
```env
PORT=5001
DATABASE_URL=your_neon_postgresql_url
CLERK_SECRET_KEY=your_clerk_secret_key
NODE_ENV=development
```

**Mobile App** (`/mobile/.env`)
```env
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
EXPO_PUBLIC_API_BASE_URL=http://your-ip:5001
```

### 3️⃣ Run the Application

**Start Backend Server**
```bash
cd backend
npm start
# Server runs on http://localhost:5001
```

**Start Mobile App**
```bash
cd mobile
npx expo start
# Scan QR code with Expo Go app
```

---

## 🌐 Network Configuration

### For Local Development
```bash
# Use your computer's IP address
EXPO_PUBLIC_API_BASE_URL=http://192.168.1.39:5001
```

### For Testing on Multiple Devices
```bash
# Install ngrok for public tunnel
npm install -g ngrok
ngrok http 5001

# Update mobile/.env with ngrok URL
EXPO_PUBLIC_API_BASE_URL=https://your-ngrok-id.ngrok-free.app
```

---

## 🎨 Customization

### Change App Theme
Edit `mobile/constants/colors.js`:
```javascript
// Available: coffee, forest, purple, ocean, sunset, mint, midnight, roseGold
export const COLORS = THEMES.ocean; // Change this line
```

### Add New Features
- **Components**: Add to `mobile/components/`
- **Screens**: Create in `mobile/app/` (uses Expo Router)
- **API Endpoints**: Extend `backend/src/server.js`
- **Styles**: Modify `mobile/assets/styles/`

---

## 📱 Build for Production

### Android APK
```bash
# Install EAS CLI
npm install -g @expo/eos-cli

# Configure build settings
npx eas build:configure

# Build production APK
npx eas build --platform android --profile preview
```

### iOS App Store
```bash
# Requires Apple Developer Account ($99/year)
npx eas build --platform ios --profile production
```

---

## 🔧 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/health` | Server health check |
| `GET` | `/api/favorites/:userId` | Get user's favorite recipes |
| `POST` | `/api/favorites` | Add recipe to favorites |
| `DELETE` | `/api/favorites/:userId/:recipeId` | Remove from favorites |

---

## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m 'Add amazing feature'`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

### Development Guidelines
- Follow existing code style and conventions
- Test on both iOS and Android devices
- Add comments for complex logic
- Update documentation for new features

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [**TheMealDB**](https://www.themealdb.com/) - Free recipe API
- [**Clerk**](https://clerk.com/) - Authentication platform  
- [**Expo**](https://expo.dev/) - React Native development platform
- [**Neon**](https://neon.tech/) - Serverless PostgreSQL

---

## 📧 Contact & Support

**Developer**: Nitesh Agarwal  
**GitHub**: [@Niteshagarwal01](https://github.com/Niteshagarwal01)  
**Project Link**: [Tastify-Spotify-for-Recipes](https://github.com/Niteshagarwal01/Tastify-Spotify-for-Recipes)

---

<p align="center">
  <b>⭐ Star this repository if you found it helpful!</b>
</p>

<p align="center">Made with ❤️ and lots of ☕</p>
