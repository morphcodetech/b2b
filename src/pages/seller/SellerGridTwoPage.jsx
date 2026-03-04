import BreadcrumbHeader from "../../components/common/Breadcrumbheader";
import SellerCard from "../../components/seller/SellerCard";
import Pagination from "../../components/common/Pagination";
import NewsletterBanner from "../../components/seller/NewsletterBanner";
import { sellers } from "../../data/sellers";

export default function SellerGridTwoPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <BreadcrumbHeader title="Seller Grid" />

      <div className="mx-auto max-w-7xl px-4 pb-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sellers.map((s) => (
            <SellerCard key={s.id} seller={s} />
          ))}
        </div>

        <Pagination />
        <NewsletterBanner />
      </div>
    </div>
  );
}