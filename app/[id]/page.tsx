import Home from "../page";

type Props = {
  params: {
    id: string;
  };
};

const Page = async ({ params }: Props) => {
  const { id } = await params;

  return <Home name={decodeURIComponent(id) || "My Friend"}></Home>;
};

export default Page;
