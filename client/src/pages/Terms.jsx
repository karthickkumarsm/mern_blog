import React from 'react'

const Terms = () => {
    return (
        <div className='min-h-screen flex items-center justify-center'>
          <div className='max-w-2xl mx-auto p-3 text-center'>
            <div>
              <h1 className='text-3xl font font-semibold text-center my-7'>
                Terms and Conditions of Karthick's Blog
              </h1>
              <div className='text-md text-gray-500 flex flex-col gap-6'>
                <p>
                  Welcome to Karthick's Blog. By using our website, you agree to the following terms and conditions.
                </p>
      
                <p>1. Acceptance of Terms: By using our Site, you agree to these Terms and our Privacy Policy. If you do not agree, please do not use the Site.</p>
                
                <p>2. User Accounts: You are responsible for maintaining the confidentiality of your account credentials. Any activity under your account is your responsibility.</p>
                
                <p>3. User-Generated Content: You retain ownership of comment you post but grant us a license to use, display, and distribute it on the Site. Do not post illegal or harmful comment.</p>
                
                <p>4. Account Deletion: You may delete your account at any time, and all your personal information will be permanently removed.</p>
                
                <p>5. Data Usage: Our use of your data is governed by our Privacy Policy. We do not share your information with third parties, except Firebase.</p>
                
                <p>6. Modifications to Terms: We may update these terms and will notify you of significant changes. Continued use of the Site constitutes acceptance of the new terms.</p>
                
                <p>7. Termination: We reserve the right to terminate your access to the Site for violations of these terms or harmful conduct.</p>

              </div>
            </div>
          </div>
        </div>
      );
      
}

export default Terms