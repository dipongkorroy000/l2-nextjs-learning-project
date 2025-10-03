const DynamicBlogPage = async ({ params }: { params: Promise<{ blogId: string }> }) => {
  const { blogId } = await params;

  return (
    <div>
      <h1>Dynamin blog page {blogId}</h1>
    </div>
  );
};

export default DynamicBlogPage;
