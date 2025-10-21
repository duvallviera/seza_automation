// 📧 EmailJS Configuration Helper
// This file helps configure EmailJS with proper Gmail settings

interface EmailJSConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
  gmailUser: string;
  gmailAppPassword: string;
}

class EmailJSConfigHelper {
  // 🔧 Get EmailJS configuration from environment variables
  static getConfig(): EmailJSConfig {
    return {
      serviceId: (import.meta as any).env?.VITE_EMAILJS_SERVICE_ID || 'service_seza_automation',
      templateId: (import.meta as any).env?.VITE_EMAILJS_TEMPLATE_ID || 'template_seza_contact',
      publicKey: (import.meta as any).env?.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_EMAILJS_PUBLIC_KEY',
      gmailUser: 'seza.studio.website@gmail.com',
      gmailAppPassword: 'Cartones2016' // This should be replaced with App Password
    };
  }

  // 📧 Test EmailJS configuration
  static async testConfiguration(): Promise<boolean> {
    try {
      const config = this.getConfig();
      
      console.log('🔧 EmailJS Configuration Test:');
      console.log('Service ID:', config.serviceId);
      console.log('Template ID:', config.templateId);
      console.log('Public Key:', config.publicKey ? 'Set' : 'Not Set');
      console.log('Gmail User:', config.gmailUser);
      console.log('Gmail Password:', config.gmailAppPassword ? 'Set' : 'Not Set');
      
      // Check if all required fields are set
      const isConfigured = config.publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY' && 
                          config.gmailAppPassword !== 'Cartones2016';
      
      if (isConfigured) {
        console.log('✅ EmailJS is properly configured');
        return true;
      } else {
        console.log('⚠️ EmailJS needs configuration');
        console.log('📋 Setup required:');
        console.log('1. Create EmailJS account at https://www.emailjs.com');
        console.log('2. Add Gmail service with App Password');
        console.log('3. Create email template');
        console.log('4. Update environment variables in Vercel');
        return false;
      }
    } catch (error) {
      console.error('❌ EmailJS configuration test failed:', error);
      return false;
    }
  }

  // 📧 Get setup instructions
  static getSetupInstructions(): string {
    return `
🔧 EMAILJS SETUP INSTRUCTIONS:

1. CREATE EMAILJS ACCOUNT:
   - Go to: https://www.emailjs.com
   - Sign up and verify email

2. ADD GMAIL SERVICE:
   - Dashboard → Email Services → Add New Service
   - Choose "Gmail"
   - Email: seza.studio.website@gmail.com
   - Password: [Use Gmail App Password - see step 3]
   - Service Name: seza_automation

3. GENERATE GMAIL APP PASSWORD:
   - Go to: https://myaccount.google.com/security
   - Sign in: seza.studio.website@gmail.com
   - Enable 2-Step Verification
   - Go to "App passwords"
   - Generate new app password for "Mail"
   - Use this 16-character password in EmailJS

4. CREATE EMAIL TEMPLATE:
   - Dashboard → Email Templates → Create New Template
   - Template ID: template_seza_contact
   - Subject: 🌟 NEW CONTACT FORM: {{subject}} - {{customer_name}}
   - Content: [Use the template from setup guide]

5. GET PUBLIC KEY:
   - Dashboard → Account → General
   - Copy Public Key

6. UPDATE VERCEL ENVIRONMENT VARIABLES:
   - Vercel Dashboard → Project Settings → Environment Variables
   - Add: VITE_EMAILJS_PUBLIC_KEY=your_public_key
   - Add: VITE_EMAILJS_SERVICE_ID=your_service_id
   - Add: VITE_EMAILJS_TEMPLATE_ID=template_seza_contact

7. REDEPLOY:
   - Vercel Dashboard → Deployments → Redeploy

🎯 RESULT: Emails will be sent to seza.studio.website@gmail.com
    `.trim();
  }

  // 📧 Validate Gmail App Password format
  static validateAppPassword(password: string): boolean {
    // Gmail App Password should be 16 characters, no spaces
    const cleanPassword = password.replace(/\s/g, '');
    return cleanPassword.length === 16 && /^[a-zA-Z0-9]+$/.test(cleanPassword);
  }

  // 📧 Get Gmail App Password instructions
  static getAppPasswordInstructions(): string {
    return `
🔐 GMAIL APP PASSWORD SETUP:

1. GO TO GOOGLE ACCOUNT SECURITY:
   - Visit: https://myaccount.google.com/security
   - Sign in: seza.studio.website@gmail.com

2. ENABLE 2-STEP VERIFICATION:
   - Go to "2-Step Verification"
   - Follow the setup process
   - Use your phone number for verification

3. GENERATE APP PASSWORD:
   - Go to "App passwords" (only available after 2-Step Verification)
   - Click "Select app" → Choose "Mail"
   - Click "Select device" → Choose "Other"
   - Type: "SeZa Email Service"
   - Click "Generate"

4. COPY THE APP PASSWORD:
   - You'll get a 16-character password like: abcd efgh ijkl mnop
   - Remove spaces: abcdefghijklmnop
   - Use this in EmailJS (not your regular Gmail password)

5. UPDATE EMAILJS:
   - Go to EmailJS Dashboard
   - Email Services → Your Gmail service
   - Update password with the App Password
   - Test connection

⚠️ IMPORTANT: Use App Password, not regular Gmail password!
    `.trim();
  }
}

export default EmailJSConfigHelper;
