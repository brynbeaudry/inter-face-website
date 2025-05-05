import { WavyBackground } from "@/components/custom/WavyBackground/WavyBackground";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="relative w-full h-[95vh]" id="poster-section">
        <div className="relative h-full">
          <WavyBackground containerClassName="absolute inset-0">
            <div className="max-w-4xl mx-auto px-4 h-full flex items-center justify-center">
              <Image
                src="/assets/images/interface-poster-2.png"
                alt="Inter-face Installation Poster"
                width={800}
                height={1067}
                className="h-[90vh] w-auto rounded-lg shadow-xl"
                priority
              />
            </div>
          </WavyBackground>
        </div>
      </section>

      <section id="about" className="relative max-w-3xl mx-auto px-4 py-24">
        <div className="space-y-8 bg-background/80 backdrop-blur-sm p-8 rounded-lg">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Inter-face</h2>
            <div className="text-lg mb-8">
              <p>Interactive sculpture</p>
              <p>2024</p>
            </div>
          </div>

          <div className="space-y-2" id="artists">
            <h2 className="text-xl font-semibold">Artists</h2>
            <p className="text-lg opacity-90">
              Kazimir Simpson (Art Director)<br />
              Bryn Beaudry (Systems Architect)
            </p>
          </div>

          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              In the information age, we increasingly do not interface, face-to-face. Our devices become our best companions, and we use them as a way to reflect our values onto the world and each other. We become divided by technology and by factors beyond our control, risking the ability to see ourselves in other human beings and instead becoming a reflection of technology itself.
            </p>

            <p>
              This installation is a two-way mirror framed in wood, set as a visual dialogue between two people. When participants stand on either side of the mirror, LED animations illuminate their faces selectively, merging their reflections and creating a shared, overlapping image. The technology-driven fusion of faces calls on each pair to communicate and align their animations in real time, bringing to life a dynamic blend of their appearances.
            </p>

            <p>
              Here, technology acts as both a bridge and a veil, showing how our identities and relationships evolve within digital frameworks. The piece challenges viewers to see past the reflection of their own faces and instead perceive a blended self, encouraging them to reconnect with their own empathy through a medium designed to divide.
            </p>

            <p>
              In a world mediated by screens and devices, Inter-face is an invitation to find a shared human image amidst technological reflection.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
