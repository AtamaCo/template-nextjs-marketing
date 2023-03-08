import clsx from 'clsx';
import Link from 'next/link';

export function CallToAction({
  title,
  description,
  buttonText,
  background,
  atama,
}: {
  title: string;
  description: string;
  buttonText: string;
  background: 'gray';
  atama: object;
}) {
  const backgroundColors = {
    gray: 'bg-zinc-100 border-2 border-zinc-200 rounded',
  };

  return (
    <div
      className={clsx(
        backgroundColors[background],
        'flex flex-col md:flex-row gap-16 px-8 py-10',
      )}
      {...atama}
    >
      <div className="grid gap-4">
        <p className="font-bold text-3xl">{title}</p>
        <p className="text-slate-400">{description}</p>
      </div>
      <div className="flex items-center">
        <Link
          href="#"
          className="rounded bg-yellow-500 text-white py-2 px-4 font-semibold"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
}
