import { LinkedInLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons';

export function Footer() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-4 flex justify-between px-6 lg:px-8">
      <a
        href="mailto:eteague13@gmail.com"
        className="text-white flex items-center"
        id="contact"
      >
        Get in touch
      </a>
      <div className="flex gap-2">
        <a href="https://www.linkedin.com/in/evanteague13/" target="_blank">
          <LinkedInLogoIcon color="#fff" className="w-12 h-12" />
        </a>
        <a href="https://github.com/evanteague" target="_blank">
          <GitHubLogoIcon color="#fff" className="w-12 h-12" />
        </a>
      </div>
    </div>
  );
}
