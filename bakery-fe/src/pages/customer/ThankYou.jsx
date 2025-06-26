import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ThankYou = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-100 px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-primary mb-4 font-amaranth">
          {t("Thank You!")}
        </h1>
        <p className="text-lg mb-6">
          {t("We appreciate your business and hope you enjoy your treats!")}
        </p>
        <Link to="/shop" className="btn btn-primary">
          {t("Continue Shopping")}
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
