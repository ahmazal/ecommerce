import { useNavigate } from "react-router-dom";
import { useFetch } from "../../../hooks/useFetch"; // pastikan path benar
import heroimg from "../../../assets/img/hero.png";

function Hero() {
  const navigate = useNavigate();
  const { data } = useFetch("/products/product");

  const handleShopClick = () => {
    const arr = Array.isArray(data) ? data : data?.products ?? data?.payload ?? [];
    const labelCandidate = arr[0]?.tipe || arr[0]?.type || arr[0]?.category || "all";
    const label = String(labelCandidate || "all");
    const slug = encodeURIComponent(
      label.trim().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/gi, "")
    );
    navigate(`/category/${slug}`, { state: { items: arr, label } });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      id="Hero"
      className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-8 px-4 sm:px-8 lg:px-14 bg-[#e4e2e6]"
    >
      <div className="pb-4 w-full flex flex-col md:flex-row justify-center items-center gap-6 lg:gap-8">
        <div className="flex flex-1 justify-center lg:justify-end max-w-md lg:w-1/2">
          <img
            src={heroimg}
            alt="hero"
            className="w-3/4 sm:w-2/3 lg:w-full max-w-md lg:max-w-xl object-contain h-auto"
          />
        </div>

        <div className="flex flex-1 flex-col items-center lg:items-start justify-center gap-6 text-center lg:text-left max-w-lg px-2">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            HAPPY BELANJA
          </h1>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
            Selamat datang di FSDR, platform e-commerce yang menghadirkan koleksi fashion terbaik untuk kamu yang ingin tampil percaya diri setiap hari.
          </p>
          <button
            onClick={handleShopClick}
            className="border rounded-lg px-4 py-2 bg-black hover:bg-zinc-700 transition duration-300 ease-in-out font-bold text-sm sm:text-base text-gray-200"
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
