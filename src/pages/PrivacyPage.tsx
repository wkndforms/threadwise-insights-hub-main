export function PrivacyPage() {
  return (
    <section className="section-container">
      <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
      <div className="max-w-3xl mx-auto space-y-6">
        <p>
          Your privacy is important to us. This Privacy Policy explains how ForumScout collects, uses, and protects your personal information in relation to our website and services.
        </p>
        <h2 className="text-2xl font-semibold pt-4">Information We Collect</h2>
        <p>
          Our primary product, ForumScout Insights Hub, is designed to be deployed and run on our customers' own servers or cloud infrastructure. ForumScout (as a company) does not collect, store, or have access to the data processed by the ForumScout Insights Hub product once it is operating within our customers' environments. This policy primarily addresses data practices related to this marketing and informational website.
        </p>
        <p>When you visit our website or interact with us, we may collect the following types of information:</p>
        <ul>
          <li><strong>Contact Information:</strong> Your name, email address, and phone number, as provided by you.</li>
          <li>To provide, operate, and maintain our website.</li>
          <li>To improve, personalize, and expand our website.</li>
          <li>To understand and analyze how you use our website.</li>
          <li>To develop new products, services, features, and functionality.</li>
          <li>To communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes.</li>
          <li>To respond to your inquiries about ForumScout Insights Hub.</li>
          <li>To send you emails.</li>
          <li>To find and prevent fraud.</li>
        </ul>
        <p>
          Our website may automatically collect some non-personally identifiable information as you browse, such as your browser type, operating system, and pages visited. This information is used in an aggregated manner to improve our website's functionality and user experience. We use essential cookies for basic website operation.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Information Collected Via This Website</h2>
        <p>
          The contact information you provide through our website forms is used solely for the following purposes:
        </p>
        <ul>
          <li>To respond to your inquiries about ForumScout Insights Hub.</li>
          <li>To provide you with information you have requested about our product and services, including details about trial access.</li>
          <li>To communicate with you regarding your specific request or submission.</li>
        </ul>
        <p>
          We do not use this voluntarily provided PII for any other marketing purposes without your explicit consent. Aggregated, non-personally identifiable usage data helps us analyze website traffic and improve our online presence.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Information Sharing and Disclosure (Website Data)</h2>
        <p>
          We do not sell the personal information collected through our website forms.
        </p>
        <p>
          To facilitate communication and process your inquiries submitted via our website, we utilize a third-party form submission service. When you submit a form, the information you provide (name, email, phone number) is transmitted to this service, which then delivers your inquiry to us. We advise you to be aware of the third-party service's own privacy policy.
        </p>
        <p>
          Other than for the purpose described above, we will not share your personal information with other third parties unless strictly necessary to respond to your request, required by law, or to protect our legal rights.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect any personal information submitted through our website from unauthorized access, use, or disclosure during its transmission to us via our form processing service. However, no internet transmission is entirely secure.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights Regarding Information Submitted Via Our Website</h2>
        <p>
          Concerning the personal information you voluntarily provide via our website forms, you have the right to request access to, correction of, or deletion of this data. Please contact us if you wish to exercise these rights.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on our website.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy or our website's data practices, please contact us. You can use the "Contact" feature on our website, which will open a lead capture form.
        </p>
        <p className="text-sm text-muted-foreground mt-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </section>
  );
} 