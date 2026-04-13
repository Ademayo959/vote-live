import { useState } from "react";
import { Link } from 'react-router-dom';

const sections = [
    {
        id: "help-center",
        tag: "Help Center",
        title: "Quick answers",
        lead: "Common questions about using VoteLive — joining elections, verifying your account, and understanding results.",
        articles: [
            {
                title: "How do I join an election?",
                body: "Search for the election from your dashboard, open its details, and confirm your account and matric number are eligible. If the election is restricted, your matric number must appear on the organizer's voter list before you can cast a ballot.",
            },
            {
                title: "How are results updated in real time?",
                body: "VoteLive streams verified vote counts continuously using Firebase. As soon as a ballot is recorded, turnout, rankings, and position-level results refresh automatically without you needing to reload the page.",
            },
            {
                title: "Why can't I vote in a restricted election?",
                body: "Restricted elections only allow students whose matric numbers appear on the organizer's uploaded voter list. If your number isn't on the list, the platform blocks voting automatically. Contact the election organizer to get added.",
            },
            {
                title: "Can I add a cover image and multiple posts?",
                body: "Yes. Organizers can upload a cover image, create up to 10 positions, list contestants per position, upload an eligible voter list, and choose whether voting is public or restricted.",
            },
        ],
    },
    {
        id: "documentation",
        tag: "Documentation",
        title: "Documentation hub",
        lead: "Structured guides for students, organizers, and developers.",
        articles: [
            {
                title: "Getting Started",
                body: "Create your account with a valid email and phone number. Complete phone verification, then join your first election by searching its name or ID from the dashboard. Voter eligibility is checked automatically once you attempt to vote.",
            },
            {
                title: "Election Setup",
                body: "From the organizer dashboard, set your election name, add a countdown timer, upload a cover image, and list your positions and contestants. Upload a CSV of eligible matric numbers if the election is restricted, then publish.",
            },
            {
                title: "Understanding Results",
                body: "Results are displayed per position in real time. Charts update as votes come in. Once the countdown timer hits zero, the result view locks and final standings are shown. You can share the results link publicly.",
            },
            {
                title: "API Reference",
                body: "Authentication endpoints, election payloads, result data, and WebSocket or streaming event references for developers building on top of VoteLive.",
            },
        ],
    },
    {
        id: "live-elections",
        tag: "Live Elections",
        title: "What live elections means on VoteLive",
        lead: "Live elections stream changes as verified votes are recorded, giving organizers and observers a current view of turnout, rankings, and countdown state without reloading the page.",
        articles: [
            {
                title: "Real-time result streaming",
                body: "As soon as a ballot is verified, the numbers shown in the election view update to reflect the new count — instantly, with no manual refresh needed.",
            },
            {
                title: "Per-position visibility",
                body: "Each post or position can be tracked independently so users can understand the race at a more detailed level across all active contests.",
            },
            {
                title: "Countdown-aware results",
                body: "Live timers show how long an election remains open and help define when active updates should stop and final results should lock for the record.",
            },
        ],
    },
    {
        id: "security",
        tag: "Security",
        title: "Security and trust",
        lead: "VoteLive is designed to keep student elections secure, transparent, and access-controlled while remaining simple to understand.",
        articles: [
            {
                title: "Firebase Authentication",
                body: "Phone verification and secure sign-in help confirm that each voter account is tied to a valid user. Accounts cannot be duplicated or impersonated within the platform.",
            },
            {
                title: "Data encryption",
                body: "Sensitive identity and election data is protected in transit and stored using secure Firebase infrastructure practices — no raw personal data is exposed publicly.",
            },
            {
                title: "Read-only public access",
                body: "Voters and observers can view public election data and live results without being able to alter official election records or tamper with vote counts.",
            },
        ],
    },
    {
        id: "privacy",
        tag: "Privacy Policy",
        title: "Privacy, explained simply",
        lead: "A readable summary of what data is collected, how it's used, which third-party services support the platform, and what rights users have.",
        articles: [
            {
                title: "What data we collect",
                body: "VoteLive may collect your name, phone number, matric number, election participation history, and profile preferences needed for secure identity and voting access.",
            },
            {
                title: "How it's used",
                body: "Your data is used to verify identity, enforce voter eligibility rules, display voting history, secure elections, and improve platform reliability. It is never sold to third parties.",
            },
            {
                title: "Third-party services",
                body: "VoteLive uses Firebase for authentication, secure storage, and the infrastructure that powers real-time election updates. We use local storage and session tokens — not tracking cookies.",
            },
            {
                title: "User rights",
                body: "Users can review profile details, request corrections, manage visibility of sensitive fields, and understand what information is shown publicly on their profile.",
            },
        ],
    },
];

