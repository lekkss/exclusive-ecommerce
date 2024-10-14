import StatisticsCard from "../../components/StatisticsCard";

const Statistics = () => {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 py-10 gap-2 justify-items-center">
      <StatisticsCard
        heading="10.5k "
        icon="solar:shop-linear"
        subheading="Sallers active our site"
      />
      <StatisticsCard
        heading="33k"
        icon="stash:dollar-sign-duotone"
        subheading="Monthly Produduct Sale"
        color="red"
      />
      <StatisticsCard
        heading="45.5k"
        icon="fluent:shopping-bag-28-regular"
        subheading="Customer active in our site"
      />
      <StatisticsCard
        heading="25k"
        icon="healthicons:money-bag-outline"
        subheading="Anual gross sale in our site"
      />
    </div>
  );
};

export default Statistics;
