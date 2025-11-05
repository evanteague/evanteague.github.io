export default function Work({ title, positions, timeLine, image }: Work) {
  return (
    <div className="overflow-hidden bg-gray-900 py-24 sm:py-32" id={title}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
          <div className="">
            <div className="lg:max-w-lg">
              <p className="text-base/7 font-semibold text-indigo-400">
                {timeLine}
              </p>
              <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
                {title}
              </h2>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-400 lg:max-w-none">
                {positions.map((position) => (
                  <div key={position.name} className="relative">
                    <dt className="inline font-semibold text-white">
                      {position.name}
                    </dt>{' '}
                    <dd className="inline">{position.timeLine}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src={image}
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