const tocLinks = [
    { label: "Help Center", href: "#help-center" },
    { label: "Documentation", href: "#documentation" },
    { label: "Live Elections", href: "#live-elections" },
    { label: "Security", href: "#security" },
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Contact Us", href: "#contact" },
    { label: "Follow on X", href: "#socials" },
];

function AccordionItem({ title, body }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border-b border-gray-200">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex justify-between items-center py-4 text-left gap-4 group"
            >
                <span className="text-sm font-medium text-gray-800 group-hover:text-[#1a72ec] transition-colors">
                    {title}
                </span>
                <span
                    className={`text-xl text-gray-400 shrink-0 transition-transform duration-200 ${open ? "rotate-45 text-[#1a72ec]" : ""
                        }`}
                >
                    +
                </span>
            </button>
            {open && (
                <p className="text-sm text-gray-500 leading-relaxed pb-4">{body}</p>
            )}
        </div>
    );
}

function Section({ id, tag, title, lead, articles }) {
    return (
        <div id={id} className="mb-12">
            <p className="text-xs font-semibold text-[#1a72ec] uppercase tracking-widest mb-1">
                {tag}
            </p>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{title}</h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">{lead}</p>
            <div className="border-t border-gray-200">
                {articles.map((a) => (
                    <AccordionItem key={a.title} title={a.title} body={a.body} />
                ))}
            </div>
        </div>
    );
}

export default function HelpSupport() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-4xl mx-auto px-5 py-10">

                {/* Breadcrumb */}
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-xs text-gray-400 my-4">
                            VoteLive <span className="mx-1">›</span> Help & Support
                        </p>
                    </div>
                    <Link to="/">
                        <div className="text-gray-400 flex gap-1 items-center">
                            <p className="text-xs">Back to Home</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-3 w-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </div>
                    </Link>
                </div>

                {/* Header */}
                <div className="mb-10 pb-8 border-b border-gray-200">
                    <h1 className="text-3xl font-semibold text-gray-900 mb-2">
                        Help & Support
                    </h1>
                    <p className="text-sm text-gray-500 leading-relaxed">
                        Everything you need — from understanding how elections work on
                        VoteLive, to security, privacy, and getting in touch with us.
                    </p>
                </div>

                {/* TOC */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 mb-10">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
                        On this page
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {tocLinks.map((l) => (
                            <a
                                key={l.label}
                                href={l.href}
                                className="text-xs text-[#1a72ec] bg-[#bedbff33] border border-[#bedbff] rounded-full px-3 py-1 hover:bg-[#bedbff66] transition-colors"
                            >
                                {l.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Sections */}
                {sections.map((s, i) => (
                    <div key={s.id}>
                        <Section {...s} />
                        {i < sections.length - 1 && (
                            <hr className="border-gray-200 mb-12" />
                        )}
                    </div>
                ))}

                <hr className="border-gray-200 mb-12" />

                {/* Contact */}
                <div id="contact" className="mb-12">
                    <p className="text-xs font-semibold text-[#1a72ec] uppercase tracking-widest mb-1">
                        Contact Us
                    </p>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                        Need to reach support?
                    </h2>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">
                        Send a message if you need help with voting access, election setup,
                        verification issues, or understanding your results dashboard.
                    </p>
                    <div className="border border-gray-200 rounded-xl p-5">
                        <p className="text-xs text-gray-400 mb-4">
                            We typically respond within 24 hours, sooner for urgent access or
                            verification issues.
                        </p>
                        <input
                            type="email"
                            placeholder="your@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 mb-3 outline-none focus:border-[#1a72ec] transition-colors"
                        />
                        <textarea
                            placeholder="Tell us what happened, include the election name if relevant, and describe any verification or voter list issues."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows={4}
                            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 mb-3 outline-none focus:border-[#1a72ec] transition-colors resize-none"
                        />
                        <button className="bg-[#1a72ec] text-white text-sm font-medium px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                            Submit request
                        </button>
                    </div>
                </div>

                <hr className="border-gray-200 mb-12" />

                {/* Socials */}
                <div id="socials" className="mb-12">
                    <p className="text-xs font-semibold text-[#1a72ec] uppercase tracking-widest mb-1">
                        Socials
                    </p>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                        Follow us on X
                    </h2>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">
                        Updates, announcements, and the occasional build log — all on X.
                    </p>
                    <div className="flex items-center gap-4 border border-gray-200 rounded-xl px-5 py-4">
                        <div className="w-9 h-9 rounded-full bg-[#bedbff33] border border-[#bedbff] flex items-center justify-center shrink-0">
                            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#1a72ec]">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.766l7.733-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-800">VoteLive on X</p>
                            <p className="text-xs text-gray-400">
                                Follow for product updates and announcements
                            </p>
                        </div>
                        <a
                            href="https://x.com/build_pixels"
                            target="_blank"
                            rel="noreferrer"
                            className="ml-auto text-sm text-[#1a72ec] hover:underline shrink-0"
                        >
                            @build_pixels →
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}