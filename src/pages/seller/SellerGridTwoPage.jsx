import BodyTopHeader from "../../components/common/BodyTopHeader";
import BreadcrumbHeader from "../../components/common/BreadcrumbHeader";
import FeaturesStrip from "../../components/common/FeaturesStrip";
import Pagination from "../../components/common/Pagination";
import NewsletterBanner from "../../components/seller/NewsletterBanner";
import SellerCard from "../../components/seller/SellerCard";
import { sellers } from "../../data/sellers";

export default function SellerGridTwoPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <BodyTopHeader />
      <BreadcrumbHeader title="Seller Grid" />

      <main className="mx-auto max-w-7xl px-4 pb-16 pt-6 sm:pb-20 sm:pt-8 lg:pt-10">
        <section aria-label="Seller list">
          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
            {sellers.map((seller) => (
              <SellerCard key={seller.id} seller={seller} />
            ))}
          </div>
        </section>

        <section className="mt-10 sm:mt-12">
          <Pagination />
        </section>

        <section className="mt-12 sm:mt-14 lg:mt-16">
          <NewsletterBanner />
        </section>

        <section className="mt-10 sm:mt-12 lg:mt-14">
          <FeaturesStrip />
        </section>
      </main>
    </div>
  );
}