import ToursPage from '@/components/ToursPage';
import { getAllTours } from '@/utils/action';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient
} from '@tanstack/react-query';

const AllToursPage = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['tours', ''], //the '' denotes the default query in the search which will be blank
    queryFn: () => getAllTours()
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ToursPage />
    </HydrationBoundary>
  );
};
export default AllToursPage;
