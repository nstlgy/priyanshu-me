"use client";
import { TextMorph } from "@/components/ui/text-morph";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { useEffect, useState } from "react";
import { Clipboard, ArrowLeftToLine } from "lucide-react";
import Spinner from "../../components/ui/spinner/spinner";
import Link from "next/link";

function CopyButton() {
  const [text, setText] = useState("Copy");
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  useEffect(() => {
    setTimeout(() => {
      setText("Copy");
    }, 2000);
  }, [text]);

  return (
    <div>
      <button
        onClick={() => {
          <Spinner />;
          setText("Copied");
          navigator.clipboard.writeText(currentUrl);
        }}
        className="font-base flex cursor-pointer items-center gap-1 text-center text-sm text-zinc-500 transition-colors dark:text-zinc-400"
        type="button"
      >
        <Clipboard size={16} className="" />
        <TextMorph>{text}</TextMorph>
        <span>URL</span>
      </button>
    </div>
  );
}

export default function LayoutBlogPost({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="pointer-events-none fixed top-0 left-0 z-10 h-12 w-full bg-gray-100 to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)] dark:bg-zinc-950" />
      <ScrollProgress
        className="fixed top-0 z-20 h-0.5 bg-gray-300 dark:bg-zinc-600"
        springOptions={{
          bounce: 0,
        }}
      />

      <div className="absolute top-36 left-4">
        <div className="font-base flex cursor-pointer items-center gap-1 text-center text-sm text-zinc-500 transition-colors dark:text-zinc-400">
          <Link href="/">
            <ArrowLeftToLine />
          </Link>
        </div>
      </div>
      <div className="absolute top-36 right-4">
        <CopyButton />
      </div>
      <main className="prose prose-gray prose-h4:prose-base dark:prose-invert prose-h1:text-xl prose-h1:font-medium prose-h2:mt-12 prose-h2:scroll-m-20 prose-h2:text-lg prose-h2:font-medium prose-h3:text-base prose-h3:font-medium prose-h4:font-medium prose-h5:text-base prose-h5:font-medium prose-h6:text-base prose-h6:font-medium prose-strong:font-medium mt-24 pb-20">
        {children}
      </main>
    </>
  );
}
