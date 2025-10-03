const CatchAllRoute = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
  const { slug } = await params;
  console.log(slug);

  return (
    <div>
      <h1>CatchAllRoute </h1>
    </div>
  );
};

export default CatchAllRoute;
