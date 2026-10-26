import React, { useState } from 'react';
import { X, Github, Globe, Check, Copy, ExternalLink, Shield } from 'lucide-react';
import { TranslationDictionary } from '../data/translations';

interface DeploymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme: 'dark' | 'light';
  t: TranslationDictionary;
}

export const DeploymentModal: React.FC<DeploymentModalProps> = ({ isOpen, onClose, theme, t }) => {
  if (!isOpen) return null;

  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyText = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="deployment-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
    >
      <div
        className={`relative w-full max-w-2xl rounded-2xl border shadow-2xl overflow-hidden transition-all my-8 ${
          theme === 'dark' ? 'bg-[#191B21] border-[#2E333F]' : 'bg-white border-gray-200'
        }`}
      >
        {/* Header */}
        <div
          className={`flex items-center justify-between px-6 py-4 border-b ${
            theme === 'dark' ? 'border-[#262A33]' : 'border-gray-200'
          }`}
        >
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-[#E67E22]/10 text-[#E67E22]">
              <Globe className="w-4 h-4" />
            </div>
            <h3
              id="deployment-modal-title"
              className={`text-base font-bold tracking-tight ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              {t.footer.guideLink} (GitHub, Vercel &amp; Custom Domain)
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className={`p-1.5 rounded-lg border transition-colors ${
              theme === 'dark'
                ? 'border-[#262A33] text-gray-400 hover:text-white'
                : 'border-gray-300 text-gray-600 hover:text-gray-900'
            }`}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-6 text-xs sm:text-sm">
          
          {/* Step 1: Push to GitHub */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-bold text-[#E67E22]">
              <Github className="w-4 h-4" />
              <span>Step 1: Push Code to Your GitHub Repository</span>
            </div>
            <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Initialize git locally or upload these project files to your new GitHub repository:
            </p>
            <div
              className={`relative p-3 rounded-xl border font-mono text-xs ${
                theme === 'dark'
                  ? 'bg-[#111318] border-[#262A33] text-gray-300'
                  : 'bg-gray-900 border-gray-800 text-gray-200'
              }`}
            >
              <pre className="overflow-x-auto">
{`git init
git add .
git commit -m "feat: complete Bethel Chukwunyere portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/bethel-portfolio.git
git push -u origin main`}
              </pre>
              <button
                onClick={() =>
                  copyText(
                    `git init\ngit add .\ngit commit -m "feat: complete Bethel Chukwunyere portfolio"\ngit branch -M main\ngit remote add origin https://github.com/YOUR_USERNAME/bethel-portfolio.git\ngit push -u origin main`,
                    'git'
                  )
                }
                className="absolute top-2.5 right-2.5 p-1.5 rounded bg-black/60 border border-white/10 text-gray-300 hover:text-white"
                title="Copy git commands"
              >
                {copiedKey === 'git' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Step 2: Import on Vercel */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-bold text-[#E67E22]">
              <ExternalLink className="w-4 h-4" />
              <span>Step 2: Deploy to Vercel</span>
            </div>
            <ol className={`list-decimal list-inside space-y-1 text-xs pl-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>Log into <strong className={theme === 'dark' ? 'text-white' : 'text-gray-950'}>vercel.com</strong> and click <strong className={theme === 'dark' ? 'text-white' : 'text-gray-950'}>Add New... → Project</strong>.</li>
              <li>Select your <strong className={theme === 'dark' ? 'text-white' : 'text-gray-950'}>bethel-portfolio</strong> repository.</li>
              <li>Framework preset will automatically detect <strong className={theme === 'dark' ? 'text-white' : 'text-gray-950'}>Vite</strong>.</li>
              <li>Click <strong className={theme === 'dark' ? 'text-white' : 'text-gray-950'}>Deploy</strong>. Vercel will build and assign an instant production URL.</li>
            </ol>
          </div>

          {/* Step 3: Custom Domain Setup */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-bold text-[#E67E22]">
              <Globe className="w-4 h-4" />
              <span>Step 3: Connect Your Custom Domain (e.g. bethelchukwunyere.com)</span>
            </div>
            <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              In Vercel, navigate to <strong>Settings → Domains</strong> and enter your domain name. Then add these records in your domain registrar DNS panel (Namecheap, GoDaddy, Porkbun, etc.):
            </p>
            
            <div
              className={`rounded-xl border overflow-hidden text-xs ${
                theme === 'dark' ? 'border-[#262A33]' : 'border-gray-200'
              }`}
            >
              <table className="w-full text-left">
                <thead
                  className={`font-mono text-[11px] ${
                    theme === 'dark' ? 'bg-[#111318] text-gray-400' : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  <tr>
                    <th className="p-2.5">Type</th>
                    <th className="p-2.5">Name / Host</th>
                    <th className="p-2.5">Value / Target</th>
                    <th className="p-2.5">TTL</th>
                  </tr>
                </thead>
                <tbody
                  className={`divide-y font-mono ${
                    theme === 'dark'
                      ? 'divide-[#262A33] bg-[#191B21] text-gray-300'
                      : 'divide-gray-200 bg-white text-gray-800'
                  }`}
                >
                  <tr>
                    <td className="p-2.5 text-[#E67E22] font-semibold">A</td>
                    <td className="p-2.5">@</td>
                    <td className="p-2.5 font-semibold">76.76.21.21</td>
                    <td className="p-2.5 text-gray-500">Automatic</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 text-[#E67E22] font-semibold">CNAME</td>
                    <td className="p-2.5">www</td>
                    <td className="p-2.5 font-semibold">cname.vercel-dns.com</td>
                    <td className="p-2.5 text-gray-500">Automatic</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div
              className={`p-3 rounded-xl border flex items-center gap-2.5 text-xs ${
                theme === 'dark'
                  ? 'bg-[#111318] border-[#262A33] text-gray-300'
                  : 'bg-emerald-50 border-emerald-200 text-emerald-800'
              }`}
            >
              <Shield className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Vercel automatically provisions and renews free SSL certificates (HTTPS) once DNS records propagate.</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className={`px-6 py-3 border-t flex justify-end ${
            theme === 'dark' ? 'bg-[#111318] border-[#262A33]' : 'bg-gray-50 border-gray-200'
          }`}
        >
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#E67E22] hover:bg-[#D35400] rounded-lg transition-colors"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};
