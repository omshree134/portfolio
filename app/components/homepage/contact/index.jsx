// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import SectionHeading from "../../helper/section-heading";
import ContactForm from './contact-form';

const rows = [
  { icon: MdAlternateEmail, label: "EMAIL", value: personalData.email, href: `mailto:${personalData.email}` },
  { icon: IoMdCall, label: "PHONE", value: personalData.phone, href: `tel:${personalData.phone.replace(/\s/g, "")}` },
  { icon: CiLocationOn, label: "BASE", value: personalData.address, href: null },
];

function ContactSection() {
  return (
    <section id="contact" className="my-16 lg:my-24 text-paper">
      <SectionHeading
        cue="06"
        title="Contact"
        sub="Open to SWE/ML internships and collaborations. The fastest way to reach me is email."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <ContactForm />

        <div>
          <div className="border border-line bg-panel divide-y divide-line">
            {rows.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-4 px-4 py-4">
                <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-line text-cc">
                  <Icon size={20} />
                </span>
                <div className="min-w-0">
                  <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.25em] text-muted mb-0.5">{label}</p>
                  {href ? (
                    <a href={href} className="text-sm text-paper hover:text-cc transition-colors break-all">{value}</a>
                  ) : (
                    <p className="text-sm text-paper">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-3">
            {personalData.github && (
              <Link
                target="_blank"
                href={personalData.github}
                aria-label="GitHub profile"
                className="w-11 h-11 flex items-center justify-center border border-line text-muted hover:text-cc hover:border-cc transition-colors"
              >
                <IoLogoGithub size={22} />
              </Link>
            )}
            {personalData.linkedIn && (
              <Link
                target="_blank"
                href={personalData.linkedIn}
                aria-label="LinkedIn profile"
                className="w-11 h-11 flex items-center justify-center border border-line text-muted hover:text-cc hover:border-cc transition-colors"
              >
                <BiLogoLinkedin size={22} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
