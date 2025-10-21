// 📧 Working Email Service - EmailJS Integration for Real Email Delivery
// This service will actually send emails using EmailJS

interface EmailMessage extends Record<string, unknown> {
  to_email: string;
  from_email: string;
  subject: string;
  message: string;
  customer_name?: string;
  inquiry_type?: string;
  company?: string;
  phone?: string;
  website?: string;
  urgency?: string;
  budget?: string;
  timeline?: string;
}

interface EmailResponse {
  success: boolean;
  message: string;
  messageId?: string;
}

class WorkingEmailService {
  private serviceId: string;
  private templateId: string;
  private publicKey: string;
  private isInitialized: boolean = false;

  constructor() {
    // EmailJS Configuration - Using your specific credentials
    this.serviceId = (import.meta as any).env?.VITE_EMAILJS_SERVICE_ID || 'seza_automation';
    this.templateId = (import.meta as any).env?.VITE_EMAILJS_TEMPLATE_ID || 'template_seza_contact';
    this.publicKey = (import.meta as any).env?.VITE_EMAILJS_PUBLIC_KEY || 'akyZ_pzuM2ZpW-UnH';
    
    console.log('🔧 EmailJS Configuration:', {
      serviceId: this.serviceId,
      templateId: this.templateId,
      publicKey: this.publicKey ? 'Set' : 'Not Set'
    });
    
    this.initializeEmailJS();
  }

  private async initializeEmailJS(): Promise<void> {
    try {
      // Import EmailJS dynamically
      const emailjs = await import('@emailjs/browser');
      emailjs.init(this.publicKey);
      this.isInitialized = true;
      console.log('✅ EmailJS initialized successfully');
    } catch (error) {
      console.error('❌ EmailJS initialization failed:', error);
      this.isInitialized = false;
    }
  }

  // 📧 Send contact form notification (TO seza.studio.website@gmail.com)
  async sendContactFormNotification(formData: any): Promise<EmailResponse> {
    try {
      if (!this.isInitialized || this.publicKey === 'YOUR_EMAILJS_PUBLIC_KEY') {
        console.log('⚠️ EmailJS not configured - using console logging');
        return await this.logEmailToConsole(formData);
      }

      const templateParams: EmailMessage = {
        to_email: 'seza.studio.website@gmail.com', // TO your email
        from_email: formData.email, // FROM customer's email
        subject: `🌟 NEW CONTACT FORM: ${formData.subject} - ${formData.firstName} ${formData.lastName}`,
        message: this.generateContactFormMessage(formData),
        customer_name: `${formData.firstName} ${formData.lastName}`,
        inquiry_type: formData.inquiryType,
        company: formData.company || 'Not specified',
        phone: formData.phone || 'Not provided',
        website: formData.website || 'Not provided',
        urgency: formData.urgency,
        budget: formData.budget || 'Not specified',
        timeline: formData.timeline || 'Not specified'
      };

      console.log('📧 Sending contact form notification via EmailJS:', {
        to: templateParams.to_email,
        from: templateParams.from_email,
        subject: templateParams.subject
      });

      // Import EmailJS dynamically
      const emailjs = await import('@emailjs/browser');
      
      const result = await emailjs.send(
        this.serviceId,
        this.templateId,
        templateParams
      );

      console.log('✅ Contact form notification sent successfully:', result);
      
      return {
        success: true,
        message: 'Contact form notification sent successfully!',
        messageId: result.text
      };

    } catch (error) {
      console.error('❌ Error sending contact form notification:', error);
      
      // Check for specific Gmail API authentication errors
      if (error instanceof Error && error.message.includes('insufficient authentication scopes')) {
        console.log('🔧 Gmail API Authentication Issue Detected');
        console.log('📋 SOLUTION: Use Gmail App Password instead of Gmail API');
        console.log('1. Go to: https://myaccount.google.com/security');
        console.log('2. Enable 2-Step Verification');
        console.log('3. Generate App Password for "Mail"');
        console.log('4. Update EmailJS with App Password (not regular password)');
        
        return {
          success: false,
          message: 'Gmail API authentication issue. Please use Gmail App Password in EmailJS configuration.'
        };
      }
      
      return {
        success: false,
        message: 'Failed to send contact form notification. Please try again.'
      };
    }
  }

