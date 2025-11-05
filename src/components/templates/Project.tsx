export default function Work({ title, link, image, gitHub }: Project) {
  return (
    <div className="overflow-hidden bg-gray-900 py-24 sm:py-32" id={title}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <a
                className="text-base/7 font-semibold text-indigo-400"
                href={link}
              >
                Live demo
              </a>
              <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
                {title}
              </h2>
              <div className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-400 lg:max-w-none">
                <div className="relative">
                  <a className="inline font-semibold text-white" href={gitHub}>
                    See code
                  </a>
                </div>
              </div>
            </div>
          </div>
          <img
            alt="Work screenshot"
            src={image}
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
