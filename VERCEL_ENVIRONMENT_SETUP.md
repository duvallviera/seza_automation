# 🔧 Vercel Environment Variables Setup - SeZa EmailJS Configuration

## **📋 YOUR EMAILJS CREDENTIALS:**

```
Service ID: seza_automation
Private Key: tObjeXTgpv8UjjSldIO5f
Public Key: akyZ_pzuM2ZpW-UnH
```

## **🚀 STEP 1: Update Vercel Environment Variables**

### **Go to Vercel Dashboard:**
1. Visit: https://vercel.com/dashboard
2. Find your project: `zesaautomation`
3. Click on the project
4. Go to "Settings" tab
5. Click "Environment Variables"

### **Add These Variables:**

```
VITE_EMAILJS_PUBLIC_KEY=akyZ_pzuM2ZpW-UnH
VITE_EMAILJS_SERVICE_ID=seza_automation
VITE_EMAILJS_TEMPLATE_ID=template_seza_contact
```

### **Steps to Add:**
1. Click "Add New"
2. **Name**: `VITE_EMAILJS_PUBLIC_KEY`
3. **Value**: `akyZ_pzuM2ZpW-UnH`
4. **Environment**: Production, Preview, Development
5. Click "Save"

1. Click "Add New"
2. **Name**: `VITE_EMAILJS_SERVICE_ID`
3. **Value**: `seza_automation`
4. **Environment**: Production, Preview, Development
5. Click "Save"

1. Click "Add New"
2. **Name**: `VITE_EMAILJS_TEMPLATE_ID`
3. **Value**: `template_seza_contact`
4. **Environment**: Production, Preview, Development
5. Click "Save"

## **🚀 STEP 2: Configure EmailJS Service**

### **Go to EmailJS Dashboard:**
1. Visit: https://www.emailjs.com
2. Sign in to your account
3. Go to "Email Services"
4. Find service: `seza_automation`

### **Update Gmail Service:**
1. Click on your Gmail service
2. **Email**: `seza.studio.website@gmail.com`
3. **Password**: [Use Gmail App Password - see step 3]
4. **Service Name**: `seza_automation`
5. Click "Update Service"

## **🚀 STEP 3: Generate Gmail App Password**

### **Go to Google Account Security:**
1. Visit: https://myaccount.google.com/security
2. Sign in: `seza.studio.website@gmail.com`
3. Go to "2-Step Verification" → Enable it
4. Go to "App passwords"
5. Generate new password:
   - **App**: Mail
   - **Device**: Other
   - **Name**: SeZa Email Service
6. **COPY THE 16-CHARACTER PASSWORD** (remove spaces)

### **Update EmailJS with App Password:**
1. Go back to EmailJS Dashboard
2. Email Services → Your Gmail service
3. Update password with the App Password
4. Test connection

## **🚀 STEP 4: Create Email Template**

### **Go to EmailJS Templates:**
1. EmailJS Dashboard → "Email Templates"
2. Click "Create New Template"
3. **Template ID**: `template_seza_contact`
4. **Subject**: `🌟 NEW CONTACT FORM: {{subject}} - {{customer_name}}`

### **Template Content:**
```html
Hello SeZa Team,

You have received a new contact form submission:

👤 CUSTOMER DETAILS:
Name: {{customer_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}
Website: {{website}}

📋 INQUIRY DETAILS:
Type: {{inquiry_type}}
Subject: {{subject}}
Urgency: {{urgency}}
Budget: {{budget}}
Timeline: {{timeline}}

💬 MESSAGE:
{{message}}

🔧 TECHNICAL DETAILS:
Service Account: seza.studio.website@gmail.com
Project: SeZa AI Assistant
Timestamp: {{timestamp}}

---
This email was sent via the SeZa AI Assistant automation system.
```

## **🚀 STEP 5: Redeploy Application**

### **Redeploy in Vercel:**
1. Go to Vercel Dashboard → Your Project
2. Go to "Deployments" tab
3. Click "Redeploy" on the latest deployment
4. Wait for deployment to complete

## **🔍 STEP 6: Test Email Delivery**

### **Test Contact Form:**
1. Visit: https://seza-automation.vercel.app
2. Go to Contact page
3. Fill out and submit the form
4. Check email at `seza.studio.website@gmail.com`

### **Expected Result:**
- ✅ Email sent to `seza.studio.website@gmail.com`
- ✅ Professional HTML template
- ✅ All form data included
- ✅ No authentication errors

## **📊 Configuration Summary:**

```
✅ Service ID: seza_automation
✅ Public Key: akyZ_pzuM2ZpW-UnH
✅ Template ID: template_seza_contact
✅ Gmail: seza.studio.website@gmail.com
✅ App Password: [Generated from Google Account]
```

## **🚨 Troubleshooting:**

### **If emails don't arrive:**
1. Check Spam folder in Gmail
2. Verify EmailJS service connection
3. Check Vercel environment variables are set
4. Verify Gmail App Password is correct

### **If authentication fails:**
1. Use Gmail App Password, not regular password
2. Ensure 2-Step Verification is enabled
3. Verify App Password is 16 characters (no spaces)

---

**🌟 After completing these steps, your SeZa contact form will send real emails instantly!**
