import { BlurText } from "@/components/ui/blur-text";

export default function Portfolio() {

    const skills = [
        { name: "HTML", level: "80%" },
        { name: "CSS", level: "70%" },
        { name: "Bootstrap", level: "60%" },
        { name: "JavaScript", level: "60%" },
        { name: "React", level: "60%" },
        { name: "Python", level: "50%" },
        { name: "UI/UX Design", level: "60%" },
        { name: "Tailwind CSS", level: "60%" },
        { name: "MySQL", level: "70%" },
        { name: "Git & GitHub", level: "60%" }
    ];

    return (
        <section id="projects" className="relative bg-[#0f0f0f] py-24 px-6 overflow-hidden">

            {/* Background Glow */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 blur-[120px] rounded-full" />

            <div className="relative container mx-auto max-w-6xl">

                {/* SKILLS */}
                <div className="mb-20 flex justify-center text-center">
                    <BlurText
                        text="Skills & Expertise"
                        delay={100}
                        animateBy="words"
                        direction="bottom"
                        className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6"
                    />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {skills.map((skill, i) => (
                        <div
                            key={i}
                            className="group p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-cyan-400/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(6,182,212,0.25)] text-center"
                        >
                            <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors mb-2">
                                {skill.name}
                            </h3>
                            <p className="text-sm text-white/50">
                                {skill.level}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}