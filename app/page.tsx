import Navbar from "@/components/Navbar";
import Form from "@/components/Form";
import QuestionDetails from "@/components/QuestionDetails";
import QuestionList from "@/components/QuestionList";

export default function Home() {
  return (
    <main className="bg-gray-100">
      <Navbar />
      <div className="md:px-4 lg:px-6 container mx-auto max-w-screen-2xl grid grid-cols-12 md:grid-rows-[55px_minmax(500px,_1fr)] md:gap-8">
        <QuestionList />
        <Form />
      </div>
    </main>
  );
}
