
import React from "react";
import { FileText, AlertTriangle, Info } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <FileText className="h-8 w-8 text-resume-primary" />
              </div>
              <h1 className="text-3xl font-bold text-resume-secondary">Terms of Service</h1>
              <p className="text-muted-foreground mt-2">Last updated: June 1, 2024</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="prose max-w-none">
                <h2>1. Acceptance of Terms</h2>
                <p>
                  By accessing or using ResumeAI's website and services, you agree to be bound by these Terms of Service 
                  and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited 
                  from using or accessing this site.
                </p>
                
                <h2>2. Use License</h2>
                <p>
                  Permission is granted to temporarily use ResumeAI for personal, non-commercial resume creation purposes. 
                  This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul>
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to decompile or reverse engineer any software contained on ResumeAI</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                </ul>
                <p>
                  This license shall automatically terminate if you violate any of these restrictions and may be terminated 
                  by ResumeAI at any time.
                </p>
                
                <div className="bg-yellow-50 p-4 rounded-md my-6 flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-1" />
                  <p className="text-sm m-0">
                    <strong>Important:</strong> The content you create using our service is yours, but we are not responsible for 
                    how you use that content or any consequences arising from your resume submissions to third parties.
                  </p>
                </div>
                
                <h2>3. User Accounts</h2>
                <p>
                  When you create an account with us, you must provide accurate, complete, and current information. You are 
                  responsible for safeguarding the password and for all activities that occur under your account. You agree 
                  to notify us immediately of any unauthorized use of your account.
                </p>
                
                <h2>4. Service Description</h2>
                <p>
                  ResumeAI provides tools for creating, editing, and managing professional resumes. We strive to ensure that 
                  our services operate correctly, but we do not guarantee that they will always be available, secure, or error-free.
                </p>
                
                <h2>5. User Content</h2>
                <p>
                  You retain all rights to the content you submit to ResumeAI. By uploading content, you grant us a non-exclusive, 
                  worldwide, royalty-free license to use, store, and process your content solely for the purpose of providing our services to you.
                </p>
                
                <h2>6. Prohibited Activities</h2>
                <p>You agree not to engage in any of the following activities:</p>
                <ul>
                  <li>Violating any applicable laws or regulations</li>
                  <li>Impersonating another person or entity</li>
                  <li>Interfering with or disrupting the services or servers</li>
                  <li>Attempting to gain unauthorized access to any part of the services</li>
                  <li>Using the services for any illegal or unauthorized purpose</li>
                </ul>
                
                <h2>7. Limitation of Liability</h2>
                <p>
                  In no event shall ResumeAI, its officers, directors, employees, or agents be liable for any indirect, incidental, 
                  special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, 
                  or other intangible losses, resulting from:
                </p>
                <ul>
                  <li>Your access to or use of or inability to access or use the services</li>
                  <li>Any conduct or content of any third party on the services</li>
                  <li>Any content obtained from the services</li>
                  <li>Unauthorized access, use, or alteration of your transmissions or content</li>
                </ul>
                
                <div className="bg-blue-50 p-4 rounded-md my-6 flex items-start gap-3">
                  <Info className="h-5 w-5 text-resume-primary flex-shrink-0 mt-1" />
                  <p className="text-sm m-0">
                    <strong>Disclaimer:</strong> We provide resume creation tools, but we do not guarantee employment outcomes. 
                    The effectiveness of your resume depends on various factors beyond our control.
                  </p>
                </div>
                
                <h2>8. Termination</h2>
                <p>
                  We may terminate or suspend your account and access to our services immediately, without prior notice or liability, 
                  for any reason, including without limitation if you breach these Terms of Service.
                </p>
                
                <h2>9. Changes to Terms</h2>
                <p>
                  We reserve the right to modify or replace these Terms of Service at any time. It is your responsibility to review 
                  these Terms periodically for changes. Your continued use of the services following the posting of any changes constitutes 
                  acceptance of those changes.
                </p>
                
                <h2>10. Governing Law</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the United States, 
                  without regard to its conflict of law provisions.
                </p>
                
                <h2>11. Contact Us</h2>
                <p>
                  If you have any questions about these Terms, please contact us at 
                  <a href="mailto:legal@resumeai.com"> legal@resumeai.com</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
