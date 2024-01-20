import { useTranslation } from "react-i18next";
import BigSlider from "../../components/imageSlider/BigSlider";
import Layout from "../../components/layout/Layout";
import ItIcon from "../../components/icons/ItIcon";
import BusinessIcon from "../../components/icons/BusinessIcon";
import ElectricIcon from "../../components/icons/ElectricIcon";
import CameraIcon from "../../components/icons/CameraIcon";
import CodeIcon from "../../components/icons/CodeIcon";
import NarrowCard from "./NarrowCard/NarrowCard";
import office from "../../images/office.jpg";
import ServiceContent from "../../components/Navbar/hoverDropdowns/ServiceContent";
import { catalogueData } from "../../data/catalogueData";

const first = [
  {
    icon: <ItIcon />,
    text: "IT ინფრასტრუქტურა და კიბერ უსაფრთხოება",
  },
  {
    icon: <BusinessIcon />,
    text: "ბიზნეს აპლიკაციები",
  },
  {
    icon: <ElectricIcon />,
    text: "ელექტროობა და შენობის მართვის სისტემები",
  },
  {
    icon: <CameraIcon />,
    text: "ვიდეო სამეთვალყურეო გადაწყვეტები და უსაფრთხოების სისტემები",
  },
  {
    icon: <CodeIcon />,
    text: "პროგრამული უზრუნველყოფა",
  },
];

const Home = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <BigSlider />
      <section className="card !w-full mt-14 p-5">
        <div>
          <h1 className="text-3xl 2xl:text-5xl mb-3">რას გთავაზობთ</h1>
          <p>
            იუჯითი მსხვილ, საშუალო და მცირე ზომის ორგანიზაციებს უახლეს
            ტექნოლოგიებს, უნიკალურ გადაწყვეტებს და მრავალმხრივი კომპეტენციებით
            სარგებლობის შესაძლებლობას სთავაზობს. წლების მანძილზე, იუჯითიმ
            განავითარა ისეთი სერვისები და გადაწყვეტები, რომლებიც მორგებულია
            ინდუსტრიულ მოთხოვნებზე და ამავდროულად, კლიენტების ინდივიდუალურ
            საჭიროებებს ითვალისწინებს.
          </p>
        </div>
        {/* <div className="flex flex-col lg:flex-row w-full justify-around items-center p-8 gap-5">
          <NarrowCard data={first} />
          <NarrowCard data={first} />
          <NarrowCard data={first} />
        </div> */}
      </section>

      <section className="card !w-full mt-14 p-5 flex flex-col gap-8">
        <h1 className="text-3xl 2xl:text-5xl mb-3">
          რატომ გურგენა? ხუივო ზნაეტ
        </h1>
        <p>
          ინფორმაციული ტექნოლოგიების სფეროში, იუჯითი ერთადერთი კომპანიაა
          საქართველოში, რომელსაც გადაწყვეტების, სერვისების და კომპეტენციების
          სრული სპექტრი გააჩნია. ჩვენი კომპანია წარმატებით ნერგავს სხვადასხვა
          ბიზნეს სექტორზე მორგებულ გადაწყვეტებს არა მხოლოდ IT მიმართულებით,
          არამედ ისეთ სფეროებში, როგორებიცაა: შენობების მართვა, ციფრული
          გადახდები და ნაღდი ფულის დამუშავება, ვიდეო მონიტორინგი და ფიზიკური
          უსაფრთხოება, ტელეკომუნიკაცია, მზის ენერგიის გამომუშავება და სხვა
          უახლესი ტექნოლოგიები. იუჯითი ბაზარზე სანდოობით, ტექნოლოგიების
          სიღრმისეული ცოდნით, გამოცდილებით და თითოეულ დამკვეთზე მორგებული
          სერვისით გამოირჩევა.
        </p>
        <img src={office} className="object-cover mx-auto rounded-lg" alt="" />
      </section>
      <section className="card !w-full mt-14 p-5">
        <div>
          <h1 className="text-3xl 2xl:text-5xl mb-3 mx-auto w-fit">
            {t("services")}
          </h1>
        </div>
        <div className=" grid md:grid-cols-3 grid-cols-2 gap-2">
          {catalogueData.map(({ id, list, title }) => {
            return (
              <div
                key={Math.random() * Math.random() + id}
                className="cursor-pointer hover:bg-gray-400 hover:text-primaryRed h-44 rounded-3xl border border-gray-600 flex justify-between p-2 transition-all duration-300"
              >
                <span>{title}</span>
                <img
                  src={office}
                  className="object-cover rounded-lg w-10 h-10"
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default Home;
