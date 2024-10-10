import CountdownTimer from "./CountDownTimer";
import SectionHeader from "./SectionHeader";

const Todays = () => {
  return (
    <div className="py-6 border-b">
      <SectionHeader
        primaryText="Today's"
        title="Flash Sales"
        showArrows
        subComponent={<CountdownTimer endDate="2024-10-20T23:59:59Z" />}
      >
        <div>Todays</div>
      </SectionHeader>
    </div>
  );
};

export default Todays;
