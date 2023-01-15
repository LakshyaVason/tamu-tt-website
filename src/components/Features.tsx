import Image from "next/image";
import Container from "./Container";

export default function Features() {
  return (
    <div id="features">
		unoptimized={true}
      <Container>
        <div className="md:w-2/3 lg:w-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-secondary h-6 w-6"
          >
            <path
              fillRule="evenodd"
              d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
              clipRule="evenodd"
            />
          </svg>

          <h2 className="my-8 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">
            A technology-first approach to payments and finance
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ad
            ipsum pariatur autem, fugit laborum in atque amet obcaecati? Nisi
            minima aspernatur, quidem nulla cupiditate nam consequatur eligendi
            magni adipisci.
          </p>
        </div>
        <div className="mt-16 grid divide-x divide-y divide-gray-100 overflow-hidden rounded-3xl border border-gray-100 text-gray-600 dark:divide-gray-700 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
          <div className="group relative bg-white transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 dark:bg-gray-800">
            <div className="relative space-y-8 p-8 py-12">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/4341/4341139.png"
                className="w-12"
                width="512"
                height="512"
                alt="burger illustration"
				unoptimized={true}
              />

              <div className="space-y-2">
                <h5 className="group-hover:text-secondary text-xl font-semibold text-gray-700 transition dark:text-white">
                  First feature
                </h5>
                <p className="text-gray-600 dark:text-gray-300">
                  Neque Dolor, fugiat non cum doloribus aperiam voluptates
                  nostrum.
                </p>
              </div>
              <a
                href="#"
                className="group-hover:text-secondary flex items-center justify-between"
              >
                <span className="text-sm">Read more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="group relative bg-white transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 dark:bg-gray-800">
            <div className="relative space-y-8 p-8 py-12">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/4341/4341134.png"
                className="w-12"
                width="512"
                height="512"
                alt="burger illustration"
				unoptimized={true}
              />

              <div className="space-y-2">
                <h5 className="group-hover:text-secondary text-xl font-semibold text-gray-700 transition dark:text-white">
                  Second feature
                </h5>
                <p className="text-gray-600 dark:text-gray-300">
                  Neque Dolor, fugiat non cum doloribus aperiam voluptates
                  nostrum.
                </p>
              </div>
              <a
                href="#"
                className="group-hover:text-secondary flex items-center justify-between"
              >
                <span className="text-sm">Read more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="group relative bg-white transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 dark:bg-gray-800">
            <div className="relative space-y-8 p-8 py-12">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/4341/4341160.png"
                className="w-12"
                width="512"
                height="512"
                alt="burger illustration"
				unoptimized={true}
              />

              <div className="space-y-2">
                <h5 className="group-hover:text-secondary text-xl font-semibold text-gray-700 transition dark:text-white">
                  Third feature
                </h5>
                <p className="text-gray-600 dark:text-gray-300">
                  Neque Dolor, fugiat non cum doloribus aperiam voluptates
                  nostrum.
                </p>
              </div>
              <a
                href="#"
                className="group-hover:text-secondary flex items-center justify-between"
              >
                <span className="text-sm">Read more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="group relative bg-gray-50 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 dark:bg-gray-900">
            <div className="relative space-y-8 p-8 py-12 transition duration-300 group-hover:bg-white dark:group-hover:bg-gray-800">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/4341/4341025.png"
                className="w-12"
                width="512"
                height="512"
                alt="burger illustration"
				unoptimized={true}
              />

              <div className="space-y-2">
                <h5 className="group-hover:text-secondary text-xl font-semibold text-gray-700 transition dark:text-white">
                  More features
                </h5>
                <p className="text-gray-600 dark:text-gray-300">
                  Neque Dolor, fugiat non cum doloribus aperiam voluptates
                  nostrum.
                </p>
              </div>
              <a
                href="#"
                className="group-hover:text-secondary flex items-center justify-between"
              >
                <span className="text-sm">Read more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
