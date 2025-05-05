import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const heroBlocksData = [
  {
    title: 'Manage Your Investments',
    description:
      'Effortlessly track and manage your investments, capital, and loan portfolio. Keep all your documents organized and accessible in one place.',
    imageSrc: '/assets/images/money-grow.jpg',
  },
  {
    title: 'Connect with Brokers',
    description:
      'Easily connect with brokers and share your lending criteria. Enable brokers to apply for loans and upload documents with a streamlined process.',
    imageSrc: '/assets/images/coins-house.jpg',
  },
  {
    title: 'Streamlined Applications',
    description:
      'Simplify the application process with secure, private access links. Brokers can apply for multiple loans, and you can track the progress seamlessly.',
    imageSrc: '/assets/images/pig-rocket.jpg',
  },
  {
    title: 'Collaborate with Legal Teams',
    description:
      'Share documents and collaborate with your legal team efficiently. Tendeq allows you to work closely with trusted law firms and brokers.',
    imageSrc: '/assets/images/deal-flatui.jpg',
  },
];



export default function HeroBlocks() {
  return (
    <div className="max-w-screen-lg mx-auto px-4">
      <section className="grid grid-cols-1 gap-8 py-12 md:py-24 lg:py-32">
        {heroBlocksData.map((block, index) => {
          const isOddBlock = index % 2 === 0;
          return (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 md:gap-8 lg:gap-12"
            >
              <div
                className={`space-y-4 ${isOddBlock ? 'order-1 md:order-1' : 'order-1 md:order-2'}`}
              >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {block.title}
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                  {block.description}
                </p>
              </div>
              <div
                className={`relative group overflow-hidden rounded-lg ${isOddBlock ? 'order-2 md:order-2' : 'order-2 md:order-1'}`}
              >
                <div className="group-hover:scale-105 transition-transform duration-300 ease-in-out">
                  <Image
                    alt="Hero"
                    className="aspect-[16/9] w-full object-cover object-center"
                    height={365}
                    src={block.imageSrc}
                    width={650}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent group-hover:from-gray-900/70 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-end justify-center pb-8">
                  <div className="space-x-4">
                    <Link href="/demo">
                      <Button variant="outline">View</Button>
                    </Link>
                    <Link href="/about">
                      <Button>Learn More</Button>
                    </Link>
                    
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
