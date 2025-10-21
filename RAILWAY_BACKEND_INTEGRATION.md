# 🚀 Railway Backend Integration Guide

## **SeZa AI Assistant - Full Stack Deployment**

### **Current Setup:**
- **Frontend**: Vercel (https://zesaautomation.vercel.app)
- **Backend**: Railway (https://railway.com/project/71914b3d-eca7-4725-ad79-db872651c2bd/service/fa0bacc6-8789-4051-934a-77cbd6b6f1b1)
- **Database**: MongoDB (configured in Railway)

### **Step 1: Get Your Railway Backend URL**

1. Go to your Railway dashboard: https://railway.com/project/71914b3d-eca7-4725-ad79-db872651c2bd/service/fa0bacc6-8789-4051-934a-77cbd6b6f1b1
2. Click on your backend service
3. Go to the "Settings" tab
4. Copy the "Public URL" (it should look like: `https://your-service-name.railway.app`)

### **Step 2: Update Frontend Environment Variables**

1. **In Vercel Dashboard:**
   - Go to your project settings
   - Navigate to "Environment Variables"
   - Add the following variables:

```
VITE_API_URL=https://your-railway-backend-url.railway.app/api
VITE_APP_URL=https://zesaautomation.vercel.app
VITE_APP_NAME=SeZa Team Contact Form
```

### **Step 3: Test Backend Connection**

Test your Railway backend with these endpoints:

```bash
# Health Check
curl https://your-railway-backend-url.railway.app/health

# API Health Check
curl https://your-railway-backend-url.railway.app/api/health
```

### **Step 4: Redeploy Frontend**

After updating environment variables in Vercel:

1. Go to your Vercel dashboard
2. Click "Redeploy" on your latest deployment
3. Or push a new commit to trigger automatic deployment

### **Step 5: Verify Full Stack Integration**

1. **Frontend**: https://zesaautomation.vercel.app
2. **Backend Health**: https://your-railway-backend-url.railway.app/health
3. **API Endpoints**: https://your-railway-backend-url.railway.app/api/

### **Environment Variables for Railway Backend**

Make sure your Railway backend has these environment variables:

```env
# Server Configuration
PORT=5051
NODE_ENV=production
FRONTEND_URL=https://zesaautomation.vercel.app

# Database Configuration
MONGODB_URI=your_mongodb_connection_string

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRE=7d

# Email Configuration
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=SeZa AI Assistant <noreply@sezateamengineers.com>

# Security Configuration
BCRYPT_ROUNDS=12
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

### **API Endpoints Available:**

- `GET /health` - Health check
- `GET /api/health` - API health check
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/email/contact-form` - Contact form submission
- `GET /api/automation` - Get automations
- `POST /api/automation` - Create automation
- `GET /api/booking` - Get bookings
- `GET /api/portfolio` - Get portfolio
- `GET /api/analytics` - Get analytics

### **Troubleshooting:**

1. **CORS Issues**: Make sure your Railway backend has CORS configured for your Vercel domain
2. **Environment Variables**: Double-check all environment variables are set correctly
3. **Database Connection**: Verify MongoDB connection in Railway
4. **API Endpoints**: Test each endpoint individually

### **Next Steps:**

1. Get your Railway backend URL
2. Update Vercel environment variables
3. Redeploy frontend
4. Test full stack integration
5. Monitor both services for any issues

---

**🌟 Your SeZa AI Assistant is now a complete full-stack application with Railway backend and Vercel frontend!**
