import { MyProject } from '@/modules/portfolio';

export default function Portfolio() {
  return (
    <main className="flex min-h-screen  flex-col pt-header items-center">
      <div className="container flex flex-col gap-8 p-5">
        <MyProject />
      </div>
    </main>
  );
}