  // 📧 Send professional reply (FROM seza.studio.website@gmail.com TO customer)
  async sendProfessionalReply(formData: any, template: string): Promise<EmailResponse> {
    try {
      if (!this.isInitialized || this.publicKey === 'YOUR_EMAILJS_PUBLIC_KEY') {
        console.log('⚠️ EmailJS not configured - using console logging');
        return await this.logReplyToConsole(formData, template);
      }

      const templateParams: EmailMessage = {
        to_email: formData.email, // TO customer's email
        from_email: 'seza.studio.website@gmail.com', // FROM your email
        subject: `Re: ${formData.subject} - Thank You for Contacting SeZa Team`,
        message: this.generateProfessionalReplyMessage(formData, template),
        customer_name: `${formData.firstName} ${formData.lastName}`,
        inquiry_type: formData.inquiryType,
        company: formData.company || 'Not specified',
        phone: formData.phone || 'Not provided',
        website: formData.website || 'Not provided',
        urgency: formData.urgency,
        budget: formData.budget || 'Not specified',
        timeline: formData.timeline || 'Not specified'
      };

      console.log('📧 Sending professional reply via EmailJS:', {
        to: templateParams.to_email,
        from: templateParams.from_email,
        subject: templateParams.subject,
        template: template
      });

      // Import EmailJS dynamically
      const emailjs = await import('@emailjs/browser');
      
      const result = await emailjs.send(
        this.serviceId,
        'template_seza_reply', // Different template for replies
        templateParams
      );

      console.log('✅ Professional reply sent successfully:', result);
      
      return {
        success: true,
        message: 'Professional reply sent successfully!',
        messageId: result.text
      };

    } catch (error) {
      console.error('❌ Error sending professional reply:', error);
      return {
        success: false,
        message: 'Failed to send professional reply. Please try again.'
      };
    }
  }

  // 📝 Generate contact form message for internal notification
  private generateContactFormMessage(formData: any): string {
    return `
🌟 NEW CONTACT FORM SUBMISSION - SeZa Team

👤 CUSTOMER DETAILS:
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Company: ${formData.company || 'Not specified'}
Website: ${formData.website || 'Not provided'}

📋 INQUIRY DETAILS:
Type: ${formData.inquiryType}
Subject: ${formData.subject}
Urgency: ${formData.urgency}
Preferred Contact: ${formData.preferredContact}
Budget: ${formData.budget || 'Not specified'}
Timeline: ${formData.timeline || 'Not specified'}

💬 MESSAGE:
${formData.message}

🔧 TECHNICAL DETAILS:
Service Account: seza.studio.website@gmail.com
Project: SeZa AI Assistant
Timestamp: ${new Date().toISOString()}
Consent: ${formData.consent ? 'Yes' : 'No'}
Newsletter: ${formData.newsletter ? 'Yes' : 'No'}

---
This email was sent via the SeZa AI Assistant automation system.
    `.trim();
  }

  // 📝 Generate professional reply message for customer
  private generateProfessionalReplyMessage(formData: any, template: string): string {
    const customerName = formData.firstName;
    
    return `
Dear ${customerName},

Thank you for reaching out to SeZa Team! We've received your inquiry and are excited about the possibility of working together to create something extraordinary.

🚀 WHAT HAPPENS NEXT:
• Our team will review your inquiry within 24 hours
• We'll respond via your preferred contact method
• We'll prepare a customized proposal for your project
• We'll schedule a consultation to discuss your vision

🤖 OUR SEZA AUTOMATION CAPABILITIES:
• Intelligent Email Response Systems
• AI-Powered Phone Communication
• Social Media Automation
• Smart Booking & Follow-up Systems
• Real-time Business Outreach

📞 NEED IMMEDIATE ASSISTANCE?
Email: seza.studio.website@gmail.com
Phone: (305) 370-9228
Website: www.sezateamengineers.com

In the meantime, feel free to explore our portfolio and learn more about our consciousness-driven approach to business automation.

With consciousness and harmony,
The SeZa Team

---
SeZa Team | Consciousness-Driven Automation
Powered by SeZa AI Assistant | Project: SeZa Automation
🌐 www.sezateamengineers.com | 📧 seza.studio.website@gmail.com
    `.trim();
  }

  // 📧 Fallback: Log email to console when EmailJS is not configured
  private async logEmailToConsole(formData: any): Promise<EmailResponse> {
    console.log('📧 CONSOLE EMAIL LOGGING (EmailJS not configured):');
    console.log('TO: seza.studio.website@gmail.com');
    console.log('FROM: seza.studio.website@gmail.com');
    console.log('SUBJECT: 🌟 NEW CONTACT FORM: ' + formData.subject + ' - ' + formData.firstName + ' ' + formData.lastName);
    console.log('MESSAGE:', this.generateContactFormMessage(formData));
    
    return {
      success: true,
      message: 'Email logged to console (EmailJS setup required for actual sending)',
      messageId: `console_${Date.now()}`
    };
  }

  // 📧 Fallback: Log reply to console when EmailJS is not configured
  private async logReplyToConsole(formData: any, template: string): Promise<EmailResponse> {
    console.log('📧 CONSOLE REPLY LOGGING (EmailJS not configured):');
    console.log('TO: ' + formData.email);
    console.log('FROM: seza.studio.website@gmail.com');
    console.log('SUBJECT: Re: ' + formData.subject + ' - Thank You for Contacting SeZa Team');
    console.log('MESSAGE:', this.generateProfessionalReplyMessage(formData, template));
    
    return {
      success: true,
      message: 'Reply logged to console (EmailJS setup required for actual sending)',
      messageId: `console_reply_${Date.now()}`
    };
  }
}

export const workingEmailService = new WorkingEmailService();
