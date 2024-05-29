import Image from "next/image";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <div className="p-2">
      <div className="relative overflow-hidden bg-white">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Quần áo thể thao
              </h1>
              <p className="mt-4 text-xl text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <Image
                            width={300}
                            height={300}
                            src="https://product.hstatic.net/1000341630/product/kmsh220640-3_86df254911e0448e9ccc82c019f6e5ea_master.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            width={300}
                            height={300}
                            src="https://product.hstatic.net/1000341630/product/kmsh220650-1_344e033ceda64b52b9fe1250343f77bc_master.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            width={300}
                            height={300}
                            src="https://product.hstatic.net/1000341630/product/giay_running_litebird_20_f6573024a93841cabb00ec3c919053ea_master.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            width={300}
                            height={300}
                            src="https://product.hstatic.net/1000341630/product/z2224707514757_0da3391fba3aae205a20e56ae1eebcc9_9d0cd20fa53540e290bf0b895b740793_master.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            width={300}
                            height={300}
                            src="https://product.hstatic.net/1000341630/product/mid09589_0217e74aa00e47b9868db07c007fb270_master.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            width={300}
                            height={300}
                            src="https://product.hstatic.net/1000341630/product/giay_q19_kid_xanhden_20_d0785795e6404c14a9b115c3cab262a2_master.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            width={300}
                            height={300}
                            src="https://product.hstatic.net/1000341630/product/fma07508_38e123d1c89c463aa15467eebc9e2d73_master.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Link
                  href="/products"
                  className="inline-block rounded-md border border-transparent bg-[#2a2e33] px-8 py-3 text-center font-medium text-white hover:bg-[#12171d]"
                >
                  Xem sản phẩm
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
