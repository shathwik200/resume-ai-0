
import React from "react";
import { Shield, Lock, UserCheck } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <Shield className="h-8 w-8 text-resume-primary" />
              </div>
              <h1 className="text-3xl font-bold text-resume-secondary">Privacy Policy</h1>
              <p className="text-muted-foreground mt-2">Last updated: June 1, 2024</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="prose max-w-none">
                <h2>Introduction</h2>
                <p>
                  At ResumeAI, we are committed to protecting your privacy and ensuring the security of your personal information. 
                  This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you use our website and services.
                </p>
                
                <h2>Information We Collect</h2>
                <p>We may collect the following types of information:</p>
                <ul>
                  <li><strong>Personal Information:</strong> Name, email address, and other contact details you provide when creating an account or using our services.</li>
                  <li><strong>Resume Data:</strong> Information you include in your resume, such as work experience, education, skills, and other professional details.</li>
                  <li><strong>Usage Data:</strong> Information about how you use our website, including browser type, time spent on pages, and actions taken.</li>
                  <li><strong>Device Information:</strong> Data about the device you use to access our services, including IP address, browser type, and operating system.</li>
                </ul>
                
                <h2>How We Use Your Information</h2>
                <p>We use the information we collect for the following purposes:</p>
                <ul>
                  <li>To provide and improve our resume building services</li>
                  <li>To personalize your experience and offer tailored content</li>
                  <li>To communicate with you about our services, updates, and promotional offers</li>
                  <li>To analyze usage patterns and optimize our website performance</li>
                  <li>To maintain the security and integrity of our platform</li>
                </ul>
                
                <div className="bg-blue-50 p-4 rounded-md my-6 flex items-start gap-3">
                  <Lock className="h-5 w-5 text-resume-primary flex-shrink-0 mt-1" />
                  <p className="text-sm m-0">
                    <strong>Your Resume Data is Yours:</strong> We will never sell or share your resume data with third parties without your explicit consent.
                  </p>
                </div>
                
                <h2>Data Sharing and Disclosure</h2>
                <p>We may share your information in the following circumstances:</p>
                <ul>
                  <li>With service providers who help us operate our business</li>
                  <li>To comply with legal obligations or enforce our terms of service</li>
                  <li>To protect the rights, property, or safety of ResumeAI, our users, or the public</li>
                  <li>In connection with a business transfer, merger, or acquisition</li>
                </ul>
                
                <h2>Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, 
                  alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, 
                  and we cannot guarantee absolute security.
                </p>
                
                <h2>Your Rights</h2>
                <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
                <ul>
                  <li>The right to access and receive a copy of your personal information</li>
                  <li>The right to correct or update your personal information</li>
                  <li>The right to request deletion of your personal information</li>
                  <li>The right to restrict or object to processing of your personal information</li>
                  <li>The right to data portability</li>
                </ul>
                
                <div className="bg-blue-50 p-4 rounded-md my-6 flex items-start gap-3">
                  <UserCheck className="h-5 w-5 text-resume-primary flex-shrink-0 mt-1" />
                  <p className="text-sm m-0">
                    <strong>Managing Your Data:</strong> You can access, edit, or delete your data through your account settings. If you need assistance, 
                    please contact us at <a href="mailto:privacy@resumeai.com">privacy@resumeai.com</a>.
                  </p>
                </div>
                
                <h2>Cookies and Tracking</h2>
                <p>
                  We use cookies and similar tracking technologies to collect information about your browsing activities and to remember your preferences. 
                  You can control cookies through your browser settings, but disabling cookies may limit your ability to use certain features of our website.
                </p>
                
                <h2>Children's Privacy</h2>
                <p>
                  Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. 
                  If you become aware that a child has provided us with personal information, please contact us.
                </p>
                
                <h2>Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. 
                  We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
                
                <h2>Contact Us</h2>
                <p>
                  If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at 
                  <a href="mailto:privacy@resumeai.com"> privacy@resumeai.com</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
