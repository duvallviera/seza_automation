# 🚀 QUICK EmailJS Setup - 5 Minutes to Working Emails

## **🎯 IMMEDIATE ACTION REQUIRED**

Your contact form is working perfectly but only logging emails. Follow these steps to get real email delivery in 5 minutes:

### **⚡ QUICK SETUP (5 Minutes):**

#### **1. Go to EmailJS (2 minutes)**
- Visit: https://www.emailjs.com
- Click "Sign Up" → Create account
- Verify email

#### **2. Add Gmail Service (2 minutes)**
- Dashboard → "Email Services" → "Add New Service"
- Choose "Gmail"
- **Email**: `seza.studio.website@gmail.com`
- **Password**: `Cartones2016`
- **Service Name**: `seza_automation`
- Click "Create Service"
- **COPY THE SERVICE ID** (e.g., `service_xxxxxxx`)

#### **3. Create Template (1 minute)**
- Dashboard → "Email Templates" → "Create New Template"
- **Template ID**: `template_seza_contact`
- **Subject**: `🌟 NEW CONTACT FORM: {{subject}} - {{customer_name}}`
- **Content**: 
```
Hello SeZa Team,

New contact form submission:

👤 CUSTOMER: {{customer_name}}
📧 EMAIL: {{from_email}}
📞 PHONE: {{phone}}
🏢 COMPANY: {{company}}
🌐 WEBSITE: {{website}}

📋 INQUIRY:
Type: {{inquiry_type}}
Subject: {{subject}}
Urgency: {{urgency}}
Budget: {{budget}}
Timeline: {{timeline}}

💬 MESSAGE:
{{message}}

---
SeZa AI Assistant Contact Form System
```

#### **4. Get Public Key**
- Dashboard → "Account" → "General"
- **COPY THE PUBLIC KEY** (e.g., `user_xxxxxxxxxxxxxxxx`)

#### **5. Update Vercel (1 minute)**
- Go to Vercel Dashboard → Your Project → Settings → Environment Variables
- Add these variables:
```
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=template_seza_contact
```
- Click "Save"
- Go to "Deployments" → Click "Redeploy"

### **🎯 THAT'S IT!**

After redeployment, your contact form will send real emails to `seza.studio.website@gmail.com`!

### **📧 What You'll Receive:**

When someone submits the contact form, you'll get an email with:
- **🌟 Subject**: "NEW CONTACT FORM: [Subject] - [Customer Name]"
- **👤 Customer Details**: Name, email, phone, company, website
- **📋 Inquiry Details**: Type, subject, urgency, budget, timeline
- **💬 Message**: Full customer message
- **🔧 Technical Info**: Timestamp, consent status

### **🔍 Test It:**

1. **Visit**: https://seza-automation.vercel.app
2. **Go to Contact page**
3. **Fill out and submit the form**
4. **Check your email** at `seza.studio.website@gmail.com`
5. **You should receive the email instantly!**

### **🚨 If You Don't Receive Emails:**

1. **Check Spam folder** in `seza.studio.website@gmail.com`
2. **Verify EmailJS service** is connected to Gmail
3. **Check Vercel environment variables** are set correctly
4. **Redeploy** the application after setting variables

### **📞 Need Help?**

If you need assistance with EmailJS setup:
1. **EmailJS Documentation**: https://www.emailjs.com/docs/
2. **Gmail App Password**: Make sure to use App Password, not regular password
3. **Environment Variables**: Double-check they're set in Vercel

---

**🌟 Your SeZa contact form will be sending real emails in 5 minutes!**
