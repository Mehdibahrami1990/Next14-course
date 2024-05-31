type PostListProps = {
  id: number;
  title: string;
};

async function PostList() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    // cache: 'no-store ',
    next: {
      revalidate: 5,
    },
  });

  let data: PostListProps[] = await response.json();
  data = data.splice(0, 10);

  return (
    <>
      <div>
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default PostList;
