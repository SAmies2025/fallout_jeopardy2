import Link from "next/link";

export const metadata = {
  title: "Fallout Jeopardy",
};

export default async function Home() {
  // const hello = await api.post.hello({ text: "from tRPC" });

  // void api.post.getLatest.prefetch();

  return (
  <div className="min-h-screen w-screen overflow-hidden bg-[var(--color-bg)] text-[var(--color-text)] flex flex-col items-center justify-center">
    <title>Fallout Jeopardy</title>
    <h1 className="text-center text-4xl font-bold my-8 drop-shadow-lg">
      Welcome to Fallout Jeopardy!
    </h1>
    <img
      src="/img/index.jpg"
      alt="Vault Boy giving the thumbs up"
      className="mx-auto block"
    />
    <div className="flex justify-center my-6">
      <button className="align-middle">
        <a href="">PLAY</a>
      </button>
    </div>
    <footer className="flex justify-center my-6">
      <sub>Fallout Jeopardy is not affiliated with Bethesda Softworks and answers may be 100% wrong. It just works.</sub>
    </footer>
</div>
  );
}
