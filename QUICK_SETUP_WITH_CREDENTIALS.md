# 🚀 QUICK SETUP - SeZa EmailJS with Your Credentials

## **📋 YOUR CREDENTIALS:**
```
Service ID: seza_automation
Public Key: akyZ_pzuM2ZpW-UnH
Private Key: tObjeXTgpv8UjjSldIO5f
```

## **⚡ 5-MINUTE SETUP:**

### **1. Update Vercel Environment Variables (2 minutes)**

**Go to Vercel Dashboard:**
1. https://vercel.com/dashboard
2. Find project: `zesaautomation`
3. Settings → Environment Variables
4. Add these 3 variables:

```
VITE_EMAILJS_PUBLIC_KEY=akyZ_pzuM2ZpW-UnH
VITE_EMAILJS_SERVICE_ID=seza_automation
VITE_EMAILJS_TEMPLATE_ID=template_seza_contact
```

### **2. Configure EmailJS Service (2 minutes)**

**Go to EmailJS Dashboard:**
1. https://www.emailjs.com
2. Email Services → Find `seza_automation`
3. Update Gmail settings:
   - **Email**: `seza.studio.website@gmail.com`
   - **Password**: [Use Gmail App Password - see step 3]
   - **Service Name**: `seza_automation`

### **3. Generate Gmail App Password (1 minute)**

**Go to Google Account Security:**
1. https://myaccount.google.com/security
2. Sign in: `seza.studio.website@gmail.com`
3. Enable 2-Step Verification
4. Go to "App passwords"
5. Generate new password for "Mail"
6. **COPY THE 16-CHARACTER PASSWORD**
7. Update EmailJS with this App Password

### **4. Create Email Template (1 minute)**

**In EmailJS Dashboard:**
1. Email Templates → Create New Template
2. **Template ID**: `template_seza_contact`
3. **Subject**: `🌟 NEW CONTACT FORM: {{subject}} - {{customer_name}}`
4. **Content**: [Use the template from setup guide]

### **5. Redeploy (1 minute)**

**In Vercel Dashboard:**
1. Go to Deployments
2. Click "Redeploy" on latest deployment
3. Wait for completion

## **🔍 TEST IT:**

1. **Visit**: https://seza-automation.vercel.app
2. **Go to Contact page**
3. **Fill out and submit form**
4. **Check email** at `seza.studio.website@gmail.com`

## **📧 EXPECTED RESULT:**

You'll receive an email with:
- **🌟 Subject**: "NEW CONTACT FORM: [Subject] - [Customer Name]"
- **👤 Customer Details**: Name, email, phone, company, website
- **📋 Inquiry Details**: Type, subject, urgency, budget, timeline
- **💬 Message**: Full customer message
- **🔧 Technical Info**: Timestamp, consent status

## **🚨 IF NOT WORKING:**

1. **Check Spam folder** in Gmail
2. **Verify EmailJS connection** in dashboard
3. **Check Vercel environment variables** are set
4. **Use Gmail App Password**, not regular password
5. **Redeploy** after setting variables

## **📊 CONFIGURATION STATUS:**

```
✅ Service ID: seza_automation
✅ Public Key: akyZ_pzuM2ZpW-UnH
✅ Template ID: template_seza_contact
⏳ Gmail App Password: [Generate from Google Account]
⏳ Vercel Environment Variables: [Set in Vercel Dashboard]
⏳ EmailJS Service: [Update with App Password]
```

---

**🌟 After completing these steps, your SeZa contact form will send real emails instantly!**
